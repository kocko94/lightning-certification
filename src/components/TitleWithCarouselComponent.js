import { Lightning } from '@lightningjs/sdk'
import Carousel from './Carousel'
import { half } from '../utils/size'
import Background from './Background'

export default class TitleWithCarouselComponent extends Lightning.Component {
  static _template() {
    const width = 1920
    const height = 1080
    return {
      Background: {
        type: Background,
      },
      Title: {
        x: half(width),
        mountX: 0.5,
        mountY: 0,
        y: 50,
        text: {
          text: this.bindProp('title'),
          fontFace: 'Funky',
          fontSize: 84,
          shadow: true,
          shadowColor: 0xffff00ff,
        },
      },
      MovieRail: {
        type: Carousel,
        width,
        height,
        mountY: 0.5,
        y: half(height),
      },
    }
  }

  patchCarouselItems(items) {
    this.tag('MovieRail').patch({
      items: items,
    })
  }

  _getFocused() {
    return this.tag('MovieRail')
  }
}
