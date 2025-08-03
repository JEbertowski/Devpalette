import { create } from 'zustand'

const useStore = create((set, get) => ({
  components: [],
  selectedComponentIndex: null,

  addComponent: (component) =>
    set((state) => ({
      components: [
        ...state.components,
        {
          ...component,
          name: component.name || component.type,
          color: '',
          padding: 'p-4',
          // Button
          text: component.type === 'Button' ? 'Click Me' : '',
          // Card
          title: component.type === 'Card' ? 'Card Title' : '',
          content: component.type === 'Card' ? 'This is a card component.' : '',
          // Navbar
          link1: component.type === 'Navbar' ? 'Home' : '',
          link2: component.type === 'Navbar' ? 'About' : '',
          link3: component.type === 'Navbar' ? 'Contact' : '',
          // Image
          src: component.type === 'Image' ? 'https://via.placeholder.com/150' : '',
          alt: component.type === 'Image' ? 'Placeholder' : '',
          width:
            component.type === 'Image'
              ? 'w-32'
              : component.type === 'Input'
              ? 'w-full'
              : '',
          height: component.type === 'Image' ? 'h-32' : '',
          // Heading
          level: component.type === 'Heading' ? 'h1' : '',
          // Input
          inputType: component.type === 'Input' ? 'text' : '',
          placeholder: component.type === 'Input' ? 'Enter text...' : '',
          value: component.type === 'Input' ? '' : '',
          // List
          listType: component.type === 'List' ? 'ul' : '',
          items: component.type === 'List' ? ['Item 1', 'Item 2'] : [],
        },
      ],
    })),

  clearComponents: () =>
    set({
      components: [],
      selectedComponentIndex: null,
    }),

  selectComponent: (index) =>
    set({ selectedComponentIndex: index }),

  updateComponent: (index, newProps) =>
    set((state) => {
      const updated = [...state.components]
      updated[index] = { ...updated[index], ...newProps }
      return { components: updated }
    }),

  moveComponent: (fromIndex, toIndex) =>
    set((state) => {
      const updated = [...state.components]
      const [moved] = updated.splice(fromIndex, 1)
      updated.splice(toIndex, 0, moved)
      return { components: updated }
    }),

  removeComponent: (index) =>
    set((state) => {
      const updated = state.components.filter((_, i) => i !== index)
      const current = state.selectedComponentIndex
      return {
        components: updated,
        selectedComponentIndex:
          current === index
            ? null
            : current > index
            ? current - 1
            : current,
      }
    }),

  saveLayout: () => {
    const { components } = get()
    localStorage.setItem('devpalette-layout', JSON.stringify(components))
  },

  loadLayout: () => {
    const saved = localStorage.getItem('devpalette-layout')
    if (saved) {
      set({ components: JSON.parse(saved) })
    }
  },

  // ✅ Theme + Custom Colors
  theme: 'light',
  setTheme: (newTheme) => set({ theme: newTheme }),
  customColors: {
    background: '#fefce8', // default light yellow
    text: '#1f2937',        // default dark gray
  },
  setCustomColors: (newColors) =>
    set(() => ({
      customColors: newColors,
    })),
}))

export default useStore
