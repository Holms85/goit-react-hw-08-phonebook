import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './PublicRoute/PublicRoute.jsx';
const HomePage = lazy(() =>
  import('../components/Pages/HomePage/HomePage.jsx')
);
const RegisterPage = lazy(() =>
  import('../components/Pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() =>
  import('../components/Pages/LoginPage/LoginPage.jsx')
);
const ContactPage = lazy(() =>
  import('../components/Pages/ContactPage/ContactPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../components/Pages/NotFoundPage/NotFoundPage.jsx')
);

export default function UserRoutes() {
  return (
    <Suspense fallback={<p>...Loading Page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
