import { Lightning } from '@lightningjs/sdk'

export default class MenuItem extends Lightning.Component {
  static _template() {
    return {
      h: 100,
      alpha: 0.5,
      Label: {
        text: {
          text: this.bindProp('menuName'),
          shadow: true,
          shadowColor: 0xffff00ff,
          fontFace: 'Funky',
          fontSize: 54,
        },
      },
    }
  }

  _focus() {
    this.patch({
      alpha: 1,
    })
  }

  _unfocus() {
    this.patch({
      alpha: 0.5,
    })
  }
}
