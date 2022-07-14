import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllContacts = () => {
    const [allContact, setAllContacts] = useState([]);
    const baseURL = "http://localhost:8080/contact-list";

    const getAllContacts = () => {
        axios.get(baseURL).then((response) => {
         console.log(response.data);
         setAllContacts(response.data);
       });
     };

    useEffect(() => {
        getAllContacts();
    }, []);

    const deleteContact = (Id) => {
      const newContacts = allContact.filter((contact) => contact.id !== Id);
      setAllContacts(newContacts);
      axios.delete(`http://localhost:8080/register/${Id}`);
    };

    return (
    <div className="all-contact-page">
        {allContact.map((contact) =>{
            return (
              <div className="contact-card" key={contact.id}>
                <h4>{contact.name}</h4>
                <p>{contact.email}</p>
                <img
                  src="\icons8-trash.svg"
                  alt="delete icon"
                  width="20"
                  height="15"
                  onClick={() => deleteContact(contact.id)}
                />
                <Link to={`/single-page/${contact.id}`}>View Details</Link>
              </div>
            );
        })}
    </div>
    );
}
 
export default AllContacts;