import React from 'react';
import { Default } from '../utils';
import { CloseToastFunc, Theme, TypeOptions } from '../types';

export interface CloseButtonProps {
  closeToast: CloseToastFunc;
  type: TypeOptions;
  ariaLabel?: string;
  theme: Theme;
}

export function CloseButton({ closeToast, theme, ariaLabel = 'close' }: CloseButtonProps) {
  return (
    <button
      className={`${Default.CSS_NAMESPACE}__close-button ${Default.CSS_NAMESPACE}__close-button--${theme}`}
      type="button"
      onClick={e => {
        e.stopPropagation();
        closeToast(true);
      }}
      aria-label={ariaLabel}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.92385 7.86672L2.19525 12.5953L3.13806 13.5381L7.86666 8.80953L12.8619 13.8048L13.8047 12.862L8.80947 7.86672L13.5381 3.13812L12.5953 2.19531L7.86666 6.92391L3.13806 2.19531L2.19525 3.13812L6.92385 7.86672Z"
        />
      </svg>
    </button>
  );
}
