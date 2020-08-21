import React from 'react';

export type DismissButtonProps = {
  buttonLabel: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function DismissButton({ buttonLabel, onClick }: DismissButtonProps) {
  return (
    <span>
      <button
        className="rounded-full py-2 px-4 bg-white shadow"
        onClick={onClick}
        style={{ outline: 'none' }}
        type="button"
      >
        {buttonLabel}
      </button>
    </span>
  );
}

export default DismissButton;
