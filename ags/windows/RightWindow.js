import { vol } from "../widgets/WindowsWidgets/Volume/main.js"
import { BrightnessBox } from "../widgets/WindowsWidgets/Brightness/main.js"
import { WifiButtonsBox } from "../widgets/WindowsWidgets/Network/main.js"
import { BluetoothButtonsBox } from "../widgets/WindowsWidgets/Bluetooth/main.js"
import { flowBox } from "../widgets/WindowsWidgets/Network/flowbox.js"

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



const SystemWindow = Widget.Window({
    name: 'system-menu',
    class_name: 'system',
    anchor: ['top','right'],
    exclusivity: 'normal',
    keymode: 'none',
    layer: 'top',
    margins: [10, 10],
    child: SystemBox,
    visible: false,
})

export { SystemWindow }

