<template>
  <form @submit.prevent="submitForm">
    <div class="mb-4">
      <label class="block text-gray-700">Title</label>
      <input v-model="form.title" class="w-full p-2 border" required />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700">Content</label>
      <textarea v-model="form.content" class="w-full p-2 border"></textarea>
    </div>
    <button type="submit" class="bg-blue-500 text-white p-2">{{ buttonText }}</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useNotesStore, Note } from '@/store/notes';

export default defineComponent({
  props: {
    note: {
      type: Object as () => Note,
      required: false,
    },
  },
  setup(props) {
    const notesStore = useNotesStore();
    const form = ref({
      title: props.note?.title || '',
      content: props.note?.content || '',
    });
    const buttonText = props.note ? 'Update Note' : 'Add Note';

    const submitForm = () => {
      if (props.note) {
        notesStore.updateNote(props.note.id, form.value.title, form.value.content);
      } else {
        notesStore.addNote(form.value.title, form.value.content);
      }
      form.value = { title: '', content: '' };
    };

    return {
      form,
      submitForm,
      buttonText,
    };
  },
});
</script>
