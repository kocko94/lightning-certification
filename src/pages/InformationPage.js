import { Lightning, Router } from '@lightningjs/sdk'
import Background from '../components/Background'
import { Paths, Widgets } from '../lib/routes'

export default class InformationPage extends Lightning.Component {
  static _template() {
    const width = 1920
    const height = 1080
    return {
      Background: {
        type: Background,
      },
      Debug: {
        x: width / 2,
        y: height / 2,
        mount: 0.5,
        text: {
          text: {
            fontFace: 'Funky',
            fontSize: 46,
          },
        },
      },
    }
  }

  set params({ movieId }) {
    this._movieId = movieId
    this.tag('Debug').patch({
      text: {
        text: movieId,
      },
    })
  }

  _handleLeft() {
    Router.focusWidget(Widgets.MENU)
  }

  _handleBack() {
    Router.navigate(Paths.HOME)
  }
}
