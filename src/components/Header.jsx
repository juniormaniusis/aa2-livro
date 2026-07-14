import { useApp } from '../context/AppContext';

export default function Header() {
    const { viewMode, setViewMode, theme, toggleTheme, setSidebarOpen } = useApp();

    return (
        <header className="content-header">
            <div className="header-title-area">
                <h2>Catálogo de Exercícios Resolvidos & Traduzidos</h2>
                <p>Estudo dirigido para a disciplina de Análise de Algoritmos II</p>
            </div>
            <div className="header-controls">
                <div className="control-group">
                    <span className="control-label">Exibição:</span>
                    <div className="toggle-buttons">
                        <button
                            className={`toggle-btn ${viewMode === 'pt' ? 'active' : ''}`}
                            onClick={() => setViewMode('pt')}
                        >Português</button>
                        <button
                            className={`toggle-btn ${viewMode === 'en' ? 'active' : ''}`}
                            onClick={() => setViewMode('en')}
                        >English</button>
                    </div>
                </div>
                <button className="theme-toggle-btn" onClick={toggleTheme} title="Alternar tema">
                    <span className="theme-toggle-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
                </button>
                <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)} title="Menu">
                    ☰
                </button>
            </div>
        </header>
    );
}
