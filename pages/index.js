import { TodoList } from "@/components/TodoList"

export default function Home()  {

  return(
    <h1 className="className= flex flex-col  min-h-screen bg-purple-500 items-center justify-center">

      <TodoList/>
    </h1>

  )
}