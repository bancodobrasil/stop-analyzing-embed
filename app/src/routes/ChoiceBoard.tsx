import React, { useState } from 'react';
import Card, { CardProps } from '../components/Card';

type ChoiceBoardCards = {
    left: CardProps,
    right: CardProps
}

function ChoiceBoard() {

    /** TODO: should be implemented getting the card from whatever */
    const getCard = (whatever) => {
        let cards = [
            {
                id: "0",
                title: "Choice 1",
                paragraph: "That's a good choice!",
                imageURL: "https://picsum.photos/seed/x1/200/300",
                buttonLabel: "Like"
            },
            {
                id: "1",
                title: "Choice 2",
                paragraph: "Nope, that's a good choice!",
                imageURL: "https://picsum.photos/seed/x2/200/300"
            },
            {
                id: "2",
                title: "Choice 3",
                paragraph: "That's the greatest choice!",
                imageURL: "https://picsum.photos/seed/x3/200/300",
                buttonLabel: "Like"
            },
            {
                id: "3",
                title: "Choice 4",
                paragraph: "That's the choice!",
                imageURL: "https://picsum.photos/seed/x4/200/300",
                buttonLabel: "Like"
            },
            {
                id: "4",
                title: "Choice 5",
                paragraph: "It is a great choice!",
                imageURL: "https://picsum.photos/seed/x5/200/300"
            },
            {
                id: "5",
                title: "Choice 6",
                paragraph: "Ahh much better now!!!",
                imageURL: "https://picsum.photos/seed/x6/200/300",
                buttonLabel: "Like"
            }
        ]
        return cards[whatever];
    }


    const commonOnClick = (e, cardProps) => {
        console.log(`Button LIKE Clicked at ${cardProps.title} - ${cardProps.id}`);
        likedCardsState.push(cardProps);
        setLikedCardsState(likedCardsState);
        
        // rand  calc - should be deleted, only to get different cards in both sides
        const randCardLeft = Math.floor(Math.random() * (5 + 1));
        let randCardRigth;
        do {
            randCardRigth = Math.floor(Math.random() * (5 + 1));
        } while (randCardLeft === randCardRigth)
        // rand  calc - done
        
        cardsState = {
            left: getCard(randCardLeft),
            right: getCard(randCardRigth)
        }
        setCardsState(cardsState);
    }

    let likedCards: Array<CardProps> = [];
    let [likedCardsState, setLikedCardsState] = useState(likedCards);

    let cards: ChoiceBoardCards;
    // To be loaded from DB or whatever
    cards = {
        left: getCard(0),
        right: getCard(1)
    }

    let [cardsState, setCardsState] = useState(cards);

    return (
        <div className="row text-center">
            <div className="col-lg-6 mb-4">
                <Card
                    id={cardsState.left.id}
                    title={cardsState.left.title}
                    paragraph={cardsState.left.paragraph}
                    imageURL={cardsState.left.imageURL}
                    buttonLabel={cardsState.left.buttonLabel}
                    onClick={commonOnClick}
                />
            </div>
            <div className="col-lg-6 mb-4">
                <Card
                    id={cardsState.right.id}
                    title={cardsState.right.title}
                    paragraph={cardsState.right.paragraph}
                    imageURL={cardsState.right.imageURL}
                    buttonLabel={cardsState.right.buttonLabel}
                    onClick={commonOnClick}
                />
            </div>
            <div>
                <pre>
                    {likedCardsState.length > 0  && `Liked choices:`}
                    {likedCardsState &&  likedCardsState.map((theCardLiked, index) => {
                        return (
                            <p>
                                {theCardLiked.title} &nbsp;
                            </p>) 
                    })}
                </pre>
            </div>
        </div>
    )
}

export default ChoiceBoard