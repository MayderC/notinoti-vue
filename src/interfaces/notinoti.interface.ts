

export type NotiType = 'success' | 'info' | 'warning' | 'error' | 'default';
export type NotiPosition = 'topRight'| 'topCenter' | 'topLeft' | 'bottomRight' | 'bottomCenter' | 'bottomLeft' | 'centerCenter' | 'centerLeft' | 'centerRight';

export interface NotinotiProps {
  id? : string;
  msg: string;
  showTitle?: boolean;
  title?: string;
  icon?: string;
  timeout?: number;
  position?: NotiPosition;
  type?: NotiType
  resetStyle?: boolean;
  closeOnClick?: boolean;
  closeOnHover?: boolean;
  showCloseButton?: boolean;
  showIcon?: boolean;
  showProgressBar?: boolean;
}

export interface GetClases {
  container: string;
  title: string;
  msg : string;
}