import { createSignal } from 'solid-js'
import { TodoApp } from './todo-app'

const KitchenSink = () => {
  return <div className="flex flex-col bg-red-200">
    <TodoApp />
  </div>
}
export default KitchenSink;
