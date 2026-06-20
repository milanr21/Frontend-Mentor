import type React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return createPortal(
    <div
      onClick={onClose}
      className='fixed flex items-center justify-center top-0 left-0 h-full w-full bg-rose-900/20'
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    modalRoot
  );
}
export default Modal;
