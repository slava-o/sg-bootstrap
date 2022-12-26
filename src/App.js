import React from "react";
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

class App extends React.Component {

  setTheme = function (theme) {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  render() {
    this.setTheme("light");

    return (
      <div className="App">
        <h1>Привет, {this.props.name}!</h1>

        <Button className={"active"} variant="dark" onClick={this.setTheme.bind(this, "dark")}>Темная тема</Button>{' '}
        <Button className={"active"} variant="light" onClick={this.setTheme.bind(this, "light")}>Светлая тема</Button>


        <Container className={'mt-5'}>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Body>
                  <h2>Field + Select</h2><br/>

                  <Row>
                    <Col sm={3}>
                      <Form>
                        <Form.Group className="mb-4" controlId="field11">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Placeholder" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="field12">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Placeholder" value="Value" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="field13">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Placeholder" isInvalid={true} />
                          <Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="field14">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Placeholder" value="Value" isInvalid={true} />
                          <Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="field15">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Placeholder" disabled />
                        </Form.Group>
                      </Form>
                    </Col>

                    <Col sm={3}>
                      <Form>
                        <Form.Group className="mb-4" controlId="field21">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="field22">
                          <Form.Label className="d-flex justify-content-between align-items-center">
                            <span>Label</span>
                            <small className="text-info fw-normal">Help text</small>
                          </Form.Label>
                          <Dropdown className="d-grid">
                            <Dropdown.Toggle variant="light" size="lg" id="field22">
                              Dropdown Button
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className={'mt-5'}>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Body>
                  <h2>Button / L - 56PX</h2><br/>

                  <Button variant="primary" size="lg">Primary</Button>{' '}
                  <Button variant="primary" size="lg"><i className="fa-solid fa-bug"></i> Primary icon</Button>{' '}
                  <Button variant="primary" size="lg">Primary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="primary" size="lg"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="primary" size="lg" disabled={true}><i className="fa-solid fa-dragon"></i> Primary disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="secondary" size="lg">Secondary</Button>{' '}
                  <Button variant="secondary" size="lg"><i className="fa-solid fa-bug"></i> Secondary icon</Button>{' '}
                  <Button variant="secondary" size="lg">Secondary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="secondary" size="lg"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="secondary" size="lg" disabled={true}><i className="fa-solid fa-dragon"></i> Secondary disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="light" size="lg">Grey</Button>{' '}
                  <Button variant="light" size="lg"><i className="fa-solid fa-bug"></i> Grey icon</Button>{' '}
                  <Button variant="light" size="lg">Grey icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="light" size="lg"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="light" size="lg" disabled={true}><i className="fa-solid fa-dragon"></i> Grey disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="outline-light" size="lg">Outline</Button>{' '}
                  <Button variant="outline-light" size="lg"><i className="fa-solid fa-bug"></i> Outline icon</Button>{' '}
                  <Button variant="outline-light" size="lg">Outline icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="outline-light" size="lg"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="outline-light" size="lg" disabled={true}><i className="fa-solid fa-dragon"></i> Outline disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="link" size="lg">Flat</Button>{' '}
                  <Button variant="link" size="lg"><i className="fa-solid fa-bug"></i> Flat icon</Button>{' '}
                  <Button variant="link" size="lg">Flat icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="link" size="lg"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="link" size="lg" disabled={true}><i className="fa-solid fa-dragon"></i> Flat disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="warning" size="lg">Warning</Button>{' '}
                  <Button variant="warning" size="lg"><i className="fa-solid fa-bug"></i> Warning icon</Button>{' '}
                  <Button variant="warning" size="lg">Warning icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="warning" size="lg"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="warning" size="lg" disabled={true}><i className="fa-solid fa-dragon"></i> Warning disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="primary" size="lg"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="secondary" size="lg"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="light" size="lg"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="outline-light" size="lg"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="link" size="lg"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="warning" size="lg"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <hr className={'my-5'} />

        <Container>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Body>
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

                  <Button variant="light">Grey</Button>{' '}
                  <Button variant="light"><i className="fa-solid fa-bug"></i> Grey icon</Button>{' '}
                  <Button variant="light">Grey icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="light"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="light" disabled={true}><i className="fa-solid fa-dragon"></i> Grey disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="outline-light">Outline</Button>{' '}
                  <Button variant="outline-light"><i className="fa-solid fa-bug"></i> Outline icon</Button>{' '}
                  <Button variant="outline-light">Outline icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="outline-light"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="outline-light" disabled={true}><i className="fa-solid fa-dragon"></i> Outline disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="link">Flat</Button>{' '}
                  <Button variant="link"><i className="fa-solid fa-bug"></i> Flat icon</Button>{' '}
                  <Button variant="link">Flat icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="link"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="link" disabled={true}><i className="fa-solid fa-dragon"></i> Flat disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="warning">Warning</Button>{' '}
                  <Button variant="warning"><i className="fa-solid fa-bug"></i> Warning icon</Button>{' '}
                  <Button variant="warning">Warning icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="warning"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="warning" disabled={true}><i className="fa-solid fa-dragon"></i> Warning disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="primary"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="secondary"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="light"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="outline-light"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="link"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="warning"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <hr className={'my-5'} />

        <Container>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Body>
                  <h2>Button / S - 32PX</h2><br/>

                  <Button variant="primary" size="sm">Primary</Button>{' '}
                  <Button variant="primary" size="sm"><i className="fa-solid fa-bug"></i> Primary icon</Button>{' '}
                  <Button variant="primary" size="sm">Primary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="primary" size="sm"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="primary" size="sm" disabled={true}><i className="fa-solid fa-dragon"></i> Primary disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="secondary" size="sm">Secondary</Button>{' '}
                  <Button variant="secondary" size="sm"><i className="fa-solid fa-bug"></i> Secondary icon</Button>{' '}
                  <Button variant="secondary" size="sm">Secondary icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="secondary" size="sm"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="secondary" size="sm" disabled={true}><i className="fa-solid fa-dragon"></i> Secondary disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="light" size="sm">Grey</Button>{' '}
                  <Button variant="light" size="sm"><i className="fa-solid fa-bug"></i> Grey icon</Button>{' '}
                  <Button variant="light" size="sm">Grey icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="light" size="sm"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="light" size="sm" disabled={true}><i className="fa-solid fa-dragon"></i> Grey disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="outline-light" size="sm">Outline</Button>{' '}
                  <Button variant="outline-light" size="sm"><i className="fa-solid fa-bug"></i> Outline icon</Button>{' '}
                  <Button variant="outline-light" size="sm">Outline icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="outline-light" size="sm"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="outline-light" size="sm" disabled={true}><i className="fa-solid fa-dragon"></i> Outline disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="link" size="sm">Flat</Button>{' '}
                  <Button variant="link" size="sm"><i className="fa-solid fa-bug"></i> Flat icon</Button>{' '}
                  <Button variant="link" size="sm">Flat icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="link" size="sm"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="link" size="sm" disabled={true}><i className="fa-solid fa-dragon"></i> Flat disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="warning" size="sm">Warning</Button>{' '}
                  <Button variant="warning" size="sm"><i className="fa-solid fa-bug"></i> Warning icon</Button>{' '}
                  <Button variant="warning" size="sm">Warning icon right <i className="fa-solid fa-headset"></i></Button>{' '}
                  <Button variant="warning" size="sm"><i className="fa-solid fa-heart"></i></Button>{' '}
                  <Button variant="warning" size="sm" disabled={true}><i className="fa-solid fa-dragon"></i> Warning disabled</Button>{' '}

                  <hr className={'my-3'}/>

                  <Button variant="primary" size="sm"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="secondary" size="sm"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="light" size="sm"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="outline-light" size="sm"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="link" size="sm"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                  <Button variant="warning" size="sm"><i className="fa-solid fa-heart"></i><br/>Label</Button>{' '}
                </Card.Body>
              </Card>
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
              <Button variant="light">Grey</Button>{' '}
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
