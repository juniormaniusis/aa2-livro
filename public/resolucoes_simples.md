# Cola Simples — AA II (Papo Reto)

Resumo rápido dos exercícios com foco no que lembrar na prova.

---

## Capítulo 2 — Algoritmos Gulosos

### Seleção e escalonamento de tarefas

#### 2.1
- Conjunto compatível = sem sobreposição.
- Ordenar por início mantém a compatibilidade.

#### 2.2
- Ordene por início e compare cada intervalo com o próximo.
- Se algum terminar depois do próximo começar, não é compatível.
- Custo: $O(n \log n)$.

#### 2.3
- Se $T_1$ e $T_2$ são independentes, resolve separado e soma: $I_1 + I_2$.

#### 2.4
- É clique se todos se cruzam em um mesmo instante.
- Teste: $\max(s_i) < \min(f_i)$.

#### 2.5
- Invariante: número de cliques criados = tamanho da solução.
- Se não cabe em clique atual, cria novo e ambos aumentam em 1.

#### 2.6
- Variação gulosa: pegue quem começa mais tarde.
- Conflitantes com ele formam clique; repita no restante.

#### 2.7
- Ordenar por início decrescente.
- Escolher, remover conflitantes, repetir.
- Custo: $O(n \log n)$.

#### 2.8
- Se os conflitantes de $i$ formam clique, remover esse bloco simplifica.
- Depois soma +1 na solução e +1 no número de cliques.

#### 2.9
- Escolher por término mais cedo e por início mais tarde **não** gera a mesma partição.

#### 2.10 e 2.11
- Se tarefa não cabe em nenhuma sala, ela conflita com todas as salas abertas.
- Número de salas necessárias = pico de tarefas simultâneas.

### Huffman

#### 2.12
- Com 2 símbolos, Huffman gera códigos de 1 bit (0 e 1), que já é ótimo.

### Cobertura e emparelhamento

#### 2.13
- Sem restrição entre linhas: pega o maior absoluto de cada linha.

#### 2.14
- Calcula melhor valor por linha, ordena e escolhe as $k$ melhores.

#### 2.15
- Cobertura em reta: comece no primeiro ponto descoberto e estique o segmento ao máximo.

#### 2.16
- Ordene os dois vetores.
- Use dois ponteiros para encaixar menor item na menor caixa possível.

### Partição de sequências

#### 2.17
- Para minimizar a maior soma dos pares: maior com menor, 2º maior com 2º menor, etc.

#### 2.18 (Regra de Smith)
- Ordene por $\frac{w_j}{t_j}$ em ordem decrescente.
- Minimiza tempo de conclusão ponderado.

---

## Capítulo 3 — Árvores Geradoras Mínimas (MST)

#### 3.1
- Tirou aresta da MST, virou dois componentes.
- Sempre existe aresta de outra MST cruzando o mesmo corte para trocar.

#### 3.2
- Em Kruskal, a quantidade de arestas de um mesmo peso na MST não depende do desempate.

#### 3.3
- (i) Verdadeiro: restrição correta preserva otimalidade local em subestrutura.
- (ii) Falso: ótimo local pode não ser ótimo global.

#### 3.4
- Se todos os pesos são distintos, a MST é única.

#### 3.5
- Aresta pertence a alguma MST se puder ser escolhida sem fechar ciclo com arestas estritamente mais leves.
- Estratégia prática: processar por blocos de mesmo peso com DSU.

#### 3.6
- Prim com pesos todos distintos faz escolhas forçadas e produz MST única.
- O recíproco (cortes únicos ⇒ MST única) não vale em geral.

#### 3.7
- (i) Falso: MBST não precisa ter custo total mínimo.
- (ii) Verdadeiro: toda MST é MBST.
