import { defineStore } from 'pinia'

interface ICsvDataStore {
  _data: any[]
  rawCsv: string
}

export const useCsvData = defineStore('csvData', {
  state: () =>
    ({
      _data: [],
      rawCsv: '',
    } as ICsvDataStore),
  getters: {
    data(state) {
      return state._data
    },
  },
  actions: {
    setData(data: any[]) {
      this._data = data
    },
  },
})
