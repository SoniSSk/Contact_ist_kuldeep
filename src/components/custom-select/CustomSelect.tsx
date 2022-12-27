import React, { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import textstyles from '../customtextfield/CustomTextField.module.css';
import '../custom-select/styles.css';
import close from '../../assets/images/cross.svg';
import profiling from '../../assets/images/profiling.svg';
import { display, padding } from '@mui/system';

export const CustomSelect = (props: any) => {
	const {
		config,
		setData,
		selectedData,
		tablesAccessedType,
		setDefaultValue,
		propHeight,
		iMonitorSelect,
		state = true,
	} = props;
	const [val, setVal] = useState<any>(tablesAccessedType);
	useEffect(() => {
		setVal(tablesAccessedType);
	});
	const handlechange = (e: any) => {
		console.log(e.target.value, 'dsdssdsdsd');
		setVal(e.target.value);
		setData(e.target.value);
	};

	console.log(tablesAccessedType, 'optionss');

	return (
		<div>
			{/* <select value={val} onChange={onChange} className={selectClassName}>
                {config.options?.length &&
                    config.options.map((option: any) => (
                        <option value={`${option.value}`}>
                            {option.label}
                        </option>
                    ))}
            </select>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                </InputLabel>
                <NativeSelect
                    value={state1}
                    onChange={onChange}
                    className={selectClassName}
                >
                    {config.options?.length &&
                        config.options.map((option: any) => (
                            <option value={`${option.value}`}>
                                {option.label}
                            </option>
                        ))}
                </NativeSelect>
            </FormControl> */}
			<Select
				value={val}
				defaultValue={config.defaultValue}
				onChange={handlechange}
				id={'some'}
				style={{
					width: '100%',
					height: propHeight || '40px',
					border: 'none',
				}}
				MenuProps={{
					sx: {
						'&& .Mui-selected': {
							color: '#2964DC',
							background: 'none !important',
							paddingLeft: '0px',
						},
						'&& .Mui-selected:hover': {
							background: 'none',
						},
						'&& .MuiMenuItem-root:hover': {
							background: 'none !important',
						},
						'&& .MuiMenu-list': {
							marginLeft: 'auto',
							marginRight: 'auto',
							width: '86%',
						},
						'&& .MuiMenuItem-root': {
							paddingLeft: '0px',
							height: '36px',
							paddingTop: '0px',
							borderBottom: '1px solid #E8E8E8',
						},
						'&& .MuiMenuItem-root:last-child': {
							borderBottom: 'none',
						},
					},
				}}
				// defaultValue={val}
				// displayEmpty
				// renderValue={val !== "" ? undefined : () => "placeholder text"}
				// displayEmpty={true}
			>
				{config.options?.length &&
					config.options.map((item: any, index: any) => (
						<MenuItem divider={true} value={item.value} id={index} key={index}>
							<div
								id={`CustomSelectMenuItemContainer${String(index)}`}
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									columnGap: '15px',
									width: '96%',
									// padding:'0px 10px '
								}}
							>
								{/* <img src={profiling} /> */}
								<div style={{ width: '100%', float: 'left' }}>
									<div style={{ fontSize: '14px' }}>{item.label}</div>
									{iMonitorSelect && state ? (
										<div style={{ fontSize: '12px' }}>{item.defautlName}</div>
									) : (
										<></>
									)}
								</div>
								<div style={{ width: '10px' }}>
									{item.totalColumns && state ? <div>|</div> : <></>}
								</div>

								<div
									style={{
										float: 'right',
										// textOverflow:'ellipsis',
										// overflow:'hidden'
									}}
								>
									{item.totalColumns && state ? (
										<div style={{ fontSize: '14px' }}>
											{item.capturedColumns} of {item.totalColumns} columns
										</div>
									) : (
										<></>
									)}
								</div>

								{/* <img src={close} /> */}
							</div>
						</MenuItem>
					))}
			</Select>
		</div>
	);
};
CustomSelect.defaultProps = {
	setFormConfig: '',
	isError: false,
};
