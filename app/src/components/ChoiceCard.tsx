import React, { MouseEvent } from 'react';
import styled from 'styled-components';

export type ChoiceCardProps = {
  /** card identifier */
  id?: string;

  /** card title placed on top of the card */
  title?: string;

  /** small text placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed below the image (if present) */
  paragraph?: string;

  /** image placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed bellow the title (if present)  */
  imageURL?: string;

  /** how the elements are positioned on the card. Possible options:
   * - pi
   * - ip
   * pi = paragraph then image
   * ip = image then paragraph
   */
  elementsPlacement?: string;

  /** if present, displays a button with this label and the onClick event is triggered only by the button.
   *  if not present, no button is shown and the onClick event is triggered by the Card click event
   * */
  buttonLabel?: string;

  /** function invoked when the card or button is clicked */
  onClick?: Function;
};

const CardWrapper = styled.div`
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2;
  color: #59cd90;
`;

const IMG = styled.img`
  width: 100%;
  height: 400px;
`;

const Para = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  color: #59cd90;
`;

function ChoiceCard({
  id,
  title,
  paragraph,
  imageURL,
  elementsPlacement,
  buttonLabel,
  onClick,
}: ChoiceCardProps) {
  let paragraphAndImage = (
    <>
      {imageURL && <IMG src={imageURL} />}
      {paragraph && <Para className="card-text">{paragraph}</Para>}
    </>
  );

  if (elementsPlacement === 'pi') {
    paragraphAndImage = (
      <>
        {paragraph && <Para className="card-text">{paragraph}</Para>}
        {imageURL && <IMG image={imageURL} />}
      </>
    );
  }

  const onCardClick = (event: MouseEvent) => {
    if (!buttonLabel && onClick) {
      onClick(event, {
        id,
        title,
        paragraph,
        imageURL,
        elementsPlacement,
        buttonLabel,
      });
    }
  };

  const onButtonClick = (event: MouseEvent) => {
    if (onClick) {
      onClick(event, {
        id,
        title,
        paragraph,
        imageURL,
        elementsPlacement,
        buttonLabel,
      });
    }
  };

  return (
    <div role="region" className="card h-100" onClick={onCardClick}>
      <CardWrapper>
        {title && <H2>{title}</H2>}
        {paragraphAndImage}
        {buttonLabel && (
          <button
            type="button"
            className="btn btn-primary mt-auto"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        )}
      </CardWrapper>
    </div>
  );
}

export default ChoiceCard;
