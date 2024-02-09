import { ITOCDocument } from "./models"

export interface IAppContextProps {
  selectedComponent: ITOCDocument | null
  data: ITOCDocument[]
  handleLevelClick: (item: ITOCDocument) => void
  selectedLevel: string
}

export type IActionCalls =
  | "@SET_SELECTED_COMPONENT"
  | "@SET_DATA"
  | "@SET_SELECTED_LEVEL";

export interface IAppAction {
  type: `${IActionCalls}`,
  payload: ITOCDocument | ITOCDocument[] | string;
}
