import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/signup" /> */}
      </Route>
    </Routes>
  );
}
