import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [viewMode, setViewMode] = useState('pt');
    const [searchQuery, setSearchQuery] = useState('');
    const [themeFilter, setThemeFilter] = useState('all');
    const [completedExercises, setCompletedExercises] = useState(() => {
        try { return JSON.parse(localStorage.getItem('completedExercises') || '[]'); } catch { return []; }
    });
    const [personalNotes, setPersonalNotes] = useState(() => {
        try { return JSON.parse(localStorage.getItem('personalNotes') || '{}'); } catch { return {}; }
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
    }, [completedExercises]);

    useEffect(() => {
        localStorage.setItem('personalNotes', JSON.stringify(personalNotes));
    }, [personalNotes]);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
    const toggleCompleted = (id) => setCompletedExercises(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
    const updateNotes = (id, text) => setPersonalNotes(prev => ({ ...prev, [id]: text }));

    return (
        <AppContext.Provider value={{
            theme, toggleTheme,
            viewMode, setViewMode,
            searchQuery, setSearchQuery,
            themeFilter, setThemeFilter,
            completedExercises, toggleCompleted,
            personalNotes, updateNotes,
            sidebarOpen, setSidebarOpen
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() { return useContext(AppContext); }
