import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import type { ITOCDocument } from "./models"
import { TOCService } from "./services"
import { IAppContextProps } from "./App.types"

const AppContext = createContext<IAppContextProps | undefined>(undefined)

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] =
    useState<ITOCDocument | null>(null)

  const [data, setData] = useState<ITOCDocument[]>([])
  const [selectedLevel, setSelectedLevel] = useState<NonNullable<string>>("")

  const handleLevelClick = (item: ITOCDocument) => {
    setSelectedLevel(item.level === 1 ? `${item.id}` : `${item.parent_id}`);
    setSelectedComponent(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tocService = new TOCService()
      const response = await tocService.getTOCData()
      if (response) {
        setData(response)
        setSelectedComponent(response[0])
      }
    }

    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        selectedComponent,
        setSelectedComponent,
        data,
        handleLevelClick,
        selectedLevel,
      }}
    >
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
