import { render, fireEvent } from '@testing-library/react';
import ListCardItem from '../../components/ListCardItem';
import { createRippleEffect } from '../../utils';
jest.mock('../../utils');

const mockPokemonData = {
  abilities: [{
    name: "blaze"
  }],
  height: 17,
  id: 6,
  moves: [{
    name: "mega-punch"
  }],
  name: "charizard",
  nickname: "Naga Ekor Terbakar",
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  types: [{
    name: "fire"
  }],
  uuid: "74d1015-1af1-a37d-8340-35b761687b6c",
  weight: 905
}

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
    it('Should render component correctly on wild pokemon', async () => {
      const { getAllByText } = render(<ListCardItem showOwned={false} pokemonObject={mockPokemonData} />);
      expect(getAllByText(/Charizard/i)).toBeTruthy();
    });
    it('Should render component correctly on owned pokemon', async () => {
      const { getAllByText } = render(<ListCardItem showOwned={true} pokemonObject={mockPokemonData} />);
      expect(getAllByText(/Naga Ekor Terbakar/i)).toBeTruthy();
    });
  });
  describe('Function test', () => {
    it('Should trigger router push to Owned Pokemon Page', async () => {
      const { getAllByRole } = render(<ListCardItem showOwned={true} pokemonObject={mockPokemonData} />);
      const button = getAllByRole('pokemon-card');

      fireEvent.click(button[0]); // Call redirect to owned pokemon detail page
      expect(createRippleEffect).toBeCalled();
    });
    it('Should trigger router push to Wild Pokemon Page', async () => {
      const { getAllByRole } = render(<ListCardItem showOwned={false} pokemonObject={mockPokemonData} />);
      const button = getAllByRole('pokemon-card');

      fireEvent.click(button[0]); // Call redirect to wild pokemon detail page
      expect(createRippleEffect).toBeCalled();
    });
  });
});
