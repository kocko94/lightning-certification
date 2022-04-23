import DiscoverPage from '../pages/DiscoverPage'
import BootPage from '../pages/BootPage'
import InformationPage from '../pages/InformationPage'
import NotFoundPage from '../pages/NotFoundPage'
import PopularPage from '../pages/PopularPage'
import TopRatedPage from '../pages/TopRatedPage'

export const Paths = {
  DISCOVER: 'Discover',
  POPULAR: 'Popular',
  TOP_RATED: 'Top-Rated',
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
      path: Paths.POPULAR,
      component: PopularPage,
      widgets: [Widgets.MENU],
    },
    {
      path: Paths.TOP_RATED,
      component: TopRatedPage,
      widgets: [Widgets.MENU],
    },
    {
      path: Paths.INFO,
      component: InformationPage,
      widgets: [Widgets.MENU],
    },
  ],
}
