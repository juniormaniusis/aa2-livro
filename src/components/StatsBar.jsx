import { useApp } from '../context/AppContext';

export default function StatsBar({ filteredCount, themesCount }) {
    const { completedExercises } = useApp();

    return (
        <section className="stats-bar">
            <div className="stat-card">
                <span className="stat-val">{filteredCount}</span>
                <span className="stat-lbl">Exercícios</span>
            </div>
            <div className="stat-card">
                <span className="stat-val">2</span>
                <span className="stat-lbl">Capítulos</span>
            </div>
            <div className="stat-card">
                <span className="stat-val">{themesCount}</span>
                <span className="stat-lbl">Temas</span>
            </div>
            <div className="stat-card">
                <span className="stat-val">{completedExercises.length}</span>
                <span className="stat-lbl">Resolvidos</span>
            </div>
        </section>
    );
}
