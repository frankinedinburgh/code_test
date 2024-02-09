import classnames from "classnames"
import type { FC } from "react"
import { useAppContext } from "../../App.provider.tsx"
import { TOCCSS } from "./css.ts"

const TableOfContents: FC = () => {
  const { selectedComponent, data, handleLevelClick, selectedLevel } =
    useAppContext()

  return (
    <div className={TOCCSS.Container}>
      {data.map(item => (
        <div
          key={`${item.parent_id}_${item.id}`}
          className={classnames({
            ["text-red-950"]: selectedComponent?.id === item.id,
          })}
        >
          {item.level === 1 && (
            <div
              role="menuitem"
              tabIndex={0}
              className={TOCCSS.ListItem}
              onClick={() => handleLevelClick(item)}
            >
              <span className={TOCCSS.LevelOne}>+</span>
              {item.name}
            </div>
          )}

          {item.level === 2 && item.parent_id === selectedLevel && (
            <div
              role="menuitem"
              tabIndex={0}
              className={TOCCSS.LevelTwo}
              onClick={() => handleLevelClick(item)}
            >
              - {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TableOfContents
