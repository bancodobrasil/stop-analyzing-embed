import React from 'react';

export type DismissButtonProps = {
    handleDismiss: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
};

function DismissButton({
    handleDismiss
}: DismissButtonProps) {
    return (
        <span style={{ padding: '5px' }}>
            <button 
              onClick={handleDismiss}
            >I don't like either <span role="img" aria-label="thinking-face">🤔</span>. Next, please!</button>
        </span>
    );
}

export default DismissButton;
