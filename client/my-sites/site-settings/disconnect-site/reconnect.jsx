/** @format */
/**
 * External dependencies
 */
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';

class Reconnect extends Component {
	renderCardContent = () => {
		return (
			<Card>
				<span>
					{ 'Reconnection' }
				</span>
				{ " This is temporary -- I'm troubleshooting a problem." }
			</Card>
		);
	};

	render() {
		return (
			<div>
				{ this.renderCardContent() }
			</div>
		);
	}
}

export default localize( Reconnect );
