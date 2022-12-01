<script setup lang="ts">
import {computed, ref} from 'vue';
import EditTaskModal from './components/EditTaskModal/EditTaskModal.vue';
import TaskItem from './components/TaskItem/TaskItem.vue';
import type Task from "@/models/Task";

const tasks = ref<Task[]>([
  {
    id: 'aufgabe_1',
    name: 'Aufgabe 1',
    description: 'Dies ist eine Aufgabenbeschreibung',
  },
  {
    id: 'aufgabe_2',
    name: 'Aufgabe 2',
    description: 'Dies ist eine Aufgabenbeschreibung',
    completed: true
  }
]);

const showEditTaskModal = ref<boolean>(false);

let tasksOpen = computed(() => tasks.value.filter(task => !task.completed));
let tasksCompleted = computed(() => tasks.value.filter(task => task.completed));

/*
const task: Task = {
  id: 'Aufgabe 1',
  name: 'Aufgabe 1',
  description: 'Dies ist eine Aufgabenbeschreibung'
};
*/

const newTask = () => {
  showEditTaskModal.value = true;
};

const setState = (taskId: any) => {

  tasks.value = tasks.value.map(task => {

    if (task.id == taskId) {

      return {
        ...task,
        completed: !task.completed
      };

    }
    return task;

  });

};

const editTask = (taskId: string) => {
  console.log(taskId);
};

const deleteTask = (taskId: string) => {

  tasks.value = tasks.value.filter(t => (t.id !== taskId));

};

const saveTask = (task: Task) => {
  showEditTaskModal.value = false;
  tasks.value.push(task);
}

</script>

<template>
  <div class="bg-gray-100 overflow-hidden min-h-screen">

    <header class="bg-gray-800 p-8">

      <div class="md:flex md:items-center md:justify-between">
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight app-title">web-framework-testing</h2>
        </div>
      </div>

    </header>

    <main class="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 lg:py-8">

      <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">

        <div class="grid grid-cols-1 gap-4">

          <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 sm:rounded-lg sm:shadow">
            <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Offene Aufgaben</h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <button id="newTask" type="button" class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="newTask">Neue Aufgabe</button>
              </div>
            </div>
          </div>

          <task-item
              v-for="task in tasksOpen"
              :key="task.id"
              :task="task"
              @changeState="setState($event)"
              @editTask="editTask"
              @deleteTask="deleteTask"
          >
          </task-item>

        </div>

        <div class="grid grid-cols-1 gap-4">

          <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 sm:rounded-lg sm:shadow">
            <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Geschlossene Aufgaben</h3>
              </div>
            </div>
          </div>

          <task-item
              v-for="task in tasksCompleted"
              :key="task.id"
              :task="task"
              @changeState="setState($event)"
              @editTask="editTask"
              @deleteTask="deleteTask"
          >
          </task-item>

        </div>

      </div>

    </main>

    <edit-task-modal v-if="showEditTaskModal"
        @saveTask="saveTask"
    ></edit-task-modal>

  </div>
</template>

<style>
</style>
