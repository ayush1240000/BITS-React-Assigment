import React from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

  const MyListComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', description: 'Description of item 1' },
    { id: 2, name: 'Item 2', description: 'Description of item 2' },
    { id: 3, name: 'Item 3', description: 'Description of item 3' },
  ]);

  return (
    <div className="container">
      <h1>My List</h1>
          <ListGroup>
        {data.map((item) => (
          <ListGroup.Item key={item.id} >
           <span> {item.name} </span> - <span>{item.description}</span> 
          </ListGroup.Item>
        ))}
        </ListGroup>
    </div>
  );
};

export default MyListComponent;
