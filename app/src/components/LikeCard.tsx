import React, { DragEvent } from 'react';
import CardButton from './CardButton'

export type LikeCardProps = {

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

    /** function trigger when LIKE button is tap */
    onLikeClick?: Function,

    /** function trigger when DESLIKE button is tap */
    onDislikeClick?: Function,

    /** set if the card is dragable or not */
    draggable?: boolean
}

function LikeCard({
    id,
    title,
    paragraph,
    imageURL,
    elementsPlacement,
    onLikeClick,
    onDislikeClick,
    draggable
}: LikeCardProps) {

    const dragStart = (e: DragEvent) => {

        e.dataTransfer.setData('card_id', id);

        // It was added to hide the card during the drag&drop
        setTimeout(() => {
            document.getElementById(id)!.style.display = 'none'
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

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


    return (
        <div 
            id={id}
            className="card h-100"  
            draggable={draggable}
            {...(draggable ?  {onDragStart:dragStart} : {} )}
            {...(draggable ?  {onDragOver:dragOver} : {} )}
        >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                {title && <h2 className="card-title text-primary">{title}</h2>}
                {paragraphAndImage}
                <div>
                    {onLikeClick && <CardButton  buttonLabel="Like" onClick={onLikeClick} isPrimary={true} cardProps={{id,title}}></CardButton>}
                    {onDislikeClick && <CardButton  buttonLabel="Dislike" onClick={onDislikeClick} isPrimary={false} cardProps={{id,title}}></CardButton>}
                </div>
            </div>
            
        </div>
    )
}

export default LikeCard