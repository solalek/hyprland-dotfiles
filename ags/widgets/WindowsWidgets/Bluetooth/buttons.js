import { BluetoothIcon, GoNextIcon } from "./icons.js"

const BluetoothToggleButton = Widget.Button({
    css: `
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    `,
    child: BluetoothIcon,
    hexpand: true,
})

const BluetoothShowButton = Widget.Button({
    css: `
        border-top-right-radius: 10px; 
        border-bottom-right-radius: 10px;
        min-height: 40px;
    `,
    child: GoNextIcon,
    hexpand: true,
})

export { BluetoothToggleButton, BluetoothShowButton }
