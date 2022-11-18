import { PlayerTypes } from "../types";
import { GamePuntaje } from "../types";

const { SING_UP, LOAD_PLAYERS, PLAYER_SELECTED } = PlayerTypes
const { SUMAR, RESTAR } = GamePuntaje;

const initialState = {
    players: [],
    selected: [],
}

const PlayersReducers = (state = initialState, action) =>{
    switch (action.type) {
        case SING_UP:
            return{
                ...state,
                players: [...state.players,{nombre: action.nombre, puntos: action.puntos }]
            }
        case LOAD_PLAYERS:
            return{
                ...state,
                players: action.player,
            }
        case PLAYER_SELECTED:
            return{
                ...state,
                selected: action.selected,
            }
        case SUMAR:
                const search = state.players.map(e=> e.nombre);
                const index = search.indexOf(action.nombre);
                //state.players[index].puntos = action.puntos;
            return {
                ...state,
                player : state.players[index].puntos = action.puntos
            }

        case RESTAR:
                const searchr = state.players.map(e=> e.nombre);
                const indexr = searchr.indexOf(action.nombre);
                //state.players[indexr].puntos = action.puntos;
            return {
                ...state,
                player : state.players[indexr].puntos = action.puntos
            }

        default:
            return state
    }
} 

export default PlayersReducers;