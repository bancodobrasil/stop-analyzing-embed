import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ChoiceCard, { ChoiceCardProps } from '../components/ChoiceCard';
import TimerComponent from '../components/TimerComponent/TimerComponent';

type ChoiceBoardCards = {
  left: ChoiceCardProps,
  right: ChoiceCardProps
}

const H3 = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #2e2a27;
`;


function ChoiceBoard() {
  const { t } = useTranslation();

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

let likedCards: Array<ChoiceCardProps> = [];
let [likedCardsState, setLikedCardsState] = useState(likedCards);

let cards: ChoiceBoardCards;
// To be loaded from DB or whatever
cards = {
    left: getCard(0),
    right: getCard(1)
}

let [cardsState, setCardsState] = useState(cards);

  return (
    <Suspense fallback="loading">
      <section className="container">
        <div className="row vh-100">
          <div className="col-12 my-auto">
            <div className="row text-center">
              <div className="col-lg-12 mb-4">
                <H3>
                  {t('Which one would you like to choose?')}{' '}
                  <TimerComponent timeout={15} />
                </H3>
                <div className="col-lg-12 mb-4">
                  <ProgressBar progress={20} />
                  <ProgressBar progress={50} />
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-6 mb-4">
                <ChoiceCard
                  title={t('Choice 1')}
                  paragraph={t("That's a good choice!")}
                  imageURL="https://images.unsplash.com/photo-1565995240383-ed5204015aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2160&q=80"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <ChoiceCard
                  title={t('Choice 2')}
                  paragraph={t("Nope, that's a good choice!")}
                  imageURL="https://picsum.photos/seed/x2/200/300"
                />
              </div>
            </div>
          </div>
          </div>
          </section>
    </Suspense>
  )
}

export default ChoiceBoard;
