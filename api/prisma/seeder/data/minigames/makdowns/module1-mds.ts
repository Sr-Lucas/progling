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
];
