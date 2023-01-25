import { ELIMINAR_CIUDAD, CIUDAD_DETALLES, CIUDAD_CARGADA } from './action';

const initState = {
    AllCiudad: [],
    AddCiudad: [],
    CiudadDetalles: {},
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case CIUDAD_CARGADA:
            return {
                ...state,
                AllCiudad: [...state.AllCiudad, action.payload],
                AddCiudad: [...state.AddCiudad, action.payload],
            };

        default:
            return state;
    }
}
