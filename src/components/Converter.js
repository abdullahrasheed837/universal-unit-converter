'use client';

import { useState } from 'react';
import units from '../data/units';

export default function Converter() {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return setResult('Invalid input');

    if (category === 'temperature') {
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        setResult((value * 9 / 5) + 32);
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        setResult((value - 32) * 5 / 9);
      } else {
        setResult(value);
      }
      return;
    }

    const baseValue = value * units[category][fromUnit];
    const converted = baseValue / units[category][toUnit];
    setResult(converted);
  };

  const unitOptions = Object.keys(units[category] || {});

  return (
    <div className="w-full max-w-xl p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="mr-2 font-medium">Category:</label>
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => {
            const newCategory = e.target.value;
            setCategory(newCategory);
            setFromUnit(Object.keys(units[newCategory] || {})[0]);
            setToUnit(Object.keys(units[newCategory] || {})[1]);
            setResult(null);
          }}
        >
          {Object.keys(units).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
          <option value="temperature">temperature</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="number"
          className="p-2 border rounded w-full sm:w-40"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <select
          className="p-2 border rounded w-full sm:w-40"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {(category === 'temperature' ? ['celsius', 'fahrenheit'] : unitOptions).map(u => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
        <span className="self-center">→</span>
        <select
          className="p-2 border rounded w-full sm:w-40"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {(category === 'temperature' ? ['celsius', 'fahrenheit'] : unitOptions).map(u => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      <button
        onClick={convert}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
      >
        Convert
      </button>

      {result !== null && (
        <div className="mt-6 text-xl font-semibold">
          Result: {result}
        </div>
      )}
    </div>
  );
}
