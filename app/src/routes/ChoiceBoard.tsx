import React from "react";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";

function ChoiceBoard() {
  return (
    <section className="container">
      <div className="row vh-100">
        <div className="col-12 my-auto">
          <div className="row text-center">
            <div className="col-lg-12 mb-4">
              <ProgressBar />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-6 mb-4">
              <Card
                title="Choice 1"
                paragraph="That's a good choice!"
                imageURL="https://picsum.photos/seed/x1/200/300"
              />
            </div>
            <div className="col-lg-6 mb-4">
              <Card
                title="Choice 2"
                paragraph="Nope, that's a good choice!"
                imageURL="https://picsum.photos/seed/x2/200/300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChoiceBoard;
