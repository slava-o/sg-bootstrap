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

        <Container className={'mt-5'}>
          <Row>
            <Col sm={12}>
              <h2>Button / L - 56PX</h2><br/>

              <Button variant="primary" size={"lg"}>Primary</Button>{' '}
              <Button variant="primary" size={"lg"}><i className="fa-solid fa-bug"></i> Primary icon</Button>{' '}
              <Button variant="primary" size={"lg"}>Primary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="primary" size={"lg"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="primary" size={"lg"} disabled={true}><i className="fa-solid fa-dragon"></i> Primary disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="secondary" size={"lg"}>Secondary</Button>{' '}
              <Button variant="secondary" size={"lg"}><i className="fa-solid fa-bug"></i> Secondary icon</Button>{' '}
              <Button variant="secondary" size={"lg"}>Secondary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="secondary" size={"lg"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="secondary" size={"lg"} disabled={true}><i className="fa-solid fa-dragon"></i> Secondary disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="light" size={"lg"}>Light</Button>{' '}
              <Button variant="light" size={"lg"}><i className="fa-solid fa-bug"></i> Light icon</Button>{' '}
              <Button variant="light" size={"lg"}>Light icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="light" size={"lg"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="light" size={"lg"} disabled={true}><i className="fa-solid fa-dragon"></i> Light disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="outline-light" size={"lg"}>Light</Button>{' '}
              <Button variant="outline-light" size={"lg"}><i className="fa-solid fa-bug"></i> Light icon</Button>{' '}
              <Button variant="outline-light" size={"lg"}>Light icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="outline-light" size={"lg"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="outline-light" size={"lg"} disabled={true}><i className="fa-solid fa-dragon"></i> Light disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="link" size={"lg"}>Flat</Button>{' '}
              <Button variant="link" size={"lg"}><i className="fa-solid fa-bug"></i> Flat icon</Button>{' '}
              <Button variant="link" size={"lg"}>Flat icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="link" size={"lg"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="link" size={"lg"} disabled={true}><i className="fa-solid fa-dragon"></i> Flat disabled</Button>{' '}
            </Col>
          </Row>
        </Container>

        <hr className={'my-5'} />

        <Container>
          <Row>
            <Col sm={12}>
              <h2>Button / M - 40PX</h2><br/>

              <Button variant="primary">Primary</Button>{' '}
              <Button variant="primary"><i className="fa-solid fa-bug"></i> Primary icon</Button>{' '}
              <Button variant="primary">Primary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="primary"><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="primary" disabled={true}><i className="fa-solid fa-dragon"></i> Primary disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="secondary">Secondary</Button>{' '}
              <Button variant="secondary"><i className="fa-solid fa-bug"></i> Secondary icon</Button>{' '}
              <Button variant="secondary">Secondary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="secondary"><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="secondary" disabled={true}><i className="fa-solid fa-dragon"></i> Secondary disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="light">Light</Button>{' '}
              <Button variant="light"><i className="fa-solid fa-bug"></i> Light icon</Button>{' '}
              <Button variant="light">Light icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="light"><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="light" disabled={true}><i className="fa-solid fa-dragon"></i> Light disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="outline-light">Light</Button>{' '}
              <Button variant="outline-light"><i className="fa-solid fa-bug"></i> Light icon</Button>{' '}
              <Button variant="outline-light">Light icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="outline-light"><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="outline-light" disabled={true}><i className="fa-solid fa-dragon"></i> Light disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="link">Flat</Button>{' '}
              <Button variant="link"><i className="fa-solid fa-bug"></i> Flat icon</Button>{' '}
              <Button variant="link">Flat icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="link"><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="link" disabled={true}><i className="fa-solid fa-dragon"></i> Flat disabled</Button>{' '}
            </Col>
          </Row>
        </Container>

        <hr className={'my-5'} />

        <Container>
          <Row>
            <Col sm={12}>
              <h2>Button / S - 32PX</h2><br/>

              <Button variant="primary" size={"sm"}>Primary</Button>{' '}
              <Button variant="primary" size={"sm"}><i className="fa-solid fa-bug"></i> Primary icon</Button>{' '}
              <Button variant="primary" size={"sm"}>Primary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="primary" size={"sm"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="primary" size={"sm"} disabled={true}><i className="fa-solid fa-dragon"></i> Primary disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="secondary" size={"sm"}>Secondary</Button>{' '}
              <Button variant="secondary" size={"sm"}><i className="fa-solid fa-bug"></i> Secondary icon</Button>{' '}
              <Button variant="secondary" size={"sm"}>Secondary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="secondary" size={"sm"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="secondary" size={"sm"} disabled={true}><i className="fa-solid fa-dragon"></i> Secondary disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="light" size={"sm"}>Light</Button>{' '}
              <Button variant="light" size={"sm"}><i className="fa-solid fa-bug"></i> Light icon</Button>{' '}
              <Button variant="light" size={"sm"}>Light icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="light" size={"sm"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="light" size={"sm"} disabled={true}><i className="fa-solid fa-dragon"></i> Light disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="outline-light" size={"sm"}>Light</Button>{' '}
              <Button variant="outline-light" size={"sm"}><i className="fa-solid fa-bug"></i> Light icon</Button>{' '}
              <Button variant="outline-light" size={"sm"}>Light icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="outline-light" size={"sm"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="outline-light" size={"sm"} disabled={true}><i className="fa-solid fa-dragon"></i> Light disabled</Button>{' '}

              <hr className={'my-3'}/>

              <Button variant="link" size={"sm"}>Flat</Button>{' '}
              <Button variant="link" size={"sm"}><i className="fa-solid fa-bug"></i> Flat icon</Button>{' '}
              <Button variant="link" size={"sm"}>Flat icon right <i className="fa-solid fa-headset"></i></Button>{' '}
              <Button variant="link" size={"sm"}><i className="fa-solid fa-heart"></i></Button>{' '}
              <Button variant="link" size={"sm"} disabled={true}><i className="fa-solid fa-dragon"></i> Flat disabled</Button>{' '}
            </Col>
          </Row>
        </Container>

        <hr className={'my-5'} />

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
              <br/><br/><br/>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
