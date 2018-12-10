
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadCampaigns,
    deleteCampaign
} from '../redux/actions/actions'

const mapStateToProps = (state) => {
    console.log(state);
    return {
        campaigns: state.campaigns.campaigns
    };
};

class Campaigns extends Component {
    componentWillMount() {
        this.props.loadCampaigns();
    }

    delete(campaign) {
        this.props.deleteCampaign(campaign._id);
    }
    
    render() {
                const campaigns = this.props.campaigns.map((campaign)=>
                <tr key={campaign._id.toString()}>
                    <td>{campaign.name}</td>
                    <td>{campaign.emailTemplate.subject}</td>
                    <td>{campaign.recipients.map(r => r.email).join(',\n')}</td>
                    <td>{campaign.date}</td>
                    <td><button onClick={this.delete.bind(this, campaign)}>Delete</button></td>
                </tr>
            );
            
        return ( 
                <div className="container col-md-8 col-md-offset-2">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Template</th>
                                <th scope="col">Recipients</th>
                                <th scope="col">Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns}
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default connect(mapStateToProps, { loadCampaigns, deleteCampaign })(Campaigns);
