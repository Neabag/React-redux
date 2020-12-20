export const ageUpAsync = (val) => {
    return { type: "AGE_UP", value: val }
};
export const ageUp = (val) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(ageUpAsync());
        }, 2000);
    }
}

export const ageDown = (val) => {
    return { type: "AGE_DOWN", value: val }
};

