import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './index';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

vi.mock('@/icons/star.tsx', () => ({
  default: ({ onClick, className }: any) => (
    <span onClick={onClick} className={className} data-testid="star-icon">
      ★
    </span>
  ),
}));

describe('UserCard Component', () => {
  const mockOnClickDelete = vi.fn();
  const mockOnClickFavorite = vi.fn();

  it('renders loading skeleton when loading prop is true', () => {
    render(
      <UserCard
        loading
        onClickDelete={mockOnClickDelete}
        onClickFavorite={mockOnClickFavorite}
      />
    );
    expect(screen.getByTestId('card-skeleton')).toBeInTheDocument();
  });

  it('renders user data when provided', () => {
    const user = {
      id: '1',
      img: 'https://example.com/user.jpg',
      name: 'John Doe',
      username: 'johndoe',
      additional_info: 'Some additional info about John.',
      isFavorite: false,
    };

    render(
      <UserCard
        user={user}
        loading={false}
        onClickDelete={mockOnClickDelete}
        onClickFavorite={mockOnClickFavorite}
      />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(
      screen.getByText('Some additional info about John.')
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/user.jpg'
    );
  });

  it('calls onClickFavorite with the correct value when clicking on the star icon', () => {
    const user = {
      id: '1',
      img: 'https://example.com/user.jpg',
      name: 'John Doe',
      username: 'johndoe',
      additional_info: 'Some additional info about John.',
      isFavorite: false,
    };

    render(
      <UserCard
        user={user}
        loading={false}
        onClickDelete={mockOnClickDelete}
        onClickFavorite={mockOnClickFavorite}
      />
    );

    const starIcon = screen.getByTestId('star-icon');
    fireEvent.click(starIcon);
    expect(mockOnClickFavorite).toHaveBeenCalledWith(true); // Because isFavorite is initially false

    fireEvent.click(starIcon);
    expect(mockOnClickFavorite).toHaveBeenCalledWith(false); // After clicking again, it should toggle to false
  });

  it('renders "Delete" button disabled when loading is true', () => {
    const user = {
      id: '1',
      img: 'https://example.com/user.jpg',
      name: 'John Doe',
      username: 'johndoe',
      additional_info: 'Some additional info about John.',
      isFavorite: false,
    };

    render(
      <UserCard
        user={user}
        loading={true}
        onClickDelete={mockOnClickDelete}
        onClickFavorite={mockOnClickFavorite}
      />
    );

    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeDisabled();
  });

  it('calls onClickDelete when the delete button is clicked', () => {
    const user = {
      id: '1',
      img: 'https://example.com/user.jpg',
      name: 'John Doe',
      username: 'johndoe',
      additional_info: 'Some additional info about John.',
      isFavorite: false,
    };

    render(
      <UserCard
        user={user}
        loading={false}
        onClickDelete={mockOnClickDelete}
        onClickFavorite={mockOnClickFavorite}
      />
    );

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(mockOnClickDelete).toHaveBeenCalled();
  });
});
