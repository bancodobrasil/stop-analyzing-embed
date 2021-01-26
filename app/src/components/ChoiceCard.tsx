import React, { KeyboardEvent, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
          style={{ height: '400px' }}
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

  const onCardClick = (event: MouseEvent | KeyboardEvent) => {
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

  const onCardKeydown = (event: KeyboardEvent) => {
    // Support keyboard accessibility by emulating mouse click on ENTER or SPACE keypress
    if (event.key === 'ENTER' || event.key === 'SPACE') {
      onCardClick(event);
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
      id={id}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div
        className="max-w-sm overflow-hidden shadow-lg m-auto w-full h-100 bg-white relative group"
        style={{ borderRadius: '1rem' }}
        tabIndex={0}
        onKeyDown={onCardKeydown}
        onClick={onCardClick}
        role="button"
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
        <div
          className="hidden group-hover:block absolute top-0 h-full w-full cursor-pointer"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        >
          <div 
            className="font-bold text-2xl text-white block relative top-1/2"
          >
            {t('Choose')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceCard;
