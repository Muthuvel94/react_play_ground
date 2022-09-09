import React from 'react';
import './app.css';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='spans'>
          <Alert.Link> Home </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 1</Alert.Link>
          {' | '}
          <Alert.Link> Exercise 2 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 3 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 4 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 5 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 6 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 7 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 8 </Alert.Link>
          {' | '}
          <Alert.Link> Exercise 9 </Alert.Link>
          {' | '}
        </div>
        <div>
          <Form.Control className='Form_1' placeholder='First Name' />{' '}
          <Form.Control className='Form_2' placeholder='Last Name' />{' '}
        </div>
        <Button className='button_1' variant='danger'>
          GREET ME
        </Button>{' '}
      </div>
    );
  }
}

export default App;
