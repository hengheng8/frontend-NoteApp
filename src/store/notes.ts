import { defineStore } from 'pinia';

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [] as Note[],
  }),
  actions: {
    addNote(title: string, content: string) {
      const now = new Date();
      this.notes.push({
        id: Date.now(),
        title,
        content,
        createdAt: now,
        updatedAt: now,
      });
    },
    updateNote(id: number, title: string, content: string) {
      const note = this.notes.find(note => note.id === id);
      if (note) {
        note.title = title;
        note.content = content;
        note.updatedAt = new Date();
      }
    },
    deleteNote(id: number) {
      this.notes = this.notes.filter(note => note.id !== id);
    },
  },
});
