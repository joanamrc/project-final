import React from 'react';
import { Carousel, Grid, Row, Col, Thumbnail, Button, Media } from 'react-bootstrap'
import img from "../img/slide1.jpg"
import img2 from "../img/slide2.jpg"
import img3 from "../img/slide3.jpg"
import img4 from "../img/masnou.jpg"
import img5 from "../img/capufanda.jpg"
import img6 from "../img/bolsas.jpg"

const Home = () => (
  <div className="inicio">
		  <div className="Home">
		  	<Carousel>
			    <Carousel.Item>
			      <img width={"100%"} height={"100%"} alt="slide" src={img} />
			      <Carousel.Caption>
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={"100%"} height={"100%"} alt="slide" src={img2} />
			      <Carousel.Caption>
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={"100%"} height={"100%"} alt="slide" src={img3} />
			      <Carousel.Caption>
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    
			  </Carousel>
		   </div>
		   <div className="ThumbSection">
		  	<Grid>
			    <Row>
			      <Col xs={12} sm={6} md={4}>
			        <Thumbnail src={img4} alt="242x200">
			          <h3>Thumbnail label</h3>
			          <p>Description</p>
			          <p>
			            <Button bsStyle="primary">Button</Button>
			          </p>
			        </Thumbnail>
			      </Col>
			      <Col xs={12} sm={6} md={4}>
			        <Thumbnail src={img5} alt="242x200">
			          <h3>Thumbnail label</h3>
			          <p>Description</p>
			          <p>
			            <Button bsStyle="primary">Button</Button>
			          </p>
			        </Thumbnail>
			      </Col>
			      <Col xs={12} sm={6} md={4}>
			        <Thumbnail src={img6} alt="242x200">
			          <h3>Thumbnail label</h3>
			          <p>Description</p>
			          <p>
			            <Button bsStyle="primary">Button</Button>
			          </p>
			        </Thumbnail>
			      </Col>
			    </Row>
			  </Grid>
		   </div>
		   <div className="LatestProducts">
		  	<Grid>
			    <Row>
			      <Col xs={12} md={3}>
			        <Media>
				      <Media.Left>
				        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
				      </Media.Left>
				      <Media.Body>
				        <Media.Heading>Media Heading</Media.Heading>
				        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				      </Media.Body>
				    </Media>
			      </Col>
			      <Col xs={12} md={3}>
			        <Media>
				      <Media.Left>
				        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
				      </Media.Left>
				      <Media.Body>
				        <Media.Heading>Media Heading</Media.Heading>
				        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				      </Media.Body>
				    </Media>
			      </Col>
			      <Col xs={12} md={3}>
			        <Media>
				      <Media.Left>
				        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
				      </Media.Left>
				      <Media.Body>
				        <Media.Heading>Media Heading</Media.Heading>
				        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				      </Media.Body>
				    </Media>
			      </Col>
			      <Col xs={12} md={3}>
			        <Media>
				      <Media.Left>
				        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
				      </Media.Left>
				      <Media.Body>
				        <Media.Heading>Media Heading</Media.Heading>
				        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				      </Media.Body>
				    </Media>
			      </Col>
			    </Row>
			  </Grid>
		   </div>
	</div>

)

export default Home