import React from 'react'
import Moviecard from '../moviecard/moviecard'


const Navbar = () => {
    return (
        <div>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">MOVIEAPP</Navbar.Brand>
    <Nav className="mr-auto">
      <Movielist href="#home"/>
      <Moviecard href="#home"/>
      <Contactus href="#home"/>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navbar;
