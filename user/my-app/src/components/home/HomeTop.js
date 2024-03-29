import React, {Component,Fragment} from'react';
import {Container,Row,Col} from 'react-bootstrap';
import MegaMenu from "./MegaMenu";
import SliderHome from"./SliderHome"


class HomeTop extends Component{
   render(){
       return(
           <Fragment>
               <Container className="p-0 TopSection  overflow-hidden" fluid={true}>
                   <Row className="p-0 m-0 overflow-hidden">
                       <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                           <MegaMenu/>
                       </Col>
                       <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                           <SliderHome/>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
       );
   }

}

export default HomeTop;