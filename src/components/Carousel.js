import { Lightning } from '@lightningjs/sdk'

const VISIBLE_ELEMENTS_COUNT = 15

export default class Carousel extends Lightning.Component {
  static _template() {
    return {
      w: this.bindProp('width'),
      h: this.bindProp('height'),
      Rail: {
        rect: true,
        color: 0xaa000000,
        mountY: this.bindProp('mountY'),
        w: 3200,
        h: 310,
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
    this._idx_first_visible = 0
  }

  _handleLeft() {
    if (this._idx_focussed_child > 0) {
      this._idx_focussed_child--
      if (!this._isActiveItemFullyVisible()) {
        if (this._idx_focussed_child === 0) {
          this._moveRailTo(0)
        } else {
          this._moveRailBy(190)
        }
      }
      return true
    } else {
      return false //propagate the left key press up
    }
  }

  _handleRight() {
    if (this._idx_focussed_child < this.tag('Rail').children.length - 1) {
      this._idx_focussed_child++
    }
    if (!this._isActiveItemFullyVisible()) {
      this._moveRailBy(-190)
    }
  }

  _moveRailBy(move) {
    const rail = this.tag('Rail')
    this._moveRailTo(rail.x + move)
  }

  _moveRailTo(position) {
    const rail = this.tag('Rail')
    rail.setSmooth('x', position, { duration: 0.3 })
  }

  _getFocused() {
    return this._getActiveItem()
  }

  _getActiveItem() {
    return this.tag('Rail').children[this._idx_focussed_child]
  }

  _isActiveItemFullyVisible() {
    const cornerPoints = this._getActiveItem().getCornerPoints()
    const leftPointX = cornerPoints[0]
    const rightPointX = cornerPoints[2]
    return leftPointX >= 0 && rightPointX <= this.w
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
