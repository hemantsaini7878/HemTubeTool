// Advanced Calculator App using React + TailwindCSS
// Features: Basic + Scientific + Stylish UI + Fast UX

import React, { useState } from 'react';

const buttons = [
  ['C', '(', ')', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '^']
];

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = eval(input.replace('^', '**'));
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[320px]">
        <div className="bg-black text-white rounded-lg px-4 py-3 text-2xl font-mono text-right mb-4 min-h-[64px]">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.flat().map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-lg font-semibold text-gray-800 shadow-inner"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
