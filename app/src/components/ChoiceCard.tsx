import React, { MouseEvent } from 'react';

export type ChoiceCardProps = {
  /** card identifier */
  id?: string;

  /** card title placed on top of the card */
  title?: string;

  /** small text placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed below the image (if present) */
  paragraph?: string;

  /** image placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed bellow the title (if present)  */
  imageURL?: string;

  /** alt text for image */
  imageALT?: string;

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

  ariaLabel?: string;
};

// const CardWrapper = styled.div`
//     width: 100%;
// `;

// const H2 = styled.h2`
//     font-size: 1.5rem;
//     font-weight: 700;
//     line-height: 2;
//     color: #59cd90;
// `;

// const IMG = styled.img`
//   width: 100%;
//   height: 400px;
// `;

// const Para = styled.p`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 2rem;
//     color: #59cd90;
// `;

function ChoiceCard({
  id,
  title,
  paragraph,
  imageURL,
  imageALT,
  elementsPlacement,
  buttonLabel,
  onClick,
  ariaLabel,
}: ChoiceCardProps) {
  let subParagraph = (
    <>
      {paragraph && (
        <p className="inline-block font-semibold text-base mb-4 px-3 py-1">
          {paragraph}
        </p>
      )}
    </>
  );

  let image = (
    <>
      {imageURL && imageALT && (
        <img
          className="w-full object-cover"
          style={{ maxHeight: '400px' }}
          src={imageURL}
          alt={imageALT}
        />
      )}
    </>
  );

  if (elementsPlacement === 'pi') {
    subParagraph = (
      <>
        {paragraph && (
          <p className="inline-block font-semibold  text-base mb-4 px-3 py-1">
            {paragraph}
          </p>
        )}
      </>
    );
    image = (
      <>
        {imageURL && imageALT && (
          <img
            className="w-full object-cover"
            style={{ maxHeight: '400px' }}
            src={imageURL}
            alt={imageALT}
          />
        )}
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
        imageALT,
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
        imageALT,
        elementsPlacement,
        buttonLabel,
      });
    }
  };

  return (
    <div
      role="region"
      className="h-100 border-0 bg-transparent"
      onClick={onCardClick}
      id={id}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div
        className="max-w-sm overflow-hidden shadow-lg m-auto w-full h-100 bg-white"
        style={{ borderRadius: '1rem' }}
      >
        {image}
        {title && <div className="font-bold text-2xl py-2">{title}</div>}
        {subParagraph}
        {buttonLabel && (
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export default ChoiceCard;
