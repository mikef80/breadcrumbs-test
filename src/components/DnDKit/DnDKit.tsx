import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const DnDKit = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable id='draggable'>Drag Me</Draggable>;

  const handleDragEnd = (e) => {
    const { over } = e;
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : "Drop here"}
        </Droppable>
      ))}
    </DndContext>
  );
};

export default DnDKit;
