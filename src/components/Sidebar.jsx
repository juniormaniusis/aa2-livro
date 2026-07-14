import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { exercisesData } from '../data/exercises';
import { useMemo } from 'react';

export default function Sidebar() {
    const { searchQuery, setSearchQuery, themeFilter, setThemeFilter, sidebarOpen, setSidebarOpen } = useApp();

    const themeCounts = useMemo(() => {
        const counts = {};
        exercisesData.forEach(ex => { counts[ex.theme] = (counts[ex.theme] || 0) + 1; });
        return counts;
    }, []);

    return (
        <>
            {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
            <aside className={`sidebar ${sidebarOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        <span className="logo-icon">▲</span>
                        <div className="logo-text">
                            <h1>AA II</h1>
                            <span className="subtitle">Exercícios</span>
                        </div>
                    </div>
                </div>

                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Buscar exercício..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        autoComplete="off"
                    />
                    {searchQuery && (
                        <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
                    )}
                </div>

                <nav className="sidebar-menu">
                    <div className="menu-label">Filtrar por Tema</div>
                    <ul>
                        <li
                            className={`menu-item ${themeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => { setThemeFilter('all'); setSidebarOpen(false); }}
                        >
                            <span className="menu-item-text">Todos os Temas</span>
                            <span className="count-badge">{exercisesData.length}</span>
                        </li>
                        {Object.entries(themeCounts).map(([name, count]) => (
                            <li
                                key={name}
                                className={`menu-item ${themeFilter === name ? 'active' : ''}`}
                                onClick={() => { setThemeFilter(name); setSidebarOpen(false); }}
                            >
                                <span className="menu-item-text">{name}</span>
                                <span className="count-badge">{count}</span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-links">
                        <Link to="/cola" className="sidebar-link" onClick={() => setSidebarOpen(false)}>Cheat Sheet (Rigorosa)</Link>
                        <Link to="/cola-simples" className="sidebar-link" onClick={() => setSidebarOpen(false)}>Cheat Sheet (Papo Reto)</Link>
                    </div>
                    <div className="sidebar-meta">
                        <p>Prof. Mario Leston-Rey</p>
                        <span className="version-tag">Edição 2026</span>
                    </div>
                </div>
            </aside>
        </>
    );
}
