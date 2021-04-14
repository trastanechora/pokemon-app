import { render, fireEvent } from '@testing-library/react';
import PokemonList from '../../components/PokemonList';
import { createRippleEffect } from '../../utils';
import { useRouter } from 'next/router';
jest.mock('../../utils');

const mockPokemonEntryData = [{
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
}]

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
      const { getAllByText } = render(<PokemonList entries={mockPokemonEntryData} showOwned={false} />);
      expect(getAllByText(/Charizard/i)).toBeTruthy();
    });
  });
});
