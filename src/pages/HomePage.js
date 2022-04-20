import { Lightning } from '@lightningjs/sdk'
import RailComponent from '../components/RailComponent'
import { half } from '../utils/size'

export default class HomePage extends Lightning.Component {
  static _template() {
    const width = 1920
    const height = 1080
    return {
      Background: {
        rect: true,
        w: width,
        h: height,
        color: 0xfffbb03b,
      },
      MovieRail: {
        type: RailComponent,
        width,
        height,
        mountY: 0.5,
        y: half(height),
      },
    }
  }
}
