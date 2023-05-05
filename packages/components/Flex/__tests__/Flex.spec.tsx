import { render, screen } from '@testing-library/react';
import Flex from '../Flex';
test('renders Flex component', () => {
  render(<Flex />);
  const linkElement = screen.getByText(/Flex Component/i);
expect(linkElement.firstChild).toMatchInlineSnapshot('Flex Component')
});