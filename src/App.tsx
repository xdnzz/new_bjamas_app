import { Filter } from './components/Filter/Filter';
import { Header } from './components/Header/Header';


function App() {

  return (
    <main className="flex justify-center bg-zinc-100 w-full h-screen">
      <div className="w-11/12">
        <Header />
        <Filter/>
      </div>
    </main>
  )
}

export default App
