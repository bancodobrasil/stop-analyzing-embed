import React, { MouseEvent } from 'react';
// import * as Icon from 'react-feather';

export type ButtonProps = {

    /** Button Label */
    buttonLabel: string,

    /** Button Function */
    onClick: Function,

    /** Button is primary (for bootstrap css) */
    isPrimary?: boolean
}

type ButtonListProps = {

    /** List of ButtonProps */
    listButtons: Array<ButtonProps>
}

function Button({
    buttonLabel,
    onClick,
    isPrimary = false
}: ButtonProps) {
    
    const onButtonClick = (event: MouseEvent) => {
        event.stopPropagation(); // It is necessary because it could trigger twice.
        if (onClick) {
            onClick(event)
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

function ButtonsOptions({listButtons}: ButtonListProps) {

    return (
        <div>
            {listButtons &&  listButtons.map((theButton, index) => {
                return (<Button key={index}
                    buttonLabel={theButton.buttonLabel}
                    onClick={theButton.onClick}
                    isPrimary={theButton.isPrimary}
                />) 
            })}
        </div>
    )
}

export default ButtonsOptions