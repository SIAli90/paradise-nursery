import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs.jsx';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function App() {
  const [page, setPage] = useState('home');

  const goHome = () => setPage('home');
  const goProducts = () => setPage('products');
  const goCart = () => setPage('cart');

  if (page === 'products') {
    return (
      <div className="app-shell">
        <Header onHome={goHome} onProducts={goProducts} onCart={goCart} />
        <ProductList />
      </div>
    );
  }

  if (page === 'cart') {
    return (
      <div className="app-shell">
        <Header onHome={goHome} onProducts={goProducts} onCart={goCart} />
        <CartItem onContinueShopping={goProducts} />
      </div>
    );
  }

  return (
    <main className="landing-page">
      <div className="landing-overlay" />
      <section className="landing-content">
        <div className="landing-brand" aria-hidden="true">🌿</div>
        <p className="landing-kicker">Bring nature home</p>
        <h1>Paradise Nursery</h1>
        <p className="landing-tagline">Where Green Meets Serenity</p>
        <AboutUs />
        <button className="get-started-button" type="button" onClick={goProducts}>
          Get Started
        </button>
      </section>
    </main>
  );
}

export default App;
