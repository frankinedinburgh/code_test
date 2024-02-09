import { Dispatch, SetStateAction } from "react"
import { ITOCDocument } from "./models"

export interface IAppContextProps {
  selectedComponent: ITOCDocument | null
  setSelectedComponent: Dispatch<SetStateAction<ITOCDocument | null>>
  data: ITOCDocument[]
  handleLevelClick: (item: ITOCDocument) => void
  selectedLevel: string
}
