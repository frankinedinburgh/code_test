import classnames from "classnames"
import React, { useEffect, useRef } from "react"
import type { ITOCDocument } from "@models/toc.model"
import { useAppContext } from "../../App.provider"

interface PanelProps {
  components: ITOCDocument[]
}

const Panel: React.FC<PanelProps> = ({ components }) => {
  const { selectedComponent, handleLevelClick } = useAppContext()
  const selectedRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selectedComponent])

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
