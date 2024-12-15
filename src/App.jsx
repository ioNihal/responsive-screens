
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import { ProgressProvider } from './components/ProgressContext'

function App() {

  return (
    <>
      <ProgressProvider>
        <Header />
        <Form />
        <Footer />
      </ProgressProvider>
    </>
  )
}

export default App
