import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";
import {Link} from "react-router-dom";
class SuggestedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center BetweenTwoSection">
                    <h4 className="section-title">YOU MAY LIKE</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row>
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Link to="/productDetails">
                                <Card className="card w-100 image-box ">
                                    <img src="images/product2.jpg"/>
                                    <Card.Body>
                                        <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                        <p className="product-price-on-card">Price: 3000TK</p>
                                    </Card.Body>
                                </Card>
                            </Link>

                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card  w-100  image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default SuggestedProducts;