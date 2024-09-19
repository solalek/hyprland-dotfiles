import { showOverlay, hideOverlay, overlay } from "../../WindowsWidgets/Overlay/main.js"

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
            if (!overlay) {
                showOverlay()
            } else {
                hideOverlay()
            }
            App.toggleWindow('calendar-menu')
        },
        child: label,
    })
    return button
}

