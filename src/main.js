import App from './App.svelte';

const products = [
  {id: 1, title: "Badass T-Shirt", price: 9.95},
  {id: 2, title: "Badass Hoodie", price: 29.95}
]

const app = new App({
	target: document.body,
	props: {
		products
	}
});

export default app;
