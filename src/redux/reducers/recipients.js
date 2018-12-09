
const initialState = {
    recipients: [],
    recipient: {}
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_RECIPIENTS' :
            return {
                ...state,
                recipients: action.recipients
            };
        case 'CREATE_RECIPIENT':
            return {
                ...state,
                recipient: action.data.recipient,
                success: action.data.success,
                error: action.data.error
            };
        case 'DELETE_RECIPIENT':
            let recipients = state.recipients.filter(
                    (r) => { return r._id !== action.recipient_id; });
            return {
                ...state,
                recipients: recipients
            };
        default:
            return state;
    }
}