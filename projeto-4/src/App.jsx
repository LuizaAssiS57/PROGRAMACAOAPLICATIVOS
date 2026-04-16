import './App.css'
import AdicionarPersonagem from './components/AdicionarPersonagem'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='app'>
          <Header/>
            <main>
              <AdicionarPersonagem/>
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default App
