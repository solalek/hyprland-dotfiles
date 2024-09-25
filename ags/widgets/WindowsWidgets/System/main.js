import { vol } from "../widgets/WindowsWidgets/Volume/main.js"
import { BrightnessBox } from "../widgets/WindowsWidgets/Brightness/main.js"
import { WifiButtonsBox } from "../widgets/WindowsWidgets/Network/main.js"
import { BluetoothButtonsBox } from "../widgets/WindowsWidgets/Bluetooth/main.js"
import { flowBox } from "../System/flowBox.js"

const WifiBluetoothButtons = Widget.Box({
    homogeneous: true,
    spacing: 5,
    children: [
        WifiButtonsBox,
        BluetoothButtonsBox
    ]
})


const SystemBox = Widget.Box({
    class_name: "system",
    vertical: true,
    spacing: 5,
    children: [
        vol,
        BrightnessBox,
        WifiBluetoothButtons,
        flowBox,
    ]
})

export { SystemBox }
