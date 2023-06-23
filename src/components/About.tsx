import React from "react";

interface IState {}
interface IProps {}

let About: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success fw-bold">About Us</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate deserunt aliquam animi consequuntur pariatur, omnis,
              tempora alias repellendus natus cum delectus voluptatum voluptates
              tempore iste quia aut? Sit, tempora fugit?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="list-group">
              <li className="list-group-item">
                App Name :{" "}
                <span className="fw-bold">React Router with TypeScript</span>
              </li>
              <li className="list-group-item">
                Author : <span className="fw-bold">AUTHOR NAME</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
