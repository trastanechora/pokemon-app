/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useContext, useState, useEffect } from 'react';
import { store } from '../../store';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { POKEMON_DB } from '../../db';
import DefaultLayout from '../../layout/Default';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Head from '../../components/Head';

const container = css`
  font-family: 'Roboto', sans-serif;
  color: #404040;
  margin-top: 40px;
`;

const section = css`
  text-align: center;
  margin-bottom: 12px !important;
`;

const pokemonImageContainer = css`
  background-color: #f5f5f5;
  border-radius: 15rem;
  width: 240px;
  margin: auto;
`;

const pokemonImage = css`
  height: 240px;
`;

const gotcha = css`
  color: #f44336;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const ohno = css`
  ${gotcha}
  color: gray;
`;

const pokemonName = css`
  text-transform: capitalize;
  font-weight: bold;
`;

const instruction = css`
  font-weight: lighter;
  margin-top: 60px;
`;

const warning = css`
  font-size: small;
  color: red;
`;

const MyPokemonAction = () => {
  const { state, dispatch } = useContext(store);

  const [nickname, setNickname] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (uuid) {
      POKEMON_DB.getPokemonById(uuid)
        .then((result) => {
          dispatch({ type: 'SET_SELECTED_POKEMON', payload: result });
        })
        .catch(() => {
          router.replace('/my-pokemon');
        });
      POKEMON_DB.releasePokemon(state.selectedPokemon);
    } else {
      const randomResult = tryCatchPokemon();
      setIsSuccess(randomResult);
    }
  }, []);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const tryCatchPokemon = (): boolean => {
    const random = Math.round(Math.random());
    if (random === 1) return true;
    return false;
  };

  const onSuccess = () => {
    POKEMON_DB.catchPokemon({ ...data.pokemon, nickname })
      .then(() => {
        dispatch({ type: 'ADD_MY_POKEMON', payload: { ...data.pokemon, nickname } });
        router.replace('/my-pokemon');
      })
      .catch((err: string) => {
        setErrorMessage(err);
      });
  };

  const onFailed = () => {
    router.back();
  };

  const onRelease = () => {
    router.replace('/my-pokemon');
  };

  const router = useRouter();
  const { target, uuid } = router.query;

  const GET_POKEMON = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        abilities {
          ability {
            name
          }
        }
        sprites {
          back_default
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
        height
        weight
      }
    }
  `;

  const gqlVariables = {
    name: target
  };

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: gqlVariables
  });

  if (loading)
    return (
      <DefaultLayout>
        <Loading />
      </DefaultLayout>
    );

  if (error)
    return (
      <DefaultLayout>
        <div>Error {error}. Please Try again latre :(</div>
      </DefaultLayout>
    );

  return (
    <DefaultLayout>
      {!uuid && isSuccess ? (
        <div css={container}>
          <Head
            title={`GOTCHA!! ${data.pokemon.name} was caught!`}
            description="Pokemon App made with ??? by @trastanechora"
          />
          <div css={[section, gotcha]}>GOTCHA!!</div>
          <div css={[section, pokemonImageContainer]}>
            <img loading="lazy" css={pokemonImage} src={data.pokemon.sprites.front_default} />
          </div>
          <div css={section}>
            <span css={pokemonName}>{data.pokemon.name}</span> was caught!
          </div>
          <div css={[section, instruction]}>Please give it a nickname to keep it</div>
          <div css={section}>
            <input type="text" value={nickname} onChange={handleNicknameChange} />
          </div>
          <div css={[section, warning]}>{errorMessage ? errorMessage : ''}</div>
          <div css={section}>
            <Button onClick={onSuccess}>OK</Button>
          </div>
        </div>
      ) : !uuid && !isSuccess ? (
        <div css={container}>
          <Head
            title={`OH NO!! ${data.pokemon.name} ran away!`}
            description="Pokemon App made with ??? by @trastanechora"
          />
          <div css={[section, ohno]}>OH NO!!</div>
          <div css={[section, pokemonImageContainer]}>
            <img loading="lazy" css={pokemonImage} src={data.pokemon.sprites.back_default} />
          </div>
          <div css={section}>
            We have FAILED to catch <span css={pokemonName}>{data.pokemon.name}</span>,<br />
            it ran away!
          </div>
          <div css={[section, instruction]}>Let's catch it on the next encounter</div>
          <div css={section}>
            <Button onClick={onFailed}>OK</Button>
          </div>
        </div>
      ) : (
        <div css={container}>
          <Head
            title={`GOOD BYE!! ${data.pokemon.name}, we will missing you :(`}
            description="Pokemon App made with ??? by @trastanechora"
          />
          <div css={[section, ohno]}>GOOD BYE!!</div>
          <div css={[section, pokemonImageContainer]}>
            <img loading="lazy" css={pokemonImage} src={data.pokemon.sprites.back_default} />
          </div>
          <div css={section}>
            Nice to be your partner <span css={pokemonName}>{state.selectedPokemon.nickname}</span>,
            <br />
            Have a wonderful life!
          </div>
          <div css={[section, instruction]}>
            <span css={pokemonName}>{state.selectedPokemon.nickname}</span> has successfuly released
            to the wild.
          </div>
          <div css={section}>
            <Button onClick={onRelease}>OK</Button>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default MyPokemonAction;
