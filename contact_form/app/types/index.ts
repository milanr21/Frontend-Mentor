export type QueryType = 'general' | 'support';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: QueryType | '';
  message: string;
  consent: boolean;
}

export interface FormErrors {
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  queryType?: boolean;
  message?: boolean;
  consent?: boolean;
}

export interface ToastProps {
  title: string;
  description: string;
  show: boolean;
  duration?: number;
  onClose: () => void;
}
