var data = [];
for (var i = 0; i < 20; i++) {
	data.push({
		temlate : 'odd',
		heading : {
			text : 'iam a head '+i
		},
		subheading : {
			text : 'i am a subhead '+i
		},
		searchableText:'am a head '+i
	});
};
$.section.setItems(data);
$.index.open(); 