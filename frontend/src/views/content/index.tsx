import React from "react"
import { IContentViewProps } from "./content.types"

const ContentView: React.FC<IContentViewProps> = ({ selectedComponent }) => {
  return (
    <div className="text-left">
      <h2>Content View</h2>
      {selectedComponent ? (
        <div>
          <h3 className="font-bold">{selectedComponent.name}</h3>
          <p>{selectedComponent.content}</p>
        </div>
      ) : (
        <p>No component selected</p>
      )}
    </div>
  )
}

export default ContentView
