import React, { MouseEvent } from 'react';
import CardButton from './CardButton'

export type ChoiceCardProps = {

    /** card unique identified */
    id: string,

    /** card title placed on top of the card */
    title?: string,

    /** small text placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed below the image (if present) */
    paragraph?: string,

    /** image placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed bellow the title (if present)  */
    imageURL?: string,

    /** how the elements are positioned on the card. Possible options:
     * - pi
     * - ip
     * pi = paragraph then image
     * ip = image then paragraph
     */
    elementsPlacement?: string,

    /** if present, displays a button with this label and the onClick event is triggered only by the button. 
     *  if not present, no button is shown and the onClick event is triggered by the Card click event
     * */
    buttonLabel?: string,

    /** function invoked when the card or button is clicked */
    onClick?: Function
}

function ChoiceCard({
    id,
    title,
    paragraph,
    imageURL,
    elementsPlacement,
    buttonLabel,
    onClick
}: ChoiceCardProps) {

    let paragraphAndImage = <>
        {imageURL && <img alt={imageURL} src={imageURL} />}
        {paragraph && <p className="card-text">{paragraph}</p>}
    </>

    if (elementsPlacement === "pi") {
        paragraphAndImage = <>
            {paragraph && <p className="card-text">{paragraph}</p>}
            {imageURL && <img alt={imageURL} src={imageURL} />}
        </>
    }

    const onCardClick = (event: MouseEvent) => {
        if (!buttonLabel && onClick) {
            onClick(event, {
                id,
                title,
                paragraph,
                imageURL,
                elementsPlacement,
                buttonLabel
            })
        }
    }
    const onButtonClick = (event: MouseEvent) => {
        if (onClick) {
            onClick(event, {
                id,
                title,
                paragraph,
                imageURL,
                elementsPlacement,
                buttonLabel
            })
        }
    }

    return (
        <div className="card h-100" onClick={onCardClick} >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                {title && <h2 className="card-title text-primary">{title}</h2>}
                {paragraphAndImage}
                {buttonLabel && <CardButton  buttonLabel={buttonLabel} onClick={onButtonClick} isPrimary={true} cardProps={{id,title}}></CardButton>}
            </div>
            
        </div>
    )
}

export default ChoiceCard