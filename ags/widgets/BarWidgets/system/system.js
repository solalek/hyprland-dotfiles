import { BatteryBox } from "../battery/battery.js"
import { icon } from "../Volume/icons.js"

export function SysButton() {

    const button =  Widget.Button({
        class_name: "systemButton",
        on_primary_click: () => {
            App.toggleWindow('system')
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

