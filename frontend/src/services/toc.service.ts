import axios from "axios"
import type { ITOCData, ITOCDocument } from "../models"

export interface ITOCService {
  getTOCData(): Promise<ITOCDocument[]>
}

export class TOCService implements ITOCService {
  private readonly apiEndpoint: string

  constructor(apiEndpoint: string = "http://localhost:3004") {
    this.apiEndpoint = apiEndpoint
  }

  async getTOCData(): Promise<ITOCDocument[]> {
    try {
      const response = await axios.get(`${this.apiEndpoint}/data`)
      return this.parseResponse(response.data)
    } catch (error) {
      console.error("Error fetching TOC data:", error)
      return []
    }
  }

  private parseResponse(data: ITOCData): ITOCDocument[] {
    // For the ToC, only the components with levels 1 and 2 need to be displayed
    return data?.content?.document.filter(
      item => item.level === 1 || item.level === 2,
    )
  }
}
