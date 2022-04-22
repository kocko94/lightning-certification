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
      LabelShadow: {
        rect: true,
        mount: 0.5,
        w: 1920,
        h: 100,
        x: 960,
        y: 540,
        color: 0xaa000000,
      },
      Label: {
        mount: 0.5,
        x: 960,
        y: 540,
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
    this._animateText()
  }

  _animateText() {
    this.tag('Label')
      .animation({
        duration: 1.5,
        actions: [
          {
            p: 'text.fontSize',
            v: {
              0: 54,
              0.33: 64,
              0.4: 58,
              0.5: 64,
              0.55: 58,
              0.65: 64,
              0.88: 66,
              1: 54,
            },
          },
        ],
      })
      .start()
  }
}
