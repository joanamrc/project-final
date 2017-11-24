import React, {Component} from 'react'
import { form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const RegisterForm = () => (
  <div className="RegisterForm">
      <form>
          <FieldGroup
            id="formControlsName"
            type="text"
            label="Nombre"
            placeholder="Nombre"
          />
          <FieldGroup
            id="formControlsLastName"
            type="text"
            label="Apellidos"
            placeholder="Apellidos"
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Correo"
            placeholder="Correo"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Contraseña"
            type="Password"
            placeholder="Contraseña"
          />
          <Button bsStyle="primary" type="submit">
            Enviar
          </Button>
      </form>
  </div>
)

export default RegisterForm