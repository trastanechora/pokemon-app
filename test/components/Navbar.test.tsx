import { render, fireEvent } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import { createRippleEffect } from '../../utils';
jest.mock('../../utils');

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn()
    };
  }
}));

describe('Navbar Component', () => {
  beforeAll(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Render component', () => {
    it('Should render component correctly', async () => {
      const { getAllByText } = render(<Navbar />);
      expect(getAllByText(/Pokemon App/i)).toBeTruthy();
      expect(getAllByText(/Pokemon List/i)).toBeTruthy();
      expect(getAllByText(/My Pokemon/i)).toBeTruthy();
    });
  });
  describe('Function test', () => {
    it('Should trigger router back', async () => {
      const { getAllByRole } = render(<Navbar />);
      const button = getAllByRole('button');

      fireEvent.click(button[0]);
      expect(createRippleEffect).toBeCalled();
    });
  });
});
