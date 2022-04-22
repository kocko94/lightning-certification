import { Img, Lightning } from '@lightningjs/sdk'
import { full } from '../utils/size'

const width = 400,
  height = 250

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
        w: full,
        h: full,
        texture: {
          type: Lightning.textures.ImageTexture,
        },
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
            maxWidth: width - 2 * margin,
          },
          text: {
            text: this.bindProp('title'),
            fontFace: 'Funky',
            fontSize: 46,
          },
        },
      },
    }
  }

  set poster(p) {
    this.tag('Image').texture = Img(p).contain(400, 250)
  }
}
