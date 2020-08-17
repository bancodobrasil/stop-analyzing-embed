import React from 'react';

export type DismissButtonProps = {
    buttonLabel: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
};

function DismissButton({
    buttonLabel,
    onClick
}: DismissButtonProps) {
    return (
        <span style={{ padding: '5px' }}>
            <button 
              onClick={onClick}
            >{buttonLabel}</button>
        </span>
    );
}

export default DismissButton;
