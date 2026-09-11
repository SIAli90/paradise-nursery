import { useSelector } from 'react-redux';

function Header({ onHome, onProducts, onCart }) {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={onHome} aria-label="Go to Paradise Nursery home page">
        <span className="brand-logo" aria-hidden="true">🌿</span>
        <span>
          <strong>Paradise Nursery</strong>
          <small>Where Green Meets Serenity</small>
        </span>
      </button>

      <nav aria-label="Main navigation">
        <button type="button" onClick={onProducts}>Plants</button>
        <button className="cart-link" type="button" onClick={onCart} aria-label={`Shopping cart with ${totalQuantity} items`}>
          <span aria-hidden="true">🛒</span>
          <span className="cart-count">{totalQuantity}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
