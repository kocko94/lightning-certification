import { Lightning } from '@lightningjs/sdk'
import RailComponent from '../components/RailComponent'

export default class HomePage extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
      },
      MovieRail: {
        type: RailComponent,
        width: 1920,
        height: 1080,
      },
    }
  }
}
