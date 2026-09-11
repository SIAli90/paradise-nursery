import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPlants = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const increaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.');
  };

  return (
    <main className="cart-page">
      <div className="page-title">
        <p className="eyebrow">Your green collection</p>
        <h1>Shopping Cart</h1>
      </div>

      <section className="cart-summary" aria-label="Cart totals">
        <div>
          <span>Total Plants</span>
          <strong>{totalPlants}</strong>
        </div>
        <div>
          <span>Total Cost</span>
          <strong>£{totalCost.toFixed(2)}</strong>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div aria-hidden="true">🪴</div>
          <h2>Your cart is empty</h2>
          <p>Add a plant to start building your indoor paradise.</p>
          <button type="button" onClick={onContinueShopping}>Continue Shopping</button>
        </section>
      ) : (
        <>
          <section className="cart-items" aria-label="Items in cart">
            {cartItems.map((item) => (
              <article className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-card-info">
                  <h2>{item.name}</h2>
                  <p>Unit price: £{item.price.toFixed(2)}</p>
                  <p className="subtotal">Subtotal: £{(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
                  <button type="button" onClick={() => decreaseQuantity(item)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => increaseQuantity(item)} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>

                <button className="delete-button" type="button" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </article>
            ))}
          </section>

          <div className="cart-actions">
            <button className="secondary-button" type="button" onClick={onContinueShopping}>Continue Shopping</button>
            <button className="checkout-button" type="button" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
