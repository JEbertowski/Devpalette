import React, { useState } from 'react'
import useStore from '../store/useStore'
import {
  generateJSXFromComponents,
  generateHTMLFromComponents
} from '../utils/generateCode'

const ExportPanel = () => {
  const { components } = useStore()
  const [mode, setMode] = useState('jsx') // jsx | html

  const code =
    mode === 'jsx'
      ? generateJSXFromComponents(components)
      : generateHTMLFromComponents(components)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    alert('Code copied to clipboard!')
  }

  const downloadCode = () => {
    const extension = mode === 'jsx' ? 'jsx' : 'html'
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `devpalette-export.${extension}`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <aside className="w-1/2 max-w-xl bg-gray-900 text-green-300 p-4 border-l font-mono text-sm overflow-auto">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-white font-bold text-lg">Exported {mode.toUpperCase()}</h2>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="bg-gray-800 text-white px-2 py-1 rounded border border-gray-600"
          >
            <option value="jsx">JSX</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
          >
            Copy
          </button>
          <button
            onClick={downloadCode}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Download
          </button>
        </div>
      </div>
      <pre>{code}</pre>
    </aside>
  )
}

export default ExportPanel
