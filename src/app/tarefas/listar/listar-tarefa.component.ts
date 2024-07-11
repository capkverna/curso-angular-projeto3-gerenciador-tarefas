import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaConcluidaDirective } from '../shared/tarefa-concluida.directive';

@Component({
  selector: 'app-listar-tarefa',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterLink, TarefaConcluidaDirective ],
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css',
  providers: [ TarefaService ]
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome +'"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
