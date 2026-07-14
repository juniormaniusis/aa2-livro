export const exercisesData = [
    {
        "id": "ex-2-1",
        "num": "2.1",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Fácil",
        "en": "Let $(T, s, f)$ be a task structure, and let $X \\subseteq T$ be compatible. Show that there exists an ordering $x_0, \\dots, x_{m-1}$ of the elements of $X$ such that\n$$f(x_r) \\le s(x_{r+1})\\quad \\text{for every } r \\in [0 : m - 1).$$",
        "pt": "Seja $(T, s, f)$ uma estrutura de tarefas e seja $X \\subseteq T$ compatível. Mostre que existe uma ordenação $x_0, \\dots, x_{m-1}$ dos elementos de $X$ tal que\n$$f(x_r) \\le s(x_{r+1})\\quad \\text{para todo } r \\in [0 : m - 1).$$"
    },
    {
        "id": "ex-2-2",
        "num": "2.2",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "Let $(T, s, f)$ be a task structure. Write an algorithm that receives a subset $X \\subseteq T$ and decides whether $X$ is compatible. The running time of the algorithm must be $O(|X| \\log |X|)$.",
        "pt": "Seja $(T, s, f)$ uma estrutura de tarefas. Escreva um algoritmo que recebe um subconjunto $X \\subseteq T$ e decide se $X$ é compatível. O tempo de execução do algoritmo deve ser $O(|X| \\log |X|)$."
    },
    {
        "id": "ex-2-3",
        "num": "2.3",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "Let $(T, s, f)$ be a task structure. Suppose that $T$ admits a partition $\\{T_1, T_2\\}$ such that every task in $T_1$ is compatible with every task in $T_2$. Let $I_1$ be a compatible subset of $T_1$ that is maximum in $T_1$, and let $I_2$ be a compatible subset of $T_2$ that is maximum in $T_2$. Show that $I_1 \\cup I_2$ is a compatible subset of $T$ that is maximum in $T$.",
        "pt": "Seja $(T, s, f)$ uma estrutura de tarefas. Suponha que $T$ admita uma partição $\\{T_1, T_2\\}$ tal que toda tarefa em $T_1$ seja compatível com toda tarefa em $T_2$. Seja $I_1$ um subconjunto compatível de $T_1$ que é máximo em $T_1$, e seja $I_2$ um subconjunto compatível de $T_2$ que é máximo em $T_2$. Mostre que $I_1 \\cup I_2$ é um subconjunto compatível de $T$ que é máximo em $T$."
    },
    {
        "id": "ex-2-4",
        "num": "2.4",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Fácil",
        "en": "Let $(T, s, f)$ be a task structure, and let $C \\subseteq T$. Write an algorithm that decides whether $C$ is a clique in time $O(|C|)$.",
        "pt": "Seja $(T, s, f)$ uma estrutura de tarefas e seja $C \\subseteq T$. Escreva um algoritmo que decide se $C$ é um clique em tempo $O(|C|)$."
    },
    {
        "id": "ex-2-5",
        "num": "2.5",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Fácil",
        "en": "At the beginning of each iteration of the outer loop of the clique-partition algorithm, the following invariant holds:\n$$\\begin{aligned}\n&\\text{(i) } C \\text{ is a clique-partition of } \\{u_k \\mid k \\in [0 : j)\\}; \\\\\n&\\text{(ii) } I \\text{ is compatible}; \\\\\n&\\text{(iii) } |C| = |I|; \\\\\n&\\text{(iv) } s(u_k) < f(\\ell) \\text{ for every } k \\in [0 : j), \\text{ and, if } j < n, \\text{ then } s(u_j) \\ge f(\\ell).\n\\end{aligned}$$\nProve the validity of this invariant.",
        "pt": "No início de cada iteração do laço externo do algoritmo de partição em cliques, o seguinte invariante é válido:\n$$\\begin{aligned}\n&\\text{(i) } C \\text{ é uma partição em cliques de } \\{u_k \\mid k \\in [0 : j)\\}; \\\\\n&\\text{(ii) } I \\text{ é compatível}; \\\\\n&\\text{(iii) } |C| = |I|; \\\\\n&\\text{(iv) } s(u_k) < f(\\ell) \\text{ para todo } k \\in [0 : j), \\text{ e, se } j < n, \\text{ então } s(u_j) \\ge f(\\ell).\n\\end{aligned}$$\nProve a validade deste invariante."
    },
    {
        "id": "ex-2-6",
        "num": "2.6",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "Consider the proof of Theorem 2.7. Instead of choosing a task with minimum finishing time, choose a task $i \\in T$ with maximum starting time, that is,\n$$s_i = \\max\\{s_t \\mid t \\in T\\}.$$ \nUse this choice to prove again that, for each task structure $(T, s, f)$, there exists a clique-partition $C$ of $T$ and a compatible subset $I$ of $T$ such that $|C| = |I|$.",
        "pt": "Considere a demonstração do Teorema 2.7. Em vez de escolher uma tarefa com tempo de término mínimo, escolha uma tarefa $i \\in T$ com tempo de início máximo, ou seja,\n$$s_i = \\max\\{s_t \\mid t \\in T\\}.$$\nUse essa escolha para provar novamente que, para cada estrutura de tarefas $(T, s, f)$, existe uma partição em cliques $C$ de $T$ e um subconjunto compatível $I$ de $T$ tal que $|C| = |I|$."
    },
    {
        "id": "ex-2-7",
        "num": "2.7",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "Extract from the proof of Exercise 2.6 an algorithm that receives a task structure $(T, s, f)$ and returns a clique-partition $C$ of $T$ and a compatible subset $I \\subseteq T$ such that $|C| = |I|$.",
        "pt": "Extraia da demonstração do Exercício 2.6 um algoritmo que recebe uma estrutura de tarefas $(T, s, f)$ e retorna uma partição em cliques $C$ de $T$ e um subconjunto compatível $I \\subseteq T$ tal que $|C| = |I|$."
    },
    {
        "id": "ex-2-8",
        "num": "2.8",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "Let $(T, s, f)$ be a task structure. Suppose that there exists $i \\in T$ such that\n$$C := \\{i\\} \\cup \\{k \\in T \\setminus \\{i\\} \\mid i \\text{ and } k \\text{ are incompatible}\\}$$\nis a clique. Use this assumption to prove that there exists a clique-partition $C$ of $T$ and a compatible subset $I$ of $T$ such that $|C| = |I|$.\nNotice that the two greedy choices discussed in the text satisfy this property: choosing a task with minimum finishing time, and choosing a task with maximum starting time.",
        "pt": "Seja $(T, s, f)$ uma estrutura de tarefas. Suponha que exista $i \\in T$ tal que\n$$C := \\{i\\} \\cup \\{k \\in T \\setminus \\{i\\} \\mid i \\text{ e } k \\text{ são incompatíveis}\\}$$\nseja um clique. Use essa suposição para provar que existe uma partição em cliques $C$ de $T$ e um subconjunto compatível $I$ de $T$ tal que $|C| = |I|$.\nNote que as duas escolhas gulosas discutidas no texto satisfazem essa propriedade: escolher uma tarefa com tempo de término mínimo e escolher uma tarefa com tempo de início máximo."
    },
    {
        "id": "ex-2-9",
        "num": "2.9",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.2 O problema de escalonamento de tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Fácil",
        "en": "The proof of Theorem 2.7 may be carried out by choosing a task with minimum finishing time or by choosing a task with maximum starting time. Compare the two resulting recursive algorithms. Do they always produce the same clique-partition?",
        "pt": "A demonstração do Teorema 2.7 pode ser realizada escolhendo uma tarefa com tempo de término mínimo ou escolhendo uma tarefa com tempo de início máximo. Compare os dois algoritmos recursivos resultantes. Eles sempre produzem a mesma partição em cliques?"
    },
    {
        "id": "ex-2-10",
        "num": "2.10",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.3 Escalonamento de todas as tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "Consider the proof of Theorem 2.8. Suppose that, for every $Q \\in \\mathcal{P}'$, the set $Q \\cup \\{i\\}$ is not compatible. Show that, for each $Q \\in \\mathcal{P}'$, the task $j_Q$, defined in the proof, satisfies\n$$s_{j_Q} = \\max\\{s_t \\mid t \\in Q\\}.$$\nConclude also that\n$$f_{j_Q} = \\max\\{f_t \\mid t \\in Q\\}.$$",
        "pt": "Considere a demonstração do Teorema 2.8. Suponha que, para cada $Q \\in \\mathcal{P}'$, o conjunto $Q \\cup \\{i\\}$ não seja compatível. Mostre que, para cada $Q \\in \\mathcal{P}'$, a tarefa $j_Q$, definida na demonstração, satisfaz\n$$s_{j_Q} = \\max\\{s_t \\mid t \\in Q\\}.$$\nConclua também que\n$$f_{j_Q} = \\max\\{f_t \\mid t \\in Q\\}.$$"
    },
    {
        "id": "ex-2-11",
        "num": "2.11",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.3 Escalonamento de todas as tarefas",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Médio",
        "en": "For each $r \\in [0 : n)$, let $T_r := \\{t_0, \\dots, t_r\\}$. Show that the following invariant holds at the end of the iteration of the first for-loop:\n$$\\begin{aligned}\n&\\text{(i) } \\mathcal{P} \\text{ is a compatible partition of } T_r, \\text{ and} \\\\\n&\\text{(ii) } \\text{there exists a clique } C \\subseteq T_r \\text{ such that } k \\in C \\text{ and } |C| = |\\mathcal{P}|.\n\\end{aligned}$$",
        "pt": "Para cada $r \\in [0 : n)$, seja $T_r := \\{t_0, \\dots, t_r\\}$. Mostre que o seguinte invariante é válido ao final da iteração do primeiro laço for:\n$$\\begin{aligned}\n&\\text{(i) } \\mathcal{P} \\text{ é uma partição compatível de } T_r, \\text{ e} \\\\\n&\\text{(ii) } \\text{existe um clique } C \\subseteq T_r \\text{ tal que } k \\in C \\text{ e } |C| = |\\mathcal{P}|.\n\\end{aligned}$$"
    },
    {
        "id": "ex-2-12",
        "num": "2.12",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.4 Codificação de Huffman",
        "theme": "Codificação de Huffman",
        "difficulty": "Fácil",
        "en": "Show that the previous theorem may fail when $|\\Sigma| = 2$. More precisely, take $\\Sigma = \\{a_1, a_2\\}$ and compare the encoding obtained by the construction of the theorem with a minimum prefix-free binary encoding of $\\Sigma$.",
        "pt": "Mostre que o teorema anterior pode falhar quando $|\\Sigma| = 2$. Mais precisamente, considere $\\Sigma = \\{a_1, a_2\\}$ e compare a codificação obtida pela construção do teorema com uma codificação binária livre de prefixos de custo mínimo de $\\Sigma$."
    },
    {
        "id": "ex-2-13",
        "num": "2.13",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.6 Mais exercícios",
        "theme": "Cobertura e Emparelhamento",
        "difficulty": "Fácil",
        "en": "Let $A := \\langle a_{ij} \\mid i \\in [0 : m), j \\in [0 : n) \\rangle$ be a matrix of real numbers. A row cover of $A$ is a set\n$$C \\subseteq [0 : m) \\times [0 : n)$$\nsuch that, for each $i \\in [0 : m)$, there exists exactly one $j \\in [0 : n)$ with $(i, j) \\in C$. The weight of $C$ is\n$$w(C) := \\sum_{(i, j) \\in C} a_{ij}.$$\nFind a row cover of maximum weight.",
        "pt": "Seja $A := \\langle a_{ij} \\mid i \\in [0 : m), j \\in [0 : n) \\rangle$ uma matriz de números reais. Uma cobertura de linhas de $A$ é um conjunto\n$$C \\subseteq [0 : m) \\times [0 : n)$$\ntal que, para cada $i \\in [0 : m)$, existe exatamente um $j \\in [0 : n)$ com $(i, j) \\in C$. O peso de $C$ é\n$$w(C) := \\sum_{(i, j) \\in C} a_{ij}.$$\nEncontre uma cobertura de linhas de peso máximo."
    },
    {
        "id": "ex-2-14",
        "num": "2.14",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.6 Mais exercícios",
        "theme": "Cobertura e Emparelhamento",
        "difficulty": "Médio",
        "en": "Let $A := \\langle a_{ij} \\mid i \\in [0 : m), j \\in [0 : n) \\rangle$ be a matrix of real numbers. A partial row cover of $A$ is a set\n$$C \\subseteq [0 : m) \\times [0 : n)$$\nsuch that, for each $i \\in [0 : m)$, there exists at most one $j \\in [0 : n)$ with $(i, j) \\in C$. The weight of $C$ is\n$$w(C) := \\sum_{(i, j) \\in C} a_{ij}.$$\nLet $k \\in [0 : m]$. Find a partial row cover of maximum weight among all partial row covers with exactly $k$ elements.",
        "pt": "Seja $A := \\langle a_{ij} \\mid i \\in [0 : m), j \\in [0 : n) \\rangle$ uma matriz de números reais. Uma cobertura parcial de linhas de $A$ é um conjunto\n$$C \\subseteq [0 : m) \\times [0 : n)$$\ntal que, para cada $i \\in [0 : m)$, existe no máximo um $j \\in [0 : n)$ com $(i, j) \\in C$. O peso de $C$ é\n$$w(C) := \\sum_{(i, j) \\in C} a_{ij}.$$\nSeja $k \\in [0 : m]$. Encontre uma cobertura parcial de linhas de peso máximo entre todas as coberturas parciais de linhas com exatamente $k$ elementos."
    },
    {
        "id": "ex-2-15",
        "num": "2.15",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.6 Mais exercícios",
        "theme": "Cobertura e Emparelhamento",
        "difficulty": "Médio",
        "en": "Let $I$ be a finite set, and let $s, t : I \\to \\mathbb{R}$ be such that $s_i \\le t_i$ for every $i \\in I$, where $s_i := s(i)$ and $t_i := t(i)$. Let $a, b \\in \\mathbb{R}$ be such that $a \\le b$. A subset $C \\subseteq I$ is a cover of the closed interval $[a, b]$ if\n$$[a, b] \\subseteq \\bigcup_{i \\in C} [s_i, t_i].$$\nAssume that $[a, b]$ can be covered by the intervals indexed by $I$. Find a cover of $[a, b]$ with minimum cardinality.",
        "pt": "Seja $I$ um conjunto finito, e sejam $s, t : I \\to \\mathbb{R}$ tais que $s_i \\le t_i$ para cada $i \\in I$, onde $s_i := s(i)$ e $t_i := t(i)$. Sejam $a, b \\in \\mathbb{R}$ tais que $a \\le b$. Um subconjunto $C \\subseteq I$ é uma cobertura do intervalo fechado $[a, b]$ se\n$$[a, b] \\subseteq \\bigcup_{i \\in C} [s_i, t_i].$$\nAssuma que $[a, b]$ pode ser coberto pelos intervalos indexados por $I$. Encontre uma cobertura de $[a, b]$ com cardinalidade mínima."
    },
    {
        "id": "ex-2-16",
        "num": "2.16",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.6 Mais exercícios",
        "theme": "Cobertura e Emparelhamento",
        "difficulty": "Difícil",
        "en": "Let $B$ be a finite set of boxes and let $O$ be a finite set of objects. Let $c : B \\to \\mathbb{R}_+$ be a capacity function, which assigns a capacity $c_b := c(b)$ to each box $b \\in B$, and let $s : O \\to \\mathbb{R}_+$ be a size function, which assigns a size $s_o := s(o)$ to each object $o \\in O$. A feasible matching is a set $M \\subseteq B \\times O$ such that:\n$$\\begin{aligned}\n&\\text{(i) for each box } b \\in B, \\text{ there exists at most one object } o \\in O \\text{ such that } (b, o) \\in M; \\\\\n&\\text{(ii) for each object } o \\in O, \\text{ there exists at most one box } b \\in B \\text{ such that } (b, o) \\in M; \\\\\n&\\text{(iii) for every } (b, o) \\in M, \\text{ we have } s_o \\le c_b.\n\\end{aligned}$$\nFind a feasible matching of maximum cardinality.",
        "pt": "Seja $B$ um conjunto finito de caixas e seja $O$ um conjunto finito de objetos. Seja $c : B \\to \\mathbb{R}_+$ uma função capacidade, que associa uma capacidade $c_b := c(b)$ a cada caixa $b \\in B$, e seja $s : O \\to \\mathbb{R}_+$ uma função tamanho, que associa um tamanho $s_o := s(o)$ a cada objeto $o \\in O$. Um emparelhamento viável é um conjunto $M \\subseteq B \\times O$ tal que:\n$$\\begin{aligned}\n&\\text{(i) para cada caixa } b \\in B, \\text{ existe no máximo um objeto } o \\in O  \\text{ tal que } (b, o) \\in M; \\\\\n&\\text{(ii) para cada objeto } o \\in O, \\text{ existe no máximo uma caixa } b \\in B  \\text{ tal que } (b, o) \\in M; \\\\\n&\\text{(iii) para todo } (b, o) \\in M, \\text{ temos } s_o \\le c_b.\n\\end{aligned}$$\nEncontre um emparelhamento viável de cardinalidade máxima."
    },
    {
        "id": "ex-2-17",
        "num": "2.17",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.6 Mais exercícios",
        "theme": "Partição de Sequências",
        "difficulty": "Difícil",
        "en": "Consider a sequence $\\langle x_0, x_1, \\dots, x_{n-1} \\rangle$ of real numbers, where $n$ is even. Let $\\mathcal{P}$ be a partition of the index set $[0 : n)$ into parts of size 2. The value of $\\mathcal{P}$ is the number\n$$\\max\\{x_i + x_j \\mid \\{i, j\\} \\in \\mathcal{P}\\}.$$\nDesign an algorithm that finds a partition of minimum value. Prove the correctness of your algorithm and determine its time complexity.",
        "pt": "Considere uma sequência $\\langle x_0, x_1, \\dots, x_{n-1} \\rangle$ de números reais, onde $n$ é par. Seja $\\mathcal{P}$ uma partição do conjunto de índices $[0 : n)$ em partes de tamanho 2. O valor de $\\mathcal{P}$ é o número\n$$\\max\\{x_i + x_j \\mid \\{i, j\\} \\in \\mathcal{P}\\}.$$\nProjete um algoritmo que encontre uma partição de valor mínimo. Prove a corretude do seu algoritmo e determine a sua complexidade de tempo."
    },
    {
        "id": "ex-2-18",
        "num": "2.18",
        "chapter": "Capítulo 2: Algoritmos Gulosos Básicos",
        "section": "2.6 Mais exercícios",
        "theme": "Seleção e Escalonamento de Tarefas",
        "difficulty": "Difícil",
        "en": "Let $J$ be a finite set of jobs, and let $n := |J|$. Also, let $t, w : J \\to \\mathbb{R}_{++}$ be functions. For each $j \\in J$, we call $t(j)$ the processing time of $j$, and $w(j)$ the weight of $j$. A schedule of $J$ is an ordering of the elements of $J$, that is, a bijection $\\sigma : [0 : n) \\to J$. For a schedule $\\sigma$ and a job $j \\in J$, the completion time of $j$ with respect to $\\sigma$ is\n$$c_\\sigma(j) := \\sum_{i \\in [0 : \\sigma^{-1}(j)]} t(\\sigma(i)).$$\nThe value of $\\sigma$ is\n$$\\sum_{j \\in J} w(j)c_\\sigma(j).$$\nDesign an efficient algorithm that returns a schedule of minimum value. Prove that your algorithm is correct and determine its time complexity.\nSuggestion: Pay attention to the quotient $w(j)/t(j)$.",
        "pt": "Seja $J$ um conjunto finito de tarefas (jobs), e seja $n := |J|$. Além disso, sejam $t, w : J \\to \\mathbb{R}_{++}$ funções. Para cada $j \\in J$, chamamos $t(j)$ o tempo de processamento de $j$, e $w(j)$ o peso de $j$. Um sequenciamento (schedule) de $J$ é uma ordenação dos elementos de $J$, ou seja, uma bijeção $\\sigma : [0 : n) \\to J$. Para um sequenciamento $\\sigma$ e uma tarefa $j \\in J$, o tempo de conclusão de $j$ com relação a $\\sigma$ é\n$$c_\\sigma(j) := \\sum_{i \\in [0 : \\sigma^{-1}(j)]} t(\\sigma(i)).$$\nO valor de $\\sigma$ é\n$$\\sum_{j \\in J} w(j)c_\\sigma(j).$$\nProjete um algoritmo eficiente que retorne um sequenciamento de valor mínimo. Prove que seu algoritmo está correto e determine sua complexidade de tempo.\nSugestão: Preste atenção no quociente $w(j)/t(j)$."
    },
    {
        "id": "ex-3-1",
        "num": "3.1",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Propriedades de Árvores Geradoras",
        "difficulty": "Médio",
        "en": "Let $T_1$ and $T_2$ be spanning trees of a graph $G$. Show that, for each $e \\in E(T_1) \\setminus E(T_2)$, there exists $f \\in E(T_2) \\setminus E(T_1)$ such that both\n$$T_1 - e + f \\quad \\text{and} \\quad T_2 - f + e$$\nare spanning trees of $G$.",
        "pt": "Sejam $T_1$ e $T_2$ árvores geradoras de um grafo $G$. Mostre que, para cada $e \\in E(T_1) \\setminus E(T_2)$, existe $f \\in E(T_2) \\setminus E(T_1)$ tal que tanto\n$$T_1 - e + f \\quad \\text{e} \\quad T_2 - f + e$$\nsão árvores geradoras de $G$."
    },
    {
        "id": "ex-3-2",
        "num": "3.2",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Árvores Geradoras Mínimas",
        "difficulty": "Fácil",
        "en": "Let $(G, c)$ be a weighted graph. Show that, if $T$ and $F$ are minimum spanning trees of $(G, c)$, then the lists of the weights of the edges of $T$ and $F$, ordered in nondecreasing order of weight, are identical.",
        "pt": "Seja $(G, c)$ um grafo ponderado. Mostre que, se $T$ e $F$ são árvores geradoras mínimas de $(G, c)$, então as listas dos pesos das arestas de $T$ e $F$, ordenadas em ordem não decrescente de peso, são idênticas."
    },
    {
        "id": "ex-3-3",
        "num": "3.3",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Árvores Geradoras Mínimas",
        "difficulty": "Médio",
        "en": "Let $(G, c)$ be a weighted connected graph, and let $\\emptyset \\neq X \\subseteq V(G)$. Prove or disprove the following statements.\n$$\\begin{aligned}\n&\\text{(i) If } T \\text{ is a minimum spanning tree of } (G, c) \\text{ and } T[X] \\text{ is connected, then } T[X] \\text{ is a minimum spanning tree of } (G[X], c). \\\\\n&\\text{(ii) If } J \\text{ is a minimum spanning tree of } (G[X], c), \\text{ then } E(J) \\text{ is good for } (G, c).\n\\end{aligned}$$",
        "pt": "Seja $(G, c)$ um grafo conexo ponderado, e seja $\\emptyset \\neq X \\subseteq V(G)$. Prove ou refute as seguintes afirmações.\n$$\\begin{aligned}\n&\\text{(i) Se } T \\text{ é uma árvore geradora mínima de } (G, c) \\text{ e } T[X] \\text{ é conexo, então } T[X] \\text{ é uma árvore geradora mínima de } (G[X], c). \\\\\n&\\text{(ii) Se } J \\text{ é uma árvore geradora mínima de } (G[X], c), \\text{ então } E(J) \\text{ é boa para } (G, c).\n\\end{aligned}$$"
    },
    {
        "id": "ex-3-4",
        "num": "3.4",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Árvores Geradoras Mínimas",
        "difficulty": "Fácil",
        "en": "Let $(G, c)$ be a weighted connected graph such that $c(e) \\neq c(f)$ for all distinct $e, f \\in E(G)$. Show that $(G, c)$ has a unique minimum spanning tree.",
        "pt": "Seja $(G, c)$ um grafo conexo ponderado tal que $c(e) \\neq c(f)$ para quaisquer $e, f \\in E(G)$ distintos. Mostre que $(G, c)$ possui uma única árvore geradora mínima."
    },
    {
        "id": "ex-3-5",
        "num": "3.5",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Árvores Geradoras Mínimas",
        "difficulty": "Difícil",
        "en": "Let $(G, c)$ be a weighted connected graph. Give an algorithm that computes the set of all edges that belong to some minimum spanning tree of $(G, c)$. Prove the correctness of your algorithm and determine its time complexity.",
        "pt": "Seja $(G, c)$ um grafo conexo ponderado. Apresente um algoritmo que computa o conjunto de todas as arestas que pertencem a alguma árvore geradora mínima de $(G, c)$. Prove a corretude de seu algoritmo e determine sua complexidade de tempo."
    },
    {
        "id": "ex-3-6",
        "num": "3.6",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Árvores Geradoras Mínimas",
        "difficulty": "Médio",
        "en": "Let $(G, c)$ be a weighted connected graph. Show that $(G, c)$ has a unique minimum spanning tree if every nonempty cut $K$ of $G$ contains a unique edge $e \\in K$ such that\n$$c(e) = \\min\\{c(f) \\mid f \\in K\\}.$$\nShow that the converse does not hold.",
        "pt": "Seja $(G, c)$ um grafo conexo ponderado. Mostre que $(G, c)$ possui uma única árvore geradora mínima se cada corte não vazio $K$ de $G$ contém uma única aresta $e \\in K$ tal que\n$$c(e) = \\min\\{c(f) \\mid f \\in K\\}.$$\nMostre que a recíproca não é verdadeira."
    },
    {
        "id": "ex-3-7",
        "num": "3.7",
        "chapter": "Capítulo 3: Árvores Geradoras Mínimas",
        "section": "3.4 Exercícios",
        "theme": "Árvores Geradoras Mínimas",
        "difficulty": "Difícil",
        "en": "Let $(G, c)$ be a weighted connected graph, and let $T$ be a spanning tree of $G$. Define\n$$b(T) := \\max\\{c(e) \\mid e \\in E(T)\\}.$$\nAn edge $e \\in E(T)$ such that $c(e) = b(T)$ is called a bottleneck edge of $T$. A spanning tree $T$ of $G$ is called a minimum-bottleneck spanning tree of $(G, c)$ if $b(T)$ is minimum among all spanning trees of $G$.\nProve or disprove each of the following assertions.\n$$\\begin{aligned}\n&\\text{(i) If } T \\text{ is a minimum-bottleneck spanning tree of } (G, c), \\text{ then } T \\text{ is a minimum spanning tree of } (G, c). \\\\\n&\\text{(ii) If } T \\text{ is a minimum spanning tree of } (G, c), \\text{ then } T \\text{ is a minimum-bottleneck spanning tree of } (G, c).\n\\end{aligned}$$",
        "pt": "Seja $(G, c)$ um grafo conexo ponderado, e seja $T$ uma árvore geradora de $G$. Defina\n$$b(T) := \\max\\{c(e) \\mid e \\in E(T)\\}.$$\nUma aresta $e \\in E(T)$ tal que $c(e) = b(T)$ é chamada de aresta gargalo de $T$. Uma árvore geradora $T$ de $G$ é chamada de árvore geradora de gargalo mínimo de $(G, c)$ se $b(T)$ for mínimo entre todas as árvores geradoras de $G$.\nProve ou refute cada uma das seguintes afirmações.\n$$\\begin{aligned}\n&\\text{(i) Se } T \\text{ é uma árvore geradora de gargalo mínimo de } (G, c), \\text{ então } T  \\text{ é uma árvore geradora mínima de } (G, c). \\\\\n&\\text{(ii) Se } T \\text{ é uma árvore geradora mínima de } (G, c), \\text{ então } T  \\text{ é uma árvore geradora de gargalo mínimo de } (G, c).\n\\end{aligned}$$"
    }
];
