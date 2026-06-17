interface ErrorMessageProps {
  id?: string;
  message?: string;
}

export const ErrorMessage = ({ id, message }: ErrorMessageProps) => {
  return (
    <span id={id} className='text-danger text-xs block h-2'>
      {message || ''}
    </span>
  );
};
