const CurrentTime = Variable("", {
    poll: [1000, 'date "+%H:%M:%S"'],
})

const CurrentDate = Variable("", {
    poll: [60000, 'date "+%d.%m.%Y"'],
})

export { CurrentTime, CurrentDate }
