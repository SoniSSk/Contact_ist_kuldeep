import React from "react";
import container from "../Header/HeaderStyle.module.css";
import logo from "../../assets/images/logo.svg";
import { AddContact } from "../ModalBox/AddContact";
import { FullScreenDialog } from "../ModalBox/ModalBox";
import { useNavigate } from "react-router-dom";
import { ButtonsWrapper } from "../buttons-wrapper/ButtonsWrapper";
export const HeaderWrapper = (props:any) => {
  const buttonConfig = [
    {
      label: "Add Contact",
      onClick: () => navigate("/add-contact"),
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className={container.container}>
        {/* <img className={container.image_box} src={logo} /> */}
        <div className={container.logo}>{props.label}</div>
        <div style={{ width:'46.5%' , marginTop:'13px'}}>
        <ButtonsWrapper buttonConfig={buttonConfig} />
      </div>
      </div>
     
    </>
  );
};
