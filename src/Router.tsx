import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/signup" /> */}
    </Routes>
  );
}
