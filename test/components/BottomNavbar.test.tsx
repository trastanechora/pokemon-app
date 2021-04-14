import { render, fireEvent } from '@testing-library/react';
import BottomNavbar from '../../components/BottomNavbar';
import { createRippleEffect } from '../../utils';
jest.mock('../../utils');

jest.mock("next/router", () => ({
  useRouter() {
    return {
      prefetch: jest.fn(),
      push: jest.fn()
    };
  }
}));

describe('BottomNavbar Component', () => {
  beforeAll(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Render component', () => {
    it('Should render component correctly', async () => {
      const { getAllByRole } = render(<BottomNavbar />);
      const navigationButtons = getAllByRole('bottom-navigation-button');
      expect(navigationButtons.length).toBe(3); // ['Home', 'Pokemon List', 'My Pokemon']
    });
  });
  describe('Function test', () => {
    it('Should trigger router push to Home', async () => {
      const { getAllByRole } = render(<BottomNavbar />);
      const button = getAllByRole('bottom-navigation-button');

      fireEvent.click(button[0]); // Call redirect to Home
      expect(createRippleEffect).toBeCalled();
    });
     it('Should trigger router push to Pokemon', async () => {
      const { getAllByRole } = render(<BottomNavbar />);
      const button = getAllByRole('bottom-navigation-button');

      fireEvent.click(button[1]); // Call redirect to Pokemon
      expect(createRippleEffect).toBeCalled();
     });
     it('Should trigger router push to My Pokemon', async () => {
      const { getAllByRole } = render(<BottomNavbar />);
      const button = getAllByRole('bottom-navigation-button');

      fireEvent.click(button[2]); // Call redirect to My Pokemon
      expect(createRippleEffect).toBeCalled();
    });
  });
});
