import { Lightning, Router } from '@lightningjs/sdk'
import { Paths, Widgets } from '../lib/routes'
import { full } from '../utils/size'
import { getDetailsForMovie, getSimilarMoviesFor } from '../lib/moveiApi'

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
      Debug: {
        x: width / 2,
        y: height / 2,
        mount: 0.5,
        text: {
          text: {
            fontFace: 'Funky',
            fontSize: 46,
          },
        },
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

  _handleLeft() {
    Router.focusWidget(Widgets.MENU)
  }

  _handleBack() {
    Router.navigate(Paths.HOME)
  }

  async _buildSimilarMoviesFor(movieId) {
    this._similarMovies = await getSimilarMoviesFor(movieId)
    console.debug(this._similarMovies)
  }
}
