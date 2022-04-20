import { Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'
import MovieItemComponent from './MovieItemComponent'

export default class RailComponent extends Lightning.Component {
  static _template() {
    return {
      w: this.bindProp('width'),
      y: 50,
      movies: this.bindProp('movies'),
      Rail: {
        rect: true,
        color: 0xff808080,
        x: full,
        flex: {
          direction: 'row',
          padding: 20,
          wrap: true,
          justifyContent: 'space-evenly',
        },
      },
    }
  }

  _init() {
    this.tag('Rail').patch(
      {
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
      true
    )
  }
}
