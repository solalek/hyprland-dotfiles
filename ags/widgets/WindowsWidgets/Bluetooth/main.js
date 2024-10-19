import { BluetoothToggleButton, BluetoothShowButton } from "./buttons.js"

const BluetoothButtonsBox = Widget.Box({
    spacing: 1,
    class_name: "bluetoothButtonsBox",
    homogeneous: false,
    children: [
        BluetoothToggleButton,
    ]
})

export { BluetoothButtonsBox }
