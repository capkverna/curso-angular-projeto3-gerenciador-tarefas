import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css',
  providers: [ TarefaService ]
})
export class EditarTarefaComponent implements OnInit {
  
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa = new Tarefa();

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id) || new Tarefa();
  }
 
  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
