const Message = require('../models/message.model');
const notification = require('../services/notification.service');

exports.create = (req, res) => {
    const message = new Message({
        recipients: req.body.recipients,
        subject: req.body.subject,
        body: req.body.body,
        is_sent: false
    });

    message.save()
        .then(msg => {
            res.json(msg._id);

            // emulating of notification sending delay
            setTimeout(() => {
                const notificationResult = notification.sendNotifications(msg);
            
                if (notificationResult) {
                    console.log('Notified successfully');
                    Message.findOneAndUpdate({_id: msg._id}, { is_sent: notificationResult} )
                        .then(_ => {})
                        .catch(ex => console.log(ex));
                }
            }, 2000);
        })
        .catch(ex => console.log(ex));
}