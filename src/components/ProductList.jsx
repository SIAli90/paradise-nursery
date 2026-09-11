import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

export const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 15,
    description: 'A hardy indoor plant known for striking leaves and easy care.',
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 18,
    description: 'Elegant white blooms and glossy leaves that brighten indoor spaces.',
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 12,
    description: 'A forgiving favourite with arching striped leaves and baby plantlets.',
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Lavender',
    price: 14,
    description: 'Fragrant purple flowers with a naturally calming aroma.',
    category: 'Aromatic Plants',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Rosemary',
    price: 11,
    description: 'Aromatic evergreen herb that is both decorative and useful in the kitchen.',
    category: 'Aromatic Plants',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Mint',
    price: 9,
    description: 'Fresh, fast-growing leaves with a crisp scent for kitchens and windowsills.',
    category: 'Aromatic Plants',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  const handleAddToCart = (plant) => {
    if (!isInCart(plant.id)) {
      dispatch(addItem(plant));
    }
  };

  return (
    <main className="product-page">
      <div className="page-title">
        <p className="eyebrow">Find your next favourite plant</p>
        <h1>Our Plants</h1>
        <p>Choose from our hand-picked collection of beautiful house plants.</p>
      </div>

      {categories.map((category) => (
        <section className="plant-category" key={category} aria-labelledby={category.replaceAll(' ', '-')}>
          <h2 id={category.replaceAll(' ', '-')}>{category}</h2>
          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = isInCart(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-card-body">
                      <h3>{plant.name}</h3>
                      <p className="price">£{plant.price.toFixed(2)}</p>
                      <p>{plant.description}</p>
                      <button
                        type="button"
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
