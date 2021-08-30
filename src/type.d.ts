interface ICat {
    id: number,
    name: string,
    color: string,
    age: number,
};

type CatState = {
    cats: ICat[],
    loaded: boolean,
};

type CatAction = {
    type: string,
    cat?: ICat,
    cats?: ICat[],
};

type DispatchType = (args: CatAction) => CatAction;
