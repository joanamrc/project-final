import React, {Component} from 'react';
import { Grid, Row, Col, Thumbnail, Button, Media, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {getJson} from '../services/api'


class ShowProducts extends Component {
	constructor() {
		super()
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		getJson()
		.then(response=>{
			console.log(response)
			this.setState({products:response})
		})

	}

	render(){
		return (
			<div className="ShowProducts">
		        <Grid>
					<Row>
					      <Col xs={12} md={2}>
					        <div className="sticky-sidebar">
					            <Nav>
					              <NavItem href="#">Link 1</NavItem>
					              <NavItem href="#">Link 2</NavItem>
					              <NavItem href="#">Link 3</NavItem>
					              <NavItem href="#">Link 4</NavItem>
					            </Nav>
						    </div>
					      </Col>
					      <Col xs={12} md={10}>
					       	
							    <Row>
							      
							      {this.state.products.map( product => (
							    		<Col key={product.id} xs={12} sm={6} md={4}>
							    			<Thumbnail className="productShow" src={product.img_path} alt="242x200">
										        <h3>{product.title}</h3>
										        <p className="description-paragraph">{product.description}</p>
										        <Link 
										        	to={`/products/${product.title}`}>
										        	<Button bsStyle="primary">View Product</Button>

										        </Link>
									      	</Thumbnail>
									    </Col>
							    		
							    	))}
							    </Row>
					      </Col>
					</Row>
				</Grid>
						
					  	
			</div>
		)	
	}
}

export default ShowProducts

