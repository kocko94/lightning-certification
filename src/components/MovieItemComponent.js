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
        w: full,
        y: full,
        x: 10,
        flex: {
          direction: 'row',
          wrap: false,
        },
        Shadow: {
          rect: true,
          color: 0xaa000000,
          flexItem: false,
          mountY: 1,
          mountX: 0,
          w: full,
          y: full,
          h: 70,
          x: -10,
        },
        Text: {
          flexItem: {
            maxWidth: 380,
          },
          text: {
            text: this.bindProp('movieName'),
            fontFace: 'Funky',
            fontSize: 46,
          },
        },
      },
    }
  }
}
