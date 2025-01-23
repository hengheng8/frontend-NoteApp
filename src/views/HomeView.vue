<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Notes</h1>
    <NoteList />
  </div>
</template>

<script lang="ts">
import NoteList from '@/components/NoteList.vue';

export default {
  name: 'HomeView',
  components: {
    NoteList,
  },
};
</script>
