import { useState } from 'react';
import { Grid, Image, Form, Button, Modal, Message, Container } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { NEW_USER, AUTHENTICATION } from '../../gql/user';
import useForm from '../../plugins/hooks/useForm';
import Background from '../../assets/img/bgLogin.jpg';
import Storage from '../../plugins/Storage';
import useAuth from '../../plugins/hooks/useAuth';
import './Login.scss';
const Login = () => {
  const history = useHistory();
  const { setUser } = useAuth();
  const [newUser] = useMutation(NEW_USER);
  const [login] = useMutation(AUTHENTICATION);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    status: '',
    header: '',
    message: ''
  });
  const [formLogin] = useForm({
    email: '',
    password: ''
  });
  const [formRegister] = useForm({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const closeModal = () => {
    setOpen(!open);
    formRegister.handleReset();
  }

  const ShowMessage = () => {
    return message.status === 'SUCCESS' ? (
    <Container textAlign="center">
      <Message
        compact
        success
        header={ message.header }
        content={ message.message}
      />
    </Container>) : message.status === 'ERROR' ? (
    <Container textAlign="center">
      <Message
        compact
        error
        header={ message.header }
        content={ message.message }
      />
    </Container>) : null
  }

  const isValidEmail = () => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRegister.values.email);
  const handleClickSubmit = async(e) => {
    e.preventDefault();
    if (!formLogin.handleErrors) {
      const credentials = formLogin.values;
      try {
        const { data } = await login({
          variables: {
            input: credentials
          }
        });
        const { token } = data.authentication;
        Storage.set('token', token);
        setUser(token);
        history.push('/home');
        setMessage({
          status: '',
          header: '',
          message: ''
        });
      } catch (error) {
        setMessage({
          status: 'ERROR',
          header: 'Ocurrio un error al tratar de ingresar',
          message: error.message
        });
      }
    } else {
      setMessage({
        status: 'ERROR',
        header: 'Ocurrio un error al tratar de ingresar',
        message: 'Faltan campos por llenar'
      });
    }
  }

  const addUser = async (e) => {
    e.preventDefault();
    if (!formRegister.handleErrors) {
      try {
        const user = formRegister.values;
        await newUser({
          variables: {
            input: user
          }
        });
        closeModal();
        setMessage({
          status: 'SUCCESS',
          header: 'Usuario exitosamente registrado',
          message: 'Ahora puedes ingresar con tus credenciales'
        });
      } catch (error) {
        setMessage({
          status: 'ERROR',
          header: 'Ocurrio un error al tratar de registrar el usuario',
          message: error.message
        });
      }
    } else {
      console.error('Faltan datos');
    }
  }

  return (
    <>
      <Grid className="login" columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Image className="img" src={Background}></Image>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <ShowMessage/>
            <Form onSubmit={handleClickSubmit} className="form">
              <Form.Field required>
                <Form.Input
                  label="Email"
                  fluid
                  name="email"
                  error={ formLogin.errors.email && formLogin.touched.email ? { content: 'Por favor ingrese su email', pointing: 'below'} : null }
                  onBlur ={formLogin.handleTouched}
                  onChange={formLogin.handleChange}
                  value={formLogin.values.email}
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field required>
                <Form.Input
                  label="Contrasena"
                  error={ formLogin.errors.password && formLogin.touched.password ? { content: 'Por favor ingrese su contrasena', pointing: 'below' } : null }
                  value={formLogin.values.password}
                  name="password"
                  type="password"
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
          <ShowMessage/>
          <Form onSubmit={addUser}>
            <Form.Field required>
              <Form.Input
                label="Nombres"
                placeholder="Nombres"
                name="name"
                fluid
                error={ formRegister.errors.name && formRegister.touched.name ? { content: 'Por favor ingrese su nombre completo', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.name}
              ></Form.Input>
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Username"
                placeholder="Nombre de usuario"
                name="username"
                fluid
                error={ formRegister.errors.username && formRegister.touched.username ? { content: 'Por favor ingrese su username', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.username}
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
                name="password"
                type="password"
                fluid
                error={ formRegister.errors.password && formRegister.touched.password ? { content: 'Por favor ingrese su contrasena', pointing: 'below'} : null }
                onBlur ={formRegister.handleTouched}
                onChange={formRegister.handleChange}
                value={formRegister.values.password}
              ></Form.Input>
            </Form.Field>
            <Modal.Actions>
              <Button secondary onClick={closeModal}>Cancelar</Button>
              <Button primary type="submit">Registrar usuario</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default Login;