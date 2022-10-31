import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const name = {
	firstName: "Erika",
	lastName: "Zibelnik"
};

const about = "This application utilizes Github, React, PHP, PHPMyAdmin (mySQL), React-Bootstrap, and Heroku. On the tracking page you can enter the qty and submit which will tell you how much caffeine you've had and how much more you can consume for the day."
const aboutMe = "Passionate full stack developer with strong understanding of programming standards and best practices, implementation of functionality enhancements, and customer needs. Eager to challenge myself in an environment where innovation, creativity, and education are valued. Demonstrated experience with troubleshooting, problem solving, and quality assurance. Quick learner with excellent collaboration and communication skills.";

export default class Home extends React.Component {
	render() {
		return (
			<Container className="mt-5">
				<Row className="justify-content-center">
					<Col sm={4} className="mt-5">
						<Card>
							<Card.Img src="./images/profile.png" />
						</Card>
					</Col>
					<h2 className="d-flex justify-content-center mt-2">{name.firstName + " " + name.lastName}</h2>
				</Row>
				<Row className="mt-3 d-flex justify-content-center">
					<Col sm={9}>
						<div>
							<h4 className="d-flex justify-content-center">About me</h4>
							<p className="text-center">{aboutMe}</p>
						</div>
					</Col>
				</Row>
				<Row className="mt-4 pb-5 d-flex justify-content-center">
					<Col sm={6}>
						<Card>
							<Card.Title className="mt-1 d-flex justify-content-center">About the tracker</Card.Title>
							<Card.Body className="text-center">{about}</Card.Body>
							<div>
								<Row className="align-items-center justify-content-center">
									<Col sm={3}>
										<Card.Img src="./images/react.png" />
									</Col>
									<Col sm={2}>
										<Card.Img src="./images/php_logo.png" />
									</Col>
									<Col sm={1}>
										<Card.Img src="./images/heroku.png" />
									</Col>
									<Col sm={3}>
										<Card.Img src="./images/bootstrap.png" />
									</Col>
									<Col sm={2}>
										<Card.Img src="./images/mysql.png" />
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
			
					
		)
	}
}
