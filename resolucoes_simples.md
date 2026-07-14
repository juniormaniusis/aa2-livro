# Resoluções Traduzidas para "Papo Reto" (Sem Juridiquês)

Aqui estão as resoluções de todos os 25 exercícios com uma linguagem direta e fácil de entender, como se um colega estivesse te explicando no intervalo da aula.

---

## Capítulo 2: Algoritmos Gulosos Básicos

### Tema: Seleção e Escalonamento de Tarefas

#### Exercício 2.1 (Fácil)
**Resolução:**
- **Matemática:** Se um conjunto de tarefas é "compatível", isso quer dizer que nenhuma tarefa bate de frente com outra no horário. Como elas não se sobrepõem, a gente pode simplesmente colocá-las em ordem cronológica de início. Se você ordenar do menor tempo de início pro maior, fica óbvio que uma tarefa sempre termina antes da próxima começar. Por isso, a propriedade se mantém.
- **Algoritmo:** É só pegar as tarefas e ordenar com base no tempo de início ($s$). Qualquer algoritmo bom de ordenação faz isso em tempo $O(n \log n)$.

#### Exercício 2.2 (Médio)
**Resolução:**
- **Algoritmo:** 
  1. Ordena todas as tarefas pelo tempo de início $s$. (Tempo: $O(n \log n)$).
  2. Faz um loop simples (um `for`) percorrendo a lista.
  3. Para cada tarefa, confira se o tempo de término dela é menor ou igual ao tempo de início da próxima. Se uma invadir o tempo da outra, retorne FALSO.
  4. Se o loop terminar de boa sem achar conflito, retorne VERDADEIRO.
- **Complexidade:** O que mais pesa aí é a ordenação, então fica $O(n \log n)$. O loop em si é só $O(n)$.

#### Exercício 2.3 (Médio)
**Resolução:**
- **Ideia central:** Se você tem um grupo de tarefas T1 e outro T2, e já sabe que **nenhuma** tarefa de T1 conflita com as de T2 (elas são completamente independentes), o melhor que você pode fazer é resolver cada lado separadamente.
- A resposta máxima para T1 é I1. A resposta máxima para T2 é I2. Juntar as duas (I1 + I2) dá a resposta máxima global. Se existisse alguma solução mágica maior, ela teria que tirar mais tarefas de T1 ou de T2 do que o máximo que já provamos que cabe lá dentro. Isso é impossível.

#### Exercício 2.4 (Fácil)
**Resolução:**
- **A ideia:** Um conjunto de intervalos forma um "clique" se **todos** eles acontecem ao mesmo tempo em algum momento. Para isso ser verdade, basta que a tarefa que começa **mais tarde** inicie ANTES da tarefa que termina **mais cedo** acabar.
- **Algoritmo:** Passa um loop pelas tarefas ($O(n)$). Acha a que tem o maior início (guarda o valor) e acha a que tem o menor término (guarda o valor). No fim, vê se o maior início é menor que o menor término. Acabou.

#### Exercício 2.5 (Fácil)
**Resolução:**
- **Como provar o Invariante:** No começo do algoritmo (j=0), tudo tá zerado. Quando a gente processa uma tarefa nova, tem duas opções:
  - Ou a tarefa cabe numa sala (clique) que já existe (porque começou antes da última terminar). O número de salas e de tarefas fica igual.
  - Ou a tarefa não cabe e a gente precisa abrir uma sala nova (novo clique). Nesse caso, o contador de cliques aumenta em 1, e o tamanho da nossa solução (I) também aumenta em 1. A igualdade ($|C| = |I|$) nunca quebra!

#### Exercício 2.6 (Médio)
**Resolução:**
- **Argumento de Troca:** Em vez de pegar a tarefa que termina primeiro, pegue a tarefa $i$ que **começa por último**. Ela é a última a entrar na festa. Todas as outras tarefas que conflitam com ela obrigatoriamente têm que estar acontecendo ao mesmo tempo, porque todas começaram antes (ou junto) e terminam depois de $i$ já ter começado.
- Isso forma um clique (um grupo onde todo mundo conflita). Separa esse clique. Repete o processo pro resto do tempo. O número de cliques que você vai formar vai bater certinho com o número de tarefas que você escolheu.

