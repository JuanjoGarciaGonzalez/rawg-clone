import './App.css'
import { Layout } from './components/layout'
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
