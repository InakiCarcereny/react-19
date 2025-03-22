import { useState } from 'react';
import './App.css';
import { Seo1 } from './components/Seo1';
import { Seo2 } from './components/Seo2';
import { preload } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  // Precarga el CSS en caso de que se llegue a usar

  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css', {
    as: 'style',
  });

  return (
    <>
      {/* No sobreescribe el title, genera uno nuevo */}
      <Seo1 />
      <Seo2 />

      <title>{`You clicked ${count} times`}</title>
      <meta name="description" content="Hello, react 19" />

      <button onClick={handleClick}>
        set count
        {count}
      </button>
    </>
  );
}

export default App;
