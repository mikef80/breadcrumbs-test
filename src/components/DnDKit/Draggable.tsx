import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Draggable = ({ children, id }: { children: any; id: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
};

export default Draggable;
