import React, { useState, useEffect } from "react";
import profile from "../../assets/images/profile.jpg";
import cardWrapperStyle from "../Card/CardWrapperStyle.module.css";
import { ButtonsWrapper } from "../buttons-wrapper/ButtonsWrapper";
import { useNavigate } from "react-router-dom";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { DeleteModal } from "../Modal/DeleteModal";
export const CardWrapper = (props: any) => {
  const { contactDetails, contacts, setContacts } = props;
  const navigate = useNavigate();

  const buttonConfig = [
    {
      label: "Edit ",
      onClick: () =>
        navigate(
          "/edit-contact?id="+contactDetails.id+"&name=" +
            contactDetails.name +
            "&number=" +
            contactDetails.number +
            "&type=" +
            contactDetails.type +
            "&isWhatsapp=" +
            contactDetails.isWhatsapp +
            "&profilePicture=" +
            contactDetails.profilePicture +
            ""
        ),
    },
    {
      label: "Delete",
      onClick: () => setCancelWarning(true),
      variant: "contained",
    },
  ];
  const buttonConfigDel = [
    {
      label: "No",
      onClick: () => setCancelWarning(false),
    },
    {
      label: "Yes",
      onClick: () => {
        console.log(contacts.length, "sfgiudskjfhsj");
        // contacts.length === 1 ? setContacts([]) : null;
        if (contacts.length === 1) {
            setContacts([]);
            localStorage.removeItem("contact");
          setCancelWarning(false);
        } else {
          const aa = contacts.filter(
            (contact: any) => contact.id !== contactDetails.id
          );
          console.log(aa, "aa");
          setContacts(aa);
          setCancelWarning(false);
        }
      },
      variant: "contained",
    },
  ];
  const [openedCancelWarning, setCancelWarning] = useState(false);
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts ? contacts : []));
  }, [contacts]);
  return (
    <div className={cardWrapperStyle.container}>
      <div className={cardWrapperStyle.image_position}>
        <img
          style={{ width: "80px", height: "80px", borderRadius: "20px" }}
          src={profile}
        />
      </div>
      <div className={cardWrapperStyle.container_new}>
        <div className={cardWrapperStyle.details_container}>
          <div className={cardWrapperStyle.box_small}>Name:- </div>
          <div className={cardWrapperStyle.box}>{contactDetails.name}</div>
        </div>
        <div className={cardWrapperStyle.details_container}>
          <div className={cardWrapperStyle.box_small}>Contact:- </div>
          <div className={cardWrapperStyle.box}>{contactDetails.number}</div>
        </div>
        <div className={cardWrapperStyle.details_container}>
          <div className={cardWrapperStyle.box_small}>Type:- </div>
          <div className={cardWrapperStyle.box}> {contactDetails.type}</div>
        </div>
        <div className={cardWrapperStyle.details_container}>
          <div className={cardWrapperStyle.box_small}>Whatsapp:- </div>
          <div className={cardWrapperStyle.box}>
            {contactDetails.isWhatsapp ? "Active" : "Not Active"}
          </div>
        </div>
      </div>
      <div className={cardWrapperStyle.button_container}>
        <ButtonsWrapper buttonConfig={buttonConfig} />
      </div>
      {openedCancelWarning ? (
        <ModalWrapper
          opened={openedCancelWarning}
          ComponentInfo={DeleteModal}
          setOpened={setCancelWarning}
          title={"Delete Contact"}
          sourceProfileData={true}
          width={381}
          buttonConfig={buttonConfigDel}
        />
      ) : null}
    </div>
  );
};
