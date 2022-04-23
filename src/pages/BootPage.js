import { Lightning, Router } from '@lightningjs/sdk'
import { Paths } from '../lib/routes'
import Background from '../components/Background'
import { full, half } from '../utils/size'

const ANIM_DUR_HEART_BEAT = 1.5

export default class BootPage extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      Background: {
        type: Background,
      },
      LabelShadow: {
        rect: true,
        mount: 0.5,
        w: full,
        h: 100,
        x: half,
        y: half,
        color: 0xaa000000,
      },
      Label: {
        mount: 0.5,
        x: half,
        y: half,
        text: {
          text: 'Welcome back',
          fontFace: 'Funky',
          fontSize: 54,
        },
      },
    }
  }

  _init() {
    setTimeout(() => {
      Router.navigate(Paths.DISCOVER)
    }, ANIM_DUR_HEART_BEAT * 1000 + 500)
    this._animateText()
  }

  _animateText() {
    this.tag('Label')
      .animation({
        duration: ANIM_DUR_HEART_BEAT,
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
