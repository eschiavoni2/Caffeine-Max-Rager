import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PageHeader from '../components/PageHeader';



export default class Tracker extends React.Component {
    // constructor(props){
    //     super(props);
        // this.onChangeBeverage = this.onChangeBeverage.bind(this);
        // this.onChangeQuantity = this.onChangeQuantity.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        state = {
            selectedValue: 'selectBeverage',
            setQty: ''
        }

        onChangeBeverage = e =>{
            this.setState({
                selectedValue: e.target.value
            });
        }
        onChangeQuantity = e =>{
            this.setState({
                setQty: e.target.value
            });
        }
        onSubmit = e => {
            e.preventDefault();
          
            console.log("You have submitted:", this.state.selectedValue);
        };

    
    render() {
        return (
            <Container>
                <Row className="mt-4 justify-content-center">
                    <Col xs={6}>
                        <PageHeader/>
                        <Card>
                            <Card.Body as={Row}>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <Card.Title>Add Your Beverage</Card.Title>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col>
                                                <Card.Text>
                                                    Add your beverage and the quantity to find out how much caffeine you've had today along with how much more you can have without exceeding 500mg.
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form onSubmit={this.onSubmit}>
                                                    <Stack gap={3}>
                                                    <Form.Group as={Row}>
                                                        <Col xs="2">
                                                            <Form.Label className="mt-1" htmlFor="type">Beverage:</Form.Label>
                                                        </Col>
                                                        <Col xs={8}>
                                                            <Form.Select  name="type" id="type" onChange={this.onChangeBeverage} value={this.state.selectedValue}>
                                                                <option disabled value="selectBeverage">Select Beverage Type</option>
                                                                <option value="monster">Monster Ultra Sunrise</option>
                                                                <option value="coffee">Black Coffee</option>
                                                                <option value="americano">Americano</option>
                                                                <option value="nos">Sugar Free NOS</option>
                                                                <option value="five_hour">Five Hour Energy</option>
                                                            </Form.Select>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="align-items-center">
                                                            <Col xs="2">
                                                                <Form.Label className="mt-1" htmlFor="qty">Quantity:</Form.Label>
                                                            </Col>
                                                            <Col xs={3}>
                                                                <Form.Control type="number" name="reps" id="qty" placeholder="qty" onChange={this.onChangeQuantity} value={this.state.setQty}/>
                                                            </Col>
                                                    </Form.Group>
                                                    <Row className="justify-content-center">
                                                        <Button 
                                                        //   as={Col} 
                                                          xs="4" 
                                                          type="submit" 
                                                        //   disabled={this.state.selectedValue === "selectBeverage"}
                                                          variant="secondary">
                                                            Enter
                                                        </Button>{' '}
                                                    </Row>
                                                    </Stack>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

