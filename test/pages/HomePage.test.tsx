import { render, fireEvent } from '@testing-library/react';
import Home from '../../pages/index';
import { createRippleEffect } from '../../utils';
jest.mock('../../utils');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null
    };
  }
}));

describe('Home Page', () => {
  beforeAll(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Home page test', () => {
    it('Should render page correctly', async () => {
      const { getAllByText } = render(<Home />);
      expect(getAllByText(/Pokemon App/i)).toBeTruthy();
    });
  });
  describe('Function test', () => {
    it('Should trigger click with passed function', async () => {
      const { getAllByRole } = render(<Home />);
      const button = getAllByRole('button');

      fireEvent.click(button[0]);
      expect(createRippleEffect).toBeCalled();
    });
  });
});
