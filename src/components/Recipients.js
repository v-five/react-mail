
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadRecipients,
    deleteRecipient
} from '../redux/actions/actions'

const mapStateToProps = (state) => {
    return {
        recipients: state.recipients.recipients
    };
};

class Recipients extends Component {
    componentWillMount() {
        this.props.loadRecipients();
    }

    delete(recipient) {
        this.props.deleteRecipient(recipient._id);
    }
    
    render() {
                const recipients = this.props.recipients.map((recipient)=>
                <tr key={recipient._id.toString()}>
                    <td>{recipient.firstName}</td>
                    <td>{recipient.lastName}</td>
                    <td>{recipient.email}</td>
                    <td><button onClick={this.delete.bind(this, recipient)}>Delete</button></td>
                </tr>
            );
            
        return ( 
                <div className="container col-md-8 col-md-offset-2">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipients}
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default connect(mapStateToProps, { loadRecipients, deleteRecipient })(Recipients);
