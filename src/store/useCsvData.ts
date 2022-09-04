import { defineStore } from 'pinia'

interface ICsvDataStore {
  _data: any[]
  _headers: any[]
  rawCsv: string
}

export const useCsvData = defineStore('csvData', {
  state: () =>
    ({
      _data: [],
      _headers: [],
      rawCsv: '',
    } as ICsvDataStore),
  getters: {
    data(state) {
      return state._data
    },
    headers(state) {
      return state._headers
    },
    row(state) {
      return (id:number)=> {
        return state._data.find((x)=> x.id === id);
      }
    }
  },
  actions: {
    setData(data: any[]) {
      this._data = data
    },
    setHeaders(headers: any[]) {
      this._headers = headers
    }
  },
})
