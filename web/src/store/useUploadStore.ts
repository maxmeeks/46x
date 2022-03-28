import { defineStore } from 'pinia'

export const useUploadStore = defineStore('uploadData', {
  state: () => ({
    data: [],
    rawCsv: '',
  }),
  getters: {
    data(state) {
      return state.data
    },
  },
  actions: {
    setData(data) {
      this.data = data
    },
  },
})
