import { ToastProps } from '../types';

export const Labels = {};

export type LabelParams = Pick<ToastProps, 'label' | 'type' | 'isLoading'>;

export function getLabel({ label, type, isLoading }: LabelParams) {
  if (label === false) {
    return null;
  }

  if (isLoading && label?.pending) {
    return label.pending;
  }

  return label?.[type] ?? null;
}
