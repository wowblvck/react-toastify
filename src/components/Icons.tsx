import React, { cloneElement, isValidElement } from 'react';

import { Theme, ToastProps, TypeOptions } from '../types';
import { Default, isFn } from '../utils';

/**
 * Used when providing custom icon
 */
export interface IconProps {
  theme: Theme;
  type: TypeOptions;
  isLoading?: boolean;
}

export type BuiltInIconProps = React.SVGProps<SVGSVGElement> & IconProps;

const Svg: React.FC<BuiltInIconProps> = ({
  theme,
  type,
  isLoading,
  ...rest
}) => (
  <svg
    viewBox="0 0 12 12"
    width="100%"
    height="100%"
    fill={
      theme === 'colored'
        ? 'currentColor'
        : `var(--toastify-icon-color-${type})`
    }
    {...rest}
  />
);

function Warning(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM5.64543 3.5V5.00277L5.72161 6.84488H6.34488L6.42105 5.00277V3.5H5.64543ZM5.65235 8.34765C5.75854 8.44921 5.8855 8.5 6.03324 8.5C6.18098 8.5 6.30563 8.44921 6.4072 8.34765C6.51339 8.24146 6.56648 8.1145 6.56648 7.96676C6.56648 7.81902 6.51339 7.69437 6.4072 7.5928C6.30563 7.49123 6.18098 7.44044 6.03324 7.44044C5.8855 7.44044 5.75854 7.49123 5.65235 7.5928C5.55079 7.69437 5.5 7.81902 5.5 7.96676C5.5 8.1145 5.55079 8.24146 5.65235 8.34765Z"
      />
    </Svg>
  );
}

function Info(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM5.64543 3.5V5.00277L5.72161 6.84488H6.34488L6.42105 5.00277V3.5H5.64543ZM5.65235 8.34765C5.75854 8.44921 5.8855 8.5 6.03324 8.5C6.18098 8.5 6.30563 8.44921 6.4072 8.34765C6.51339 8.24146 6.56648 8.1145 6.56648 7.96676C6.56648 7.81902 6.51339 7.69437 6.4072 7.5928C6.30563 7.49123 6.18098 7.44044 6.03324 7.44044C5.8855 7.44044 5.75854 7.49123 5.65235 7.5928C5.55079 7.69437 5.5 7.81902 5.5 7.96676C5.5 8.1145 5.55079 8.24146 5.65235 8.34765Z"
      />
    </Svg>
  );
}

function Success(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM5.64543 3.5V5.00277L5.72161 6.84488H6.34488L6.42105 5.00277V3.5H5.64543ZM5.65235 8.34765C5.75854 8.44921 5.8855 8.5 6.03324 8.5C6.18098 8.5 6.30563 8.44921 6.4072 8.34765C6.51339 8.24146 6.56648 8.1145 6.56648 7.96676C6.56648 7.81902 6.51339 7.69437 6.4072 7.5928C6.30563 7.49123 6.18098 7.44044 6.03324 7.44044C5.8855 7.44044 5.75854 7.49123 5.65235 7.5928C5.55079 7.69437 5.5 7.81902 5.5 7.96676C5.5 8.1145 5.55079 8.24146 5.65235 8.34765Z"
      />
    </Svg>
  );
}

function Error(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM5.64543 3.5V5.00277L5.72161 6.84488H6.34488L6.42105 5.00277V3.5H5.64543ZM5.65235 8.34765C5.75854 8.44921 5.8855 8.5 6.03324 8.5C6.18098 8.5 6.30563 8.44921 6.4072 8.34765C6.51339 8.24146 6.56648 8.1145 6.56648 7.96676C6.56648 7.81902 6.51339 7.69437 6.4072 7.5928C6.30563 7.49123 6.18098 7.44044 6.03324 7.44044C5.8855 7.44044 5.75854 7.49123 5.65235 7.5928C5.55079 7.69437 5.5 7.81902 5.5 7.96676C5.5 8.1145 5.55079 8.24146 5.65235 8.34765Z"
      />
    </Svg>
  );
}

function Spinner() {
  return <div className={`${Default.CSS_NAMESPACE}__spinner`} />;
}

export const Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  spinner: Spinner
};

const maybeIcon = (type: string): type is keyof typeof Icons => type in Icons;

export type IconParams = Pick<
  ToastProps,
  'theme' | 'icon' | 'type' | 'isLoading'
>;

export function getIcon({ theme, type, isLoading, icon }: IconParams) {
  let Icon: React.ReactNode = null;
  const iconProps = { theme, type };

  if (icon === false) {
    // hide
  } else if (isFn(icon)) {
    Icon = icon({ ...iconProps, isLoading });
  } else if (isValidElement(icon)) {
    Icon = cloneElement(icon, iconProps);
  } else if (isLoading) {
    Icon = Icons.spinner();
  } else if (maybeIcon(type)) {
    Icon = Icons[type](iconProps);
  }

  return Icon;
}
