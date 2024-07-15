import { MouseEventHandler, ReactNode } from 'react';

export type SessionContent = {
  id?: number;
  user_id?: number;
};

export type ReactNodeLayout = {
  children: React.ReactNode;
};

export type Menu = {
  name: string;
  pathName: string;
  isMain: boolean;
};

export type ButtonProps = {
  children: ReactNode | string;
  icon?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  href?: string;
  isLoading?: boolean;
  method?: 'post' | 'delete';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
};
