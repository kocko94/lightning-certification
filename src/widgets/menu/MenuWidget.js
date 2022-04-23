import { Lightning, Router, Utils } from '@lightningjs/sdk'
import MenuItem from './MenuItem'

export default class MenuWidget extends Lightning.Component {
  static _template() {
    return {
      x: -500,
      transitions: {
        x: {
          duration: 0.5,
          timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)',
        },
      },
      Background: {
        w: 500,
        h: 1080,
        src: Utils.asset('images/menu-background.jpg'),
      },
      MenuItems: {
        x: 150,
        y: 540,
        mountY: 0.5,
        flex: {
          direction: 'column',
        },
      },
    }
  }

  _setup() {
    const menuTitles = ['Discover', 'Sci-Fi', 'Action', 'Drama']
    const menuItems = menuTitles.map(item => {
      return {
        menuName: item,
        type: MenuItem,
      }
    })
    this.tag('MenuItems').patch({
      children: menuItems,
    })
  }

  _init() {
    this.index = 0
  }

  _focus() {
    this.patch({
      smooth: {
        x: -100,
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: {
        x: -500,
      },
    })
  }

  _handleRight() {
    Router.focusPage()
  }

  _handleUp() {
    if (this.index > 0) {
      this.index--
    }
  }

  _handleDown() {
    if (this.index < this.tag('MenuItems').children.length - 1) {
      this.index++
    }
  }

  _handleEnter() {
    Router.focusPage()
    Router.navigate(this.getActiveItem().menuName)
  }

  _getFocused() {
    return this.getActiveItem()
  }

  getActiveItem() {
    return this.tag('MenuItems').children[this.index]
  }
}
