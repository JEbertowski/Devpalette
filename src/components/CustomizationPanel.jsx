import React from 'react'
import useStore from '../store/useStore'

const CustomizationPanel = () => {
  const {
    components,
    selectedComponentIndex,
    updateComponent,
    removeComponent
  } = useStore()

  if (selectedComponentIndex === null) {
    return (
      <aside className="w-64 bg-gray-100 p-4 border-l">
        <p className="text-gray-500">Select a component</p>
      </aside>
    )
  }

  const selected = components[selectedComponentIndex]

  return (
    <aside className="w-64 bg-gray-100 p-4 border-l space-y-4">
      <h2 className="text-xl font-bold">Customize</h2>

      {/* Common Fields */}
      {'name' in selected && (
        <input
          type="text"
          placeholder="Component Label"
          className="w-full p-2 border rounded"
          value={selected.name || ''}
          onChange={(e) =>
            updateComponent(selectedComponentIndex, { name: e.target.value })
          }
        />
      )}

      {'color' in selected && (
        <input
          type="text"
          placeholder="Tailwind color class"
          className="w-full p-2 border rounded"
          value={selected.color || ''}
          onChange={(e) =>
            updateComponent(selectedComponentIndex, { color: e.target.value })
          }
        />
      )}

      {'padding' in selected && (
        <input
          type="text"
          placeholder="Tailwind padding class (e.g., p-4)"
          className="w-full p-2 border rounded"
          value={selected.padding || ''}
          onChange={(e) =>
            updateComponent(selectedComponentIndex, { padding: e.target.value })
          }
        />
      )}

      {/* Button */}
      {selected.type === 'Button' && (
        <input
          type="text"
          placeholder="Button text"
          className="w-full p-2 border rounded"
          value={selected.text || ''}
          onChange={(e) =>
            updateComponent(selectedComponentIndex, { text: e.target.value })
          }
        />
      )}

      {/* Card */}
      {selected.type === 'Card' && (
        <>
          <input
            type="text"
            placeholder="Card Title"
            className="w-full p-2 border rounded"
            value={selected.title || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { title: e.target.value })
            }
          />
          <textarea
            placeholder="Card Content"
            className="w-full p-2 border rounded"
            value={selected.content || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { content: e.target.value })
            }
          />
        </>
      )}

      {/* Navbar */}
      {selected.type === 'Navbar' && (
        <>
          <input
            type="text"
            placeholder="Link 1"
            className="w-full p-2 border rounded"
            value={selected.link1 || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { link1: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Link 2"
            className="w-full p-2 border rounded"
            value={selected.link2 || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { link2: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Link 3"
            className="w-full p-2 border rounded"
            value={selected.link3 || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { link3: e.target.value })
            }
          />
        </>
      )}

      {/* Image */}
      {selected.type === 'Image' && (
        <>
          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            value={selected.src || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { src: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Alt text"
            className="w-full p-2 border rounded"
            value={selected.alt || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { alt: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Width class (e.g., w-32)"
            className="w-full p-2 border rounded"
            value={selected.width || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { width: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Height class (e.g., h-32)"
            className="w-full p-2 border rounded"
            value={selected.height || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { height: e.target.value })
            }
          />
        </>
      )}

      {/* Heading */}
      {selected.type === 'Heading' && (
        <>
          <input
            type="text"
            placeholder="Heading text"
            className="w-full p-2 border rounded"
            value={selected.text || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { text: e.target.value })
            }
          />
          <select
            className="w-full p-2 border rounded"
            value={selected.level || 'h1'}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { level: e.target.value })
            }
          >
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h4">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6</option>
          </select>
        </>
      )}

      {/* Input */}
      {selected.type === 'Input' && (
        <>
          <input
            type="text"
            placeholder="Placeholder text"
            className="w-full p-2 border rounded"
            value={selected.placeholder || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { placeholder: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Default value"
            className="w-full p-2 border rounded"
            value={selected.value || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { value: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Input type (e.g., text, email)"
            className="w-full p-2 border rounded"
            value={selected.inputType || 'text'}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { inputType: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Width class (e.g., w-full)"
            className="w-full p-2 border rounded"
            value={selected.width || ''}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { width: e.target.value })
            }
          />
        </>
      )}

      {/* List */}
      {selected.type === 'List' && (
        <>
          <textarea
            placeholder="List items (one per line)"
            className="w-full p-2 border rounded"
            value={(selected.items || []).join('\n')}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, {
                items: e.target.value.split('\n'),
              })
            }
          />
          <select
            className="w-full p-2 border rounded"
            value={selected.listType || 'ul'}
            onChange={(e) =>
              updateComponent(selectedComponentIndex, { listType: e.target.value })
            }
          >
            <option value="ul">Unordered List</option>
            <option value="ol">Ordered List</option>
          </select>
        </>
      )}

      <button
        onClick={() => removeComponent(selectedComponentIndex)}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
      >
        Delete Component
      </button>
    </aside>
  )
}

export default CustomizationPanel
