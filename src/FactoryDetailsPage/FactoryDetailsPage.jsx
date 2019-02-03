import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class FactoryDetailsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getOneFactory(this.props.match.params.id));
    }

    render() {
        const { user, singleFactory } = this.props;
        // if(singleFactory && singleFactory.items ) {
        //     console.log("###", singleFactory.items.statistics);
        //     console.log("@@@", this.props.match.params);
        // }

        return (
            <div className="col-md-6 col-md-offset-3">
            <Link to="/home">Home</Link>
                <h2>Hi {user.first_name} {user.last_name}!</h2>
                {singleFactory.loading && <em>Loading Factory details...</em>}
                {singleFactory.error && <span className="text-danger">ERROR: {singleFactory.error}</span>}
                {singleFactory && singleFactory.items && singleFactory.items.id && <h4>ID: {singleFactory.items.id}</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.name && <h4>NAME: {singleFactory.items.name}</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.employee_count && <h4>EMP COUNT: {singleFactory.items.employee_count}</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.local_name && <h4>LOCAL NAME: {singleFactory.items.local_name}</h4>}

                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety && <h4>FIRE BUILDING SAFETY:</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety && 
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MALE</th>
                            <th>FEMALE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics &&singleFactory.items.statistics.fire_building_safety.manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety.manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>MID-MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety.mid_manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety.mid_manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>WORKER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety.worker.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.fire_building_safety.worker.count.female}</td>
                        </tr>
                    </tbody>
                </table> }

                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety && <h4>HEALTH  SAFETY:</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety && 
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MALE</th>
                            <th>FEMALE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics &&singleFactory.items.statistics.health_safety.manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety.manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>MID-MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety.mid_manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety.mid_manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>WORKER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety.worker.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.health_safety.worker.count.female}</td>
                        </tr>
                    </tbody>
                </table> }

                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue && <h4>WORKPLACE DIALOGUE:</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue && 
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MALE</th>
                            <th>FEMALE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics &&singleFactory.items.statistics.workplace_dialogue.manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue.manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>MID-MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue.mid_manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue.mid_manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>WORKER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue.worker.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_dialogue.worker.count.female}</td>
                        </tr>
                    </tbody>
                </table> }


                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies && <h4>WORKPLACE POLICIES:</h4>}
                {singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies && 
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MALE</th>
                            <th>FEMALE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics &&singleFactory.items.statistics.workplace_policies.manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies.manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>MID-MANAGER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies.mid_manager.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies.mid_manager.count.female}</td>
                        </tr>
                        <tr>
                            <td>WORKER</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies.worker.count.male}</td>
                            <td>{singleFactory && singleFactory.items && singleFactory.items.statistics && singleFactory.items.statistics.workplace_policies.worker.count.female}</td>
                        </tr>
                    </tbody>
                </table> }

                
                <p>
                    <Link to="/login">Logout</Link>
                </p>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { markets, authentication, factory, singleFactory } = state;
    const { user } = authentication;
    return {
        user,
        markets,
        factory,
        singleFactory
    };
}

const connectedFactoryDetailsPage = connect(mapStateToProps)(FactoryDetailsPage);
export { connectedFactoryDetailsPage as FactoryDetailsPage };