import React from "react";
import { Button } from 'react-bootstrap';
import { Container  } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Привет, {this.props.name}!</h1>

        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <h1>Smack my bitch up?</h1>
              <a href="/" className="btn btn-success">Sure!</a>
              <a href="/" className="btn btn-danger ms-3">No bastard</a>
            </div>
            <div className="col-6">
              <h1>I got you</h1>
              <a href="/" className="btn btn-primary">Awesome</a>
              <a href="/" className="btn btn-outline-info ms-3">Wat?</a>
            </div>
          </div>
        </div>

        <hr class={'my-5'} />

        <Container>
          <Row>
            <Col sm={12}>
              <Button variant="primary">Primary</Button>{' '}
              <Button variant="secondary">Secondary</Button>{' '}
              <Button variant="success">Success</Button>{' '}
              <Button variant="warning">Warning</Button>{' '}
              <Button variant="danger">Danger</Button>{' '}
              <Button variant="info">Info</Button>{' '}
              <Button variant="light">Light</Button>{' '}
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
