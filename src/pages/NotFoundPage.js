import { Lightning, Router } from '@lightningjs/sdk'
import Background from '../components/Background'
import { Paths, Widgets } from '../lib/routes'
import { full, half } from '../utils/size'

export default class NotFoundPage extends Lightning.Component {
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
          text: 'Not existing page. Press back to go home...',
          fontFace: 'Funky',
          fontSize: 64,
        },
      },
    }
  }

  _handleLeft() {
    Router.focusWidget(Widgets.MENU)
  }

  _handleBack() {
    Router.navigate(Paths.DISCOVER)
  }
}
