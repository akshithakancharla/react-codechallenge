import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAllMarket());
        this.props.dispatch(userActions.getAllFactory());
    }

    render() {
        const { user, markets, factory } = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Hi {user.first_name} {user.last_name}!</h2>
                <p>You're logged in!!</p>
                <h3>Market:</h3>
                {markets.loading && <em>Loading Markets...</em>}
                {markets.error && <span className="text-danger">ERROR: {markets.error}</span>}
                {markets.items &&
                    <ul>
                        {markets.items.map((user, index) =>
                            <li key={user.id}>
                                {user.name}
                            </li>
                        )}
                    </ul>
                }
                <h3>Facotry:</h3>
                {factory.loading && <em>Loading Facotry...</em>}
                {factory.error && <span className="text-danger">ERROR: {factory.error}</span>}
                {factory.items &&
                    <ul>
                        {factory.items.map((user, index) =>
                            <li key={user.id} id={user.id}>
                               <Link to={`/factorydetails/${user.id}`}>{user.name}</Link>
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { markets, authentication, factory } = state;
    const { user } = authentication;
    return {
        user,
        markets,
        factory
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };