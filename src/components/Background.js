import { Lightning, Utils } from '@lightningjs/sdk'

export default class Background extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        src: Utils.asset('images/background2.jpg'),
      },
    }
  }
}
