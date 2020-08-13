import React, { DragEvent } from 'react';

import CardButton from './CardButton';

export type LikeCardProps = {
  /** card unique identified */
  id: string;

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

  /** function trigger when LIKE button is tap */
  onLikeClick?: Function;

  /** function trigger when DESLIKE button is tap */
  onDislikeClick?: Function;

  /** set if the card is dragable or not */
  draggable?: boolean;
};

function LikeCard({
  id,
  title,
  paragraph,
  imageURL,
  elementsPlacement,
  onLikeClick,
  onDislikeClick,
  draggable,
}: LikeCardProps) {
  const dragStart = (e: DragEvent) => {
    e.dataTransfer.setData('card_id', id);

    // It was added to hide the card during the drag&drop
    setTimeout(() => {
      document.getElementById(id)!.style.display = 'none';
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  let image = (
    <>
      {imageURL && (
        <img alt={imageURL} className="w-full object-cover" src={imageURL} />
      )}
    </>
  );
  let subParagraph = (
    <>{paragraph && <p className="text-gray">{paragraph}</p>}</>
  );

  if (elementsPlacement === 'pi') {
    image = (
      <>
        {imageURL && (
          <img alt={imageURL} className="w-full object-cover" src={imageURL} />
        )}
      </>
    );
    subParagraph = <>{paragraph && <p className="text-gray">{paragraph}</p>}</>;
  }

  return (
    <div
      id={id}
      className="max-w-sm rounded overflow-hidden shadow-lg h-100"
      draggable={draggable}
      {...(draggable ? { onDragStart: dragStart } : {})}
      {...(draggable ? { onDragOver: dragOver } : {})}
    >
      <div className="flex flex-col justify-center items-center">
        {image}
        {title && <h2 className="font-bold">{title}</h2>}
        {subParagraph}
        <div>
          {onLikeClick && (
            <CardButton
              buttonLabel="Like"
              onClick={onLikeClick}
              isPrimary={true}
              cardProps={{ id, title }}
            />
          )}
          {onDislikeClick && (
            <CardButton
              buttonLabel="Dislike"
              onClick={onDislikeClick}
              isPrimary={false}
              cardProps={{ id, title }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeCard;
