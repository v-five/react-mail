
const initialState = {
    templates: [],
    template: {}
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_EMAIL_TEMPLATES' :
            return {
                ...state,
                templates: action.templates
            };
        case 'CREATE_EMAIL_TEMPLATE':
            return {
                ...state,
                template: action.data.template,
                success: action.data.success,
                error: action.data.error
            };
        case 'DELETE_EMAIL_TEMPLATE':
            let templates = state.templates.filter(
                    (r) => { return r._id !== action.template_id; });
            return {
                ...state,
                templates: templates
            };
        default:
            return state;
    }
}