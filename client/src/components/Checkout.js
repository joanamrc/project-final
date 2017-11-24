import React, {Component} from 'react'
import { form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Grid, Row, Col, Checkbox } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const Checkout = () => (
  <div className="Checkout">
      <form>
          <Grid>
            <Row className="is-flex">
              <Col xs={12} md={8}>
               <Row>
                  <Col xs={6} md={6}>
                    <FieldGroup
                      id="formControlsName"
                      type="text"
                      label="Nombre"
                      placeholder="Nombre"
                    />
                  </Col>
                  <Col xs={6} md={6}>
                      <FieldGroup
                        id="formControlsName"
                        type="text"
                        label="Apellidos"
                        placeholder="Apellidos"
                      />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <FieldGroup
                      id="formControlsName"
                      type="text"
                      label="Dirección de entrega"
                      placeholder="Dirección"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <FieldGroup
                      id="formControlsName"
                      type="text"
                      label="Población"
                      placeholder="Población"
                    />
                  </Col>
                  <Col xs={6} md={6}>
                      <FieldGroup
                        id="formControlsName"
                        type="text"
                        label="Código Postal"
                        placeholder="CP"
                      />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h4>Métodos de pago</h4>
                    <FormGroup>
                        <Checkbox>
                          Transferencia Bancaria
                        </Checkbox>
                        {' '}
                        <Checkbox>
                          Paypal
                        </Checkbox>
                        {' '}
                        <Checkbox>
                          Targeta de crédito
                        </Checkbox>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <div className="resumenProductos">
                  <h4>Carrito</h4>
                  <p>Producto 1</p>
                  <p>Producto 2</p>
                  <p>Producto 3</p>
                </div>
                <div className="confirmBtn">
                  <Button bsStyle="primary">Realizar Pedido</Button>
                </div>
              </Col>
            </Row>
          </Grid>
      </form>
  </div>
)

export default Checkout