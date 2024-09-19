export let overlay = null;

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
            onClicked: () => {
                closeAllMenus()
                hideOverlay()
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


