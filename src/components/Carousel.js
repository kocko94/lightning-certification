import { Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

export default class Carousel extends Lightning.Component {
  static _template() {
    return {
      w: this.bindProp('width'),
      h: this.bindProp('height'),
      movies: this.bindProp('movies'),
      Rail: {
        rect: true,
        color: 0xaa000000,
        mountY: this.bindProp('mountY'),
        w: full,
        x: 0,
        y: 0,
        flex: {
          direction: 'row',
          padding: 20,
          wrap: true,
          justifyContent: 'space-evenly',
        },
        children: this.bindProp('items'),
      },
    }
  }
}
