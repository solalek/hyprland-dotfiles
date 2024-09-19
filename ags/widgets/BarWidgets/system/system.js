import { BatteryBox } from "../battery/battery.js"
import { icon } from "../Volume/icons.js"
import { showOverlay, hideOverlay, overlay } from "../../WindowsWidgets/Overlay/main.js"

export function SysButton() {

    const button =  Widget.Button({
        class_name: "systemButton",
        on_primary_click: () => {
            if (!overlay) {
                showOverlay()
            } else {
                hideOverlay()
            }
            App.toggleWindow('system-menu')
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

