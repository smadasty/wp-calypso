/**
 * External dependencies
 */
import React, { PureComponent, PropTypes } from 'react';
import { localize } from 'i18n-calypso';

export class PathSharePreview extends PureComponent {

	static PropTypes = {
		articleUrl: PropTypes.string,
		externalProfilePicture: PropTypes.string,
		externalProfileUrl: PropTypes.string,
		externalName: PropTypes.string,
		imageUrl: PropTypes.string,
		message: PropTypes.string,
	};

	render() {
		const {
			articleUrl,
			externalProfilePicture,
			externalProfileUrl,
			externalName,
			imageUrl,
			message,
			translate
		} = this.props;
		return (
			<div className="path-share-preview">
				<div className="path-share-preview__content">
					<div className="path-share-preview__header">
						<div className="path-share-preview__profile-picture-part">
							<img
								className="path-share-preview__profile-picture"
								src={ externalProfilePicture }
							/>
						</div>
						<div className="path-share-preview__profile-line-part">
							<div className="path-share-preview__profile-line">
								<a className="path-share-preview__profile-name" href={ externalProfileUrl }>
									{ externalName }
								</a>
								<span>
									{
										translate( 'published an article on {{a}}WordPress{{/a}}', {
											components: {
												a: <a href="#" />
											}
										} )
									}
								</span>
							</div>
							<div className="path-share-preview__meta-line">
								<a href="https://wordpress.com">
									{ translate( 'WordPress' ) }
								</a>
							</div>
						</div>
					</div>
					<div className="path-share-preview__body">
						<div className="path-share-preview__message">
							{ message }
						</div>
						<div className="path-share-preview__article-url-line">
							<a className="path-share-preview__article-url"
								href={ articleUrl }>
								{ articleUrl }
							</a>
						</div>
						{ imageUrl &&
							<div className="path-share-preview__image-wrapper">
								<img
									className="path-share-preview__image"
									src={ imageUrl }
								/>
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default localize( PathSharePreview );

