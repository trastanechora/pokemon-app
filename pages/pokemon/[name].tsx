/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { POKEMON_DB } from '../../db';
import { store } from '../../store';
import DefaultLayout from '../../layout/Default';
import PokeballIcon3D from '../../components/icons/PokeballIcon3D';
import ReleaseIcon from '../../components/icons/ReleaseIcon';

const PokemonDetail = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { name, uuid } = router.query;

  useEffect(() => {
    POKEMON_DB.getPokemonById(uuid).then((result) => {
      dispatch({ type: 'SET_SELECTED_POKEMON', payload: result });
    }).catch(() => {
      router.replace('/my-pokemon');
    });
  }, [uuid]);

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
          back_female
          back_shiny
          back_shiny_female
          front_default
          front_female
          front_shiny
          front_shiny_female
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
    name: name
  };

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: gqlVariables
  });

  const catchPokemon = () => {
    router.push(`/my-pokemon/action?target=${name}`);
  };

  const releasePokemon = () => {
    router.push(`/my-pokemon/action?target=${name}&uuid=${uuid}`);
  };

  const detailPageContainer = css`
    width: 100%;
  `;

  const overview = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
  `;

  const pokemonImageContainer = css`
    background-color: #f5f5f5;
    border-radius: 15rem;
  `;

  const bounceAnimation = keyframes`
    0%   { transform: translateY(0); }
    10%  { transform: translateY(0); }
    30%  { transform: translateY(-30px); }
    50%  { transform: translateY(0); }
    57%  { transform: translateY(-7px); }
    64%  { transform: translateY(0); }
    100% { transform: translateY(0); }
  `;

  const pokemonImage = css`
    height: 240px;
  `;

  const boxShadow = css`
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
  `;

  const cardBody = css`
    ${boxShadow}
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin: auto;
    margin-top: -1rem;
    background-color: white;
  `;

  const pokemonName = css`
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    pointer-events: none;
    font-size: 18px;
    font-size: 3vw;
    color: #404040;
    margin-right: 24px;
    margin-left: 24px;
    @media (max-width: 600px) {
      font-size: 5vw;
    }
  `;

  const infoContainer = css`
    display: flex;
    width: 100%;
    margin: 12px 0;
    font-family: 'Roboto', sans-serif;
  `;

  const leftInfo = css`
    width: 50%;
    text-align: left;
  `;

  const rightInfo = css`
    width: 50%;
    text-align: right;
  `;

  const detailInfo = css`
    display: inline-block;
    margin: 4px 8px;
    color: #404040;
  `;

  const chipSpan = css`
    color: white;
    background-color: #f44336;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    border-radius: 16px;
    font-size: 14px;
    height: 32px;
    margin: 8px;
    align-items: center;
    display: inline-flex;
    line-height: 20px;
    max-width: 100%;
    padding: 0 12px;
    vertical-align: middle;
    white-space: nowrap;
  `;

  const outlinedChipSpan = css`
    ${chipSpan}
    background-color: transparent;
    border: solid 1px;
    color: #f44336;
    border-color: #f44336;
    margin: 4px;
  `;

  const outlinedGrayChipSpan = css`
    ${outlinedChipSpan}
    color: gray;
    border-color: gray;
    font-size: 10px;
    margin: 4px;
    border-radius: 12px;
  `;

  const pokemonMovesWrapper = css`
    text-align: center;
  `;

  const separatorLineAbility = css`
    border: 1px solid #f44336;
    width: 100%;
  `;

  const separatorLineMove = css`
    ${separatorLineAbility}
    border: 1px solid gray;
    margin-top: 20px;
  `;

  const abilityLabel = css`
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    margin: 4px 0;
    color: #f44336;
  `;

  const moveLabel = css`
    ${abilityLabel}
    color: gray;
  `;

  const catchButtonContainer = css`
    font-family: 'Roboto', sans-serif;
    position: fixed;
    bottom: 100px;
    width: 91%;
    text-align: center;
    font-size: small;
    font-weight: 600;
  `;

  const catchButton = css`
    ${boxShadow}
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: auto;
    background-color: white;
    padding: 12px;
    border: solid 1px;
    color: #f44336;
    border: 2px solid #f44336;
    cursor: pointer;
    :hover {
      box-shadow: 0 10px 10px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 82%);
    }
  `;

  const icon3D = css`
    animation: ${bounceAnimation} 2s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
  `;

  const releaseIcon = css`
    width: 100%;
    margin-bottom: 12px;
    margin-top: 12px;
  `;

  const slideToTop = css`
    margin-top: -24px;
    margin-bottom: 12px;
  `

  return (
    <DefaultLayout>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error! {error.message}</div>
        ) : (
          <div css={detailPageContainer}>
            <section css={overview}>
              <div css={pokemonImageContainer}>
                <img css={pokemonImage} src={data.pokemon.sprites.front_default} />
              </div>
              <div css={cardBody}>
                {uuid ? (
                  <div>
                    <h2 css={pokemonName}>{state.selectedPokemon.nickname}</h2>
                    <div css={slideToTop}>
                      <span css={chipSpan}>{state.selectedPokemon.name}</span>
                    </div>
                  </div>
                ) : (
                  <h2 css={pokemonName}>{name}</h2>
                )}
              </div>
              <div css={infoContainer}>
                <div css={leftInfo}>
                  <small>Type:</small>
                  <br />
                  {data.pokemon.types.map((object, i) => (
                    <span
                      key={i}
                      css={css`
                        ${chipSpan}
                        margin-left: 0;
                      `}>
                      {object.type.name}
                    </span>
                  ))}
                </div>
                <div css={rightInfo}>
                  <small>Height:</small>
                  <h3 css={detailInfo}>{data.pokemon.height / 10} m</h3>
                  <br />
                  <small>Weight:</small>
                  <h3 css={detailInfo}>{data.pokemon.weight} kg</h3>
                </div>
              </div>
            </section>
            <section css={overview}>
              <hr css={separatorLineAbility} />
              <h3 css={abilityLabel}>Abilities:</h3>
              <div css={pokemonMovesWrapper}>
                {data.pokemon.abilities.map((object, i) => (
                  <span key={i} css={outlinedChipSpan}>
                    {object.ability.name}
                  </span>
                ))}
              </div>
              <hr css={separatorLineMove} />
              <h3 css={moveLabel}>Moves:</h3>
              <div css={pokemonMovesWrapper}>
                {data.pokemon.moves.map((object, i) => (
                  <span key={i} css={outlinedGrayChipSpan}>
                    {object.move.name}
                  </span>
                ))}
              </div>
            </section>
            <div css={catchButtonContainer}>
              {uuid ? (
                <div css={catchButton} onClick={releasePokemon}>
                  <ReleaseIcon css={releaseIcon} color="red" />
                  Release!
                </div>
              ) : (
                <div css={catchButton} onClick={catchPokemon}>
                  <PokeballIcon3D css={icon3D} />
                  Catch!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PokemonDetail;
