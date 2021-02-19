var smpp = require('smpp');
var session = smpp.connect({
	url: 'smpp://10.204.181.73:15019',
	auto_enquire_link_period: 10000
});
session.bind_transceiver({
	system_id: '###',
	password: '###'
}, function(pdu) {
	if (pdu.command_status == 0) {
		// Successfully bound
		session.submit_sm({
			destination_addr: '661',
			short_message: 'Hello!'
		}, function(pdu) {
			if (pdu.command_status == 0) {
				// Message successfully sent
				console.log(pdu.message_id);
			}
		});
	}
});