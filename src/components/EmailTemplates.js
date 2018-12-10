
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadEmailTemplates,
    deleteEmailTemplate
} from '../redux/actions/actions'

const mapStateToProps = (state) => {
    return {
        templates: state.emailTemplates.templates
    };
};

class EmailTemplates extends Component {
    componentWillMount() {
        this.props.loadEmailTemplates();
    }

    delete(template) {
        this.props.deleteEmailTemplate(template._id);
    }
    
    render() {
                const templates = this.props.templates.map((template)=>
                <tr key={template._id.toString()}>
                    <td>{template.subject}</td>
                    <td>{template.content}</td>
                    <td>{template.thumbnail ? <img alt="thumbnail" width="100" src={template.thumbnail} /> : ''}</td>
                    <td><button onClick={this.delete.bind(this, template)}>Delete</button></td>
                </tr>
            );
            
        return ( 
                <div className="container col-md-8 col-md-offset-2">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Subject</th>
                                <th scope="col">Content</th>
                                <th scope="col">Thumbnail</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {templates}
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default connect(mapStateToProps, { loadEmailTemplates, deleteEmailTemplate })(EmailTemplates);
