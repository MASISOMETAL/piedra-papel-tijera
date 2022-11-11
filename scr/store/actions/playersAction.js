import { PlayerTypes } from "../types"
import { GamePuntaje } from "../types";
import { SavePlayerDB, LoadPlayerDB, SaveDataDB } from "../../db";

const { SING_UP, LOAD_PLAYERS, PLAYER_SELECTED } = PlayerTypes
const { SUMAR, RESTAR } = GamePuntaje

export const signUp = (name) => {
    return async (dispatch) => {
        try {
            const puntos = 0;
            const result = await SavePlayerDB(name, puntos);
            dispatch({
                type: SING_UP,
                nombre: name,
                puntos: puntos
            });
        }catch (err) {
            console.log(err);
            throw err;
        }
      };
    };

    export const SaveData = (name, puntos, name2) => {
        return async (dispatch) => {
            try {
                const result = await SaveDataDB(name, puntos, name2);
            }catch (err) {
                console.log(err);
                throw err;
            }
          };
        };

export const LoadPlayer = () => {
    return async (dispatch) => {
        try {
            const result = await LoadPlayerDB();
    
            const array = result?.rows?._array;
            //const mapping = array.map((item) => item.nombre);
            //const Lenguage = mapping[mapping?.length-1];
            //Lenguage == null ? Lenguage = "ES" : Lenguage;
            dispatch({
                type: LOAD_PLAYERS,
                player: array,
            });
        } catch (err) {
              //throw err;
        }
    }
};

export const PlayerSelected = (selected) => ({
    type: PLAYER_SELECTED,
    selected: selected,
})

export const Ganar = (puntos, nombre) =>({
    type: SUMAR,
    puntos: puntos + 1,
    nombre: nombre,
})

export const Perder = (puntos, nombre) =>({
    type: RESTAR,
    puntos: puntos - 1,
    nombre: nombre,
})
