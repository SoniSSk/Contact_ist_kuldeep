import close from "../../assets/images/cross.svg";
import linePath from "../../assets/images/lineGroup.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@material-ui/core/Modal";
import ModalStyle from "../Modal/ModalWrapperStyle.module.css";
import { useState, useEffect } from "react";
import { ButtonsWrapper } from '../buttons-wrapper/ButtonsWrapper';

export const ModalWrapper = (props: any) => {
  const { opened, setOpened, title, width, feildList, ComponentInfo, buttonConfig } = props;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width,
    bgcolor: "background.paper",
    boxShadow: 24,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 2,
    paddingBottom: 3,
    borderRadius: 1,
    outline: "none",
  };
  const [open, setOpen] = useState(opened);
  const handleClose = () => {
    setOpen(false);
    setOpened(false);
  };
  useEffect(() => {
    setOpen(opened);
  }, [opened]);
  console.log(feildList, "feildList");
  return (
    <div style={{ outline: "none" }}>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className={ModalStyle.popUpBox}>
            <div className={ModalStyle.text_header}>{title}</div>
            <div
              style={{
                width: "16px",
                height: "16px",
                display: "flex",
                outline: "none",
              }}
            >
              <img
                id="ModalWrapperImageTwo"
                onClick={handleClose}
                className={ModalStyle.image_container_cross}
                src={close}
              />
            </div>
          </div>
          <div className={ModalStyle.box_padd}>
            <img className={ModalStyle.line} src={linePath} />
          </div>
          <ComponentInfo feild={feildList} />
		  <div className={ModalStyle.button_container}>
						<ButtonsWrapper buttonConfig={buttonConfig} />
					</div>
        </Box>
      </Modal>
    </div>
  );
};
