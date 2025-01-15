import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dialog from './index';
import { describe, it, expect, vi } from 'vitest';

describe('Dialog Component', () => {
  const mockOnClose = vi.fn();
  const mockOnConfirm = vi.fn();

  const defaultProps = {
    isOpen: true,
    title: 'Test Title',
    description: 'Test Description',
    onClose: mockOnClose,
    onConfirm: mockOnConfirm,
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    loading: false,
  };

  it('renders the dialog when isOpen is true', () => {
    render(<Dialog {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('does not render the dialog when isOpen is false', () => {
    render(<Dialog {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  it('calls onClose when the cancel button is clicked', () => {
    render(<Dialog {...defaultProps} />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    render(<Dialog {...defaultProps} />);
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('disables the confirm button when loading is true', () => {
    render(<Dialog {...defaultProps} loading={true} />);
    const confirmButton = screen.getByText('Confirm');
    expect(confirmButton).toBeDisabled();
  });

  it('renders without description if it is not provided', () => {
    const { queryByText } = render(
      <Dialog {...defaultProps} description={undefined} />
    );
    expect(queryByText('Test Description')).not.toBeInTheDocument();
  });
});
