import { Button, makeStyles } from '@material-ui/core';
import ButtonStyles from '../button/CommonButtonStyles.module.css';

interface ButtonsWrapperProps {
	readonly buttonConfig: any;
}

const styles = makeStyles(() => ({
	selectedButton: {
		'& .MuiButton-root': {
			background: '#2964dc',
			padding: '0px 30px !important',
			width: 'auto',
		},
	},
	selectedButtonNew: {
		'& .MuiButton-root': {
			background: 'grey',
			padding: '0px 30px !important',
			width: 'auto',
		},
	},
}));

export const ButtonsWrapper: React.FC<ButtonsWrapperProps> = (
	props: ButtonsWrapperProps
) => {
	const { buttonConfig } = props;
	const classes = styles();

	return (
		<div id='ButtonWrapperContainer' className={ButtonStyles.buttonContainer}>
			{buttonConfig.map((item: any, index: number) => {
				return (
					<Button
						className={`${ButtonStyles.button} ${
							item.variant == 'contained'
								? classes.selectedButton
								: item.variant == 'disable'
								? classes.selectedButtonNew
								: ''
						}`}
						onClick={item.onClick}
						key={index}
						style={
							item.variant == 'contained'
								? { backgroundColor: '#2964dc', color: 'white' }
								: item.variant == 'disable'
								? {
										border: 'none  !important',
										backgroundColor: '#EAEAEA',
										color: '#8B99B4',
								  }
								: {
										backgroundColor: 'white',
										color: 'black',
										border: '1px solid #2964DC',
								  }
						}
						disabled={item.disabled}
					>
						<div>{item.label}</div>
					</Button>
				);
			})}
		</div>
	);
};
