import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppTodo {

  render() {
    return (
      <form>
        <input></input>
        <button>Adicionar</button>
      </form>
    );
  }

}
