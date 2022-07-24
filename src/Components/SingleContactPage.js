import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditContact from "./EditContact";

const SingleContactPage = () => {
  const [ open, setOpen ] = useState(false)
  const [contact, setContact] = useState([]);
  const { id } = useParams();
  
  const getContact = () => {
    axios.get(`http://localhost:8080/contact-list/${id}`).then((res) => {
      console.log(res.data);
      setContact(res.data);
    });
  };


  useEffect(() => {
    getContact();
  }, [])
    return (
      <div className="contact-page">
        {contact.map((con) => {
          return (
            <>
              <div className="single-contact" key={con.id}>
                <h3>{con.name}</h3>
                <p>{con.email}</p>
                <p>{con.phoneNumber}</p>
                <div className="edit">
                  <img
                    src="\icons8-edit.svg"
                    alt="edit contact"
                    width="15"
                    height="15"
                    onClick={() => setOpen(true)}
                  />
                  <EditContact contact={con} id={id} isOpen={open} onClose={() => setOpen(false)}></EditContact>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
}
 
export default SingleContactPage;