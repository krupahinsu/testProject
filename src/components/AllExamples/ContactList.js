import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ()=> {
    let data = localStorage.getItem("details")
    data = data && data.length && data.split(",")
    return(
        <>
       {
       Array.isArray(data)  && data.length > 0 ?
        data.map((e) => {
            return <div>{e}</div>
        }) :""
       }</>
    );


}

export default ContactList;