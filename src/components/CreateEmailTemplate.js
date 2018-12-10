
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    createEmailTemplate
} from '../redux/actions/actions'

const mapStateToProps = (state) => {
    return {
        template: state.emailTemplates.template,
        error: state.emailTemplates.error,
        success: state.emailTemplates.success
    };
};

class CreateEmailTemplate extends Component {
    constructor (props) {
        super(props);
        this.createEmailTemplate = this.createEmailTemplate.bind(this);
        this.state = {
            subject: '',
            content: '',
            thumbnail: ''
        }
    }

    createEmailTemplate (e) {
        e.preventDefault();
        const formData = new FormData()
        formData.append('subject', this.state.subject);
        formData.append('content', this.state.content);
        formData.append('thumbnail', this.state.thumbnail);
        
        this.props.createEmailTemplate(formData);
    }
    
    render() {
        let error = this.props.error ? <div className="alert alert-danger" role="alert">{this.props.error}</div> : "";
        let success = this.props.success ? <div className="alert alert-success" role="alert">{this.props.success}</div> : "";
        return(
            <div className="container col-md-8 col-md-offset-2">
                <h1>Create email template</h1>
                <form onSubmit={this.createEmailTemplate}>
                    <div className="form-group">
                        <label>Subject</label>
                        <input required type="text" className="form-control" placeholder="Enter email subject" onChange={(e) => this.setState({subject: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input required type="text" className="form-control" placeholder="Enter email content" onChange={(e) => this.setState({content: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>thumbnail</label>
                        <input type="file" className="form-control-file" onChange={(e) => this.setState({thumbnail: e.target.files[0]})} />
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                {success}{error}
            </div>
        );
    }
}

export default connect(mapStateToProps, {createEmailTemplate})(CreateEmailTemplate);
