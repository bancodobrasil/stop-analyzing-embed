import React from 'react';
import Card from '../components/Card';


function LikeBoard() {

    const listButtons = [
        {
            buttonLabel: "Nope",
            onClick: () => {
                console.log("Button Nope Clicked")
            },
            isPrimary: true
        },
        {
            buttonLabel: "Like",
            onClick: () => {
                console.log("Button Like Clicked")
            }
        }
    ]

    return (
        <div className="row text-center">
            <div className="col-lg-12 mb-4">
                <Card
                    title="Like Mode Choice"
                    paragraph="That's a good choice!"
                    imageURL="https://picsum.photos/seed/x1/200/300"
                    onClick={() => {
                        console.log("Div clicked!!")
                    }}
                />
            </div>
        </div>
    )
}

export default LikeBoard