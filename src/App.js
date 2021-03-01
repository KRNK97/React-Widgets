import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Wiki from "./components/Wiki";
import DropDown from './components/DropDown';
const items = [
  {
    title: "What is React ?",
    content: "React is a js library used for front-end development.",
  },
  {
    title: "How do we show content ?",
    content: "Content is displayed using JSX.",
  },
  {
    title: "How is content updated ?",
    content: "Components on screen are updated using states.",
  },
  {
    title: "How is React useful ?",
    content:
      "React is useful as it allows us to write js and jsx at once and easily update specific items on screen.",
  },
];

const options = [
  {
    name : 'Red Color',
    value : 'red',
    code :'danger'
  },
  {
    name : 'Blue Color',
    value : 'blue',
    code : 'primary'
  },
  {
    name : 'Green Color',
    value : 'green',
    code : 'success'
  },
]

export default () => {
  const [color, setColor] = useState(options[0]);
  return (
    <div className="container mt-2">
      {/* <Accordion items={items} />
      <Wiki /> */}
      <DropDown options={options} color={color} setColor = {setColor}/>
    </div>
  );
};
