import HomePage from '../pages/HomePage'
import BootPage from '../pages/BootPage'

export const Paths = {
  HOME: 'home',
  BOOT: '$',
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
    },
  ],
}
