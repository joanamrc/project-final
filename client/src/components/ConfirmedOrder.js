import React, {Component} from 'react'
import { Button, Navbar } from 'react-bootstrap'


const ConfirmedOrder = () => (
  <div className="confirmedOrder">
      <div className="confirmedOrderMessage">
        <h4>Muchas gracias</h4>
        <p>
          Tu pedido ha sido confirmado
        </p>
        <Button bsStyle="primary">Realizar Pedido</Button>
      </div>
  </div>
)

export default ConfirmedOrder