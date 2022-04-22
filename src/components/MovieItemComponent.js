import { Img, Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const width = 300
const height = 400

const alpha_focused = 1
const alpha_unfocused = 0.5

export default class MovieItemComponent extends Lightning.Component {
  static _template() {
    const margin = 10
    return {
      rect: true,
      color: 0xff242424,
      w: width,
      h: height,
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
          flexItem: {
            maxWidth: width - 2 * margin,
          },
          text: {
            fontFace: 'Funky',
            fontSize: 40,
          },
        },
      },
    }
  }

  set poster(p) {
    this.tag('Image').patch(Img(p).cover(width, height))
  }

  set title(t) {
    let titleText = this._truncateText(t)
    this.tag('Label')
      .tag('Text')
      .patch({
        text: {
          text: titleText,
        },
      })
  }

  _changeAlphasTo(alpha) {
    const alphaSmoothChange = ['alpha', alpha, { duration: 0.3 }]
    this.tag('Image').setSmooth(...alphaSmoothChange)
    this.tag('Label').patch(...alphaSmoothChange)
  }

  _focus() {
    this._changeAlphasTo(alpha_focused)
  }

  _unfocus() {
    this._changeAlphasTo(alpha_unfocused)
  }

  _truncateText(t) {
    const maxLength = 20
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
