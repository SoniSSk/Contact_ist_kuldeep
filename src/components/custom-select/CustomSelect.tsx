import React, { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import textstyles from "../customtextfield/CustomTextField.module.css";
import "../custom-select/styles.css";
import close from "../../assets/images/cross.svg";
import profiling from "../../assets/images/profiling.svg";
import { display, padding } from "@mui/system";

export const CustomSelect = (props: any) => {
  const {
    config,
    setData,
    tablesAccessedType,
    propHeight,
    iMonitorSelect,
    state = true,
  } = props;
  const [val, setVal] = useState<any>(tablesAccessedType);
  useEffect(() => {
    setVal(tablesAccessedType);
  });
  const handlechange = (e: any) => {
    setVal(e.target.value);
    setData(e.target.value);
  };
  return (
    <div>
      <Select
        value={val}
        defaultValue={config.defaultValue}
        onChange={handlechange}
        id={"some"}
        style={{
          width: "100%",
          height: propHeight || "40px",
          border: "none",
		  fontFamily:'Lato',
		  fontWeight: 400,
    	  fontSize: '12px',
        }}
      >
        {config.options?.length &&
          config.options.map((item: any, index: any) => (
            <MenuItem value={item.value} id={index} key={index}>
              <div
                id={`CustomSelectMenuItemContainer${String(index)}`}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: "10px",
                  width: "96%",
                  // padding:'0px 10px '
                }}
              >
                {/* <img src={profiling} /> */}
                <div style={{ width: "140px", float: "left" }}>
                  <div style={{ fontSize: "14px" }}>{item.label}</div>
                  {iMonitorSelect && state ? (
                    <div style={{ fontSize: "12px" }}>{item.defautlName}</div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};
CustomSelect.defaultProps = {
  setFormConfig: "",
  isError: false,
};
