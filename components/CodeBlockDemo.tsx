"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `const Experience = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">IT Manager at IPower</h2>
      <p className="mb-2">Software engineer at ..</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

  return (
    <div className="max-w-3xl text-center p-4 mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
