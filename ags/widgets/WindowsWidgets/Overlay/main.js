import { setMiddleClosed } from "../../BarWidgets/clock/clock.js"
import { setRightClosed } from "../../BarWidgets/system/system.js"
import { setLeftClosed } from "../../../layouts/main-layout.js"

let overlay = null;
let openedMenus = 0;

export function MenuIsAdded() {
    openedMenus += 1
}

export function MenuIsRemoved() {
    openedMenus -= 1
}

export const closeAllMenus = () => {
    const menuWindows = App.windows
        .filter((w) => {
            if (w.name) {
                return /.*menu/.test(w.name);
            }

            return false;
        })
        .map((w) => w.name);

    menuWindows.forEach((w) => {
        if (w) {
            App.closeWindow(w);
        }
    });
};

export const IsAnyMenuOpen = () => {
     // Return true if any menus are open, otherwise false
    const windows = App.get_windows()
    print(windows.name)
    return openedMenus > 0;
};


export function createOverlay() {
    return Widget.Window({
        name: 'Overlay',
        class_name: 'Overlay',
        anchor: ['right', 'left', 'top', 'bottom'],
        margins: [0, 0],
        child: Widget.Button({
            hexpand: true,
            vexpand: true,
            css: `
                background-color: rgba(0, 0, 0, 0.5); 
                border: none;
            `,
            on_primary_click: () => {
                closeAllMenus()
                // setLeftClosed()
                // setRightClosed()
                // setMiddleClosed()
                hideOverlay()
                // openedMenus = 0
            }
        }),
        visible: true,
    });
}

export const showOverlay = () => {
    if (!overlay) {
        overlay = createOverlay();
        overlay.show();
    }
};

// Function to hide the overlay
export const hideOverlay = () => {
    if (overlay) {
        overlay.hide();
        overlay = null;
    }
};


