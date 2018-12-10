
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    createCampaign, loadRecipients, loadEmailTemplates
} from '../redux/actions/actions'
import { Dropdown } from 'semantic-ui-react'
// import {DateTime} from 'react-datetime-bootstrap';
// import moment from 'moment';

const mapStateToProps = (state) => {
    return {
        campaign: state.campaigns.campaign,
        recipients: state.recipients.recipients,
        templates: state.emailTemplates.templates,
        error: state.campaigns.error,
        success: state.campaigns.success
    };
};

class CreateCampaign extends Component {
    constructor (props) {
        super(props);
        this.createCampaign = this.createCampaign.bind(this);
        this.state = {
            name: '',
            recipients: [],
            template: null,
            date: null
        }
    }

    componentWillMount() {
        this.props.loadRecipients();
        this.props.loadEmailTemplates();
    }

    createCampaign (e) {
        e.preventDefault();
        let campaign = {
            name: this.state.name,
            recipients: this.state.recipients,
            emailTemplate: this.state.template,
            date: this.state.date
        };
        this.props.createCampaign(campaign);
    }
    
    render() {
        let error = this.props.error ? <div className="alert alert-danger" role="alert">{this.props.error}</div> : "";
        let success = this.props.success ? <div className="alert alert-success" role="alert">{this.props.success}</div> : "";
        return(
            <div className="container col-md-8 col-md-offset-2">
                <h1>Create campaign</h1>
                <form onSubmit={this.createCampaign}>
                    <div className="form-group">
                        <label>Name</label>
                        <input required type="text" className="form-control" placeholder="Enter campaign name" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Recipients</label>
                        <Dropdown placeholder='Select recipients' fluid multiple search selection
                        options={this.props.recipients.map(r => {return {key: r._id, value: r._id, text: r.email}})}
                        onChange={(e, data) => this.setState({recipients: data.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Email template</label>
                        <Dropdown placeholder='Select email template' fluid search selection
                        options={this.props.templates.map(t => {return {key: t._id, value: t._id, text: t.subject}})}
                        onChange={(e, data) => this.setState({template: data.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Campaign date</label>
                        <input required type="datetime" className="form-control" placeholder="Enter campaign date" onChange={(e) => this.setState({date: e.target.value})} />
                        {/* <DateTime
                            pickerOptions={{minDate: [moment().add(1, 'days').format()]}} placeholder='Enter campaing date'
                            onChange={(date) => this.setState({date: date})} /> */}
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                {success}{error}
            </div>
        );
    }
}

export default connect(mapStateToProps, {createCampaign, loadRecipients, loadEmailTemplates})(CreateCampaign);
