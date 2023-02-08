import {
    ELIMINAR_CIUDAD,
    CIUDAD_CARGADA,
    CIUDAD_DETALLES,
    VACIAR_DETALLES,
} from './action';

const initState = {
    AllCiudad: [],
    AddCiudad: [],
    CiudadDetalles: [],
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case CIUDAD_CARGADA:
            return {
                ...state,
                AllCiudad: [...state.AllCiudad, action.payload],
                AddCiudad: [...state.AddCiudad, action.payload],
            };

        case ELIMINAR_CIUDAD:
            return {
                ...state,
                AllCiudad: state.AllCiudad.filter(
                    (e) => e.id !== action.payload
                ),
                AddCiudad: state.AddCiudad.filter(
                    (e) => e.id !== action.payload
                ),
            };
        case CIUDAD_DETALLES:
            // state.AllCiudad.filter((e) => e.id === parseInt(action.payload));
            return {
                ...state,
                CiudadDetalles: state.AllCiudad.filter(
                    (e) => e.id === parseInt(action.payload)
                ),
            };
        case VACIAR_DETALLES:
            return {
                ...state,
                CiudadDetalles: action.payload,
            };
        default:
            return state;
    }
}
//     setCities((oldcities) =>
//         oldcities.filter((city) => city.id !== idCity)
//     );
