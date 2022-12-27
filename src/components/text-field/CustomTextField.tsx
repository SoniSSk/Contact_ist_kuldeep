import { InputAdornment, TextField } from '@mui/material';
// import { ReactComponent as Search } from '../../assets/images/search.svg';
import CustomTextFieldStyles from '../text-field/CustomTextFieldStyles.module.css';
interface PropTypes {
	id: any;
	variant: 'outlined' | 'standard' | 'filled';
	placeholder?: any;
	onChange: any;
	className?: any;
	defaultValue?: any;
	isError?: any;
	dataTestId?: any;
	// isLogin?: boolean
	icon?: string;
	isRequired?: boolean;
	type?: string;
	isDisabled?: boolean;
	minVal?: number;
	maxVal?: number;
	showRangeError?: boolean;
	onBlur?: any;
	isSearch?: boolean;
	label?: string;
	customStyles?: any;
	customfieldDate?: any;
	customfieldDateWithHours?: any;
	propHeight?: string;
	paddingHeight?: string;
	row?: number;
	multiline?: any;
}

export const CustomTextField = (props: PropTypes) => {
	const {
		id,
		variant,
		placeholder,
		onChange,
		defaultValue,
		isError,
		dataTestId,
		className,
		icon,
		isRequired,
		type,
		isDisabled = false,
		minVal,
		maxVal,
		showRangeError = false,
		onBlur,
		isSearch,
		label = '',
		customStyles,
		propHeight,
		paddingHeight,
		multiline,
		customfieldDateWithHours,
		customfieldDate,
		row,
	} = props;
	console.log(defaultValue, 'default value');

	return (
		<div
			
		>
			{label !== '' ? (
				<div className={CustomTextFieldStyles.label}>{label}</div>
			) : (
				''
			)}
			<TextField
				size={'small'}
				id={id}
				variant={variant}
				placeholder={placeholder}
				defaultValue={defaultValue}
				value={defaultValue}
				onChange={onChange}
				data-testid={dataTestId}
				className={CustomTextFieldStyles.searchField}
				// style={customStyles?customStyles:''}
				error={isError}
				required={false}
				type={type}
				disabled={isDisabled}
				onWheel={(e: any) => e.target?.blur()}
				multiline={multiline}
				onBlur={onBlur}
				
				inputProps={{
					style: {
						padding: paddingHeight,
						paddingLeft: '14px',
						height: propHeight,
						fontFamily: 'Lato',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: '14px',
						lineHeight: '17px',
					},
				}}
				
			/>
		</div>
	);
};
