import React from 'react';
import useStore from '../store/useStore';

function CustomColorPicker() {
  const customColors = useStore((state) => state.customColors);
  const setCustomColors = useStore((state) => state.setCustomColors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomColors({ ...customColors, [name]: value });
  };

  return (
    <div className="p-2 space-y-2 bg-white rounded shadow mt-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Background Color</label>
        <input
          type="color"
          name="background"
          value={customColors.background}
          onChange={handleChange}
          className="w-full h-10 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Text Color</label>
        <input
          type="color"
          name="text"
          value={customColors.text}
          onChange={handleChange}
          className="w-full h-10 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
}

export default CustomColorPicker;
