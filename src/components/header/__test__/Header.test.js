import { render, screen } from '@testing-library/react';

import Header from '../Header'

it('should have a header of animal adaptations', () => {
  render(<Header />);
  const headerElement = screen.getByRole('heading');
  expect(headerElement).toBeInTheDocument();
});
