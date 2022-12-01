import type Task from "@/models/Task";
import axios from "axios";

export default class TaskService {

    public async getTasks(): Promise<Task[]> {
        const response = await axios.get<Task[]>('http://localhost:3000/tasks');
        return response.data;
    }

    public async addTask(task: Task) {
        await axios.post('http://localhost:3000/tasks', task);
    }

    public async deleteTask(taskId: string) {
        await axios.delete(`http://localhost:3000/tasks/${taskId}`)
    }
}