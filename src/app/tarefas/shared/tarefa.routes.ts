import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "../listar";
import { CadastrarTarefaComponent } from "../cadastrar";
import { EditarTarefaComponent } from "../editar";

export const tarefasRoutes: Routes = [
    { 
        path: 'tarefas', 
        redirectTo: 'tarefas/listar',
    },
    { 
        path: 'tarefas/listar', 
        title: 'Lista de Tarefas',
        component: ListarTarefaComponent
    },
    { 
        path: 'tarefas/cadastrar', 
        title: 'Cadastro de Tarefa',
        component: CadastrarTarefaComponent
    },
    { 
        path: 'tarefas/editar/:id', 
        title: 'Alteração de Tarefa',
        component: EditarTarefaComponent
    },
]