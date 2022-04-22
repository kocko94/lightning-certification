import { Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

export default class MovieItemComponent extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xffff3a33,
      w: 400,
      h: 250,
      flexItem: {
        margin: 10,
      },
      Label: {
        mountY: 1,
        mountX: 0,
        y: full,
        x: 10,
        text: {
          text: this.bindProp('movieName'),
          fontFace: 'Funky',
          fontSize: 46,
        },
      },
    }
  }
}
