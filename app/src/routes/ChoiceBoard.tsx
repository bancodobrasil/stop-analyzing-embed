import anime from 'animejs/lib/anime.es.js';
import React, { MouseEvent, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import image1 from '../assets/images/andrew-johnson-ULKR-8CtHmM-unsplash.jpg';
import image2 from '../assets/images/providence-doucet-FjwtL3YSZ9U-unsplash.jpg';
import ChoiceCard from '../components/ChoiceCard';
import useChoiceBoardModel from './useChoiceBoardModel';
import DismissButton from '../components/DismissButton';

const H3 = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #fff;
`;

function ChoiceBoard() {
  const { t } = useTranslation();
  // eslint-disable-next-line
  const { selectedItems, appendSelection } = useChoiceBoardModel();

  const [dismissed, setDismissed] = useState(false);
  const animationDuration = 750;

  useEffect(() => {
    console.log(Date.now());
    console.log(dismissed);

    const refreshCards = () => {
      setDismissed(false);
      // re-render the cards here.
    };
    const timer = setTimeout(() => refreshCards(), animationDuration);
    const cleanup = () => clearTimeout(timer);
    return cleanup();
  }, [dismissed]);

  const commonOnClick = (_, card: never) => {
    appendSelection(card);
  };

  const dismissButtonLabel = `I don't like either 🤔. Next, please!`;

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
    </Suspense>
  );
}

export default ChoiceBoard;
