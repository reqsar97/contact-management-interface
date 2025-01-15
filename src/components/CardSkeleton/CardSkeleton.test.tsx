import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import CardSkeleton from './index';

describe('CardSkeleton', () => {
  it('renders the skeleton structure correctly', () => {
    render(<CardSkeleton />);

    const skeletonContainer = screen.getByTestId('skeleton-container');
    expect(skeletonContainer).toHaveClass('animate-pulse');

    const imageSkeleton = skeletonContainer.querySelector(
      '.bg-gray-300.rounded-lg.h-36.w-36'
    );
    expect(imageSkeleton).toBeInTheDocument();

    const svgElement = imageSkeleton?.querySelector('svg');
    expect(svgElement).toBeInTheDocument();

    const textSkeletons = skeletonContainer.querySelectorAll(
      '.bg-gray-300.rounded-full'
    );
    expect(textSkeletons).toHaveLength(7);
  });
});
