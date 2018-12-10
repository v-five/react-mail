
const initialState = {
    campaigns: [],
    campaign: {}
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_CAMPAIGNS' :
            return {
                ...state,
                campaigns: action.campaigns
            };
        case 'CREATE_CAMPAIGN':
            return {
                ...state,
                campaign: action.data.campaign,
                success: action.data.success,
                error: action.data.error
            };
        case 'DELETE_CAMPAIGN':
            let campaigns = state.campaigns.filter(
                    (r) => { return r._id !== action.campaign_id; });
            return {
                ...state,
                campaigns: campaigns
            };
        default:
            return state;
    }
}