
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    createRecipient
} from '../redux/actions/actions'

const mapStateToProps = (state) => {
    return {
        recipient: state.recipients.recipient,
        error: state.recipients.error,
        success: state.recipients.success
    };
};

class CreateRecipient extends Component {
    constructor (props) {
        super(props);
        this.createRecipient = this.createRecipient.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    createRecipient (e) {
        e.preventDefault();
        let recipient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        this.props.createRecipient(recipient);
    }
    
    render() {
        let error = this.props.error ? <div className="alert alert-danger" role="alert">{this.props.error}</div> : "";
        let success = this.props.success ? <div className="alert alert-success" role="alert">{this.props.success}</div> : "";
        return(
            <div className="container col-md-8 col-md-offset-2">
                <h1>Create recipient</h1>
                <form onSubmit={this.createRecipient}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input required type="text" className="form-control" placeholder="Enter first name" onChange={(e) => this.setState({firstName: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input required type="text" className="form-control" placeholder="Enter last name" onChange={(e) => this.setState({lastName: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input required type="email" className="form-control" placeholder="Enter email address" onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                {success}{error}
            </div>
        );
    }
}

export default connect(mapStateToProps, {createRecipient})(CreateRecipient);
