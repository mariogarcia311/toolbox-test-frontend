import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar className="bg-danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React Test App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
