import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function NavbarMain() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
            <Container fluid>
                <Navbar.Brand href="/">Trang chủs</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        variant="tabs" defaultActiveKey="/home"
                    >
                        <NavDropdown

                            title="Giới thiệu"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href='/gioithieu'>Gio Thieu ve ...</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sản Phẩm" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"></NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/process">
                            Quy trình sản xuất
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 bg-warning bg-gradient bg-opacity-25"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning" style={{ color: 'black' }} >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default NavbarMain;