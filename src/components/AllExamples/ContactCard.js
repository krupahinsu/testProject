import React from 'react';

const Contactcard = (props) => {
    const{id, name, email}= props.contact;
    return(
        <div classNmame="item">
                <div className="content">
                    <div className="header">{name} </div>
                    <div>{email}</div>
                </div>
            <i class="fa-solid fa-trash" style={{color:"red",margintop:"7px"}}></i>
            </div>
    );
};

export default Contactcard;