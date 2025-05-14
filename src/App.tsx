import {useState} from "react";
import './App.css'
import Button from "./components/button/button.tsx";
import logo from '../public/vite.svg'
import {ButtonColorsOutline, IconPosition, IconSize, ImageTextGap} from "./components/button/enumButton.ts";
import Input from "./components/input/input.tsx";
import {Status} from "./components/input/enumInput.ts";
import Checkbox from "./components/checkBox/checkbox.tsx";

function App() {

    const [value, setValue] = useState({
        name: '',
        lastName: '',
    });




    const handleClick = () => {
        console.log(value, 'values')
    }

    const [check, setCheck] = useState(false)
  return (
      <div>
          <Checkbox disabled={true} onChange={setCheck} id='name'></Checkbox>
          <label htmlFor='name' >что то там такое длинное</label>


          <Button
              onClick={() => (console.log('clicked'))}
              icon={logo}
              iconSize={IconSize.size16}
              gap={ImageTextGap.gap32}
              iconPosition={IconPosition.left}
              title="dvdv"
              buttonColorsOutline={ButtonColorsOutline.successOutline}
          />

          <Input status={Status.default} name='name' value={value.name} setValues={setValue}></Input>
          <Input status={Status.default} name='lastName' value={value.lastName} setValues={setValue}></Input>
          <Button title='submit' onClick={handleClick}></Button>
      </div>
  )
}

export default App
