export const Discover =() =>{
    return(
        <>
             <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Discover</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <div className='d-flex justify-content-center align-items-center'>
                        <Nav.Link href="#action1">Category</Nav.Link>
                        <Nav.Link href="#action2">Cheapest</Nav.Link>
                        <Nav.Link href="#action3">Newest</Nav.Link>
                        <Nav.Link href="#action4">How it works</Nav.Link>
                    </div>
                    
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-success">CREATE</Button>
                    
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </>
    )
}