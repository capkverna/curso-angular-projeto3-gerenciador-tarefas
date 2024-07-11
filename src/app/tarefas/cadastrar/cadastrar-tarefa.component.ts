import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tarefa, TarefaService } from '../shared';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule, RouterLink ],
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css',
  providers: [ TarefaService ]
})
export class CadastrarTarefaComponent implements OnInit{

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
