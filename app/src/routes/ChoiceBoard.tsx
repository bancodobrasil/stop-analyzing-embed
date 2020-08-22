import anime from 'animejs/lib/anime';
import React, { MouseEvent, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import image1 from '../assets/images/andrew-johnson-ULKR-8CtHmM-unsplash.jpg';
import image2 from '../assets/images/providence-doucet-FjwtL3YSZ9U-unsplash.jpg';
import ChoiceCard from '../components/ChoiceCard';
import DismissButton from '../components/DismissButton';
import useChoiceBoardModel from './useChoiceBoardModel';

const H3 = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 2rem;
`;

function ChoiceBoard() {
  const { t } = useTranslation();
  // eslint-disable-next-line
  const { selectedItems, appendSelection } = useChoiceBoardModel();

  const [dismissed, setDismissed] = useState(false);
  const animationDuration = 750;

  // key variables for refreshing cards
  const [key1, setKey1] = useState(`${new Date().getTime()}${1}`);
  const [key2, setKey2] = useState(`${new Date().getTime()}${2}`);

  useEffect(() => {
    const refreshCards = () => {
      setDismissed(false);

      // After dismissing, get new data and re-render the cards here:
      setKey1(`${new Date().getTime()}${1}`);
      setKey2(`${new Date().getTime()}${2}`);
    };

    const timer = setTimeout(() => {
      if (dismissed) refreshCards();
    }, animationDuration * 2);
    const cleanup = () => clearTimeout(timer);
    return cleanup;
  }, [dismissed]);

  const commonOnClick = (_, card: never) => {
    appendSelection(card);
  };

  const dismissButtonLabel = "I don't like either 🤔. Next, please!";

  const handleDismiss = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');

    anime({
      targets: card1,
      translateX: -1500,
      duration: animationDuration,
      rotate: '180deg',
      easing: 'easeInElastic(1, 1)',
    });
    anime({
      targets: card2,
      translateX: +1500,
      duration: animationDuration,
      rotate: '180deg',
      easing: 'easeInElastic(1, 1)',
    });

    setDismissed(true);
  };

  return (
    <Suspense fallback="loading">
      <div style={{ overflow: 'hidden' }}>
        <section className="container">
          <div className="grid h-screen">
            <div className="my-auto">
              <div className="text-center">
                <div className="mb-10">
                  <H3>{t('Which one would you like to choose?')} </H3>
                </div>
              </div>
              <div className="grid grid-cols-2 text-center">
                <div className="mb-4">
                  <ChoiceCard
                    id="card1"
                    title={t('Choice 1')}
                    paragraph={t("That's a good choice!")}
                    imageURL={image1}
                    imageALT="Light Pink Rose"
                    onClick={commonOnClick}
                    ariaLabel="light pink rose"
                    key={key1}
                  />
                </div>
                <div className="mb-4">
                  <ChoiceCard
                    id="card2"
                    title={t('Choice 2')}
                    paragraph={t("Nope, that's a good choice!")}
                    imageURL={image2}
                    imageALT="Pink Rose in Full Bloom"
                    onClick={commonOnClick}
                    ariaLabel="pink rose in full bloom"
                    key={key2}
                  />
                </div>
              </div>
            </div>
            <div className="h-10 grid-cols-1 text-center">
              <DismissButton
                buttonLabel={dismissButtonLabel}
                onClick={handleDismiss}
              />
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

export default ChoiceBoard;
