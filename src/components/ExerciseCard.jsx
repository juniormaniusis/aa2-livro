import { useState, useRef, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import renderMathInElement from 'katex/dist/contrib/auto-render';

export default function ExerciseCard({ exercise }) {
    const { viewMode, completedExercises, toggleCompleted, personalNotes, updateNotes } = useApp();
    const [notesOpen, setNotesOpen] = useState(false);
    const [saveStatus, setSaveStatus] = useState('Salvo localmente');
    const cardBodyRef = useRef(null);
    const saveTimeoutRef = useRef(null);
    const isCompleted = completedExercises.includes(exercise.id);
    const notes = personalNotes[exercise.id] || '';

    useEffect(() => {
        if (cardBodyRef.current) {
            renderMathInElement(cardBodyRef.current, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                ],
                throwOnError: false,
            });
        }
    }, [viewMode, exercise]);

    const handleCopy = useCallback(() => {
        const md = `### Exercício ${exercise.num} (${exercise.section})\n\n**Original (EN):**\n${exercise.en}\n\n**Tradução (PT):**\n${exercise.pt}`;
        navigator.clipboard.writeText(md);
    }, [exercise]);

    const handleNotesChange = useCallback((e) => {
        updateNotes(exercise.id, e.target.value);
        setSaveStatus('Digitando...');
        clearTimeout(saveTimeoutRef.current);
        saveTimeoutRef.current = setTimeout(() => setSaveStatus('Salvo localmente'), 1000);
    }, [exercise.id, updateNotes]);

    return (
        <article className={`exercise-card ${isCompleted ? 'completed' : ''}`}>
            <header className="card-header">
                <div className="card-meta">
                    <span className={`difficulty-badge ${exercise.difficulty.toLowerCase()}`}>{exercise.difficulty}</span>
                    <span className="section-tag">{exercise.section}</span>
                </div>
                <div className="card-title-row">
                    <h3 className="exercise-title">Exercício {exercise.num}</h3>
                    <div className="card-actions">
                        <button className={`action-btn resolve-btn ${isCompleted ? 'active' : ''}`}
                            onClick={() => toggleCompleted(exercise.id)} title="Marcar como resolvido">
                            <span className="action-icon">{isCompleted ? '✅' : '⬜'}</span>
                        </button>
                        <button className="action-btn copy-btn" onClick={handleCopy} title="Copiar markdown">
                            <span className="action-icon">📋</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className={`card-body view-${viewMode}`} ref={cardBodyRef}>
                <div className="lang-block lang-en">
                    <div className="lang-label"><span className="flag">🇺🇸</span> ENUNCIADO ORIGINAL (EN)</div>
                    <div className="lang-text math-content">{exercise.en}</div>
                </div>
                <div className="lang-block lang-pt">
                    <div className="lang-label"><span className="flag">🇧🇷</span> VERSÃO TRADUZIDA (PT)</div>
                    <div className="lang-text math-content">{exercise.pt}</div>
                </div>
            </div>

            <div className="card-collapsible-section">
                <button className="collapsible-header-btn" onClick={() => setNotesOpen(o => !o)}>
                    <span>📝 Minhas Anotações / Solução</span>
                    <span className="arrow-icon">{notesOpen ? '▲' : '▼'}</span>
                </button>
                <div className={`collapsible-content ${notesOpen ? 'open' : ''}`}>
                    <textarea
                        className="solution-notes"
                        placeholder="Escreva aqui sua solução ou anotações... (Salva automaticamente)"
                        value={notes}
                        onChange={handleNotesChange}
                    />
                    <div className="notes-status-row">
                        <span className="autosave-tag">{saveStatus}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
