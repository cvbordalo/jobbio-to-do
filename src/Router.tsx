import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { DefaultLayout } from './layouts/DefaultLayout';
import { SignUp } from './pages/SignUp';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
