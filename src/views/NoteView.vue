<template>
  <div class="p-4">
    <NoteDetail :id="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteDetail from '@/components/NoteDetail.vue';
import NoteForm from './NoteForm.vue'; // Adjust the path as needed
export default defineComponent({
  name: 'NoteView',
  components: { NoteDetail },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>
