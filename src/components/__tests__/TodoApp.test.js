/* Importando funções do jest do vitest */
import { expect, test } from 'vitest'

/* Importando a função que vai renderizar o component */
import { mount } from '@vue/test-utils'
/* Importando o component */
import TodoApp from '@/components/TodoApp.vue'

/* Declarando um bloco de test */
test('renders a todo', () => {
  /* Montando o component */
  const wrapper = mount(TodoApp)

  /* Pegando um item do todo */
  const todo = wrapper.get('[data-test="todo"]')

  /*
   * Verifica se o valor do todo bate com as condições
   * esperadas para o component estar funcionando
   * corretamente
   */
  expect(todo.text()).toBe('Learn Vue.js 3')
})

/* 

  * Obs: Jest executa os tests de form sincrona e
  *  o vue atualiza o DOM de forma asincrona
  * Então é necessário utilizar o async await em chamadas que vão fazer o DOM ser atualizado

*/
test('creates a todo', async () => {
  const wrapper = mount(TodoApp)

  /*
   * findAll: retorna um array de DOMWrapper
   * toHaveLength: verifica se um objeto tem a propriedade length e se o número dela bate com o passado na função
   * setValue: insere um valor no item requerido
   * trigger: aciona uma ação requerida
   */
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

  await wrapper.get('[data-test="new-todo"]').setValue('New todo')
  await wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
})

test('completes a todo', async () => {
  const wrapper = mount(TodoApp)

  await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

  /*
   * classes: retorna um array de classes de um elemet
   * toContain: afirma se o valor real está em uma matriz.
   * Também pode verificar se uma string é uma substring de outra string.
   * Se você estiver executando testes em um ambiente semelhante a um navegador,
   * esta afirmação também pode verificar se a classe está contida em uma classList ou se um elemento está dentro de outro
   *
   */

  expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
})
