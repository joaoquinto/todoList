# Criando uma todolist para estudar testes

## A crash Course | Vue Test Utils

- Usando o vitest e o @vue/test-utils

### Fazes do teste

- arrange [arranjo]
  - Criação do cenário para o teste
- act [agir]
  - Representação do cenário simulando como o usuário iria interagir com o component ou aplicação
- assert [afirmar]
  - Afirmamos o que queremos que o final da representação retorne ou seja

### Utilizado

> mount: Renderiza o component e retorna um VueWrapper/VueComponent

> expect: Utilizado para criar validações para afirmar uma instrução

> get: Pega um elemento pela informação passada na function

> findAll: retorna um array de DOMWrapper

> trigger: Aciona um DOM event ex:(click, submit, keyup)

> setValue: Insere um valor dentro de um DOM element ex:(input, select)

> classes: retorna um array de classes de um elemet

> toContain: afirma se o valor real está em uma matriz. Também pode verificar se uma string é uma substring de outra string. Se você estiver executando testes em um ambiente semelhante a um navegador, esta afirmação também pode verificar se a classe está contida em uma classList ou se um elemento está dentro de outro

> async/await test: Jest executa os tests de form sincrona e o vue atualiza o DOM de forma asincrona. Então é necessário utilizar o async await em chamadas que vão fazer o DOM ser atualizado

> toBe: informa que o elemento comparado teria que ser o valor requerido na function

> text: Retorna o texto do conteúdo do elemento
