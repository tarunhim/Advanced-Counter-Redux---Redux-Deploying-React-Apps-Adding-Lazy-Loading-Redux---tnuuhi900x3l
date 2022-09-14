const increment = () => ({
    type: "INCREMENT"
});

const decrement = () => ({
    type: "DECREMENT"
});

const signIn = () => ({
    type: "SIGN_IN"
});

const signOut = () => ({
    type: "SIGN_OUT"
});

const addAmount = (amount) => ({
    type: "INCREMENTBYAMOUNT",
    payload: amount
});

export { increment, decrement, addAmount, signIn, signOut };
