import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private localStorageKey = 'taskList';

  getTasks(): string[] {
    try {
      const tasks = JSON.parse(localStorage.getItem(this.localStorageKey) as string);
      return Array.isArray(tasks) ? tasks : [];
    } catch (e) {
      console.error('Error parsing tasks from localStorage', e);
      return [];
    }
  }

  addTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  deleteTask(index: number) {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}