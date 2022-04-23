import { Lightning } from '@lightningjs/sdk'
import { full, half } from '../utils/size'

export default class Gradient extends Lightning.Component {
  static _template() {
    return {
      w: this.bindProp('width'),
      h: this.bindProp('height'),
      LeftGradient: {
        x: 0,
        y: 0,
        w: half,
        h: full,
        rect: true,
        colorLeft: 0xff000000,
        colorRight: 0x00000000,
      },
    }
  }
}
