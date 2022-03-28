import { defineStore } from 'pinia'

export const useUploadStore = defineStore('uploadData', {
  state: () => ({
    _data: [],
    rawCsv: '',
  }),
  getters: {
    data(state) {
      return state._data
    },
  },
  actions: {
    setData(data) {
      this._data = data
    },
  },
})
