import React, { MouseEvent } from 'react';

import { ChoiceCardProps } from './ChoiceCard';

export type CardButtonProps = {
  /** Button Label */
  buttonLabel: string;

  /** Button Function */
  onClick: Function;

  /** Button is primary (for bootstrap css) */
  isPrimary?: boolean;

  /** CardProps to be used in onClick method only */
  cardProps?: ChoiceCardProps;
};

function CardButton({
  buttonLabel,
  onClick,
  isPrimary = false,
  cardProps,
}: CardButtonProps) {
  const onButtonClick = (event: MouseEvent) => {
    event.stopPropagation(); // It is necessary because it could trigger twice or other onClick.
    if (onClick) {
      onClick(event, cardProps);
    }
  };

  const btnClassName = isPrimary
    ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    : 'bg-accent-500 hover:bg-accent-700 text-white font-bold py-2 px-4 rounded';

  return (
    <span style={{ padding: '5px' }}>
      {buttonLabel && (
        <button
          type="button"
          className={`${btnClassName} mt-auto`}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      )}
    </span>
  );
}

export default CardButton;
