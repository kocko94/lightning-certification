import DiscoverPage from '../pages/DiscoverPage'
import BootPage from '../pages/BootPage'
import InformationPage from '../pages/InformationPage'
import NotFoundPage from '../pages/NotFoundPage'

export const Paths = {
  DISCOVER: 'discover',
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
    {
      path: Paths.BOOT,
      component: BootPage,
    },
    {
      path: Paths.NOT_FOUND,
      component: NotFoundPage,
      widgets: [Widgets.MENU],
    },
    {
      path: Paths.DISCOVER,
      component: DiscoverPage,
      widgets: [Widgets.MENU],
    },
    {
      path: Paths.INFO,
      component: InformationPage,
      widgets: [Widgets.MENU],
    },
  ],
}
