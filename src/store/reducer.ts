import * as actionTypes from "./actionTypes";

const initialState: CatState = {
    cats: [],
    loaded: false,
};

const reducer = (
    state: CatState = initialState,
    action: CatAction,
): CatState => {
    switch (action.type) {
        case actionTypes.ADD_CAT:
            if (action.cat === undefined) {
                return {...state};
            }
            const newCat: ICat = {
                id: action.cat.id,
                name: action.cat.name,
                color: action.cat.color,
                age: action.cat.age,
            };
            return {
                ...state,
                cats: state.cats.concat(newCat),
            };
        case actionTypes.RETRIEVE_CATS:
            // do the thing
            if (action.cats === undefined) {
                return {...state};
            }
            return {
                ...state,
                cats: action.cats,
                loaded: true,
            };
    }
    return state;
};

export default reducer;
