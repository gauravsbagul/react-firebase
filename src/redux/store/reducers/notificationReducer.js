const initState = {};

const notificationReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_NOTIFICATION":
            return {
                ...state,
                getNotification: action.payload
            };
            break;

        default:
            return state;
    }
};

export default notificationReducer;
