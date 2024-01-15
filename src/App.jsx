import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <main>
      <Layout />
    </main>
    </BrowserRouter>
  )
}

export default App
