import InfoUser from 'components/UserMenu/UserMenu';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/dataUser/userSelect';

const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts">
            Phonebook
          </Navbar.Brand>
          {!user && (
            <Nav className="me-auto">
              {token && (
                <Nav.Link to="/contacts" as={Link}>
                  Contacts
                </Nav.Link>
              )}
              <Nav.Link to="/signup" as={Link}>
                Sign Up
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
                Login
              </Nav.Link>
            </Nav>
          )}

          <InfoUser className="d-flex flex-column" />
        </Container>
      </Navbar>
      <Container className="align-items-center d-flex flex-column justify-content-center">
        {user ? (
          <h1>  </h1>
        ) : (
          <h1 className='text-login'> 👀 Welcome guest please login or sign up </h1>
        )}
      </Container>
    </>
  );
};

export default Navigation;