import React, { useState, useEffect } from "react";
import { ModalWrapper } from "../components/Modal/ModalWrapper";
import { FullScreenDialog } from "../components/ModalBox/ModalBox";
import { CustomTextField } from "../components/text-field/CustomTextField";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { AddContact } from "../components/ModalBox/AddContact";
import profile from "../assets/images/profile.jpg";
import { Card } from "@mui/material";
import { CardWrapper } from "../components/Card/CardWrapper";
import { Contacts } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { ButtonsWrapper } from "../components/buttons-wrapper/ButtonsWrapper";

export const HomePage = () => {
  const handleclick = () => {
    let list = localStorage.getItem("contact");
    console.log(list);
    if (list) {
      return JSON.parse(list);
    } else {
      return [
        // {
        //     name: "Rahul",
        //     number: "1234567890",
        //     type: "Personal",
        //     isWhatsapp: true,
        //     profilePicture: 'profile',
        // }
      ];
    }
  };
  const navigate = useNavigate();
  const buttonConfig = [
    {
      label: "Add Contact",
      onClick: () => navigate("/add-contact"),
      variant: "contained",
    },
  ];
  const [contacts, setContacts] = useState(handleclick());
  function getWindowDimensions() {
    const { innerWidth: widths, innerHeight: height } = window;
    return {
      widths,
      height,
    };
  }
  useEffect(() => {
    contacts.sort((a:any, b:any) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    setContacts([...contacts]);
    
  },[contacts]);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          height: `${windowDimensions.height - 81}px`,
          overflow: "auto",
        }}
      >
        {contacts.length ? (
          contacts.map((contact: any, index: any) => {
            return (
              <>
                <CardWrapper
                  contactDetails={contact}
                  contacts={contacts}
                  setContacts={setContacts}
                />
              </>
            );
          })
        ) : (
          <div
            style={{
              marginTop: `${windowDimensions.height / 2 - 60}px`,
              marginLeft: `${windowDimensions.widths / 2 - 50}px`,
            }}
          >
            <div>No Contacts Saved</div>
            <div style={{ marginTop: "20px", marginLeft: "0px" }}>
              <ButtonsWrapper buttonConfig={buttonConfig} />
            </div>
          </div>
        )}
      </div>
      <div style={{ border: "1px solid black", height: "20px", width: "100%" }}>
        {" "}
        <div style={{ float: "right", paddingRight: "20px" }}>
          Kuldeep Soni Swapnil
        </div>
      </div>
    </div>
  );
};

{
  /* <div
                style={{
                  margin: "20px",
                  padding: "10px",
                  border: "1px solid red",
                  borderRadius: "15px",
                  boxShadow: "18px 20px 46px 18px pink inset",
                }}
                key={index}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "15px",
                      }}
                      src={profile}
                    />
                  </div>
                  <div>{contact.name}</div>
                  <div>{contact.phone}</div>
                  <div>{contact.type}</div>
                  <div>{contact.isWhatsapp}</div>
                  <FullScreenDialog
                  contactInfo={contats[index]}
                    ComponentInfo={AddContact}
                    label={"Edit Contact "}
                  />
                 
                </div>
              </div> */
}
