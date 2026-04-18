import { Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell';
import Library from './routes/Library';
import Generate from './routes/Generate';
import Installers from './routes/Installers';
import Objections from './routes/Objections';
import Builder from './routes/Builder';
import Credentials from './routes/Credentials';
import ProofPoints from './routes/ProofPoints';
import Dashboard from './routes/Dashboard';

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/installers" element={<Installers />} />
        <Route path="/objections" element={<Objections />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/proof" element={<ProofPoints />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AppShell>
  );
}
