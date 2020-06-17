import React from 'react';
import Card from '../components/Card';


function ChoiceBoard() {

    return (
        <div className="row text-center">
            <div className="col-lg-6 mb-4">
                <Card
                    title="Choice 1"
                    paragraph="That's a good choice!"
                    imageURL="https://picsum.photos/seed/x1/200/300"
                    onClick={() => {
                        console.log("Choice 1!!")
                    }}
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
    )
}

export default ChoiceBoard