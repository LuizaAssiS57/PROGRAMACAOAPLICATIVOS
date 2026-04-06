import './App.css'
import AdicionarUsuarios from './components/AdicionarUsuario'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
          <main>
            <AdicionarUsuarios/>
          </main>
          <Footer/>
      </div>
    </>
  )
}

export default App
