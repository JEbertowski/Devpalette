import React from 'react'
import { useDrop } from 'react-dnd'
import useStore from '../store/useStore'
import DraggableCanvasItem from './DraggableCanvasItem'

const renderComponent = (component, theme, customColors) => {
  const padding = component.padding || 'p-4'

  const fallbackBg =
    theme === 'dark'
      ? 'bg-gray-800 text-white'
      : theme === 'custom'
      ? ''
      : 'bg-white text-black'

  const customStyle =
    theme === 'custom'
      ? {
          backgroundColor: customColors.background,
          color: customColors.text,
        }
      : {}

  switch (component.type) {
    case 'Button':
      return (
        <button
          className={`px-4 py-2 rounded shadow ${component.color || 'bg-blue-500'} text-white`}
          style={customStyle}
        >
          {component.text || 'Click Me'}
        </button>
      )

    case 'Card':
      return (
        <div
          className={`${padding} rounded-lg shadow ${component.color || fallbackBg}`}
          style={customStyle}
        >
          <h3 className="font-bold">{component.title || 'Card Title'}</h3>
          <p className="text-sm">{component.content || 'This is a card component.'}</p>
        </div>
      )

    case 'Navbar':
      return (
        <nav
          className={`w-full ${padding} rounded ${component.color || fallbackBg}`}
          style={customStyle}
        >
          <ul className="flex space-x-4">
            <li>{component.link1 || 'Home'}</li>
            <li>{component.link2 || 'About'}</li>
            <li>{component.link3 || 'Contact'}</li>
          </ul>
        </nav>
      )

    case 'Image':
      return (
        <img
          src={component.src || 'https://via.placeholder.com/150'}
          alt={component.alt || 'Placeholder'}
          className={`${component.width || 'w-32'} ${component.height || 'h-32'} object-cover rounded`}
        />
      )

    case 'Heading':
      const HeadingTag = component.level || 'h1'
      return (
        <HeadingTag
          className={`font-bold ${component.color || 'text-black'} text-2xl`}
          style={customStyle}
        >
          {component.text || 'Heading Text'}
        </HeadingTag>
      )

    case 'Input':
      return (
        <input
          type={component.inputType || 'text'}
          placeholder={component.placeholder || 'Enter text...'}
          value={component.value || ''}
          readOnly
          className={`${component.width || 'w-full'} ${component.padding || 'p-2'} border rounded`}
          style={customStyle}
        />
      )

    case 'List':
      const items = component.items || ['Item 1', 'Item 2']
      const ListTag = component.listType === 'ol' ? 'ol' : 'ul'
      const listStyle = component.listType === 'ol' ? 'list-decimal' : 'list-disc'
      return (
        <ListTag className={`${listStyle} ${component.color || 'text-black'} pl-6 space-y-1`} style={customStyle}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ListTag>
      )

    default:
      return null
  }
}

const Canvas = () => {
  const { components, addComponent, theme, customColors } = useStore()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const canvasBase =
    theme === 'dark'
      ? 'bg-gray-900 text-white'
      : theme === 'custom'
      ? ''
      : 'bg-gray-200 text-black'

  const canvasCustomStyle =
    theme === 'custom'
      ? {
          backgroundColor: customColors.background,
          color: customColors.text,
        }
      : {}

  return (
    <main className={`flex-1 ${canvasBase} p-4 overflow-auto`} style={canvasCustomStyle}>
      <h2 className="text-xl font-bold mb-4">Canvas</h2>
      <div
        ref={drop}
        className={`border-2 border-dashed border-gray-400 h-full rounded p-4 space-y-4 ${
          isOver ? 'bg-green-200' : ''
        }`}
      >
        {components.length === 0 ? (
          <p className="text-center text-gray-500">Drop components here</p>
        ) : (
          components.map((comp, index) => (
            <DraggableCanvasItem key={index} index={index}>
              {renderComponent(comp, theme, customColors)}
            </DraggableCanvasItem>
          ))
        )}
      </div>
    </main>
  )
}

export default Canvas