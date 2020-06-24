import React, { MouseEvent } from 'react';
import { CardProps } from './Card';
// import * as Icon from 'react-feather';

export type ButtonProps = {

    /** Button Label */
    buttonLabel: string,

    /** Button Function */
    onClick: Function,

    /** Button is primary (for bootstrap css) */
    isPrimary?: boolean,

    /** Other Properties, to be passed as parameter to onClick */
    props?: CardProps
}

type ButtonListProps = {

    /** List of ButtonProps */
    listButtons: Array<ButtonProps>,

    /** Other Properties, to be passed as parameter to onClick */
    props?: CardProps
}

function Button({
    buttonLabel,
    onClick,
    isPrimary = false,
    props
}: ButtonProps) {
    
    const onButtonClick = (event: MouseEvent) => {
        event.stopPropagation(); // It is necessary because it could trigger twice.
        if (onClick) {
            onClick(event, props);
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

function ButtonsOptions({
    listButtons, 
    props
    }: ButtonListProps) {

    return (
        <div>
            {listButtons &&  listButtons.map((theButton, index) => {
                return (<Button key={index}
                    buttonLabel={theButton.buttonLabel}
                    onClick={theButton.onClick}
                    isPrimary={theButton.isPrimary}
                    props={props}
                />) 
            })}
        </div>
    )
}

export default ButtonsOptions