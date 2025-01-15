import { FC } from 'react';
import Button from '@/components/Button';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  loading?: boolean;
}

const Dialog: FC<DialogProps> = ({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        <div className="flex justify-end space-x-4">
          <Button onClick={onClose}>{cancelText}</Button>
          <Button disabled={loading} danger onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
