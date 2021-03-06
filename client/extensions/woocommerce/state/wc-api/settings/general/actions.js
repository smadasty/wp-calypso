/**
 * Internal dependencies
 */
import request from '../../request';
import { setError } from '../../../site/status/wc-api/actions';
import {
	WOOCOMMERCE_API_FETCH_SETTINGS_GENERAL,
	WOOCOMMERCE_API_FETCH_SETTINGS_GENERAL_SUCCESS,
} from '../../../action-types';
import {
	areSettingsGeneralLoaded,
	areSettingsGeneralLoading,
} from './selectors';

export const fetchSettingsGeneralSuccess = ( siteId, data ) => {
	return {
		type: WOOCOMMERCE_API_FETCH_SETTINGS_GENERAL_SUCCESS,
		payload: {
			siteId,
			data,
		},
	};
};

export const fetchSettingsGeneral = ( siteId ) => ( dispatch, getState ) => {
	if (
		areSettingsGeneralLoaded( getState(), siteId ) ||
		areSettingsGeneralLoading( getState(), siteId )
	) {
		return;
	}

	const getAction = {
		type: WOOCOMMERCE_API_FETCH_SETTINGS_GENERAL,
		payload: { siteId },
	};

	dispatch( getAction );

	return request( siteId ).get( 'settings/general' )
		.then( ( data ) => {
			dispatch( fetchSettingsGeneralSuccess( siteId, data ) );
		} )
		.catch( err => {
			dispatch( setError( siteId, getAction, err ) );
		} );
};
