import { Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const VISIBLE_ELEMENTS_COUNT = 5

export default class Carousel extends Lightning.Component {
  static _template() {
    return {
      w: this.bindProp('width'),
      h: this.bindProp('height'),
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
      },
    }
  }

  set children(c) {
    console.debug('children')
  }

  set items(i) {
    this._items = i
    console.debug('set items ' + this.items.length)
  }

  get items() {
    return this._items ? this._items : []
  }
}
