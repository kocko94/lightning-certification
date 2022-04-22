import { Lightning } from '@lightningjs/sdk'
import Carousel from '../components/Carousel'
import { half } from '../utils/size'
import Background from '../components/Background'
import MovieItemComponent from '../components/MovieItemComponent'
import { getListOfMovies } from '../lib/moveiApi'

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
        items: {
          Movie1: {
            type: MovieItemComponent,
            movieName: 'Movie1',
          },
          Movie2: {
            type: MovieItemComponent,
            movieName: 'Movie1',
          },
          Movie3: {
            type: MovieItemComponent,
            movieName: 'Movie1',
          },
          Movie4: {
            type: MovieItemComponent,
            movieName: 'Movie1',
          },
        },
      },
    }
  }

  async _init() {
    const movies = await getListOfMovies()
    console.debug(movies)
  }
}
