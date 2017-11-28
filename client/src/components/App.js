import React, { Component } from 'react';


import Main from './Main'
import Header from './Header'
import Footer from './footer'




class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			products: []
		}
		this.addToCart = this.addToCart.bind(this)
	}

	addToCart(newProduct) {
	    this.setState({
	    	
	      	products: [...this.state.products, newProduct]
	    });
	  }

	render() {
	  return (
	    <div className="App">
	      <Header />
	      <Main addToCart={this.addToCart}/>
	      <Footer />
	    </div>
	  );
	}
}

export default App;
