import React from 'react';
import { render } from '@testing-library/react';
import CovidHome from './CovidHome/CovidHome';

test('renders learn react link', () => {
  const { getByText } = render(<CovidHome />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
