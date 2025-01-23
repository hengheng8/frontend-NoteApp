<template>
  <div>
    <div class="mb-4">
      <NoteForm />
    </div>
    <ul>
      <li
        v-for="note in notes"
        :key="note.id"
        class="border-b p-2 flex justify-between items-center"
      >
        <div>
          <router-link :to="'/note/' + note.id" class="text-blue-500">
            {{ note.title }}
          </router-link>
          <span class="text-gray-500 ml-2">{{ note.createdAt }}</span>
        </div>
        <div class="flex space-x-4">
          <router-link :to="'/note/' + note.id">
            <svg
              class="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </router-link>
          <button @click="deleteNote(note.id)">
            <svg
              class="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useNotesStore } from '@/store/notes';
import NoteForm from './NoteForm.vue';

export default defineComponent({
  components: { NoteForm },
  setup() {
    const notesStore = useNotesStore();

    // Use a computed property for reactive notes
    const notes = computed(() => notesStore.notes);

    const deleteNote = (id: number) => {
      notesStore.deleteNote(id); // Delete the note from the store
    };

    return {
      notes,
      deleteNote,
    };
  },
});
</script>
