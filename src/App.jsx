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
import OrdersPage from './Pages/OrdersPage';
import NotFoundPage from './Pages/NotFoundPage';
import WishListPage from './Pages/WishListPage';
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
                <Route path='/orders' Component={OrdersPage}></Route>
                <Route path='/wishlist' Component={WishListPage} />
                <Route path='/login' Component={LoginPage}></Route>
                <Route path='/register' Component={RegisterPage}></Route>
                <Route path='*' Component={NotFoundPage}></Route>
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
