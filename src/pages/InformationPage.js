import { Lightning, Router } from '@lightningjs/sdk'
import { Paths, Widgets } from '../lib/routes'
import { full } from '../utils/size'
import { getDetailsForMovie, getSimilarMoviesFor } from '../lib/moveiApi'
import Carousel from '../components/Carousel'
import MovieItemComponent from '../components/MovieItemComponent'

export default class InformationPage extends Lightning.Component {
  static _template() {
    const width = 1920
    const height = 1080
    return {
      w: width,
      h: height,
      Background: {
        rect: true,
        w: full,
        h: full,
        color: 0xdd000000,
      },
      SimilarMoviesTitle: {
        mountY: 1,
        x: 25,
        y: y => {
          return y - 345
        },
        text: {
          text: 'Similar',
          fontFace: 'Funky',
          fontSize: 36,
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
    await this._buildSimilarMoviesFor(movieData.id)
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

  async _buildSimilarMoviesFor(movieId) {
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
