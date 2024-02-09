import classnames from "classnames"
import type { FC } from "react"
import { useAppContext } from "../../App.provider"
import { usePanelItem } from "./panel.hooks"

const Panel: FC = () => {
  const { selectedComponent, handleLevelClick, data: components } = useAppContext()
  const selectedRef = usePanelItem(selectedComponent);

  return (
    <div className="text-left">
      <ul>
        {components.map((component, index) => (
          <li
            key={index}
            ref={selectedComponent?.id === component.id ? selectedRef : null}
            className={classnames({
              ["text-red-950"]: selectedComponent?.id === component.id,
            })}
            tabIndex={0}
            role="menuitem"
            onClick={() => handleLevelClick(component)}
          >
            <p className="font-bold">{component.name}</p>
            <p>{component.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Panel
