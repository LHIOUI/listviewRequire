var data = [];
for (var i = 0; i < 7; i++) {
	data.push({
		temlate : 'odd',
		heading : {
			text : 'iam a head'
		},
		subheading : {
			text : 'i am a subhead'
		}
	});
};
$.section.setItems(data);
$.index.open(); 