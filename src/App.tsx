import './App.css'
import Button from "./components/button/button.tsx";
import logo from '../public/vite.svg'
import {ButtonColorsOutline, IconPosition, IconSize, ImageTextGap} from "./components/button/enumButton.ts";

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

    </div>
  )
}

export default App
