const { __, setLocaleData } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	RichText,
	MediaUpload,
} = wp.editor;
const { Button } = wp.components;

setLocaleData( window.gutenberg_examples_05_esnext.localeData, 'gutenberg-examples' );

registerBlockType( 'gutenberg-examples/example-06-compare-slider', {
	title: __( 'Compare Slider', 'gutenberg-examples' ),
	icon: 'camera',
	category: 'layout',
	attributes: {
		mediaID_left: {
			type: 'number',
		},
		mediaURL_left: {
			type: 'string',
			source: 'attribute',
			selector: 'img.compare-image-left',
			attribute: 'src',
		},
		mediaID_right: {
			type: 'number',
		},
		mediaURL_right: {
			type: 'string',
			source: 'attribute',
			selector: 'img.compare-image-right',
			attribute: 'src',
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {
				mediaID_left,
				mediaURL_left,
				mediaID_right,
				mediaURL_right,
			},
			setAttributes,
		} = props;

		const onSelectImage_left = ( media ) => {
			setAttributes( {
				mediaURL_left: media.url,
				mediaID_left: media.id,
			} );
		};
		const onSelectImage_right = ( media ) => {
			setAttributes( {
				mediaURL_right: media.url,
				mediaID_right: media.id,
			} );
		};

		return (
			<div className={ className }>
				<div className="cslider-image-left">
					<MediaUpload
						onSelect={ onSelectImage_left }
						className="compare-image-left"
						allowedTypes="image"
						value={ mediaID_left }
						render={ ( { open } ) => (
							<Button className={ mediaID_left ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! mediaID_left ? __( 'Upload Before Image', 'gutenberg-examples' ) : <img src={ mediaURL_left } alt={ __( 'Before Image', 'gutenberg-examples' ) } /> }
							</Button>
						) }
					/>
				</div>
				<div className="cslider-image-right">
					<MediaUpload
						onSelect={ onSelectImage_right }
						className="compare-image-right"
						allowedTypes="image"
						value={ mediaID_right }
						render={ ( { open } ) => (
							<Button className={ mediaID_right ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! mediaID_right ? __( 'Upload After Image', 'gutenberg-examples' ) : <img src={ mediaURL_right } alt={ __( 'After Image', 'gutenberg-examples' ) } /> }
							</Button>
						) }
					/>
				</div>
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {
				mediaURL_left,
				mediaURL_right,
			},
		} = props;
		return (
			<div className={ className }>
				<div id="container1" class="twentytwenty-container">
				{
					mediaURL_left && (
						<img className="compare-image-left" src={ mediaURL_left } alt={ __( 'Before Image', 'gutenberg-examples' ) } />
					)
				}
				{
					mediaURL_right && (
						<img className="compare-image-right" src={ mediaURL_right } alt={ __( 'After Image', 'gutenberg-examples' ) } />
					)
				}
				</div>
			</div>
		);
	},
} );
