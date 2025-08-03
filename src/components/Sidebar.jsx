import React from 'react'
import { useDrag } from 'react-dnd'

const componentsList = [
  { type: 'Button', name: 'Button' },
  { type: 'Card', name: 'Card' },
  { type: 'Navbar', name: 'Navbar' },
  { type: 'Image', name: 'Image' },
  { type: 'Heading', name: 'Heading' },
  { type: 'Input', name: 'Input' },       // 🆕
  { type: 'List', name: 'List' },         // 🆕
]

const DraggableItem = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type: component.type, name: component.name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`p-2 bg-gray-700 rounded cursor-move mb-2 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {component.name}
    </div>
  )
}

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Components</h2>
      {componentsList.map((component, index) => (
        <DraggableItem key={index} component={component} />
      ))}
    </aside>
  )
}

export default Sidebar
