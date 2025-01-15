import { render, screen } from '@testing-library/react';
import Input from './index';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('Input Component', () => {
  it('renders an input field', () => {
    render(<Input placeholder="Test input" />);
    const inputElement = screen.getByPlaceholderText('Test input');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the correct styles when isSearch is true', () => {
    render(<Input isSearch placeholder="Search input" />);
    const inputElement = screen.getByPlaceholderText('Search input');
    expect(inputElement).toHaveClass('pl-10');
    expect(screen.getByRole('img')).toBeInTheDocument(); // Checking for the search icon SVG
  });

  it('does not apply search styles when isSearch is false', () => {
    render(<Input placeholder="Normal input" />);
    const inputElement = screen.getByPlaceholderText('Normal input');
    expect(inputElement).not.toHaveClass('pl-10');
    const searchIcon = screen.queryByRole('img'); // Search icon should not be rendered
    expect(searchIcon).toBeNull();
  });
});
