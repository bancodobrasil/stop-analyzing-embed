import React, { MouseEvent } from 'react';
import { ChoiceCardProps } from './ChoiceCard';

export type CardButtonProps = {

    /** Button Label */
    buttonLabel: string,

    /** Button Function */
    onClick: Function,

    /** Button is primary (for bootstrap css) */
    isPrimary?: boolean,

    /** CardProps to be used in onClick method only */
    cardProps?: ChoiceCardProps
}

function CardButton({
    buttonLabel,
    onClick,
    isPrimary = false,
    cardProps
}: CardButtonProps) {
    
    const onButtonClick = (event: MouseEvent) => {
        event.stopPropagation(); // It is necessary because it could trigger twice or other onClick.
        if (onClick) {
            onClick(event, cardProps);
        }
    }

    const btnClassName = isPrimary? 'btn-primary' : 'btn-default'

    return (
        <span style={{padding:"5px"}}>
            {buttonLabel && <button type="button" className={`btn ${btnClassName} mt-auto`} onClick={onButtonClick}>
                {buttonLabel}
            </button>}
        </span>
    )
}

export default CardButton