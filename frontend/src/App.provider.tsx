import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react"
import type { ITOCDocument } from "./models"
import { TOCService } from "./services"
import type { IAppAction, IAppContextProps } from "./App.types"

const initialState: IAppContextProps = {
  selectedComponent: null,
  data: [],
  selectedLevel: "",
  handleLevelClick: () => null,
}

enum actions {
  SET_SELECTED_COMPONENT = "@SET_SELECTED_COMPONENT",
  SET_DATA = "@SET_DATA",
  SET_SELECTED_LEVEL = "@SET_SELECTED_LEVEL",
}

const reducer = (
  state: IAppContextProps,
  action: IAppAction,
): IAppContextProps => {
  switch (action.type) {
    case actions.SET_SELECTED_COMPONENT:
      return {
        ...state,
        selectedComponent: action.payload as ITOCDocument,
      }
    case actions.SET_DATA:
      return {
        ...state,
        data: action.payload as ITOCDocument[],
      }
    case actions.SET_SELECTED_LEVEL:
      return {
        ...state,
        selectedLevel: action.payload as string,
      }
    default:
      return state
  }
}

const AppContext = createContext<IAppContextProps | undefined>(undefined)

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleLevelClick = (item: ITOCDocument) => {
    const selectedLevel = item.level === 1 ? `${item.id}` : `${item.parent_id}`
    dispatch({ type: actions.SET_SELECTED_LEVEL, payload: selectedLevel })
    dispatch({ type: actions.SET_SELECTED_COMPONENT, payload: item })
  }

  useEffect(() => {
    const fetchData = async () => {
      const tocService = new TOCService()
      const response = await tocService.getTOCData()
      if (response) {
        dispatch({ type: actions.SET_DATA, payload: response })
        dispatch({ type: actions.SET_SELECTED_COMPONENT, payload: response[0] })
      }
    }

    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ ...state, handleLevelClick }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

export { AppProvider, useAppContext }