#### Exercício 2.7 (Médio)
**Resolução:**
- **Algoritmo:**
  1. Ordena as tarefas do maior tempo de início pro menor. ($O(n \log n)$).
  2. Pega a primeira tarefa da lista (a que começa por último). Coloca na solução $I$.
  3. Vasculha a lista e joga fora todas as tarefas que conflitam com ela (formam um clique $C$).
  4. Repete até a lista esvaziar. Funciona super rápido.

#### Exercício 2.8 (Médio)
**Resolução:**
- **Prova:** O exercício pede pra assumir que existe uma tarefa $i$ onde todo mundo que conflita com ela forma um clique (um conflito gigante no mesmo momento).
- Se a gente tira esse grupo inteiro (a tarefa $i$ + os conflitantes) e resolve o resto, a gente vai ter uma solução boa pro resto (com cliques $C'$ e compatíveis $I'$). 
- Como a gente tirou o problema, a tarefa $i$ pode ser adicionada em $I'$ sem brigar com ninguém lá. E aquele bolo de conflitantes vira um clique novo. Fim: adicionamos +1 em $I$ e +1 em $C$. A conta fecha.

#### Exercício 2.9 (Fácil)
**Resolução:**
- **Não, não dá a mesma partição.** 
- Imagina três tarefas: A (0 a 2), B (1 a 4), C (3 a 5).
- Se varrer escolhendo a que **termina primeiro**: Ele escolhe A, joga B no lixo. Sobra C. Ficam dois grupos: {A, B} e {C}.
- Se varrer escolhendo a que **começa por último**: Ele escolhe C, joga B no lixo. Sobra A. Ficam dois grupos: {C, B} e {A}. Ou seja, B trocou de grupo.

#### Exercício 2.10 e 2.11 (Médios)
**Resolução:**
- Basicamente, se você tenta agendar uma tarefa e ela não cabe em nenhuma "sala" que já tá aberta, é porque em todas as salas existe uma tarefa rolando agora que bloqueia a nova. 
- Se você tem 5 salas ocupadas, tem 5 tarefas rolando juntas. Adicionando essa nova que foi bloqueada, são 6 tarefas em conflito no mesmo segundo. O número de salas criadas é exatamente o número máximo de conflitos simultâneos que o sistema teve. Não dava pra usar menos salas que isso.

---

### Tema: Codificação de Huffman

#### Exercício 2.12 (Fácil)
**Resolução:**
- **Huffman em Papo Reto:** O algoritmo junta os dois caracteres que aparecem menos e cria um nó "pai" pra eles. Se o nosso alfabeto tem só 2 letras ('A' e 'B'), o algoritmo junta os dois direto num único nó. A perna da esquerda vira '0' e a da direita vira '1'. Cada letra vai gastar 1 bit. Simples e ótimo, você não tem como codificar 2 opções gastando menos que 1 bit (0 ou 1) sem perder a capacidade de distinguir as duas.

---

### Tema: Cobertura e Emparelhamento

#### Exercício 2.13, 2.14, 2.15 e 2.16
**Resolução Resumida (Ideias Gulosas):**
- **2.13:** Como não há restrição entre as linhas, você pega o maior valor absoluto de cada linha de forma totalmente independente. É só fazer um for dentro do outro (linha x coluna) e catar o máximo de cada linha ($O(n \times m)$).
- **2.14:** Mesma coisa, mas com um orçamento de "só posso escolher k linhas". Você acha o maior valor de cada linha, guarda numa lista, ordena do maior pro menor, e escolhe os 'k' primeiros da lista.
- **2.15 (Cobertura na Reta):** Se você quer cobrir pontos com segmentos, a jogada gulosa é começar cobrindo o primeiro ponto desprotegido alinhando o começo do segmento exatamente nele. Assim o segmento se estica o máximo possível pra frente cobrindo tudo que vier na sequência. Repete pro próximo ponto que ficou descoberto.
- **2.16 (Emparelhamento com Restrição s <= c):** Ordena os dois vetores. Tenta encaixar a menor caixa com o menor item. Se o item for grande demais pra caixa, joga a caixa fora e pega a próxima maior. Vai fazendo isso linearmente (dois ponteiros). É super rápido e não precisa de fluxo máximo.

