import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import ColaPage from './pages/ColaPage';
import ColaSimplesPage from './pages/ColaSimplesPage';

export default function App() {
    return (
        <AppProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cola" element={<ColaPage />} />
                    <Route path="/cola-simples" element={<ColaSimplesPage />} />
                </Routes>
            </HashRouter>
        </AppProvider>
    );
}
