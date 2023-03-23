"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URl = 'https://intership-liga.ru';
let randomTask;
(function () {
    return (randomTask = Math.ceil(Math.random() * 90));
})();
class TaskRequest {
    constructor(url) {
        this.url = url;
    }
    getRequestOptions(method) {
        return {
            headers: {
                'Content-Type': 'application/json',
            },
            method: method,
        };
    }
}
class getAllTasksRequest extends TaskRequest {
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getRequestOptions('GET');
            const response = yield fetch(`${this.url}/tasks`, options);
            if (response.ok) {
                const responseBody = yield response.json();
                console.log(responseBody);
                return Promise.resolve();
            }
            else {
                console.log(`Ошибка`);
                return;
            }
        });
    }
}
class createTaskRequest extends TaskRequest {
    createTask() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getRequestOptions('POST');
            options.body = JSON.stringify({
                name: 'ts name',
                info: 'ts info',
                isImportant: false,
            });
            const response = yield fetch(`${this.url}/tasks`, options);
            if (response.ok) {
                const responseBody = yield response.json();
                console.log(responseBody);
                return Promise.resolve();
            }
            else {
                console.log(`Ошибка`);
                return;
            }
        });
    }
}
class getTaskRequest extends TaskRequest {
    getTask() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getRequestOptions('GET');
            const response = yield fetch(`${this.url}/tasks/${randomTask}`, options);
            if (response.ok) {
                const responseBody = yield response.json();
                console.log(responseBody);
                return Promise.resolve();
            }
            else {
                console.log(`таск ид: ${randomTask} не найден`);
                return;
            }
        });
    }
}
class updateTaskRequest extends TaskRequest {
    updateTask() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getRequestOptions('PATCH');
            options.body = JSON.stringify({
                name: 'ts req',
                info: 'task patched by ts req',
                isImportant: false,
            });
            const response = yield fetch(`${this.url}/tasks/${randomTask - 1}`, options);
            if (response.ok) {
                const responseBody = yield response.json();
                console.log(responseBody);
                return Promise.resolve();
            }
            else {
                console.log(`таск ид: ${randomTask - 1} не найден`);
                return;
            }
        });
    }
}
class deleteTaskRequest extends TaskRequest {
    deleteTask() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getRequestOptions('DELETE');
            const response = yield fetch(`${this.url}/tasks/${randomTask + 1}`, options);
            if (response.ok) {
                console.log(`таск ид: ${randomTask + 1} удален`);
                return Promise.resolve();
            }
            else {
                console.log(`таск ид: ${randomTask + 1} не найден`);
                return;
            }
        });
    }
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
//# sourceMappingURL=index.js.map