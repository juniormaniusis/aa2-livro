import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import renderMathInElement from 'katex/dist/contrib/auto-render';

export default function ColaSimplesPage() {
    const [content, setContent] = useState('<p>Carregando resoluções simplificadas...</p>');
    const contentRef = useRef(null);

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'resolucoes_simples.md')
            .then(r => { if (!r.ok) throw new Error('Falha'); return r.text(); })
            .then(md => setContent(marked.parse(md)))
            .catch(() => setContent('<p style="color:#ef4444">Erro ao carregar resoluções.</p>'));
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            renderMathInElement(contentRef.current, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                ],
                throwOnError: false,
            });
        }
    }, [content]);

    return (
        <div className="cola-page">
            <nav className="cola-navbar">
                <h1>Cheat Sheet AA II (Versão Simples)</h1>
                <div className="cola-nav-links">
                    <Link to="/cola">Ver Original (Matemática Rigorosa)</Link>
                    <Link to="/">Exercícios</Link>
                </div>
            </nav>

            <div className="cola-container">
                <header className="cola-hero">
                    <h2>Papo Reto & Resoluções Explicadas</h2>
                    <p>Esqueça o juridiquês acadêmico. Aqui está o núcleo duro dos algoritmos gulosos e árvores geradoras com linguagem direta, pra te salvar no dia da prova.</p>
                </header>

                <section className="cola-card">
                    <h3>📖 Resoluções de Aluno pra Aluno</h3>
                    <div className="resolutions-content" ref={contentRef}
                        dangerouslySetInnerHTML={{ __html: content }} />
                </section>
            </div>
        </div>
    );
}
