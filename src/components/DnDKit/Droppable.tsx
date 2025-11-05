import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ children, id }: { children: any; id: string }) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = { color: isOver ? "green" : undefined };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
