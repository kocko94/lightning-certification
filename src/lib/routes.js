import HomePage from '../pages/HomePage'
import BootPage from '../pages/BootPage'
import InformationPage from '../pages/InformationPage'
import NotFoundPage from '../pages/NotFoundPage'

export const Paths = {
  HOME: 'home',
  BOOT: '$',
  NOT_FOUND: '*',
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
      path: Paths.NOT_FOUND,
      component: NotFoundPage,
      widgets: [Widgets.MENU],
    },
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
