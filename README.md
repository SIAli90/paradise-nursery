# Paradise Nursery Shopping Application

Paradise Nursery is a React front-end shopping application for browsing house plants and managing a shopping cart.

## Project Name

**Paradise Nursery**

## Features

- Landing page with the Paradise Nursery company name, company information, background image, and **Get Started** button.
- Product listing page with plants grouped into categories.
- Plant cards with image, name, price, description, and **Add to Cart** button.
- The Add to Cart button becomes disabled and changes to **Added to Cart** after selection.
- Header shopping-cart icon displays the current total quantity of plants.
- Redux Toolkit shopping-cart state management.
- Shopping cart page with plant image, unit price, quantity controls, subtotal, and delete option.
- Total number of plants and total cart cost.
- Continue Shopping and Checkout buttons.
- Removing a plant or reducing its quantity to zero makes it available to add again on the product page.
- Responsive layout for desktop, tablet, and mobile screens.

## Technologies Used

- React
- Redux Toolkit
- React Redux
- Vite
- CSS

## Run Locally

```bash
npm install
npm run dev
```

Open the local address displayed by Vite in your browser.

## Build

```bash
npm run build
```

## Main Assessment Files

- `README.md`
- `src/components/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/components/CartSlice.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`
