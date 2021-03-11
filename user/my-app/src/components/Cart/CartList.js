import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

class CartList extends Component {

    render() {
        return (
            <Fragment>
            <Container className="TopSection">
            <h6 className="text text-center">Your Cart Details </h6>
                <Row>
                
                
                    <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                    <Card>
                    <Card.Body>
                    <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="w-100" src="images/p1.jpg"/>

                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="Product-Name">Apple Mac Book Pro</h5>
                    <h6 className="">Quantity=05</h6>
                    <h6 className="">Price=05 X BDT 100.00= 500TK</h6>

                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                    <input value="4" className="form-control text-center" type="number"/>
                    <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                    <Card>
                    <Card.Body>
                    <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="w-100" src="images/p1.jpg"/>

                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="Product-Name">Apple Mac Book Pro</h5>
                    <h6 className="">Quantity=05</h6>
                    <h6 className="">Price=05 X BDT 100.00= 500TK</h6>

                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                    <input value="4" className="form-control text-center" type="number"/>
                    <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                    <Card>
                    <Card.Body>
                    <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="w-100" src="images/p1.jpg"/>

                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="Product-Name">Apple Mac Book Pro</h5>
                    <h6 className="">Quantity=05</h6>
                    <h6 className="">Price=05 X BDT 100.00= 500TK</h6>

                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                    <input value="4" className="form-control text-center" type="number"/>
                    <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                    <Card>
                    <Card.Body>
                    <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="w-100" src="images/p1.jpg"/>

                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="Product-Name">Apple Mac Book Pro</h5>
                    <h6 className="">Quantity=05</h6>
                    <h6 className="">Price=05 X BDT 100.00= 500TK</h6>

                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                    <input value="4" className="form-control text-center" type="number"/>
                    <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                    <Card>
                    <Card.Body>
                    <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="w-100" src="images/p1.jpg"/>

                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="Product-Name">Apple Mac Book Pro</h5>
                    <h6 className="">Quantity=05</h6>
                    <h6 className="">Price=05 X BDT 100.00= 500TK</h6>

                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                    <input value="4" className="form-control text-center" type="number"/>
                    <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                <Col md={6} lg={6} sm={6} xs={6}>
                                    <h6 className="">Total Quantity=05</h6>
                                    <h6 className=""> Total Payment = 500TK</h6>
                                    <Button className="btn btn-block mt-3 site-btn">CHECKOUT</Button>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
                
            </Fragment>
        );
    }
}

export default CartList;