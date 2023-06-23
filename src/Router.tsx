import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/signIn';
import { DefaultLayout } from './layouts/DefaultLayout';
import { SignUp } from './pages/signUp';
import { Main } from './pages/main';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}
