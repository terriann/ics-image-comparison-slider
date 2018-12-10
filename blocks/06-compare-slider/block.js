const { __, setLocaleData } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	RichText,
	MediaUpload,
    InspectorControls,
} = wp.editor;
const {
	Button,
    PanelBody,
    PanelRow,
	TextControl,
	RangeControl,
	ToggleControl,
	SelectControl,
} = wp.components;
const {
    Fragment
} = wp.element;

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
		caption_left: {
			type: 'string',
			default: ''
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
		caption_right: {
			type: 'string',
			default: ''
		},
		default_offset_pct: {
			type: 'number',
			default: 50,
		},
		no_overlay: {
			type: 'bool',
			default: false,
		},
		orientation : {
			type: 'string', // is enum a type I could use here?
			default: 'horizontal'
		}
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {
				mediaID_left,
				mediaURL_left,
				caption_left,
				mediaID_right,
				mediaURL_right,
				caption_right,
				default_offset_pct,
				no_overlay,
				orientation,
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
		function onChangeCaptionLeft(text) {
			setAttributes({
				caption_left: text
			})
		};
		function onChangeCaptionRight(text) {
			setAttributes({
				caption_right: text
			})
		};
		function onStartPercentChange(percent) {
			setAttributes({
				default_offset_pct: percent
			})
		};
		function onHideOverlayChange(set) {
			setAttributes({
				no_overlay: set
			})
		};
		function onOrientationChange(set) {
			setAttributes({
				orientation: set
			})
		};

		return (
			<Fragment>

			<InspectorControls>
				<PanelBody title={ __( 'Comparison Slider Settings' ) }>
					<TextControl
						label='Left Caption'
						value={ caption_left }
						onChange={ onChangeCaptionLeft }
					/>
					<TextControl
						label='Right Caption'
						value={ caption_right }
						onChange={ onChangeCaptionRight }
					/>

					<RangeControl
						label={ __( 'Starting Percentage' ) }
						value={ default_offset_pct }
						onChange={ onStartPercentChange }
						min={ 0 }
						max={ 100 }
					/>

					<ToggleControl
						label={ __( 'Hide Overlay' ) }
						checked={ no_overlay }
						onChange={ onHideOverlayChange }
					/>
					<SelectControl
						label="Orientation"
						value={ orientation }
						options={ [
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' },
						] }
						onChange={ onOrientationChange }
					/>
				</PanelBody>
			</InspectorControls>

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
			</Fragment>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {
				mediaURL_left,
				caption_left,
				mediaURL_right,
				caption_right,
				default_offset_pct,
				no_overlay,
				orientation,
			},
		} = props;
		return (
			<div className={ className }>
				<div class="ics-slide-wrapper twentytwenty-container" data-caption-left={ caption_left } data-caption-right={ caption_right } data-offset-percent= { default_offset_pct } data-no-overlay={ no_overlay } data-orientation={ orientation }>
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
