import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavItem from 'react-bootstrap/esm/NavItem';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function NavbarMain() {
    console.log(window.location.pathname)
    return (
        <>
            {/* <Nav variant="tabs" defaultActiveKey={window.location.pathname} className='bg-body-tertiary'>
                <Nav.Item>
                    <Nav.Link href="/">Trang chu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='gioithieu' eventKey="/gioithieu">Gioi Thieu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='process' eventKey="/process">Quy trinh</Nav.Link>
                </Nav.Item>
                <NavDropdown title="San pham" id="nav-dropdown" onSelect={(selectedKey) => alert(selectedKey)}>
                    <NavDropdown.Item eventKey="/products" href='/products'>San Pham 1</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav> */}
            <Navbar expand="lg" defaultActiveKey={window.location.pathname} style={{ background: '#ffbd30' }}>
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/gioithieu" eventKey="/gioithieu">Gioi Thieu</Nav.Link>
                            <Nav.Link as={Link} to="/process" eventKey="/process">Quy trinh</Nav.Link>
                            <NavDropdown title="San Pham" id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/products" eventKey="/products" className='dropdown-item'>San pham 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    San Pham 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">San pham 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
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

            {/* <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gioithieu">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><br className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default NavbarMain;