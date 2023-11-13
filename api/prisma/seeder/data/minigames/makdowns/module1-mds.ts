export const module1Mds: string[] = [
  `
# JavaScript

JavaScript é uma linguagem de programação de alto nível amplamente utilizada para desenvolvimento web. Criada inicialmente para tornar as páginas da web interativas, a linguagem evoluiu ao longo dos anos e agora é usada em uma variedade de contextos, incluindo desenvolvimento de aplicativos móveis e servidores.

## Características Principais:

- **Linguagem Interpretada:** JavaScript é uma linguagem interpretada, o que significa que o código fonte é executado diretamente no navegador do usuário ou em um ambiente de servidor, sem a necessidade de compilação prévia.

- **Orientada a Eventos:** JavaScript é altamente orientada a eventos, permitindo que os desenvolvedores respondam a ações do usuário, como cliques e movimentos do mouse, de forma eficaz.

- **Tipagem Fraca:** JavaScript é uma linguagem de tipagem fraca, o que significa que as variáveis não têm tipos de dados estritos e podem mudar de tipo durante a execução do programa.

- **Multiplataforma:** JavaScript é executado em todos os principais navegadores da web, tornando-o uma escolha sólida para o desenvolvimento front-end.

## Sintaxe Básica:

\`\`\`javascript
// Declaração de variáveis
let nome = "João";
const idade = 30;

// Função simples
function saudacao() {
  console.log("Olá, mundo!");
}

// Estrutura condicional
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Estrutura de repetição
for (let i = 0; i < 5; i++) {
  console.log("Iteração " + i);
}
\`\`\`

## Ecossistema JavaScript:

- **Node.js:** Ambiente de tempo de execução que permite a execução de JavaScript no servidor.

- **Bibliotecas e Frameworks:** Uma ampla variedade de bibliotecas (como React e Angular) e frameworks (como Express) estão disponíveis para acelerar o desenvolvimento.

- **NPM (Node Package Manager):** Ferramenta para gerenciar pacotes e dependências de projetos JavaScript.

JavaScript é uma linguagem versátil e poderosa que desempenha um papel fundamental no desenvolvimento web e em muitos outros domínios, permitindo a criação de aplicativos dinâmicos e interativos.
`,
  `
# Variáveis e Constantes em JavaScript

Variáveis e constantes são elementos fundamentais em JavaScript para armazenar e manipular dados. Eles desempenham um papel crucial na criação de programas dinâmicos e interativos. Vamos entender as diferenças entre eles:

## Variáveis

As variáveis em JavaScript são usadas para armazenar dados que podem ser alterados durante a execução do programa. Você pode declarar uma variável usando as palavras-chave *let* ou *var* (embora *let* seja mais recomendado devido a escopo mais restrito). Aqui está um exemplo:

\`\`\`javascript
let nome = "Maria";
let idade = 25;

nome = "João"; // Valor da variável pode ser atualizado
\`\`\`

## Constantes

As constantes, declaradas com a palavra-chave *const*, são usadas para armazenar valores que não devem ser alterados após a atribuição inicial. Tentar reatribuir um valor a uma constante resultará em um erro. Aqui está um exemplo:

\`\`\`javascript
const pi = 3.14159;
const url = "https://www.exemplo.com";

// Tentar reatribuir um valor a uma constante causará um erro
// pi = 3.14; // Isso resultará em um erro
\`\`\`

## Boas Práticas

- Use variáveis quando precisar armazenar dados que podem mudar ao longo do tempo.

- Use constantes quando tiver valores que não devem ser alterados durante a execução do programa.

- Dê nomes descritivos às suas variáveis e constantes para tornar o código mais legível e compreensível.

- Evite o uso excessivo de variáveis globais, pois elas podem causar problemas de escopo.

Variáveis e constantes desempenham papéis importantes na programação JavaScript, permitindo que você armazene e manipule dados de maneira eficaz, tornando seu código mais flexível e robusto.
`,
  `
A diferença principal entre \`let\` e \`var\` em JavaScript está relacionada ao escopo das variáveis:

1. **Escopo de Bloco:**
   - \`let\` possui escopo de bloco, o que significa que a variável declarada com \`let\` é visível apenas dentro do bloco (um par de chaves \`{ }\`) em que foi declarada.
   - Isso ajuda a evitar vazamentos de variáveis e é mais previsível em termos de escopo.
   - Exemplo:

   \`\`\`javascript
   if (true) {
     let x = 10;
   }
   console.log(x); // Isso resultará em um erro, pois x não é acessível aqui
   \`\`\`

2. **Escopo de Função:**
   - \`var\` possui escopo de função ou global (se não estiver em uma função), o que significa que a variável declarada com \`var\` é visível em toda a função em que foi declarada ou em todo o escopo global.
   - Isso pode levar a problemas de vazamento de variáveis e comportamento inesperado em blocos menores.
   - Exemplo:

   \`\`\`javascript
   if (true) {
     var y = 20;
   }
   console.log(y); // Isso funcionará e imprimirá 20, porque y é acessível globalmente
   \`\`\`

Além disso, quando você declara uma variável com \`let\`, ela não é inicializada automaticamente com \`undefined\`, ao contrário das variáveis declaradas com \`var\`, que são inicializadas com \`undefined\`. Isso pode fazer com que variáveis \`let\` não inicializadas gerem um erro ao serem acessadas antes de serem definidas.

Em geral, é recomendável usar \`let\` em vez de \`var\`, pois o escopo de bloco proporcionado por \`let\` é mais seguro e alinha-se melhor com as melhores práticas de programação moderna. O uso de \`var\` está se tornando menos comum em código JavaScript atual.
`,
  `
  # Python

Python é uma linguagem de programação de alto nível amplamente utilizada em diversos campos, incluindo desenvolvimento web, análise de dados, automação e inteligência artificial. Sua simplicidade e legibilidade tornam Python uma escolha popular entre programadores de todos os níveis de experiência.

## Características Principais:

- **Linguagem Interpretada:** Python é uma linguagem interpretada, o que significa que o código fonte é executado linha a linha, sem a necessidade de compilação prévia.

- **Tipagem Dinâmica:** Python é uma linguagem de tipagem dinâmica, o que significa que as variáveis podem mudar de tipo durante a execução do programa.

- **Orientação a Objetos:** Python suporta programação orientada a objetos, permitindo a criação de classes e objetos para modelar dados e funcionalidades.

- **Multiplataforma:** Python é executado em várias plataformas, incluindo Windows, macOS e Linux, tornando-o uma escolha versátil para desenvolvimento.

## Sintaxe Básica:

\`\`\`python
# Declaração de variáveis
nome = "Maria"
idade = 25

# Função simples
def saudacao():
    print("Olá, mundo!")

# Estrutura condicional
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")

# Estrutura de repetição
for i in range(5):
    print("Iteração", i)
    \`\`\`

# Ecossistema Python:
* Bibliotecas e Frameworks: Python possui uma vasta coleção de bibliotecas, como NumPy e Pandas para análise de dados, e frameworks como Django e Flask para desenvolvimento web.
* Jupyter Notebook: Uma ferramenta popular para desenvolvimento interativo e visualização de dados.
* Comunidade Ativa: A comunidade Python é muito ativa e oferece suporte e recursos abundantes para programadores.
* Python é uma linguagem poderosa e versátil, adequada para uma ampla gama de aplicações, desde desenvolvimento web até inteligência artificial. É uma linguagem de fácil aprendizado e é amplamente utilizada em todo o mundo.
`,
  `
  # Variáveis e Constantes em Python

Python é uma linguagem de programação de alto nível que permite o armazenamento e manipulação de dados por meio de variáveis e constantes. Variáveis são usadas para armazenar informações que podem ser modificadas durante a execução de um programa, enquanto as constantes são usadas para representar valores imutáveis. Vamos explorar esses conceitos em detalhes.

## Variáveis em Python

Uma **variável** é um espaço de memória usado para armazenar dados. Em Python, declarar uma variável é simples. Aqui estão as principais características das variáveis em Python:

- **Declaração de Variáveis:** Para declarar uma variável em Python, você atribui um valor a um nome. Por exemplo:
  \`\`\`python
  nome = "Alice"
  idade = 30
  saldo_conta = 1000.50
  \`\`\`

Tipos de Dados: As variáveis em Python podem armazenar diferentes tipos de dados, como strings, números inteiros, números de ponto flutuante, booleanos, listas, dicionários e outros tipos complexos.

Nomeação de Variáveis: Os nomes de variáveis devem começar com uma letra ou sublinhado (_), seguido de letras, números ou sublinhados. Não podem começar com números ou conter espaços.

Dinamicamente Tipada: Python é uma linguagem de tipagem dinâmica, o que significa que o tipo de dado associado a uma variável pode mudar durante a execução do programa.

Escopo de Variáveis: Variáveis podem ter escopo local (limitadas a uma função ou bloco de código) ou escopo global (acessíveis em todo o programa).
  
## Constantes em Python

Em Python, não existem constantes no sentido estrito, como em algumas outras linguagens de programação onde você pode definir uma variável como constante e ela não pode ser modificada depois de ter sido atribuída um valor. Em Python, todas as variáveis podem ser reatribuídas com novos valores.

No entanto, é uma convenção em Python usar letras maiúsculas para nomear variáveis que não devem ser alteradas. Isso serve como um sinal para outros programadores de que a variável deve ser tratada como uma constante e não ser modificada ao longo do programa. Por exemplo:

\`\`\`python
PI = 3.14159
GRAVIDADE = 9.81
\`\`\`

Embora seja possível reatribuir um novo valor a essas variáveis, a convenção sugere que elas sejam tratadas como constantes. Lembre-se de que essa convenção é uma orientação e não uma restrição imposta pelo Python, o que significa que o interpretador Python não impedirá a reatribuição de valores a essas variáveis.
`,
];
