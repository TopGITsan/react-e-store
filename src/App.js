import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<h3 className='text-center'>hello from App</h3>
				<Navbar />
				<ProductList />
				<Details />
				<Cart />
				<Default />
			</React.Fragment>
		);
	}
}

export default App;
