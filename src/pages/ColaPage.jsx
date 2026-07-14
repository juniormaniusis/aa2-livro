import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import renderMathInElement from 'katex/dist/contrib/auto-render';

export default function ColaPage() {
    const [content, setContent] = useState('<p>Carregando resoluções detalhadas...</p>');
    const contentRef = useRef(null);

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'resolucoes.md')
            .then(r => { if (!r.ok) throw new Error('Falha'); return r.text(); })
            .then(md => {
                setContent(marked.parse(md));
            })
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
                <h1>Cheat Sheet AA II</h1>
                <div className="cola-nav-links">
                    <Link to="/cola-simples">Versão Simples (Papo Reto)</Link>
                    <Link to="/">Voltar aos Exercícios</Link>
                </div>
            </nav>

            <div className="cola-container">
                <header className="cola-hero">
                    <h2>Estratégias de Estudo & Teoremas Vitais</h2>
                    <p>Seu guia rápido e definitivo para destruir na prova de Algoritmos Gulosos e Árvores Geradoras Mínimas.</p>
                </header>

                <section className="cola-card">
                    <h3>🧠 O Molde das Provas</h3>
                    <div className="theorem-box">
                        <h4>1. Argumento de Troca (Exchange Argument)</h4>
                        <p><strong>Uso:</strong> ~70% das provas de Gulosos.<br /><strong>Estrutura:</strong> "Assuma que existe solução ótima O diferente da gulosa G. Ache o 1º elemento divergente. Mostre que trocar o elemento de O pelo de G não piora a solução. Por indução, G é ótima."</p>
                    </div>
                    <div className="theorem-box">
                        <h4>2. Invariantes de Laço</h4>
                        <p><strong>Uso:</strong> Corretude estrutural.<br /><strong>Estrutura:</strong> "No início da iteração k, a propriedade X é válida. Ao adicionar a k-ésima tarefa, X se mantém."</p>
                    </div>
                    <div className="theorem-box">
                        <h4>3. Contradição por Ciclo</h4>
                        <p><strong>Uso:</strong> Grafos e MST.<br /><strong>Estrutura:</strong> "Suponha que a aresta de menor peso de um corte não pertence à MST. Adicioná-la cria um ciclo. Remover a mais pesada desse ciclo diminui o peso da MST (Contradição!)."</p>
                    </div>
                </section>

                <section className="cola-card">
                    <h3>🏆 Teoremas Clássicos (Decore-os!)</h3>
                    <div className="theorem-box">
                        <h4>Seleção de Tarefas (Escolha Gulosa)</h4>
                        <p>Qualquer subconjunto compatível máximo pode ser estendido escolhendo a tarefa com <strong>menor tempo de término</strong>. Base para Interval Scheduling.</p>
                    </div>
                    <div className="theorem-box">
                        <h4>Partição em Cliques</h4>
                        <p>O tamanho máximo de um conjunto de tarefas compatíveis é igual ao número mínimo de cliques/recursos necessários para escalonar todas as tarefas (Teorema de Dilworth aplicado).</p>
                    </div>
                    <div className="theorem-box">
                        <h4>Propriedade do Corte (MST)</h4>
                        <p>Para qualquer corte que divide vértices em (S, V-S), a aresta de <strong>menor peso</strong> cruzando o corte pertence obrigatoriamente a uma MST. (Prova do Prim).</p>
                    </div>
                    <div className="theorem-box">
                        <h4>Propriedade do Ciclo (MST)</h4>
                        <p>A aresta de <strong>maior peso</strong> em um ciclo <strong>não</strong> pertence a nenhuma MST (assumindo pesos distintos). (Prova do Kruskal).</p>
                    </div>
                </section>

                <section className="cola-card">
                    <h3>📖 Resoluções dos 25 Exercícios</h3>
                    <div className="resolutions-content" ref={contentRef}
                        dangerouslySetInnerHTML={{ __html: content }} />
                </section>
            </div>
        </div>
    );
}
