import React from 'react';
import LikeCard from '../components/LikeCard';


function LikeBoard() {

    return (
        <div className="row text-center">
            <div className="col-lg-12 mb-4">
                <LikeCard
                    id="X"
                    title="Like Mode Choice"
                    paragraph="That's a good choice!"
                    imageURL="https://picsum.photos/seed/x1/200/300"
                    onLikeClick={(e, card) => {
                        console.log("Like button clicked!!")
                        console.log(card)
                    }}
                    onDeslikeClick={(e, card) => {
                        console.log("Dislike button clicked!!")
                        console.log(card)
                    }}
                />
            </div>
        </div>
    )
}

export default LikeBoard