
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