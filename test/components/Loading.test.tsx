import { render } from '@testing-library/react';
import Loading from '../../components/Loading';

describe('Button Component', () => {
  beforeAll(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Render test', () => {
    it('Should render component correctly', async () => {
      const { getAllByText } = render(<Loading />);
      expect(getAllByText(/Loading.. /i)).toBeTruthy();
    });
  });
});

