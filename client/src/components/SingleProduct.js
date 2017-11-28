import React, {Component} from 'react'
import { Grid, Row, Col, Thumbnail, Button, Media, Nav, NavItem } from 'react-bootstrap'
import Quantity from './qty.js'
import {getJson} from '../services/api'

class SingleProduct extends Component {
	constructor(props) {
		super()
		this.state = {
				product: [],
				value: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		getJson()
		.then(response=>{
			const product = response.filter(product => {
				return this.props.match.params.productTitle == product.title
			})
			this.setState({product})
		})
	}

	handleClick(){
		console.log('añadiendo producto', this.state.product[0].title)
		const newProduct = {
			title: this.state.product[0].title
		}
		console.log(this.props)
		//this.props.addToCart(newProduct)

		this.setState({
	      value: ''
	    })
	}


	render(){

		return (
			<div className="SingleProduct">
         <Grid>
         	<Row>
         		<Col xs={12} md={6}>
 			       <div>
 			       		<Thumbnail src={this.state.product.length && this.state.product[0].img_path} alt="242x200">
				          
 				        </Thumbnail>
 			       </div> 
 		     	</Col>
 		     	<Col xs={12} md={6}>
 		     		<h3>{this.state.product.length && this.state.product[0].title}</h3>
 		     		<Row>
 		     			<Col xs={12} md={8}>
 		     				<p>{this.state.product.length && this.state.product[0].description}</p>	
 		     			</Col>
 		     			<Col xs={12} md={4}>
 		     				<h4>{this.state.product.length && this.state.product[0].price} €</h4>	
 		     			</Col>
 		     		</Row>
 		     		<Row>
 		     			<Col xs={2} md={2}>
 				   			<Quantity />	
 		     			</Col>
 		     			<Col xs={4} md={4}>
 				   			<Button bsStyle="primary" onClick={this.handleClick}>Add to cart</Button>	
 		     			</Col>
 		     		</Row>
			          
 		     	</Col>
         	</Row>
         </Grid>  	
 	</div>
		)	
	}
}

export default SingleProduct



