import './app.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import Main from './components/Main';
import Products from './components/Products';
import { Router } from './Contexts/Router';
import Product from './components/Product';
import Login from './components/Login';
import { Auth } from './contexts/Auth';

function App() {

  return (
    <Router>
      <Auth>
        <Nav />
        <Main>
          <Home />
          <About />
          <Contacts />
          <Products />
          <Product />
          <Login />
        </Main>
      </Auth>
    </Router>
  )
}

export default App
