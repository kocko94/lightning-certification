import { Lightning, Router } from '@lightningjs/sdk'
import { Paths, Widgets } from '../lib/routes'
import { full } from '../utils/size'
import { getDetailsForMovie, getSimilarMoviesFor } from '../lib/moveiApi'
import Carousel from '../components/Carousel'
import MovieItemComponent from '../components/MovieItemComponent'
import Gradient from '../components/Gradient'
import '../utils/text'

const MAX_LENGTH_CHARS_OVERVIEW = 270

export default class InformationPage extends Lightning.Component {
  static _template() {
    const width = 1920
    const height = 1080
    const marginStart = 25
    return {
      w: width,
      h: height,
      Background: {
        rect: true,
        w: full,
        h: full,
        texture: {
          type: Lightning.textures.ImageTexture,
        },
      },
      LeftGradient: {
        type: Gradient,
        width,
        height,
      },
      MovieInfoFlex: {
        flex: {
          direction: 'column',
          padding: marginStart,
        },
        y: 20,
        Title: {
          flexItem: {
            marginBottom: 0,
          },
          text: {
            fontFace: 'Funky',
            fontSize: 72,
            shadow: true,
            shadowColor: 0xffff00ff,
          },
        },
        ReleaseDate: {
          flexItem: {
            marginBottom: 40,
          },
          text: {
            fontFace: 'Funky',
            fontSize: 40,
            shadow: true,
            shadowColor: 0xffff00ff,
          },
        },
        Overview: {
          w: width / 3,
          text: {
            fontFace: 'Funky',
            fontSize: 46,
            shadow: true,
            shadowColor: 0xffff00ff,
          },
        },
      },
      SimilarMoviesTitle: {
        mountY: 1,
        x: marginStart,
        y: y => {
          return y - 345
        },
        text: {
          text: 'Similar',
          fontFace: 'Funky',
          fontSize: 36,
          shadow: true,
          shadowColor: 0xffff00ff,
        },
      },
      SimilarMovies: {
        type: Carousel,
        width,
        height,
        mountY: 1,
        y: full,
      },
    }
  }

  set params({ movieId }) {
    const movieData = getDetailsForMovie(movieId)
    this._buildUiForMovie(movieData)
  }

  get similarMovies() {
    return this._similarMovies ? this._similarMovies : []
  }

  async _buildUiForMovie(movieData) {
    this._showMovieData(movieData)
    await this._showSimilarMoviesFor(movieData.id)
  }

  _getFocused() {
    return this.tag('SimilarMovies')
  }

  _handleLeft() {
    Router.focusWidget(Widgets.MENU)
  }

  _handleBack() {
    Router.navigate(Paths.HOME)
  }

  $onMenuItemSelected(movieId) {
    Router.navigate(`${Paths.INFO_RAW}/${movieId}`)
  }

  _showMovieData(movie) {
    this.tag('Background').patch({
      src: movie.backdrop,
    })
    const infoContainer = this.tag('MovieInfoFlex')
    infoContainer.tag('Title').patch({
      text: {
        text: movie.title,
      },
    })
    infoContainer.tag('Overview').patch({
      text: {
        text: movie.overview.truncate(MAX_LENGTH_CHARS_OVERVIEW),
      },
    })
    infoContainer.tag('ReleaseDate').patch({
      text: {
        text: `Release date ${movie.release_date}`,
      },
    })
  }

  async _showSimilarMoviesFor(movieId) {
    this._similarMovies = await getSimilarMoviesFor(movieId)
    const similarMoviesUiItems = this._similarMovies.map(movie => {
      return {
        type: MovieItemComponent,
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
      }
    })
    this.tag('SimilarMovies').patch({
      items: similarMoviesUiItems,
    })
  }
}
