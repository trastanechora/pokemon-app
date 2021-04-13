/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import DefaultLayout from '../layout/Default';
import Image from 'next/image';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const section = css`
  text-align: center;
`

const intro = css`
  font-size: x-small;
  font-family: 'Roboto', sans-serif;
  color: #404040;
  margin-top: 60px;
  padding: 0 20px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const Home = () => {
  const router = useRouter();
  const redirectPokemonPage = () => {
    router.push('/pokemon')
  }

  return <DefaultLayout headerTitle="Pokemon App">
    <div css={section}>
      <Image src="/pokemon_logo.svg" alt="logo" width="240" height="240" />
    </div>
    <div css={section}>
      <Button onClick={redirectPokemonPage}>Let's Catch Them All</Button>  
    </div>
    <div css={[section, intro]}>
      The name Pokémon is a syllabic abbreviation of the Japanese brand Pocket Monsters. The term "Pokémon", in addition to referring to the Pokémon franchise itself, also collectively refers to the 898 fictional species that have made appearances in Pokémon media as of the release of the eighth generation titles Pokémon Sword and Shield. "Pokémon" is identical in the singular and plural, as is each individual species name; it is grammatically correct to say "one Pokémon" and "many Pokémon", as well as "one Pikachu" and "many Pikachu".
    </div>
  </DefaultLayout>;
};

export default Home;
