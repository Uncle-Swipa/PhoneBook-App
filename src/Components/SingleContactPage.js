import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleContactPage = () => {
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
  })
    return (
      <div className="contact-page">
        {contact.map((con) => {
          return (
            <div className="single-contact" key={con.id}>
              <h4>{con.name}</h4>
              <p>{con.email}</p>
              <p>{con.phoneNumber}</p>
            </div>
          );
        })}
      </div>
    );
}
 
export default SingleContactPage;