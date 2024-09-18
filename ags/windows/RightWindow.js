import { vol } from "../widgets/WindowsWidgets/Volume/main.js"
import { BrightnessBox } from "../widgets/WindowsWidgets/Brightness/main.js"
import { WifiButtonsBox } from "../widgets/WindowsWidgets/Network/main.js"
import { BluetoothButtonsBox } from "../widgets/WindowsWidgets/Bluetooth/main.js"

const network = await Service.import('network')

const WifiIndicator = () => Widget.Box({
    children: [
        Widget.Icon({
            icon: network.wifi.bind('icon_name'),
        }),
        Widget.Label({
            label: network.wifi.bind('ssid')
                .as(ssid => ssid || 'Unknown'),
        }),
    ],
})

const WiredIndicator = () => Widget.Icon({
    icon: network.wired.bind('icon_name'),
})

const NetworkIndicator = () => Widget.Stack({
    children: {
        wifi: WifiIndicator(),
        wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
})


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
    ]
})



const SystemWindow = Widget.Window({
    name: 'system',
    class_name: 'system',
    anchor: ['top','right'],
    exclusivity: 'normal',
    keymode: 'none',
    layer: 'top',
    margins: [10, 10],
    child: SystemBox,
    visible: false,
    // popup: true,
})

export { SystemWindow }

