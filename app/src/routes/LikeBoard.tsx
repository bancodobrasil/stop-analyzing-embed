import React from 'react';
import LikeCard from '../components/LikeCard';
import DropCardArea from '../components/DropCardArea';


function LikeBoard() {

    const dislikeClick = (e, card) => {
        console.log("Dislike button clicked!!")
        console.log(card)
    }

    const likeClick = (e, card) => {
        console.log("Like button clicked!!")
        console.log(card)
    }

    return (
        <div className="row text-center">
            <DropCardArea onDrop={dislikeClick} className="dropDislikeArea" />
            <div className="board">
                <LikeCard
                    id="X"
                    title="Like Mode Choice"
                    paragraph="That's a good choice!"
                    imageURL="https://picsum.photos/seed/x1/200/300"
                    onLikeClick={likeClick}
                    onDislikeClick={dislikeClick}
                    draggable={true}
                />
            </div>
            <DropCardArea onDrop={likeClick} className="dropLikeArea"/>
        </div>
    )
}

export default LikeBoard