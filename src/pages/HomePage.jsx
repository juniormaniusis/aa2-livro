import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { exercisesData } from '../data/exercises';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsBar from '../components/StatsBar';
import ExerciseCard from '../components/ExerciseCard';

export default function HomePage() {
    const { themeFilter, searchQuery } = useApp();

    const filtered = useMemo(() => {
        return exercisesData.filter(ex => {
            if (themeFilter !== 'all' && ex.theme !== themeFilter) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                return ex.en.toLowerCase().includes(q) ||
                    ex.pt.toLowerCase().includes(q) ||
                    ex.num.includes(q) ||
                    ex.section.toLowerCase().includes(q);
            }
            return true;
        });
    }, [themeFilter, searchQuery]);

    const themesCount = useMemo(() => {
        return new Set(exercisesData.map(ex => ex.theme)).size;
    }, []);

    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                <Header />
                <StatsBar filteredCount={filtered.length} themesCount={themesCount} />
                <section className="exercises-container">
                    {filtered.length === 0 ? (
                        <div className="empty-state">
                            <span className="empty-icon">📂</span>
                            <h3>Nenhum exercício encontrado</h3>
                            <p>Tente alterar sua busca ou o filtro de temas na barra lateral.</p>
                        </div>
                    ) : (
                        <div className="exercises-grid">
                            {filtered.map(ex => <ExerciseCard key={ex.id} exercise={ex} />)}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
