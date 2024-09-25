import { showOverlay, hideOverlay } from "../../WindowsWidgets/Overlay/main.js"
import { IsAnyMenuOpen, MenuIsAdded, MenuIsRemoved } from "../../WindowsWidgets/Overlay/main.js"
let isOpen = false

export function setMiddleClosed() {
    isOpen = false
}

export function Clock() { 
    const date = Variable("", {
        poll: [1000, 'date "+%H:%M"'],
    })

    const label = Widget.Label({
        class_name: "clock",
        label: date.bind(),
    })

    const button = Widget.Button({
        on_primary_click: () => {
            App.toggleWindow('calendar-menu')
            // if (!isOpen) {
            //     MenuIsAdded()
            // } else {
            //     MenuIsRemoved()
            // }
            // if (IsAnyMenuOpen()) {
            //     showOverlay()
            // } else {
            //     hideOverlay()
            // }
            // if (!isOpen) {
            //     App.openWindow('calendar-menu')
            //     isOpen = true
            //     MenuIsAdded()
            // } else {
            //     App.closeWindow('calendar-menu')
            //     isOpen = false
            //     MenuIsRemoved()
            //     if (!IsAnyMenuOpen()) {
            //         hideOverlay()
            //     }
            // }
        },
        child: label,
    })
    return button
}

