import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { loginThunk } from 'redux/dataUser/userThunk';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
  
    if (!email) {
      alert('Please enter your email');
      return;
    }
  
    if (!password) {
      alert('Please enter your password');
      return;
    }
  
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Please fill all fields'));
  };
  

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button bg="black" variant="dark" className="d-flex " type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;