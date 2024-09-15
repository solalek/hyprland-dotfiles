import { audio_box } from "../widgets/audio.js"
import {Brightness } from "../widgets/brightness.js"

const systemBox = Widget.Box({
    vertical: true,
    children: [
        audio_box(),
        Brightness(),
    ]
})


const systemWindow = Widget.Window({
    name: 'system',
    anchor: ['top','right'],
    exclusivity: 'normal',
    keymode: 'none',
    layer: 'top',
    margins: [0, 0],
    child: systemBox,
    visible: false,
    // popup: true,
})

// Close the window when Escape is pressed
// systemWindow.keybind("Escape", () => App.closeWindow('system'));
//
// // Hook into focus change events to detect if the window loses focus
// systemWindow.hook("focus-out-event", () => {
//     App.closeWindow('system');
// });

export function SystemWindow() {
    return systemWindow
}

