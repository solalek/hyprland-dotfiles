import { getAppIcon } from "../icons.js"
import { AppButton } from "../AppButton.js"

export function SystemAppsButtonsRow1() {
    const thunarButton = AppButton("thunar", getAppIcon("system-file-manager"))
    const terminalButton = AppButton("kitty", getAppIcon("utilities-terminal"))
    return [ thunarButton, terminalButton ]
}
