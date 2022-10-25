import React from "react";

const name = {
    firstName: "Erika",
    lastName: "Zibelnik"
};
const about =   "This application utilizes React, JSX, Bootstrap, PHP, PHPMyAdmin (mySQL), and NodeJs. On the tracking page you can enter the qty and submit which will tell you how much caffeine you've had and how much more you can consume for the day."
export default class Home extends React.Component {
    render() {
        return (
            <div className="mt-5">
                <h1>{name.firstName + " " + name.lastName}</h1>
                <p>{about}</p>
            </div>
        )
    }
}
