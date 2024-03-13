import { screen, fireEvent, render } from '@testing-library/react';
import { Button } from '../index.tsx';

describe('#Button', () => {
  it('should call the onClick function when click the button', () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>This is Button</Button>)

    fireEvent.click(screen.getByText("This is Button"));

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
