import React, { useState } from 'react';
import Card, {CardProps} from '../components/Card';

function ChoiceBoard() {

    let cards: Array<CardProps>;
    // To be loaded from DB or whatever
    cards = [
        {
            title: "Choice 1",
            paragraph: "That's a good choice!",
            imageURL: "https://picsum.photos/seed/x1/200/300"
        },
        {
            title: "Choice 2",
            paragraph: "Nope, that's a good choice!",
            imageURL: "https://picsum.photos/seed/x2/200/300"
        },
        {
            title: "Choice 3",
            paragraph: "That's the greatest choice!",
            imageURL: "https://picsum.photos/seed/x3/200/300"
        },
        {
            title: "Choice 4",
            paragraph: "That's the choice!",
            imageURL: "https://picsum.photos/seed/x4/200/300"
        },
        {
            title: "Choice 5",
            paragraph: "It is a great choice!",
            imageURL: "https://picsum.photos/seed/x5/200/300"
        }
    ]
    let [cardsState, setCardsState] = useState(cards);

    const removeCard = (card) => {
        cardsState = cardsState.filter(item => item.title !== card.title);
        setCardsState(cardsState);
    }

    const listButtons = [
        {
            buttonLabel: "Nope",
            onClick: (ev, cardProps) => {
                console.log(`Button NOPE Clicked at ${cardProps.title}`);
                removeCard(cardProps);
            },
            isPrimary: true
        },
        {
            buttonLabel: "Like",
            onClick: (ev, cardProps) => {
                console.log(`Button LIKE Clicked at ${cardProps.title}`);
                removeCard(cardProps);
            }
        }
    ]

    return (
        <div className="row text-center">
            
                {cardsState &&  cardsState.map((theCard, index) => {
                    return (
                        <div className="col-lg-6 mb-4" key={index}>
                            <Card
                                {...(theCard.title ? {title: theCard.title} : {})}
                                {...(theCard.paragraph ? {paragraph: theCard.paragraph} : {})}
                                {...(theCard.imageURL ? {imageURL: theCard.imageURL} : {})}
                                {...(theCard.onClick ? {onClick: theCard.onClick} : {})}
                                {...(theCard.elementsPlacement ? {elementsPlacement: theCard.elementsPlacement} : {})}
                                {...(theCard.buttonLabel ? {buttonLabel: theCard.buttonLabel} : {})}
                                listButtons={listButtons}
                            />
                        </div>) 
                })}
        </div>
    )
}

export default ChoiceBoard