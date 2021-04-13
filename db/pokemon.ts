import uuid from 'react-uuid';

const DB_NAME = 'pokemondb';
const DB_VERSION = 1;
let DB: any;

import { Pokemon } from '../types';

export const POKEMON_DB: any = {
  /* ------------------------------------
  => Check IndexedDB
  ------------------------------------ */
  async getDb() {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB);
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = (e) => {
        console.log('[API] Error opening DB!', e);
        reject('Error');
      };
      request.onsuccess = (e: any) => {
        DB = e.target.result;
        resolve(DB);
      };
      request.onupgradeneeded = (e: any) => {
        console.log('[API] DB Upgrade success!');
        const db: any = e.target.result;
        const objectStore = db.createObjectStore('pokemons', { keyPath: 'uuid' });
        objectStore.createIndex('nickname', 'nickname', { unique: true });
      };
    });
  },
  /* ------------------------------------
  => [POST] Add New Pokemon
  ------------------------------------ */
  async catchPokemon(pokemon: Pokemon): Promise<void> {
    const db: any = await this.getDb();
    const parsedUserData = {
      ...pokemon,
      uuid: uuid()
    };
    return new Promise((resolve, reject) => {
      const trans = db.transaction(['pokemons'], 'readwrite');
      const store = trans.objectStore('pokemons');
      store.put(parsedUserData);
      trans.oncomplete = () => {
        resolve();
      };
      trans.onerror = () => {
        reject('Pokemon with the given nickname already exist!');
      };
    });
  },
  /* ------------------------------------
  => [DELETE] Release Pokemon
  ------------------------------------ */
  async releasePokemon(pokemon: Pokemon): Promise<void> {
    const db: any = await this.getDb();
    return new Promise((resolve) => {
      const trans = db.transaction(['pokemons'], 'readwrite');
      const store = trans.objectStore('pokemons');
      store.delete(pokemon.uuid);
      trans.oncomplete = () => {
        resolve();
      };
    });
  },
  /* ------------------------------------
  => [GET] Get List of Pokemons
  ------------------------------------ */
  async getPokemons(): Promise<Pokemon[]> {
    const db: any = await this.getDb();
    return new Promise((resolve) => {
      const trans = db.transaction(['pokemons'], 'readonly');
      const store = trans.objectStore('pokemons');
      const pokemons: Pokemon[] = [];
      store.openCursor().onsuccess = (e: any) => {
        const cursor = e.target.result;
        if (cursor) {
          pokemons.push(cursor.value);
          cursor.continue();
        }
      };
      trans.oncomplete = () => {
        resolve(pokemons);
      };
    });
  },
  /* ------------------------------------
  => [GET] Get Pokemon by UUID
  ------------------------------------ */
  async getPokemonById(uuid: string): Promise<Pokemon> {
    const db: any = await this.getDb();
    return new Promise((resolve, reject) => {
      const trans = db.transaction(['pokemons'], 'readonly');
      const pokemonStore = trans.objectStore('pokemons');
      const getPokemonRequest = pokemonStore.openCursor();
      getPokemonRequest.onsuccess = (e: any) => {
        const result = e.target.result;
        if (result) {
          if (result.value.uuid === uuid) {
            resolve(result.value);
          }
          result.continue();
        } else {
          reject('Cannot find the pokemon');
        }
      };
    });
  },
  /* ------------------------------------
  => [PUT] Edit Pokemon
  ------------------------------------ */
  async editPokemon(pokemon: Pokemon): Promise<Pokemon> {
    const db: any = await this.getDb();
    return new Promise((resolve, reject) => {
      const trans = db.transaction(['pokemons'], 'readwrite');
      const pokemonStore = trans.objectStore('pokemons');
      const getUserRequest = pokemonStore.openCursor();
      getUserRequest.onsuccess = (e: any) => {
        const result = e.target.result;
        if (result) {
          if (result.value.uuid === pokemon.uuid) {
            pokemonStore.put(pokemon);
            resolve(pokemon);
          }
          result.continue();
        } else {
          reject('Pokemon with the given nickname already exist!');
        }
      };
    });
  }
};
