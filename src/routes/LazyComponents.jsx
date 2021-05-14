import { lazy, Suspense } from 'react';

const LoginComponent = lazy(() => import('../components/Login/Login'));
const HomeComponent = lazy(() => import('../components/Home/Home'));

export const Login = () => (
  <Suspense fallback={<div className="waiting">Espere unos segundos por favor...</div>}>
    <LoginComponent/>
  </Suspense>
)

export const Home = () => (
  <Suspense fallback={<div className="waiting">Espere unos segundos por favor...</div>}>
    <HomeComponent/>
  </Suspense>
)