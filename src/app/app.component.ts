import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskList:string[] = [];
  newTask:string = '';

  private _taskServices = inject(TaskService);

  NgOnInit(): void{
    this.taskList = this._taskServices.getTasks();
  }

  addTask(){
    this._taskServices.addTask(this.newTask);
    this.newTask = '';
    this.taskList = this._taskServices.getTasks();
  }

  deleteTask(index: number){
    this._taskServices.deleteTask(index);
    this.taskList = this._taskServices.getTasks();
  }
}