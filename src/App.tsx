import { Filter } from './components/Filter/Filter';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/Index';


function App() {

  return (
    <main className="flex justify-center bg-zinc-100 w-full h-screen">
      <div className="w-11/12">
        <HomePage/>
      </div>
    </main>
  )
}

export default App
