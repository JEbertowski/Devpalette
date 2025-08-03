import Sidebar from './components/Sidebar'
import Canvas from './components/Canvas'
import CustomizationPanel from './components/CustomizationPanel'
import ExportPanel from './components/ExportPanel'

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Canvas />
      <CustomizationPanel />
      <ExportPanel />
    </div>
  )
}

export default App
