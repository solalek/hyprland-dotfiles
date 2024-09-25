import { closeAllMenus, IsAnyMenuOpen } from "../Overlay/main.js"
import { hideOverlay } from "../Overlay/main.js"

export function AppButton(AppName, icon) {
    return Widget.Button({
        class_name: "AppButton",
        child: icon,
        onClicked: () => {
            closeAllMenus();
            hideOverlay();

            Utils.execAsync(AppName)
                .then(() => {
                    notifySend(`${AppName} launched successfully.`);
                })
                .catch((error) => {
                    notifySend(`Error launching ${AppName}: ${error.message}`);
                });
        }
    });
}

