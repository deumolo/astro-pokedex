import { createSignal, type Component } from 'solid-js';

interface Props {
  initValue: number;
}

export const Counter : Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

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
