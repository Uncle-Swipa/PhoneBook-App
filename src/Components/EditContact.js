import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditContact = ({ contact, id, isOpen, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const navigate = useNavigate()
  if (!isOpen) return null;

  const editUserDetails = () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("phoneNumber", phoneNumber);

    axios.put(`http://localhost:8080/register/${id}`, formField, {headers: { "Content-Type": "application/json" }})
      .then((res) => {
        console.log(res.data);
    });
  }

    const navigateToContact = () => {
      navigate(`/single-page/${id}`);
    };

  return (
    <div className="overlay">
      <div key={id} className="edit-contact">
        <h2>Edit Contact</h2>
        <form action="" onSubmit={navigateToContact}>
          <label htmlFor="name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="email">
            <input type="email" value={contact.email} readOnly />
          </label>
          <br />
          <label htmlFor="phoneNumber">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <br />
          <button className="Btn" onClick={editUserDetails}>
            Submit
          </button>
          <button onClick={onClose} className="edit">
            X
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default EditContact;