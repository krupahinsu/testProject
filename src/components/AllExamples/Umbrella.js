import React, { useState } from 'react'
import './assest/style.css';
import blue from './Images/blue.jpg';
import brown from './Images/brown.jpg';
import colorful from './Images/colorful.jpg';
import orange from './Images/orange.jpg';
import pink from './Images/pink.jpg';
import red from './Images/red.jpg';
import yellow from './Images/yellow.jpg';

export default function Umbrella() {

        const [first, setfirst] = useState("red")
        const [file, setFile] = useState();

        const data = [{
            "img":red,
            "name":"red"
            },
            {
            "img":yellow,
            "name":"yellow"
            },
            {
            "img":blue,
            "name":"blue"
            },
            {
            "img":brown,
            "name":"brown"
            },
            {
            "img":colorful,
            "name":"colorful"
            },
            {
            "img":orange,
            "name":"orange"
            },
            {
            "img":pink,
            "name":"pink"
            },
        ]
    function handleChange(e){
            console.log(e.target.files[0]);
            // The method URL. createObjectURL() takes an object and returns a URL representing the object used as a parameter.
            setFile(URL.createObjectURL(e.target.files[0]));
        }
      return (
        
        <div className="Logo">
            {
            
            data.map((e) => <>
    
            <input type='radio' value={e.name} id={e.name}
            onChange={a => setfirst(a.target.value)}
            checked = {e.name === first ? true : false} 
            />{e.name}
            </>)
            }       
            {
            data.map((e) => {
                if(e.name === first){
                    return <div className="images">
                                <img src={e.img}/>
                                <input type="file" name="file" id="upload" onChange={handleChange} />
                                <div className="upload">
                                <img src={file} />
                                </div>
                            </div>
                }
            })
            
            }
        </div>
      )
}