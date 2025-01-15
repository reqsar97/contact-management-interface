import { render, screen } from '@testing-library/react';
import FieldInfo from './index';
import { describe, it, expect } from 'vitest';
import { FieldMeta } from '@tanstack/react-form';
import '@testing-library/jest-dom';

describe('FieldInfo Component', () => {
  it('does not render anything if fieldMeta is undefined', () => {
    render(<FieldInfo fieldMeta={undefined} />);
    const errorElement = screen.queryByText(/./); // Look for any visible text
    expect(errorElement).toBeNull();
  });

  it('does not render errors if fieldMeta is not touched', () => {
    render(
      <FieldInfo
        fieldMeta={{ isTouched: false, errors: ['Error 1'] } as FieldMeta}
      />
    );
    const errorElement = screen.queryByText(/Error 1/);
    expect(errorElement).toBeNull();
  });

  it('renders errors when fieldMeta is touched and has errors', () => {
    render(
      <FieldInfo
        fieldMeta={
          { isTouched: true, errors: ['Error 1', 'Error 2'] } as FieldMeta
        }
      />
    );
    expect(screen.getByText('Error 1, Error 2')).toBeInTheDocument();
  });

  it('applies the correct styling for error text', () => {
    render(
      <FieldInfo
        fieldMeta={{ isTouched: true, errors: ['Error 1'] } as FieldMeta}
      />
    );
    const errorElement = screen.getByText('Error 1');
    expect(errorElement).toHaveClass('text-red-600 font-medium');
  });
});
