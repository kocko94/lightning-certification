import { Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const VISIBLE_ELEMENTS_COUNT = 3

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
          wrap: false,
          justifyContent: 'space-evenly',
        },
      },
    }
  }

  set items(i) {
    this._items = i
    this._buildItems(i)
  }

  get items() {
    return this._items ? this._items : []
  }

  _buildItems(items) {
    this.tag('Rail').patch({
      children: items.slice(0, VISIBLE_ELEMENTS_COUNT),
    })
  }
}
