import { createSignal } from 'solid-js'

export const TodoApp = () => {
  const [items, setItems] = createSignal([])

  return <div>
    <div className="w-80 bg-blue-300">
      <form>
        <input className="w-full text-lg" placeholder='add item' />
      </form>
    </div>
    <For each={items}>
      {(item) => <div>{item}</div>}
    </For>
  </div>
};

