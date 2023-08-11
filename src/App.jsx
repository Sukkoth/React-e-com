import Nav from './components/Nav';
import './App.css';
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import ViewProductPage from './Pages/ViewProductPage';

function App() {
    return (
        <main className='main'>
            <Nav />
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/products' Component={ProductsPage}></Route>
                <Route
                    path='/products/:productId'
                    Component={ViewProductPage}
                ></Route>
                <Route path='/cart' Component={CartPage}></Route>
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
