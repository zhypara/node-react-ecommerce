import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
    
    
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Shop</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">@{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
   
        <aside className="sidebar">
          <h3>ТИП ФИГУРЫ</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/ФИГУРЫ - ТРЕУГОЛЬНИК">ФИГУРЫ - ТРЕУГОЛЬНИК</Link>
            </li>

            <li>
              <Link to="/category/ФИГУРЫ - ПРЯМОУГОЛЬНИК">ФИГУРЫ - ПРЯМОУГОЛЬНИК</Link>
            </li>
            <li>
              <Link to="/category/ФИГУРЫ - ЯБЛОКО">ФИГУРЫ - ЯБЛОКО</Link>
            </li>
            <li>
              <Link to="/category/ПЕСОЧНЫЕ ЧАСЫ">ПЕСОЧНЫЕ ЧАСЫ</Link>
            </li>
            <li>
              <Link to="/category/ФИГУРЫ - ГРУША">ФИГУРЫ - ГРУША</Link>
            </li>
          </ul>
        </aside>
        
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
          <div class="thumb-wrap">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pc5VRs3bnF4?start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
        </main>
       <a href="fashen-teg" className="fashen-teg">fashen@gmail.com</a>
        <footer className="footer" >
        «Стиль это единственное, что вы не можете купить. Он не зависит от того, какая у вас сумка, от ее бренда или цены. Стиль – это отражение нашей души, это эмоция». Альбер Эльбаз.
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
