/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import ListItem from 'woocommerce/components/list/list-item';
import ListItemField from 'woocommerce/components/list/list-item-field';

const PaymentMethodItem = ( { method, translate } ) => {
	return (
		<ListItem>
			<ListItemField>
				{
					method.isSuggested &&
					(
						<p className="payments__method-suggested">
							{ translate( 'Suggested Method' ) }
						</p>
					)
				}
				<p className="payments__method-name">{ method.title }</p>
			</ListItemField>
			<ListItemField>
				{ method.fees && (
					<p className="payments__method-information">{ method.fees }</p>
				) }
				{ method.informationUrl && (
					<p className="payments__method-information">
						<a href={ method.informationUrl }>
							{ translate( 'More Information' ) }
						</a>
					</p>
				) }

			</ListItemField>
			<ListItemField>
				<Button compact>
					{
						translate( 'Set up' )
					}
				</Button>
			</ListItemField>
		</ListItem>
	);
};

PaymentMethodItem.propTypes = {
	method: PropTypes.shape( {
		title: PropTypes.string.isRequired,
		isSuggested: PropTypes.bool,
		fees: PropTypes.string,
		informationUrl: PropTypes.string,
	} ),
};

export default localize( PaymentMethodItem );
