
import axios from 'axios';

const url = "http://localhost:" + (process.env.PORT || 3030) + "/api/";

export function loadRecipients () {
    return (dispatch) => {
        axios.get(`${url}recipient`)
        .then((res) => {
            let recipients = res.data;
            dispatch({type:'LOAD_RECIPIENTS', recipients});
        }).catch((err) => {
            console.log(err);
        });
    };
};

export function createRecipient (recipient) {
    return (dispatch) => {
        axios.post(`${url}recipient/`, recipient)
        .then((res) => {
            let data = {recipient: res.data, success: "Recipient created successfully." };
            dispatch({type: 'CREATE_RECIPIENT', data});
        }).catch(
            (err) => {
                let data = {error: err.response.data};
                dispatch({type: 'CREATE_RECIPIENT', data})
            }
        );
    };
};

export function deleteRecipient (recipient_id) {
    return (dispatch) => {
        axios.delete(`${url}recipient/${recipient_id}`)
        .then(() => {
            dispatch({type: 'DELETE_RECIPIENT', recipient_id});
        }).catch((err) => console.log(err));
    };
};

export function loadEmailTemplates () {
    return (dispatch) => {
        axios.get(`${url}email-template`)
        .then((res) => {
            let templates = res.data;
            dispatch({type:'LOAD_EMAIL_TEMPLATES', templates});
        }).catch((err) => {
            console.log(err);
        });
    };
};

export function createEmailTemplate (template) {
    return (dispatch) => {
        axios.post(`${url}email-template/`, template)
        .then((res) => {
            let data = {template: res.data, success: "Email template created successfully." };
            dispatch({type: 'CREATE_EMAIL_TEMPLATE', data});
        }).catch(
            (err) => {
                let data = {error: err.response.data};
                dispatch({type: 'CREATE_EMAIL_TEMPLATE', data})
            }
        );
    };
};

export function deleteEmailTemplate (template_id) {
    return (dispatch) => {
        axios.delete(`${url}email-template/${template_id}`)
        .then(() => {
            dispatch({type: 'DELETE_EMAIL_TEMPLATE', template_id});
        }).catch((err) => console.log(err));
    };
};

export function loadCampaigns () {
    return (dispatch) => {
        axios.get(`${url}campaign`)
        .then((res) => {
            let campaigns = res.data;
            dispatch({type:'LOAD_CAMPAIGNS', campaigns});
        }).catch((err) => {
            console.log(err);
        });
    };
};

export function createCampaign (campaign) {
    return (dispatch) => {
        axios.post(`${url}campaign/`, campaign)
        .then((res) => {
            let data = {campaign: res.data, success: "Campaign created successfully." };
            dispatch({type: 'CREATE_CAMPAIGN', data});
        }).catch(
            (err) => {
                let data = {error: err.response.data};
                dispatch({type: 'CREATE_CAMPAIGN', data})
            }
        );
    };
};

export function deleteCampaign (campaign_id) {
    return (dispatch) => {
        axios.delete(`${url}campaign/${campaign_id}`)
        .then(() => {
            dispatch({type: 'DELETE_CAMPAIGN', campaign_id});
        }).catch((err) => console.log(err));
    };
};