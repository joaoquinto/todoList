"use strict";

var _vitest = require("vitest");

var _testUtils = require("@vue/test-utils");

var _TodoApp = _interopRequireDefault(require("@/components/TodoApp.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Importando funções do jest do vitest */

/* Declarando um bloco de test */
(0, _vitest.test)('renders a todo', function () {
  /* Montando o component */
  var wrapper = (0, _testUtils.mount)(_TodoApp["default"]);
  /* Pegando um item do todo */

  var todo = wrapper.get('[data-test="todo"]');
  /*
   * Verifica se o valor do todo bate com as condições
   * esperadas para o component estar funcionando
   * corretamente
   */

  (0, _vitest.expect)(todo.text()).toBe('Learn Vue.js 3');
});
/* 

  * Obs: Jest executa os tests de form sincrona e
  *  o vue atualiza o DOM de forma asincrona
  * Então é necessário utilizar o async await em chamadas que vão fazer o DOM ser atualizado

*/

(0, _vitest.test)('creates a todo', function _callee() {
  var wrapper;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          wrapper = (0, _testUtils.mount)(_TodoApp["default"]);
          /*
           * findAll: retorna um array de DOMWrapper
           * toHaveLength: verifica se um objeto tem a propriedade length e se o número dela bate com o passado na função
           * setValue: insere um valor no item requerido
           * trigger: aciona uma ação requerida
           */

          (0, _vitest.expect)(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
          _context.next = 4;
          return regeneratorRuntime.awrap(wrapper.get('[data-test="new-todo"]').setValue('New todo'));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(wrapper.get('[data-test="form"]').trigger('submit'));

        case 6:
          (0, _vitest.expect)(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
(0, _vitest.test)('completes a todo', function _callee2() {
  var wrapper;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          wrapper = (0, _testUtils.mount)(_TodoApp["default"]);
          _context2.next = 3;
          return regeneratorRuntime.awrap(wrapper.get('[data-test="todo-checkbox"]').setValue(true));

        case 3:
          /*
           * classes: retorna um array de classes de um elemet
           * toContain: afirma se o valor real está em uma matriz.
           * Também pode verificar se uma string é uma substring de outra string.
           * Se você estiver executando testes em um ambiente semelhante a um navegador,
           * esta afirmação também pode verificar se a classe está contida em uma classList ou se um elemento está dentro de outro
           *
           */
          (0, _vitest.expect)(wrapper.get('[data-test="todo"]').classes()).toContain('completed');

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});