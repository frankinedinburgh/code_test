import { ITOCDocument } from "@models/toc.model";
import { useEffect, useRef } from "react";

export const usePanelItem = (selectedComponent: ITOCDocument | null) => {
    const selectedRef = useRef<HTMLLIElement>(null);
  
    useEffect(() => {
      if (selectedRef.current) {
        selectedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, [selectedComponent]);
  
    return selectedRef;
  };