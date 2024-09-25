import { getAppIcon } from "../icons.js"
import { AppButton } from "../AppButton.js"

export function UserAppsButtonsRow1() {
    const firefoxButton = AppButton("firefox", getAppIcon("firefox"))
    const discordButton = AppButton("discord", getAppIcon("discord"))
    return [ firefoxButton, discordButton ]
}

