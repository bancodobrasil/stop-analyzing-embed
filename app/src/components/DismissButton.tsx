import React from 'react';

export type DismissButtonProps = {
  buttonLabel: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function DismissButton({ buttonLabel, onClick }: DismissButtonProps) {
  return (
    <span>
      <button
        className="text-orange-200 rounded-lg border-2 border-red-700 p-2 border-opacity-50 bg-red-700 bg-opacity-25 shadow"
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </span>
  );
}

export default DismissButton;
