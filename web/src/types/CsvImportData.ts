type CsvImportData = {
  inputName: string
  file: File | null
  rawCsv: string | null
  errors: string[]
}

export { CsvImportData }
