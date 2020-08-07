import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import image1 from '../assets/images/andrew-johnson-ULKR-8CtHmM-unsplash.jpg';
import image2 from '../assets/images/providence-doucet-FjwtL3YSZ9U-unsplash.jpg';
import ChoiceCard from '../components/ChoiceCard';

import useChoiceBoardModel from './useChoiceBoardModel';

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

  const commonOnClick = (_, card: never) => {
    appendSelection(card);
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
        </div>
      </section>
    </Suspense>
  );
}

export default ChoiceBoard;
