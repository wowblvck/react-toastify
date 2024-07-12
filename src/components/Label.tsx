import { ToastProps } from '../types';

export const Labels = {};

export type LabelParams = Pick<ToastProps, 'label' | 'type'>;

export function getLabel({ label, type }: LabelParams) {
  let Label: React.ReactNode = null;

  if (label === false) {
    // hide
  } else if (type === 'error' && label?.error) {
    Label = label.error;
  } else if (type === 'info' && label?.info) {
    Label = label.info;
  } else if (type === 'success' && label?.success) {
    Label = label.success;
  } else if (type === 'warning' && label?.warning) {
    Label = label.warning;
  } else if (type === 'default' && label?.default) {
    Label = label.default;
  } else if (type === 'copy' && label?.copy) {
    Label = label.copy;
  }

  return Label;
}
