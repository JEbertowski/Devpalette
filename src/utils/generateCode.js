// JSX GENERATION
export function generateComponentJSX(component) {
  switch (component.type) {
    case 'Button':
      return `<button className="${component.color || 'bg-blue-500'} text-white px-4 py-2 rounded shadow">
  ${component.text || 'Click Me'}
</button>`

    case 'Card':
      return `<div className="${component.color || 'bg-white'} ${component.padding || 'p-4'} rounded-lg shadow">
  <h3 className="font-bold">${component.title || 'Card Title'}</h3>
  <p className="text-sm">${component.content || 'This is a card component.'}</p>
</div>`

    case 'Navbar':
      return `<nav className="${component.color || 'bg-gray-800'} ${component.padding || 'p-4'} rounded text-white w-full">
  <ul className="flex space-x-4">
    <li>${component.link1 || 'Home'}</li>
    <li>${component.link2 || 'About'}</li>
    <li>${component.link3 || 'Contact'}</li>
  </ul>
</nav>`

    case 'Image':
      return `<img src="${component.src || 'https://via.placeholder.com/150'}" alt="${component.alt || 'Placeholder'}" className="${component.width || 'w-32'} ${component.height || 'h-32'} object-cover rounded" />`

    case 'Heading':
      const headingTag = component.level || 'h1'
      return `<${headingTag} className="${component.color || 'text-black'} text-2xl font-bold">
  ${component.text || 'Heading Text'}
</${headingTag}>`

    case 'Input':
      return `<input type="${component.inputType || 'text'}" placeholder="${component.placeholder || 'Enter text...'}" value="${component.value || ''}" className="${component.width || 'w-full'} ${component.padding || 'p-2'} border rounded" />`

    case 'List':
      const tag = component.listType === 'ol' ? 'ol' : 'ul'
      const style = component.listType === 'ol' ? 'list-decimal' : 'list-disc'
      const listItems = (component.items || ['Item 1', 'Item 2'])
        .map(item => `  <li>${item}</li>`)
        .join('\n')
      return `<${tag} className="${style} ${component.color || 'text-black'} pl-6 space-y-1">
${listItems}
</${tag}>`

    default:
      return ''
  }
}

export function generateJSXFromComponents(components) {
  return components.map(generateComponentJSX).join('\n\n')
}

// HTML GENERATION
export function generateComponentHTML(component) {
  switch (component.type) {
    case 'Button':
      return `<button class="${component.color || 'bg-blue-500'} text-white px-4 py-2 rounded shadow">
  ${component.text || 'Click Me'}
</button>`

    case 'Card':
      return `<div class="${component.color || 'bg-white'} ${component.padding || 'p-4'} rounded-lg shadow">
  <h3 class="font-bold">${component.title || 'Card Title'}</h3>
  <p class="text-sm">${component.content || 'This is a card component.'}</p>
</div>`

    case 'Navbar':
      return `<nav class="${component.color || 'bg-gray-800'} ${component.padding || 'p-4'} rounded text-white w-full">
  <ul class="flex space-x-4">
    <li>${component.link1 || 'Home'}</li>
    <li>${component.link2 || 'About'}</li>
    <li>${component.link3 || 'Contact'}</li>
  </ul>
</nav>`

    case 'Image':
      return `<img src="${component.src || 'https://via.placeholder.com/150'}" alt="${component.alt || 'Placeholder'}" class="${component.width || 'w-32'} ${component.height || 'h-32'} object-cover rounded" />`

    case 'Heading':
      const headingTag = component.level || 'h1'
      return `<${headingTag} class="${component.color || 'text-black'} text-2xl font-bold">
  ${component.text || 'Heading Text'}
</${headingTag}>`

    case 'Input':
      return `<input type="${component.inputType || 'text'}" placeholder="${component.placeholder || 'Enter text...'}" value="${component.value || ''}" class="${component.width || 'w-full'} ${component.padding || 'p-2'} border rounded" />`

    case 'List':
      const tag = component.listType === 'ol' ? 'ol' : 'ul'
      const style = component.listType === 'ol' ? 'list-decimal' : 'list-disc'
      const listItems = (component.items || ['Item 1', 'Item 2'])
        .map(item => `  <li>${item}</li>`)
        .join('\n')
      return `<${tag} class="${style} ${component.color || 'text-black'} pl-6 space-y-1">
${listItems}
</${tag}>`

    default:
      return ''
  }
}

export function generateHTMLFromComponents(components) {
  return components.map(generateComponentHTML).join('\n\n')
}
