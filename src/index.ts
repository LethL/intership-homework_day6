const BASE_URl = 'https://intership-liga.ru';
let randomTask: number;

(function (): number {
  return (randomTask = Math.ceil(Math.random() * 90));
})();

class TaskRequest {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  getRequestOptions(method: string): RequestInit {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      method: method,
    };
  }
}

class getAllTasksRequest extends TaskRequest {
  public async getAllTasks(): Promise<Response | void> {
    const options: RequestInit = this.getRequestOptions('GET');
    const response = await fetch(`${this.url}/tasks`, options);
    if (response.ok) {
      const responseBody = <Array<Task>>await response.json();
      console.log(responseBody);
      return Promise.resolve();
    } else {
      console.log(`Ошибка`);
      return;
    }
  }
}

class createTaskRequest extends TaskRequest {
  public async createTask(): Promise<Response | void> {
    const options: RequestInit = this.getRequestOptions('POST');
    options.body = JSON.stringify({
      name: 'ts name',
      info: 'ts info',
      isImportant: false,
    });
    const response = await fetch(`${this.url}/tasks`, options);
    if (response.ok) {
      const responseBody = <TaskId>await response.json();
      console.log(responseBody);
      return Promise.resolve();
    } else {
      console.log(`Ошибка`);
      return;
    }
  }
}

class getTaskRequest extends TaskRequest {
  public async getTask(): Promise<Response | void> {
    const options: RequestInit = this.getRequestOptions('GET');
    const response = await fetch(`${this.url}/tasks/${randomTask}`, options);
    if (response.ok) {
      const responseBody = <Task>await response.json();
      console.log(responseBody);
      return Promise.resolve();
    } else {
      console.log(`таск ид: ${randomTask} не найден`);
      return;
    }
  }
}

class updateTaskRequest extends TaskRequest {
  public async updateTask(): Promise<Response | void> {
    const options: RequestInit = this.getRequestOptions('PATCH');
    options.body = JSON.stringify({
      name: 'ts req',
      info: 'task patched by ts req',
      isImportant: false,
    });
    const response = await fetch(`${this.url}/tasks/${randomTask - 1}`, options);
    if (response.ok) {
      const responseBody = <Task>await response.json();
      console.log(responseBody);
      return Promise.resolve();
    } else {
      console.log(`таск ид: ${randomTask - 1} не найден`);
      return;
    }
  }
}

class deleteTaskRequest extends TaskRequest {
  public async deleteTask(): Promise<Response | void> {
    const options: RequestInit = this.getRequestOptions('DELETE');
    const response = await fetch(`${this.url}/tasks/${randomTask + 1}`, options);
    if (response.ok) {
      console.log(`таск ид: ${randomTask + 1} удален`);
      return Promise.resolve();
    } else {
      console.log(`таск ид: ${randomTask + 1} не найден`);
      return;
    }
  }
}

interface Task {
  id: number;
  name: string;
  info: string;
  isimportant: boolean;
}

interface TaskId {
  id: number;
}

const createTask = new createTaskRequest(BASE_URl);
createTask.createTask();

const getTask = new getTaskRequest(BASE_URl);
getTask.getTask();

const updateTask = new updateTaskRequest(BASE_URl);
updateTask.updateTask();

const deleteTask = new deleteTaskRequest(BASE_URl);
deleteTask.deleteTask();

const getAllTasks = new getAllTasksRequest(BASE_URl);
getAllTasks.getAllTasks();
