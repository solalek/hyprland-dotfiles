import { getAppIcon } from "../icons.js"
import { AppButton } from "../AppButton.js"

export function UserAppsButtonsRow2() {
    const spotifyButton = AppButton("spotify", getAppIcon("spotify"))
    const telegramButton = AppButton("telegram", getAppIcon("telegram"))
    return [ spotifyButton, telegramButton ]
}

