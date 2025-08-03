import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import useStore from '../store/useStore'

const DraggableCanvasItem = ({ index, children }) => {
  const { moveComponent, selectComponent, selectedComponentIndex } = useStore()

  const [{ isDragging }, dragRef] = useDrag({
    type: 'canvas-component',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'canvas-component',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveComponent(draggedItem.index, index)
        draggedItem.index = index
      }
    },
  })

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      onClick={() => selectComponent(index)}
      className={`p-2 rounded cursor-move ${
        selectedComponentIndex === index ? 'ring-2 ring-blue-400' : ''
      } ${isDragging ? 'opacity-50' : ''}`}
    >
      {children}
    </div>
  )
}

export default DraggableCanvasItem
