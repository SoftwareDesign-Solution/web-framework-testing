import {beforeEach, describe, expect, it, vi} from "vitest";
import axios from "axios";
import type Task from '../../models/Task';
import TaskService from "@/services/TaskService/TaskService";

vi.mock('axios');

describe('TaskService', () => {

    beforeEach(() => {

        vi.resetAllMocks();

    });

    it('mock axios', async () => {

        // Arrange
        const mockedAxios = vi.mocked(axios.get).mockResolvedValue({
            data: [
                {
                    id: 'Aufgabe_1',
                    name: 'Aufgabe 1',
					description: 'Dies ist eine Aufgabenbeschreibung',
                    completed: true
                },
                {
                    id: 'Aufgabe_2',
                    name: 'Aufgabe 2',
					description: 'Dies ist eine Aufgabenbeschreibung',
                    completed: true
                }
            ],
            status: 200,
            statusText: 'OK'
        });

        // Act
        const response = await axios.get<Task[]>('https://localhost:3000/tasks');
        const responseData = response.data;

        // Assert
        expect(responseData.length).toBe(2);
        expect(responseData[0].name).toBe('Aufgabe 1');

    });

    it('TaskService', async () => {

        // Arrange
        /*
        const mockedAxios = vi.mocked(axios.get).mockResolvedValue({
            data: [
                {
                    id: 'Aufgabe_1',
                    name: 'Aufgabe 1',
                    description: 'Dies ist eine Aufgabenbeschreibung',
                    completed: true
                },
                {
                    id: 'Aufgabe_2',
                    name: 'Aufgabe 2',
                    description: 'Dies ist eine Aufgabenbeschreibung',
                    completed: true
                }
            ],
            status: 200,
            statusText: 'OK'
        });
        */

       const taskService: TaskService = new TaskService();

       // Act
       const tasks: Task[] = await taskService.getTasks();

       // Assert
       expect(tasks.length).toBe(5);

    });

});