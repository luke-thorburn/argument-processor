import utils from '../utils.js';
let { randomString } = utils;

let example = [
	{
		"id":"3416398222",
		"text":"Watson has returned from Afghanistan.",
		"type":"claim",
		"label":"pro",
		"open":true,
		"display":true,
		"indent":0,
	},
	{
		"id":"0612363605",
		"text":"Watson is an English army doctor who has undergone hardship and sickness, and has injured his arm.",
		"type":"pro",
		"label":"pro",
		"open":false,
		"display":true,
		"indent":1,
		joint: true
	},
	{
		"id":"0604910087",
		"text":"Watson is an English army doctor.",
		"type":"pro",
		"label":"pro",
		"open":false,
		"display":false,
		"indent":2,
		joint: true,
	},
	{
		"id":"7663040203",
		"text":"He is a gentleman of a medical type.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":3,
		joint: true
	},
	{
		"id":"8573607752",
		"text":"He has the air of a military man.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":3,
		joint: true
	},
	{
		"id":"1562350060",
		"text":"[Watson is English.]",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":3,
	},
	{
		"id":"6529481994",
		"text":"He has undergone hardship and sickness.",
		"type":"pro",
		"label":"pro",
		"open":false,
		"display":false,
		"indent":2,
		joint: true
	},
	{
		"id":"4849050644",
		"text":"He has a haggard face.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":3,
	},
	{
		"id":"4140692662",
		"text":"His left arm has been injured.",
		"type":"pro",
		"label":"pro",
		"open":false,
		"display":false,
		"indent":2,
	},
	{
		"id":"5709295021",
		"text":"He holds it in a stiff and unnatural manner.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":3,
	},
	{
		"id":"5247891985",
		"text":"He has just come from the tropics.",
		"type":"pro",
		"label":"pro",
		"open":false,
		"display":true,
		"indent":1,
		joint: true
	},
	{
		"id":"7538799266",
		"text":"His face is dark.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":2,
		joint: true
	},
	{
		"id":"6424974159",
		"text":"This is not the natural tint of his skin.",
		"type":"pro",
		"label":"pro",
		"open":false,
		"display":false,
		"indent":2,
	},
	{
		"id":"8948168165",
		"text":"His wrists are fair.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":false,
		"indent":3,
	},
	{
		"id":"8328047230",
		"text":"The only place in the tropics where an English army doctor could have seen much hardship and got his arm wounded is in Afghanistan.",
		"type":"pro",
		"label":"pro",
		"open":true,
		"display":true,
		"indent":1,
	}
];

export default example;