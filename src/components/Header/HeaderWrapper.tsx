import React from "react";
import container from "../Header/HeaderStyle.module.css";
import logo from "../../assets/images/logo.svg";
import { AddContact } from "../ModalBox/AddContact";
import { FullScreenDialog } from "../ModalBox/ModalBox";
import { useNavigate } from "react-router-dom";
import { ButtonsWrapper } from "../buttons-wrapper/ButtonsWrapper";
export const HeaderWrapper = () => {
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
        <img className={container.image_box} src={logo} />
        <div style={{ width:'35%' , marginTop:'13px'}}>
        <ButtonsWrapper buttonConfig={buttonConfig} />
      </div>
      </div>
     
    </>
  );
};
