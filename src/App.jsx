import './app.scss';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Main from './components/Main';
import Nav from './components/Nav';
import Products from './components/Products';
import Product from './components/Product';
import { Router } from './contexts/Router';
import Login from './components/Login';
import { Auth } from './contexts/Auth';
import Logout from './components/Logout';
import Page401 from './components/Page401';

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
          <Logout />
          <Page401 />
        </Main>
      </Auth>
    </Router>
  )
}

export default App