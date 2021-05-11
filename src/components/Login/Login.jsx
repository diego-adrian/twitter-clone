import { useState } from 'react';
import { Grid, Image, Form, Button, Modal } from 'semantic-ui-react';
import useForm from '../../plugins/hooks/useForm';
import Background from '../../assets/img/bgLogin.jpg';
import './Login.scss';
const Login = () => {
  const [open, setOpen] = useState(false);
  const [formLogin] = useForm({
    usuario: '',
    contrasena: ''
  });
  const [formRegister] = useForm({
    nombre: '',
    usuario: '',
    email: '',
    contrasena: ''
  });

  const closeModal = () => {
    setOpen(!open);
    formRegister.handleReset();
  }

  const isValidEmail = () => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRegister.values.email);
  const handleClickSubmit = (e) => {
    e.preventDefault();
    console.log(22);
  }

  return (
    <>
      <Grid className="login" columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Image className="img" src={Background}></Image>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Form onSubmit={handleClickSubmit} className="form">
              <Form.Field required>
                <Form.Input
                  label="Usuario"
                  fluid
                  name="usuario"
                  error={ formLogin.errors.usuario && formLogin.touched.usuario ? { content: 'Por favor ingrese su usuario', pointing: 'below'} : null }
                  onBlur ={formLogin.handleTouched}
                  onChange={formLogin.handleChange}
                  value={formLogin.values.usuario}
                  placeholder="Usuario"
                />
              </Form.Field>
              <Form.Field required>
                <Form.Input
                  label="Contrasena"
                  error={ formLogin.errors.contrasena && formLogin.touched.contrasena ? { content: 'Por favor ingrese su contrasena', pointing: 'below' } : null }
                  value={formLogin.values.contrasena}
                  name="contrasena"
                  onBlur ={formLogin.handleTouched}
                  onChange={formLogin.handleChange}
                  placeholder="Contrasena"
                  fluid
                />
              </Form.Field>
              <Button type="submit" floated="left" primary>Ingresar</Button>
              <Button type="button" floated="right" secondary onClick={() => setOpen(!open)}>Registrate</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* Creando el Modal para registro */}
      <Modal
        closeOnEscape={true}
        closeOnDimmerClick={true}
        open={open}
        size="mini"
      >
        <Modal.Header>Registrar un nuevo usuario</Modal.Header>
        <Modal.Content>
          <Form>
          <Form.Field required>
              <Form.Input
                label="Nombres"
                placeholder="Nombres"
                name="nombre"
                fluid
                error={ formRegister.errors.nombre && formRegister.touched.nombre ? { content: 'Por favor ingrese su nombre completo', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.nombre}
              ></Form.Input>
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Username"
                placeholder="Nombre de usuario"
                name="usuario"
                fluid
                error={ formRegister.errors.usuario && formRegister.touched.usuario ? { content: 'Por favor ingrese su username', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.usuario}
              ></Form.Input>
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Email"
                placeholder="Email"
                name="email"
                fluid
                error={ (formRegister.errors.email && formRegister.touched.email) || (isValidEmail() && formRegister.touched.email) ? { content: 'Por favor ingrese su email o no es valido', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.email}
              ></Form.Input>
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Contrasena"
                placeholder="Contrasena"
                name="contrasena"
                type="password"
                fluid
                error={ formRegister.errors.contrasena && formRegister.touched.contrasena ? { content: 'Por favor ingrese su contrasena', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.contrasena}
              ></Form.Input>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={closeModal}>Cancelar</Button>
          <Button primary onClick={ formRegister.handleReset}>Registrar usuario</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default Login;