import { Img, Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const width = 200
const height = 300
const width_focused = width
const width_unfocused = width * 0.8
const height_focused = height
const height_unfocused = height * 0.8
const alpha_focused = 1
const alpha_unfocused = 0.5
const focus_change_anim_duration = 0.3
const y_focused = 0
const y_unfocused = (height_focused - height_unfocused) / 2
const truncated_text_length_focus = 15
const truncated_text_length_unfocus = 13

export default class MovieItemComponent extends Lightning.Component {
  static _template() {
    const margin = 5
    return {
      rect: true,
      color: 0xff242424,
      w: width_unfocused,
      h: height_unfocused,
      y: y_unfocused,
      flexItem: {
        margin,
      },
      Image: {
        alpha: alpha_unfocused,
        w: full,
        h: full,
        texture: {
          type: Lightning.textures.ImageTexture,
        },
      },
      Label: {
        alpha: alpha_unfocused,
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
          text: {
            fontFace: 'Funky',
            fontSize: 26,
          },
        },
      },
    }
  }

  set poster(p) {
    this.tag('Image').patch(Img(p).cover(width, height))
  }

  set title(t) {
    this._titleOriginal = t
    this._changeTextTruncatedLengthTo(truncated_text_length_unfocus)
  }

  _changeAlphasTo(alpha) {
    const alphaSmoothChange = ['alpha', alpha, { duration: focus_change_anim_duration }]
    this.tag('Image').setSmooth(...alphaSmoothChange)
    this.tag('Label').setSmooth(...alphaSmoothChange)
  }

  _changeWidthAndHeight(width, height) {
    const widthChange = ['w', width, { duration: focus_change_anim_duration }]
    const heightChange = ['h', height, { duration: focus_change_anim_duration }]
    this.setSmooth(...widthChange)
    this.setSmooth(...heightChange)
  }

  _changeYTo(y) {
    const yChange = ['y', y, { duration: focus_change_anim_duration }]
    this.setSmooth(...yChange)
  }

  _changeTextAndShadowWidth(width) {
    const wChange = ['w', width, { duration: focus_change_anim_duration }]
    this.tag('Label').setSmooth(...wChange)
  }

  _changeTextTruncatedLengthTo(length) {
    const titleText = this._truncateText(this._titleOriginal, length)
    this.tag('Label')
      .tag('Text')
      .patch({
        text: {
          text: titleText,
        },
      })
    // const textChange = ['text.text', titleText, { duration: focus_change_anim_duration }]
    // text.setSmooth(...textChange)
  }

  _focus() {
    this._changeAlphasTo(alpha_focused)
    this._changeWidthAndHeight(width_focused, height_focused)
    this._changeYTo(y_focused)
    this._changeTextAndShadowWidth(width_focused)
    this._changeTextTruncatedLengthTo(truncated_text_length_focus)
  }

  _unfocus() {
    this._changeAlphasTo(alpha_unfocused)
    this._changeWidthAndHeight(width_unfocused, height_unfocused)
    this._changeYTo(y_unfocused)
    this._changeTextAndShadowWidth(width_unfocused)
    this._changeTextTruncatedLengthTo(truncated_text_length_unfocus)
  }

  _truncateText(t, maxLength) {
    let titleText = t
    if (titleText.length > maxLength) {
      titleText = `${t.substring(0, maxLength)}`
      if (titleText[titleText.length - 1] === ' ') {
        titleText = titleText.substring(0, titleText.length - 1)
      }
      titleText += '...'
    }
    return titleText
  }
}
