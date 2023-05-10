import logo from './logo.svg';
import './App.css';
import MyButton from './Components/MyButton/MyButton.js';
import Navbar from "./Components/Navbar.js";
import Content from './Components/Content.js';


let data = [
  {
    heading: "About Me",
    desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanditiisofficia aperiam, ducimus, vero, culpa blanditiis illum quia quos perferendis voluptatum qui. Magni ratione iusto atque optio numquam, quibusdam est autem."
  },
  {
    heading: "Skills",
    desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanditiisditiis illum quia quos perferendis voluptatum qui. Magni ratione iusto atque optio numquam, quibusdam est autem."
  },
  {
    heading: "Qualifications",
    desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanditiis illum quia quos perferendis volLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanditiisuptatum qui. Magni ratione iusto atque optio numquam, quibusdam est autem."
  },
  {
    heading: "Projects",
    desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanditiis illum quia quos perferendis voluptatum qui. Magni ratione iusto atque optio numquam, quibusdLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia aperiam, ducimus, vero, culpa blanditiisam est autem."
  }
];

function App() {
   
  return (

    <>    
      <Navbar></Navbar>

      {
        data.map((obj, index)=> (
            <Content heading={obj.heading}
            desciption={obj.desciption}>
               {(index!=data.length-1)? <hr></hr> : ""}
            </Content>
          )
        )
      }
     

    </>
  );
}

export default App;
