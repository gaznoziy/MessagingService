// notification service request emulation
exports.sendNotifications = (message) => {
    // emulate notification is unsuccessful
    if (Math.random() > 0.5) {
        return false;
    } 

    for (let recipient of message.recipients) {
        console.log(`Sending message to recipient ${recipient} ${message.body}`);
    }

    return true;
}