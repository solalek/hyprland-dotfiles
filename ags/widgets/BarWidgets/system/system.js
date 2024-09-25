import { BatteryBox } from "../battery/battery.js"
import { icon } from "../Volume/icons.js"
import { showOverlay, hideOverlay } from "../../WindowsWidgets/Overlay/main.js"
import { IsAnyMenuOpen, MenuIsAdded, MenuIsRemoved } from "../../WindowsWidgets/Overlay/main.js"
import { flowBox, setBox, getBox } from "../../WindowsWidgets/System/flowBox.js"

let isOpen = false

export function setRightClosed() {
    isOpen = false
}

export function SysButton() {

    const button =  Widget.Button({
        class_name: "systemButton",
        on_primary_click: () => {
            // if (!isOpen) {
            //     MenuIsAdded()
            // } else {
            //     MenuIsRemoved()
            // }
            App.toggleWindow('system-menu')
            if (getBox()) {
                flowBox.remove(getBox())
                setBox(null)
            }
            // if (IsAnyMenuOpen()) {
            //     showOverlay()
            // } else {
            //     hideOverlay()
            // }
            // if (!isOpen) {
            //     App.openWindow('system-menu')
            //     isOpen = true
            //     MenuIsAdded()
            // } else {
            //     App.closeWindow('system-menu')
            //     isOpen = false
            //     MenuIsRemoved()
            //     if (!IsAnyMenuOpen()) {
            //         hideOverlay()
            //     }
            // }
        },
        child: Widget.Box({
            children: [
                icon(),
                BatteryBox(),
            ]
        }),

    })

    return button

}

