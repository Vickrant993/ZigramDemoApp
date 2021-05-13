import { render, screen } from '@testing-library/react';
import UserList from './userList';

test('renders learn react link', () => {
  render(<UserList />);
  const linkElement = screen.getByText(/Sample Cocktails/i);
  expect(linkElement).toBeInTheDocument();
});