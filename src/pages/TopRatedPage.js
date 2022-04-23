import { Lightning, Router } from '@lightningjs/sdk'
import MovieItemComponent from '../components/MovieItemComponent'
import { getTopRatedMovies } from '../lib/moveiApi'
import { Paths, Widgets } from '../lib/routes'
import TitleWithCarouselComponent from '../components/TitleWithCarouselComponent'

export default class TopRatedPage extends Lightning.Component {
  static _template() {
    return {
      TitleWithCarousel: {
        type: TitleWithCarouselComponent,
        title: 'Top rated movies',
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
    return (await getTopRatedMovies()).map(movie => {
      return {
        type: MovieItemComponent,
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
      }
    })
  }
}
