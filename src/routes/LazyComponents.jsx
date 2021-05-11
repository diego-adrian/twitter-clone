import { lazy, Suspense } from 'react';

const LoginComponent = lazy(() => import('../components/Login/Login'));
const SidebarComponent = lazy(() => import('../components/Sidebar'));

export const Login = () => (
  <Suspense fallback={<div className="waiting">Espere unos segundos por favor...</div>}>
    <LoginComponent/>
  </Suspense>
)

export const Sidebar = () => (
  <Suspense fallback={<div className="waiting">Espere unos segundos por favor...</div>}>
    <SidebarComponent/>
  </Suspense>
)