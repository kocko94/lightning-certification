import { Img, Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const width = 300,
  height = 400

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
        alpha: 0.5,
        w: full,
        h: full,
        texture: {
          type: Lightning.textures.ImageTexture,
        },
      },
      Label: {
        alpha: 0.5,
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

  _init() {
    setTimeout(() => {
      this._changeAlphasTo(1)
    }, 1000)
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
    const alphaPatch = { alpha }
    this.tag('Image').patch(alphaPatch)
    this.tag('Label').patch(alphaPatch)
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
