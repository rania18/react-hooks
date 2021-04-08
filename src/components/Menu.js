import React from "react";
import {Navbar, Nav , FormControl, Form, Button} from 'react-bootstrap'
function Menu({search, setSearch}) {
  const handlechange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Turque series</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Last episode</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handlechange}/>
        <Button variant="outline-primary">Add</Button>
   
     
          
          {/* <Button variant="outline-primary">Search</Button> */}
        </Form>
      </Navbar>
    </div>
  );
}

export default Menu;
