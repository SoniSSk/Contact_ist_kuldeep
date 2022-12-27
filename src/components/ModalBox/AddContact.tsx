import React, { useState, useEffect } from "react";
import { CustomTextField } from "../text-field/CustomTextField";
import modalBoxStyles from "../ModalBox/ModalBoxStyle.module.css";
import { CustomSelect } from "../custom-select/CustomSelect";
import profile from "../../assets/images/profile.jpg";
import radioChecked from "../../assets/images/radioChecked.svg";
import radioUnChecked from "../../assets/images/radioUnchecked.svg";
import { ButtonsWrapper } from "../buttons-wrapper/ButtonsWrapper";
import { useNavigate } from "react-router-dom";
export const AddContact = (props: any) => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const number = queryParams.get("number");
  const type = queryParams.get("type");
  const isWhatsapp = queryParams.get("isWhatsapp");
  // console.log( name, number, type, isWhatsapp, "query params")
  const { contactInfo } = props;
  const navigate = useNavigate();
  const types = {
    defaultValue: "Personal",
    options: [
      {
        label: "Personal",
        value: "Personal",
      },
      {
        label: "Office",
        value: "Office",
      },
    ],
  };
  console.log(contactInfo, "contact info");
  const [slectedType, setSelectedType] = useState(types.options[0].value);
  //   const [addContact, setAddContact] = useState({
  //     name: contactInfo?.name || "",
  //     phone: contactInfo?.phone || "",
  //     type: contactInfo?.type || "Personal",
  //     isWhatsapp: contactInfo?.isWhatsapp,
  //     profilePicture: "",
  //   });

  const [addContact, setAddContact] = useState({
    name: name || "",
    number: number || "",
    type: type || "Personal",
    isWhatsapp: isWhatsapp == "true" ? true : false,
    profilePicture: "",
  });
  const buttonConfig = [
    {
      label: "Discard Feilds",
      onClick: () => navigate(-1),
    },
    {
      label: "Save Contact ",
      onClick: () => {
        if (name && number) {
          console.log("kul");
          const objIndex = contacts.findIndex(
            (item: any) => item.number == addContact.number
          );
          contacts[objIndex] = addContact;
          setContacts([...contacts]);
          navigate(-1);
        } else {
          console.log(addContact, "add contact");
          setContacts([...contacts, addContact]);
          navigate(-1);
        }
      },
      variant: "contained",
    },
  ];
  console.log(addContact, "add contact");

  const handleclick = () => {
    let list = localStorage.getItem("contact");
    console.log(list, "list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const [contacts, setContacts] = useState(handleclick());
  console.log(contacts, "contacts kuldeep soni ");
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts ? contacts : []));
  }, [contacts]);
  console.log(contacts, "contacts kuldeep soni ");
  return (
    <div className={modalBoxStyles.container}>
      <div className={modalBoxStyles.image_container}>
        <img className={modalBoxStyles.image_size} src={profile} />
      </div>
      <div className={modalBoxStyles.container_each_row}>
        <CustomTextField
          id={"valueCount"}
          defaultValue={addContact.name}
          variant={"outlined"}
          onChange={(e: any) =>
            setAddContact({ ...addContact, name: e.target.value })
          }
          placeholder="Enter Name"
          label="Name"
          type="text"
          propHeight="13px"
          paddingHeight="8px"
        />
      </div>
      <div className={modalBoxStyles.container_each_row}>
        <CustomTextField
          id={"valueCount"}
          defaultValue={addContact.number}
          variant={"outlined"}
          onChange={(e: any) =>
            setAddContact({ ...addContact, number: e.target.value })
          }
          placeholder="Enter Number"
          label="Number"
          type="number"
          propHeight="13px"
          paddingHeight="8px"
        />
      </div>
      <div className={modalBoxStyles.container_each_row}>
        <div className={modalBoxStyles.text}>Type</div>
        <CustomSelect
          config={types}
          setData={setSelectedType}
          setDefaultValue={slectedType}
          propHeight="29px"
        />
      </div>
      <div className={modalBoxStyles.container_each_row}>
        <div className={modalBoxStyles.text}>Whatsapp Status</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", columnGap: "10px", width: "50%" }}>
            <img
              style={{ width: "16px" }}
              src={addContact.isWhatsapp ? radioChecked : radioUnChecked}
              onClick={() =>
                setAddContact({
                  ...addContact,
                  isWhatsapp: !addContact.isWhatsapp,
                })
              }
            />
            <div className={modalBoxStyles.text} style={{ marginTop: "5px" }}>
              Whatsapp
            </div>
          </div>
          <div style={{ display: "flex", columnGap: "10px", width: "50%" }}>
            <img
              style={{ width: "16px" }}
              src={addContact.isWhatsapp ? radioUnChecked : radioChecked}
              onClick={() =>
                setAddContact({
                  ...addContact,
                  isWhatsapp: !addContact.isWhatsapp,
                })
              }
            />
            <div className={modalBoxStyles.text} style={{ marginTop: "5px" }}>
              Not Whatsapp
            </div>
          </div>
        </div>
      </div>
      <div
        className={modalBoxStyles.container_each_row}
        style={{ marginTop: "50px", marginRight: "-20px" }}
      >
        <ButtonsWrapper buttonConfig={buttonConfig} />
      </div>
    </div>
  );
};
