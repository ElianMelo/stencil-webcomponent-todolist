import { Component, h, State, Host } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class TodoComponent {

  @State() task: string = ''
  @State() tasks: string[] = []

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    if (this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  handleInput = (ev: Event) => {
    const field = ev.target as HTMLInputElement
    this.task = field.value;

  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmit}>
          <input
            onInput={this.handleInput}
            value={this.task}
          ></input>
          <button>Adicionar</button>
        </form>
        <ul>
          {this.tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </Host>

    );
  }

}