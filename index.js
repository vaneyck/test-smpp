var smpp = require('smpp');
var session = smpp.connect({
	url: 'smpp://smscsim.melroselabs.com:2775',
	auto_enquire_link_period: 10000
});
session.bind_transceiver({
	system_id: '894300',
	password: 'f99609'
}, function(pdu) {
	if (pdu.command_status == 0) {
        console.log("Connected")
		// Successfully bound
		session.submit_sm({
			destination_addr: '661',
			short_message: 'Hello!'
		}, function(pdu) {
			if (pdu.command_status == 0) {
				// Message successfully sent
                consolelog("Message successfully sent")
				console.log(pdu.message_id);
			} else {
                console.log("Failed to connect")
            }
		});
	}
});