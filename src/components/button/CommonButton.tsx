import { Button } from '@material-ui/core';
import ButtonStyles from '../button/CommonButtonStyles.module.css';
import buttonrSelected from '../../assets/images/button_selected.svg';
import buttonrSelectedTick from '../../assets/images/tick.svg';
import React, { createContext, useEffect, useState } from 'react';

interface ButtonProps {
	readonly src?: string;
	readonly label: string;
	readonly onClick: any;
	readonly isImageBtn?: boolean;
	readonly selectedOption?: any;
	readonly isSelected?: boolean;
	readonly isSelection?: boolean;
	readonly tableCount?: number;
}
export const CommonButton: React.FC<ButtonProps> = (props: ButtonProps) => {
	const {
		src = '',
		label,
		onClick,
		isImageBtn,
		selectedOption,
		tableCount,
		isSelected = false,
		isSelection = false,
	} = props;
	const [labelNew, setLabelNew] = useState([]);
	// useEffect (()=>{
	// 	if (label.length < 16 ){
	// 		for (let i=0; i<label.length; i++){
	// 			if (i < 13) setLabelNew([...labelNew, label[i]]);
	// 			else if (i <16) setLabelNew([...labelNew, ".");
	// 		}
	// 	}
	// })

	return (
		<>
			<Button
				className={`${ButtonStyles.button} ${
					isSelected
						? ButtonStyles.selectedButton
						: isSelection
						? ButtonStyles.unselectedbutton
						: ''
				}`}
				onClick={onClick}
			>
				{isSelected ? (
					<div id='CommonButtonConatiner'>
						<img
							id='CommonButtonImageOne'
							className={ButtonStyles.selectedButton_img_green}
							src={buttonrSelected}
						/>
						<img
							id='CommonButtonImageTwo'
							className={ButtonStyles.selectedButton_img_tick}
							src={buttonrSelectedTick}
						/>
					</div>
				) : (
					''
				)}

				{isImageBtn ? (
					<img
						id='CommonButtonImage'
						src={src}
						className={ButtonStyles.imageStyles}
					/>
				) : (
					<></>
				)}
				<div id='CommonButtonContainerMain'>
					<div id='CommonButtonBtn' className={ButtonStyles.container_button}>
						{label}

						{tableCount ? <div>({tableCount})</div> : ''}
					</div>
				</div>
			</Button>
		</>
	);
};
