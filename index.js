const PubNub = require('pubnub')
const fetch = require('node-fetch')

const CHANNEL = 'hello_world'
const PIMOTE_API_URL = 'http://localhost:3000'

const log = (...messages) => console.log(new Date().toISOString(), ...messages)

const pubnub = new PubNub({
	subscribeKey : process.env.PUBNUB_SUBSCRIBE_KEY
})

pubnub.addListener({
	status: function(statusEvent) {
		if (statusEvent.category === "PNConnectedCategory") {
			// publishSampleMessage();
		}
	},

	async message(data) {
		log('received_message', JSON.stringify(data))
		const { message: { device, action } } = data
		try {
			const response = await fetch(`${PIMOTE_API_URL}/devices/${device}/actions/${action}/executions`).then(r => r.json())
			log('execution', JSON.stringify(response))
		} catch (e) {
			log('error', e)
		}
	},

	presence: function(presenceEvent) {
		// handle presence
	}
})

pubnub.subscribe({
	channels: [CHANNEL]
})

log('subscribed', CHANNEL)
