function getSessionInfo() {
    const username = Utils.exec("whoami").trim();
    const hostname = Utils.exec("hostname").trim();
    const sessionType = Utils.exec(`bash -c ~/.local/bin/xdg_session_type.sh`).trim();

    return {
        username,
        hostname,
        sessionType,
    };
}

function SessionLabel(info) {
    const sessionInfo = getSessionInfo()
    return Widget.Label({
        label: `${sessionInfo[info]}`
    })
}

const UserNameLabel = SessionLabel('username')

const HostNameLabel = SessionLabel('hostname')

const SessionTypeLabel = SessionLabel('sessionType')

export { UserNameLabel, HostNameLabel, SessionTypeLabel }
