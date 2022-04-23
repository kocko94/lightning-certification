import HomePage from '../pages/HomePage'
import BootPage from '../pages/BootPage'
import InformationPage from '../pages/InformationPage'

export const Paths = {
  HOME: 'home',
  BOOT: '$',
  INFO_RAW: 'information',
  INFO: 'information/:movieId',
}

export const Widgets = {
  MENU: 'Menu',
}

export const routes = {
  routes: [
    // {
    //   path: Paths.BOOT,
    //   component: BootPage,
    // },
    {
      path: Paths.HOME,
      component: HomePage,
      widgets: [Widgets.MENU],
    },
    {
      path: Paths.INFO,
      component: InformationPage,
      widgets: [Widgets.MENU],
    },
  ],
}
