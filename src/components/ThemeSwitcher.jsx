import React from 'react'
import useStore from '../store/useStore'

const ThemeSwitcher = () => {
  const { theme, setTheme, customColors, setCustomColors } = useStore()

  const handleThemeChange = (e) => {
    setTheme(e.target.value)
  }

  const handleColorChange = (e) => {
    const { name, value } = e.target
    setCustomColors({ ...customColors, [name]: value })
  }

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Theme</label>
      <select
        value={theme}
        onChange={handleThemeChange}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="custom">Custom</option>
      </select>

      {theme === 'custom' && (
        <div className="space-y-2 mt-2">
          <div>
            <label className="block text-sm font-medium mb-1">Background Color</label>
            <input
              type="color"
              name="background"
              value={customColors.background}
              onChange={handleColorChange}
              className="w-full h-10 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Text Color</label>
            <input
              type="color"
              name="text"
              value={customColors.text}
              onChange={handleColorChange}
              className="w-full h-10 border rounded"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
