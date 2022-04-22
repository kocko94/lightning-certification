import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Paths } from '../lib/routes'

export default class BootPage extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        src: Utils.asset('images/background.jpg'),
      },
      Logo: {
        mount: 0.5,
        x: 960,
        y: 540,
        src: Utils.asset('images/logo.png'),
      },
      Label: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 1080,
        text: {
          text: 'Welcome back',
          fontFace: 'Funky',
          fontSize: 54,
        },
      },
    }
  }

  _init() {
    // setTimeout(() => {
    //   Router.navigate(Paths.HOME)
    // }, 2000)
  }
}
