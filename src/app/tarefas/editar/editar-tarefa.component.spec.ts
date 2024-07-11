import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTarefaComponent, RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
