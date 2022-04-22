import { Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const VISIBLE_ELEMENTS_COUNT = 6

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
        h: 420,
        x: 0,
        y: 0,
        flex: {
          direction: 'row',
          padding: 20,
          wrap: false,
          justifyContent: 'flex-start',
        },
      },
    }
  }

  _init() {
    this._idx_focussed_child = 0
  }

  _handleLeft() {
    if (this._idx_focussed_child > 0) {
      this._idx_focussed_child--
      return true
    } else {
      return false //propagate the left key press up
    }
  }

  _handleRight() {
    if (this._idx_focussed_child < this.tag('Rail').children.length - 1) {
      this._idx_focussed_child++
    }
  }

  _getFocused() {
    return this._getActiveItem()
  }

  _getActiveItem() {
    return this.tag('Rail').children[this._idx_focussed_child]
  }

  set items(i) {
    this._buildItems(i)
    this._refocus()
  }

  _buildItems(items) {
    this.tag('Rail').patch({
      children: items.slice(0, VISIBLE_ELEMENTS_COUNT),
    })
  }
}
