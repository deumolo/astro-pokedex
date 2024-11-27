import { createSignal } from 'solid-js';

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);

  return (
    <div>
      <p class='my-2'>Count: {counter()}</p>
      <button
        class='my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => {
          setCounter((prev) => ++prev);
        }}
      >
        +1
      </button>
    </div>
  );
};
