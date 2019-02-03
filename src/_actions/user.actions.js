import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAllMarket,
    getAllFactory,
    getOneFactory
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/home');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAllMarket() {
    return dispatch => {
        dispatch(request());

        userService.getAllMarket()
            .then(
                markets => dispatch(success(markets)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_MARKET_REQUEST } }
    function success(markets) { return { type: userConstants.GETALL_MARKET_SUCCESS, markets } }
    function failure(error) { return { type: userConstants.GETALL_MARKET_FAILURE, error } }
}

function getAllFactory() {
    return dispatch => {
        dispatch(request());

        userService.getAllFactory()
            .then(
                factory => dispatch(success(factory)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_FACTORY_REQUEST } }
    function success(factory) { return { type: userConstants.GETALL_FACTORY_SUCCESS, factory } }
    function failure(error) { return { type: userConstants.GETALL_FACTORY_FAILURE, error } }
}

function getOneFactory(id) {
    return dispatch => {
        dispatch(request());

        userService.getOneFactory(id)
            .then(
                singleFactory => dispatch(success(singleFactory)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETONE_FACTORY_REQUEST } }
    function success(singleFactory) { return { type: userConstants.GETONE_FACTORY_SUCCESS, singleFactory } }
    function failure(error) { return { type: userConstants.GETONE_FACTORY_FAILURE, error } }
}