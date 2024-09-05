import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

function NavbarMain() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <Navbar expand="lg" defaultactivekey={window.location.pathname} style={{ background: '#ffbd30' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/gioithieu" eventKey="/gioithieu">Gioi Thieu</Nav.Link>
                            <Nav.Link as={Link} to="/process" eventKey="/process">Quy trinh</Nav.Link>
                            <NavDropdown
                                title="Sam Pham"
                                // title={
                                //     <Nav.Link as={Link} to='/products' eventKey="/products">San Pham</Nav.Link>
                                // }
                                id="collapsible-nav-dropdown"
                                className="dropdown "
                                show={isDropdownOpen}
                                eventkey="/products"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                                onClick={(e) => { if (!e.target.closest(".dropdown-item")) { navigate('/products') } }}
                            >
                                <NavDropdown.Item as={Link} to="/products/1" className='dropdown-item'>
                                    San pham 1
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/2">
                                    San Pham 2
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/3">
                                    San pham 3
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/products/other">
                                    San pham khac
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default NavbarMain;