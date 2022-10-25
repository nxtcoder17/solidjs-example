import { createSignal } from 'solid-js'

const TodoApp = () => {
  const [items, setItems] = createSignal([])
  return <div>
    <div className="w-80 bg-blue-300">
      <input />
    </div>
    <For each={items}>
      {(item) => <div>{item}</div>}
    </For>
  </div>
};

const KitchenSink = () => {
  return <div className="flex flex-col bg-red-200">
    <TodoApp />
  </div>
}
export default KitchenSink
