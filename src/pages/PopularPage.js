import { Lightning, Router } from '@lightningjs/sdk'
import MovieItemComponent from '../components/MovieItemComponent'
import { getPopularMovies } from '../lib/moveiApi'
import { Paths, Widgets } from '../lib/routes'
import TitleWithCarouselComponent from '../components/TitleWithCarouselComponent'

export default class PopularPage extends Lightning.Component {
  static _template() {
    return {
      TitleWithCarousel: {
        type: TitleWithCarouselComponent,
        title: 'Popular movies',
      },
    }
  }

  async _init() {
    const movieItems = await this._buildMovieItems()
    this.tag('TitleWithCarousel').patchCarouselItems(movieItems)
  }

  _getFocused() {
    return this.tag('TitleWithCarousel')
  }

  _handleLeft() {
    Router.focusWidget(Widgets.MENU)
  }

  $onMenuItemSelected(movieId) {
    Router.navigate(`${Paths.INFO_RAW}/${movieId}`)
  }

  async _buildMovieItems() {
    return (await getPopularMovies()).map(movie => {
      return {
        type: MovieItemComponent,
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
      }
    })
  }
}
