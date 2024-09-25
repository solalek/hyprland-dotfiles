import { getAppIcon } from "../icons.js"
import { AppButton } from "../AppButton.js"

let screenshot = `bash -c ~/.local/bin/screenshot.sh`;


export function SystemAppsButtonsRow2() {
    const screenshotButton = AppButton(screenshot, getAppIcon("deepin-screenshot"));
    const colorPickerButton = AppButton("wl-color-picker", getAppIcon("gcolor3"));
    return [screenshotButton, colorPickerButton];
}
