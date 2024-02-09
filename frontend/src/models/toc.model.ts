export interface ITOC {
  data: ITOCData
}

export interface ITOCData {
  content: ITOCContent
}

export interface ITOCContent {
  document: ITOCDocument[]
}

export interface ITOCDocument {
  id?: string
  name: string
  level: number
  parent_id?: string
  content?: null | string
}
