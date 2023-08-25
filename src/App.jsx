import Nav from './components/Nav';
import './App.css';
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import ViewProductPage from './Pages/ViewProductPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
    return (
        <main className='main'>
            <Nav />
            <Routes>
                <Route path='/' index Component={Home}></Route>
                <Route path='/products' Component={ProductsPage}></Route>
                <Route
                    path='/products/:productId'
                    Component={ViewProductPage}
                ></Route>
                <Route path='/cart' Component={CartPage}></Route>
                <Route path='/login' Component={LoginPage}></Route>
                <Route path='/register' Component={RegisterPage}></Route>
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
