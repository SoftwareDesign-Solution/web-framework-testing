<script setup lang="ts">
import {defineEmits, ref} from 'vue';
import slug from "@/services/Slug/Slug";
import type Task from "@/models/Task";

const task = ref<{
  name: string,
  description: string
}>({
  name: '',
  description: ''
});

const emit = defineEmits(['saveTask']);

const saveForm = () => {

  const newTask: Task = {
    id: slug(task.value.name), //uuidv4(),
    name: task.value.name,
    description: task.value.description
  };

  console.log(newTask);

  emit('saveTask', newTask);

};

</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    </transition>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">

            <form @submit.prevent="saveForm">

              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Neue Aufgabe</h3>
                  <div class="mt-2">

                    <div class="mt-6">
                      <label for="name" class="block text-sm font-medium text-gray-700">Bezeichnung</label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="name" id="name" v-model="task.name" autocomplete="name" class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      </div>
                    </div>

                    <div class="mt-6">
                      <label for="description" class="block text-sm font-medium text-gray-700">Beschreibung</label>
                      <div class="mt-1">
                        <textarea id="description" name="description" v-model="task.description" rows="3" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
                      </div>
                    </div>

                    <div class="pt-4">
                      <pre class="block w-full">{{ JSON.stringify(task) }}</pre>
                    </div>

                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button type="submit" class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Speichern</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">Abbrechen</button>
              </div>

            </form>

          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>