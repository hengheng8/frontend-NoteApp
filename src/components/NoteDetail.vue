<template>
  <div>
    <h2 class="text-xl font-bold">{{ note?.title }}</h2>
    <p>{{ note?.content }}</p>
    <p class="text-gray-500">Created At: {{ note?.createdAt }}</p>
    <p class="text-gray-500">Updated At: {{ note?.updatedAt }}</p>
    <div class="mt-4">
      <NoteForm v-if="note" :note="note" />
      <button class="mt-4 bg-red-500 text-white p-2" @click="deleteNote">Delete Note</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useNotesStore } from '@/store/notes';
import NoteForm from './NoteForm.vue';

export default defineComponent({
  components: { NoteForm },
  setup() {
    const route = useRoute();
    const notesStore = useNotesStore();
    const noteId = Number(route.params.id);
    const note = computed(() => notesStore.notes.find(n => n.id === noteId));

    const deleteNote = () => {
      notesStore.deleteNote(noteId);
    };

    return {
      note,
      deleteNote,
    };
  },
});
</script>
