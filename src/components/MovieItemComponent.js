import { Lightning } from '@lightningjs/sdk'

export default class MovieItemComponent extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xffff3a33,
      w: 100,
      h: 100,
      flexItem: {
        margin: 10,
      },
      Label: {
        mountY: 0.5,
        mountX: 0.5,
        x: 50,
        y: 50,
        text: {
          text: this.bindProp('movieName'),
        },
      },
    }
  }
}
