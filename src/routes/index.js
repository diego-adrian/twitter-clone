import { Login } from './LazyComponents';
import { Home } from './LazyComponents';

const routes = [
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    exact: false,
    component: Home
  },
];

export default routes;