const list = () =>{
    const[name, setName] = useState({});
    const[address, setAddress] = useState({});

const handle=()=>{
    localStorage.setItem('Name',name);
    localStorage.setItem('Address',address);
    };
};
const listitems = items.map(
    (item) => <p>{item}</p>
)
const items=[
    {
        "name":"krupa",
        "address":"chhani",
        "email":"@gmail.com",
    },
    {
        "name":"bhavya",
        "address":"chhani",
        "email":"xyz@gmail.com",
    },
    {
        "name":"hasti",
        "address":"chhani",
        "email":"abc@gmail.com",
    }
];
console.log(listitems);