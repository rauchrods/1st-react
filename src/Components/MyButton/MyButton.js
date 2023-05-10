import "./MyButton.css";

function MyButton({content,color,children}){

    let p1 = {
        name: "rauch",
        age: 24,
        address:{
            city: "mumbai",
            state: "maharashtra",
            country: "India"
        }
    }

// let {name, age, address:{city,state}} = p1;
// console.log(name, age, city, state);

let p2 = {...p1};
p2.address = {...p1.address};
p2.name = "roy";
p2.age = 30;
p2.address.city = "NYC";
p2.address.country = "USA";
console.log(p1);
console.log(p2);
console.log(p1.address.city);

    // let styleobj = {
    //     backgroundColor:color
    // }

    return(
        
        <div style={{backgroundColor :color}}>
           <button>{content}</button>
             {children}
        </div>
        
    )
}

export default MyButton;