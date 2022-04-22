import { Lightning, Router } from '@lightningjs/sdk'
import Carousel from '../components/Carousel'
import { half } from '../utils/size'
import Background from '../components/Background'
import MovieItemComponent from '../components/MovieItemComponent'
import { getListOfMovies } from '../lib/moveiApi'
import { Widgets } from '../lib/routes'

export default class HomePage extends Lightning.Component {
  static _template() {
    const width = 1920
    const height = 1080
    return {
      Background: {
        type: Background,
      },
      MovieRail: {
        type: Carousel,
        width,
        height,
        mountY: 0.5,
        y: half(height),
      },
    }
  }

  _getFocused() {
    console.debug('focus HomePage')
    return this.tag('MovieRail')
  }

  async _init() {
    const movieItems = await this._buildMovieItems()
    this.tag('MovieRail').patch({
      items: movieItems,
    })
  }

  _handleLeft() {
    Router.focusWidget(Widgets.MENU)
  }

  async _buildMovieItems() {
    return (await getListOfMovies()).map(movie => {
      return {
        type: MovieItemComponent,
        title: movie.title,
        poster: movie.poster,
      }
    })
  }
}
