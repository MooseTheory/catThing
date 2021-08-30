import axios from "axios";
import * as actionTypes from  "./actionTypes";

export function addCat(cat: ICat) {
    const action: CatAction = {
        type: actionTypes.ADD_CAT,
        cat,
    };

    return postNewCat(action)
};

export function postNewCat(action: CatAction) {
    return (dispatch: DispatchType) => {
        axios
        .post<ICat>("http://localhost:8080/cat/submit", action.cat)
        .then(response => {
            action.cat = response.data;
            dispatch(action);
        });
    };
};

export function getAllCats() {
    return (dispatch: DispatchType) => {
        axios
        .get<ICat[]>("http://localhost:8080/cat/getAll")
        .then(response => {
            console.log(response.data);
            const action: CatAction = {
                type: actionTypes.RETRIEVE_CATS,
                cats: response.data,
            };
            dispatch(action);
        })
    }
}
