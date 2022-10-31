import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import View from "../components/View";

function Tracker() {
	const [tracking, setBev] = useState({
		bevType: ""
	});
	const [qty, setQty] = useState({
		bevQty: 0,
	})

	let quantityBev = (e) => setQty({ ...qty, bevQty: e.target.value });

	let selectBev = (e) => setBev({ ...tracking, bevType: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		const value = { qty: { bevQty: Number } }
		const type = { tracking: { bevType: String } }
		setQty(value)
		setBev(type)
		console.log(type);
		console.log(value);
		const headers = {
			"Content-Type": "application/json",
		}
		axios.post("http://localhost/ReactPHPcrud/insert_bev.php", { qty, tracking }, { headers: headers })
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
		window.location.reload(false);
	};

	return (
		<Container>
			<Row className="mt-4 justify-content-center">
				<Col xs={7}>
					<PageHeader />
					<Card className="mb-5" border="dark">
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
											Click the dropdowns to add your beverage and the quantity and then press enter. This will find out how much caffeine you"ve had today along with how much more you can consume without exceeding 500mg.
										</Card.Text>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form onSubmit={handleSubmit}>
											<Stack gap={3}>
												<Form.Group as={Row}>
													<Col xs={2}>
														<Form.Label className="mt-1" htmlFor="type">Beverage:</Form.Label>
													</Col>
													<Col xs={8}>
														<Form.Select
															onChange={selectBev}
															name="bevType"
															required
														>
															<option default value="selectBeverage">Select Beverage Type</option>
															<option id="1" value="Monster Ultra Sunrise">Monster Ultra Sunrise</option>
															<option id="2" value="Black Coffee">Black Coffee</option>
															<option id="3" value="Americano">Americano</option>
															<option id="4" value="Sugar Free NOS">Sugar Free NOS</option>
															<option id="5" value="Five Hour Energy">Five Hour Energy</option>
														</Form.Select>
													</Col>
												</Form.Group>
												<Form.Group as={Row} className="align-items-center">
													<Col xs={2}>
														<Form.Label className="mt-1" htmlFor="qty">Quantity:</Form.Label>
													</Col>
													<Col xs={3}>
														<Form.Control
															type="number"
															pattern="^-?[0-9]\d*\.?\d*$"
															name="bevQty"
															defaultValue={qty.bevQty}
															onChange={quantityBev}
															min="1"
															max="5"
															required
														/>
													</Col>
												</Form.Group>
												<Row >
													<Col>
														<Button
															className="w-25"
															variant="outline-secondary"
															type="submit"
														>
															Enter
														</Button>
													</Col>
												</Row>
											</Stack>
										</Form>
									</Col>
								</Row>
							</Col>
						</Card.Body>
					</Card>
				</Col>
				<View />
			</Row>
		</Container>
	);
}

export default Tracker;

