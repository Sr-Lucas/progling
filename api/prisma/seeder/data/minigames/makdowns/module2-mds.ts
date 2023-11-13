export const module2Mds: string[] = [
  `
As declarações condicionais em JavaScript, incluindo \`if\`, \`else if\` e \`else\`, permitem que você controle o fluxo de execução do seu programa com base em condições lógicas. Elas são fundamentais para tomar decisões e executar diferentes blocos de código com base em diferentes situações. Aqui está uma explicação detalhada de cada parte:

1. **if:**
   - A declaração \`if\` é usada para executar um bloco de código se uma condição especificada for verdadeira (avaliada como \`true\`).
   - Sintaxe:

   \`\`\`javascript
   if (condicao) {
     // código a ser executado se a condição for verdadeira
   }
   \`\`\`

2. **else if:**
   - A declaração \`else if\` é usada em conjunto com \`if\` para testar condições adicionais, caso a condição do \`if\` seja falsa.
   - Você pode ter quantos \`else if\` desejar para testar várias condições em sequência.
   - Sintaxe:

   \`\`\`javascript
   if (condicao1) {
     // código a ser executado se a condição1 for verdadeira
   } else if (condicao2) {
     // código a ser executado se a condição2 for verdadeira
   } else {
     // código a ser executado se nenhuma das condições anteriores for verdadeira
   }
   \`\`\`

3. **else:**
   - A declaração \`else\` é usada como uma alternativa final ao \`if\` e \`else if\`. Ela executa um bloco de código se nenhuma das condições anteriores for verdadeira.
   - Sintaxe:

   \`\`\`javascript
   if (condicao1) {
     // código a ser executado se a condição1 for verdadeira
   } else if (condicao2) {
     // código a ser executado se a condição2 for verdadeira
   } else {
     // código a ser executado se nenhuma das condições anteriores for verdadeira
   }
   \`\`\`

Exemplo de uso das declarações condicionais:

\`\`\`javascript
let idade = 18;

if (idade < 18) {
  console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 65) {
  console.log("Você é um adulto.");
} else {
  console.log("Você é um idoso.");
}
\`\`\`

Neste exemplo, dependendo da idade, uma mensagem diferente será impressa no console. Se a idade for menor que 18, a primeira mensagem será exibida; se a idade estiver entre 18 e 64 anos, a segunda mensagem será exibida; caso contrário, a terceira mensagem será exibida. As declarações condicionais são essenciais para criar lógica flexível em seus programas JavaScript.
`,
  `
Em Python, as estruturas condicionais são usadas para tomar decisões com base em uma condição. As estruturas condicionais mais comuns são \`if\`, \`elif\` (abreviação de "else if") e \`else\`. Elas permitem que você execute diferentes blocos de código com base em se uma condição é verdadeira ou falsa. Aqui está uma explicação das estruturas condicionais em Python e exemplos de uso:

1. **Estrutura \`if\`**:
   A estrutura \`if\` permite executar um bloco de código se uma condição for avaliada como verdadeira.

   \`\`\`python
   idade = 18
   if idade >= 18:
       print("Você é maior de idade.")
   \`\`\`

2. **Estrutura \`if\` e \`else\`**:
   A estrutura \`if\` pode ser acompanhada de um bloco \`else\` para executar um código alternativo quando a condição for falsa.

   \`\`\`python
   idade = 16
   if idade >= 18:
       print("Você é maior de idade.")
   else:
       print("Você é menor de idade.")
   \`\`\`

3. **Estrutura \`if\`, \`elif\` e \`else\`**:
   A estrutura \`if\` pode ser seguida de uma ou mais estruturas \`elif\` (else if) para verificar múltiplas condições. O bloco \`else\` é executado apenas se nenhuma das condições anteriores for verdadeira.

   \`\`\`python
   nota = 75
   if nota >= 90:
       print("Aprovado com distinção.")
   elif nota >= 60:
       print("Aprovado.")
   else:
       print("Reprovado.")
   \`\`\`

4. **Condições múltiplas**:
   Você pode usar operadores lógicos, como \`and\` e \`or\`, para criar condições mais complexas.

   \`\`\`python
   idade = 25
   possui_cartao = True
   if idade >= 18 and possui_cartao:
       print("Você pode comprar bebida alcoólica.")
   else:
       print("Você não pode comprar bebida alcoólica.")
   \`\`\`

Essas são as estruturas condicionais básicas em Python. Elas são fundamentais para controlar o fluxo de um programa, permitindo que você execute diferentes ações com base nas condições especificadas.
`,
];