---

### Tema: Partição de Sequências

#### Exercício 2.17 (Difícil)
**Resolução:**
- **O Problema de Rainbow Pairing:** Você tem uma lista ordenada e quer formar pares cuja soma máxima seja a menor possível.
- **A Tática:** Junta o maior com o menor, o segundo maior com o segundo menor... e assim por diante.
- **Por que funciona?** Se você tentar bancar o esperto e juntar o maior cara (Gigante) com um cara do meio, a soma vai dar altíssima. Você precisa "esfriar" o Gigante juntando ele com o menor cara possível (o Anãozinho). Qualquer outra combinação faz o limite estourar.

#### Exercício 2.18 (Regra de Smith)
**Resolução:**
- Tarefas têm "pesos" (importância) e "tempos". Pra não deixar os caras mais importantes esperando muito, você divide o Peso pelo Tempo e ordena do maior pro menor. Se você inverter qualquer par na fila onde o cara de trás tinha um "Peso/Tempo" maior, matematicamente a soma dos tempos de espera vai aumentar e você vai se ferrar. É só ordenar e abraçar.

---

## Capítulo 3: Árvores Geradoras Mínimas (MST)

#### Exercício 3.1 (Médio)
**Resolução:**
- **Argumento do Corte:** Tira uma aresta da MST. A árvore quebra em dois pedaços (um corte). Outra MST qualquer tem que conectar esses dois pedaços de algum jeito. Só pegar a aresta dela que cruza esse mesmo espaço vazio, e colocar no lugar da aresta que você tirou. A árvore fica inteira de novo e o peso continua ótimo.

#### Exercício 3.2 e 3.3
**Resolução:**
- Kruskal insere arestas da mais leve pra mais pesada. Todos os caminhos mínimos de mesmo peso que não formam ciclo vão entrar na árvore. Como ele sempre processa as arestas leves primeiro de forma "cega", não importa a ordem de desempate, o número total de arestas de peso "X" que vão entrar vai ser sempre igual em qualquer árvore mínima.
- Contraexemplo pro 3.3: Nem todo caminho ou pedaço de árvore que parece bom sozinho vai ser bom no final. Se um triângulo tem pesos 1, 1 e 10, e você isola o vértice com a aresta 10, você acha que tá certo. Mas quando olhar o todo, a aresta 10 vai rodar e as arestas 1 vão tomar o lugar dela.

#### Exercício 3.4 (Fácil)
**Resolução:**
- **Unicidade da MST:** Se **todos** os pesos das arestas no grafo forem números diferentes (tipo 1, 2, 3, 4, 5... nenhum empatado), **só existe uma MST possível**.
- Por que? Se existissem duas, a primeira aresta em que elas discordam geraria um ciclo. E nesse ciclo teria uma aresta mais pesada, que a gente arrancaria e melhoraria o custo. Mas como os pesos são diferentes, uma árvore ia ser forçosamente mais leve que a outra. Logo, só a mais leve sobrevive.

#### Exercício 3.5, 3.6 e 3.7
**Resolução (Dicas Gerais):**
- **Prim vs Kruskal:** Prim vai aumentando uma bola pegando o vizinho mais próximo. Kruskal vai pegando as arestas mais leves em qualquer lugar do mapa desde que não fechem um quadrado/ciclo (usando a estrutura DSU/Union-Find para checar).
- O algoritmo funciona e sempre dá a árvore certa porque usa a **Propriedade do Ciclo**: Se uma aresta fecha um ciclo e é a mais pesada e feia do grupo, ela nunca vai servir pra nada na MST, jogue ela fora sem dó. 
- E também a **Propriedade do Corte**: Se você faz um muro separando duas cidades no grafo, a rua mais barata que fura esse muro TÊM que fazer parte da solução mínima. Sem exceções.
