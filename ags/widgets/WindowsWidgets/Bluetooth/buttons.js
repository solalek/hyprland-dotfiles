import { BluetoothIcon, GoNextIcon } from "./icons.js"
import { flowBox, setBox, getBox } from "../System/flowBox.js"
const bluetooth = await Service.import('bluetooth')

const connectedList = Widget.Box({
    setup: self => self.hook(bluetooth, self => {
        self.children = bluetooth.connected_devices
            .map(({ icon_name, name }) => Widget.Box([
                Widget.Icon(icon_name + '-symbolic'),
                Widget.Label(name),
            ]));

        self.visible = bluetooth.connected_devices.length > 0;
    }, 'notify::connected-devices'),
})

// const indicator = Widget.Icon({
//     icon: bluetooth.bind('enabled').as(on =>
//         `bluetooth-${on ? 'active' : 'disabled'}-symbolic`),
// })

const indicator = () => {
    let bluetoothIconVariable = bluetooth.bind('enabled').as(isEnabled => {
        return isEnabled ? "bluetooth-active-symbolic" : "bluetooth-disabled-symbolic";
    });

    return Widget.Icon({
        icon: bluetoothIconVariable
    });
};



const BluetoothToggleButton = Widget.Button({
    css: `
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    `,
    child: indicator(),
    hexpand: true,
    onClicked: () => {
        bluetooth.toggle()
        const bluetoothEnabled = bluetooth.enabled; // Get the Bluetooth enabled state
        // Print status to the console
        if (bluetoothEnabled) {
            console.log("Bluetooth is enabled");
        } else {
            console.log("Bluetooth is disabled");
        }
    }
})

const BluetoothShowButton = Widget.Button({
    css: `
        border-top-right-radius: 10px; 
        border-bottom-right-radius: 10px;
        min-height: 40px;
    `,
    child: GoNextIcon,
    hexpand: true,
    onClicked: () => {
        if (getBox() == null) {
            setBox(Widget.Box({
                css: "background-color: #080808; border-radius: 10px;",
                vertical: true,
                children: [
                    Widget.Label("hello"),
                ]
            }))
            flowBox.add(getBox())
        } else {
            flowBox.remove(getBox())
            setBox(null)
        }
    }
})

export { BluetoothToggleButton, BluetoothShowButton }
