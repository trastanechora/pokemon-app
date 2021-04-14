import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';
import { createRippleEffect } from '../../utils';
jest.mock('../../utils');

describe('Button Component', () => {
  beforeAll(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Render test', () => {
    it('Should render component correctly', async () => {
      const { getAllByText } = render(<Button>Test Button</Button>);
      expect(getAllByText(/Test Button/i)).toBeTruthy();
    });
  });
  describe('Function test', () => {
    it('Should trigger click with passed function', async () => {
      const functionPassedAsProps = jest.fn()
      const { getAllByRole } = render(<Button onClick={functionPassedAsProps}>Test Button</Button>);
      const button = getAllByRole('button');

      fireEvent.click(button[0]);
      expect(createRippleEffect).toBeCalled();
      expect(functionPassedAsProps).toBeCalled();
    });
    it('Should trigger click without passed function', async () => {
      const { getAllByRole } = render(<Button>Test Button</Button>);
      const button = getAllByRole('button');

      fireEvent.click(button[0]);
      expect(createRippleEffect).toBeCalled();
    });
  });
});