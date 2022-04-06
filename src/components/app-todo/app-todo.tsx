import { Component, h, State, Host } from '@stencil/core';
import { TableComponent } from '../app-table/app-table';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class TodoComponent {

  @State() tasks: string[] = []

  handleAdd = (ev: CustomEvent) => {
    this.tasks = [
      ...this.tasks,
      ev.detail
    ]
  }

  componentDidLoad() {
    console.log("Carreguei")
  }

  componentDidUpdate() {
    console.log("Atualizei")
  }

  render() {
    return (
      <Host>
        <app-form onAddTask={this.handleAdd}></app-form>
        <TableComponent>
          <ul>
            {this.tasks.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </TableComponent>
      </Host>

    );
  }

}