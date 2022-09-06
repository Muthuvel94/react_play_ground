import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
class App extends React.Component {
  render() {
    return (
      <div
        className='lists'
        style={{
          marginLeft: '8%',
          marginTop: '100px',
          width: '10%',
        }}
      >
        <ListGroup>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            <img
              src='https://img.icons8.com/dusk/452/dog.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />{' '}
            Dog
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            <img
              src='https://img.icons8.com/dusk/452/cat-head--v1.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />{' '}
            Cat
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            {' '}
            <img
              src='https://img.icons8.com/dusk/452/chicken.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />{' '}
            Chicken
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            {' '}
            <img
              src='https://img.icons8.com/dusk/344/bull.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />{' '}
            Bull
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            {' '}
            <img
              src='https://img.icons8.com/dusk/344/alpaca--v1.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />{' '}
            Sheep
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            {' '}
            <img
              src='https://img.icons8.com/dusk/344/seahorse.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />{' '}
            SeaHorse
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default App;
