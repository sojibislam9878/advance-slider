import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];

export const purposeTypeOptions = [
	{ label: 'Test', value: 'test' },
	{ label: 'Final', value: 'final' }
]

export const animationType = [
	{label:"Bounce", value:"animate__bounce"},
	{label:"Flash", value:"animate__flash"},
	{label:"Back In Down", value:"animate__backInDown"},
	{label:"Back In Right", value:"animate__backInRight"},
	{label:"Bounce In Right", value:"animate__bounceInRight"},
	{label:"Bounce out Left", value:"animate__bounceOutLeft"},
	{label:"Flip", value:"animate__flip"},
	{label:"Light Speed In Right", value:"animate__lightSpeedInRight"},
	{label:"Fade In Bottom Right", value:"animate__fadeInBottomRight"},
	{label:"Swing", value:"animate__swing"},
]

export const animationDurationOptions = [
	{ label: 'Slower', value: 'animate__slower' },
	{ label: 'Slow', value: 'animate__slow' },
	{ label: 'Fast', value: 'animate__fast' },
	{ label: 'Faster', value: 'animate__faster' }
]

export const paginationTypeOptions =[

	{label:"Normal", value:""},
	{label:"Progress Bar", value:"progressbar"},
	{label:"Numeric", value:"fraction"},
]