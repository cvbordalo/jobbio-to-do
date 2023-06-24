import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/signIn';
import { DefaultLayout } from './layouts/DefaultLayout';
import { SignUp } from './pages/signUp';
import { Home } from './pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
