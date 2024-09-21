import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo150.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand href="#home">MyLogo <img src={logo} alt="logo" height="40"></img></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/login">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </NavLink>
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/register">
                            <i className="fas fa-user-plus"></i> Register
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;