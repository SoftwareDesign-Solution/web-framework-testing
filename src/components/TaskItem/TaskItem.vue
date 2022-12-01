<script setup lang="ts">
import {
  defineEmits,
  defineProps,
  ref
} from 'vue';
import type Task from "@/models/Task";

const props = defineProps<{
  task: Task
}>();

const emit = defineEmits(['changeState', 'editTask', 'deleteTask']);

const open = ref<boolean>(false);

const editTask = (taskId: string) => {
  open.value = false;
  emit('editTask', taskId);
};

const deleteTask = (taskId: string) => {
  open.value = false;
  emit('deleteTask', taskId);
};
</script>

<template>
  <div class="overflow-hidden bg-white sm:rounded-lg sm:shadow" :id="props.task.id">

    <div class="bg-white px-4 py-5 sm:px-6 border-b border-gray-200">

      <div class="flex space-x-3">

        <div class="min-w-0 flex-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900 taskName" @click="emit('changeState', props.task.id)">{{ props.task.name }}</h3>
        </div>

        <div class="flex flex-shrink-0 self-center z-50">
          <div class="relative inline-block text-left">
            <div>
              <button @click="open = !open" type="button" class="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600 cursor-pointer menu-options" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open options</span>
                <!-- Heroicon name: mini/ellipsis-vertical -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <transition
                enter-active-class="transition ease-out duration-100"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
              <div v-show="open" class="absolute z-30 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a @click="editTask(props.task.id)" class="text-gray-700 flex px-4 py-2 text-sm cursor-pointer editTask" role="menuitem" tabindex="-1" id="menu-0-item-0">
                    <!-- Heroicon name: mini/star -->
                    <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                    </svg>
                    <span>Aufgabe bearbeiten</span>
                  </a>
                  <a @click="deleteTask(props.task.id)" class="text-gray-700 flex px-4 py-2 text-sm cursor-pointer deleteTask" role="menuitem" tabindex="-1" id="menu-0-item-1">
                    <!-- Heroicon name: mini/code-bracket -->
                    <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <span>Aufgabe löschen</span>
                  </a>
                  <!--
                  <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2">
                    !-- Heroicon name: mini/flag --
                    <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                    </svg>
                    <span>Report content</span>
                  </a>
                  -->
                </div>
              </div>
            </transition>
          </div>
        </div>

      </div>

    </div>

    <div class="px-4 mt-5 pb-5 sm:p-6 sm:pt-0">
      <p>{{ props.task.description }}</p>
    </div>
  </div>
</template>

<style>

</style>