import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './index';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');
    expect(button).toHaveClass(
      'rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-blue-600 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-blue-600 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    );
  });

  it('renders correctly with the danger prop', () => {
    render(<Button danger>Delete</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Delete');
    expect(button).toHaveClass('text-red-600 hover:bg-red-600');
  });

  it('applies additional classes passed via className prop', () => {
    render(<Button className="custom-class">Submit</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('custom-class');
  });

  it('disables the button when disabled prop is passed', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    );
  });
});
