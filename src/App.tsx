import './App.css'
import Button from "./components/button/button.tsx";
import logo from '../public/vite.svg'
import {ButtonColorsOutline, IconPosition, IconSize, ImageTextGap} from "./components/button/enumButton.ts";
import Input from "./components/input/input.tsx";
import {Status} from "./components/input/enumInput.ts";

function App() {

  return (
    <div>

        <Button
            onClick={() => (console.log('clicked'))}
            icon={logo}
            iconSize={IconSize.size16}
            gap={ImageTextGap.gap32}
            iconPosition={IconPosition.left}
            title="dvdv"
            buttonColorsOutline={ButtonColorsOutline.successOutline}
        />

        <Input status={Status.success}  value='hello: ' ></Input>

    </div>
  )
}

export default App
