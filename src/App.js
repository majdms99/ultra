import {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {GlobalStyle ,Spinners} from './globalStyle'
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/Footer';
import Services from './pages/ServicesPage/Services';
import Product from './pages/Products/Product';
import SignUp from './pages/SignUp/SignUp';
import PropagateLoader from 'react-spinners/PropagateLoader'

function App() {

  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000);
}, []);
  return (
   <>
      {
        loading ? 
        <Spinners>
          <PropagateLoader 
            size={40}
            color={'#4B59F7'}
            loading={loading}
          />
        </Spinners>
        :
        <BrowserRouter className="App">
        <GlobalStyle/>
           <Navbar/>
           <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/service'  component={Services}/>
             <Route path='/products'  component={Product}/>
             <Route path='/sign-up'  component={SignUp}/>
           </Switch>
           <Footer/>
      </BrowserRouter>
      }
   </>
  );
}

export default App;
