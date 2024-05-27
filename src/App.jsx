import { useState } from 'react';
import ThemeToggler from '@/components/ThemeToggler';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className='w-full h-screen flex-center relative'>
      <div className='absolute top-6 right-6'>
        <ThemeToggler />
      </div>

      <div className='text-center space-y-10 md:space-y-14'>
        <h1 className='font-medium text-2xl lg:text-4xl font-mono dark:text-slate-200 text-slate-700'>
          React Minimal Setup
        </h1>
        <img src='/react.svg' alt='react-icon' className='size-full' />

        <button
          className='rounded-md cursor-pointer py-3 px-5 text-xl dark:bg-slate-700 bg-slate-200 shadow-sm dark:text-slate-200 text-slate-700'
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count: {count}
        </button>
      </div>
    </main>
  );
};

export default App;
