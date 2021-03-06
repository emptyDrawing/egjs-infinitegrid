var template = '<div class="item" data-column="${column}"><img src="${link}../image/${no}.jpg"></div>';
var link = window.HOMELINK;

function getItem(template, options) {
	return template.replace(/\$\{([^\}]*)\}/g, function () {
		var replaceTarget = arguments[1];

		return options[replaceTarget];
	});
}
function getItems(no, length) {
	var arr = [];
	for (var i = 0; i < length; ++i) {
		arr.push(getItem(template, { no: (i + no) % 60 + 1, title: "egjs post" + (i + no), link: link}));
	}
	no += length;

	return arr;
}

var num = 10;
var ig = new eg.InfiniteGrid(".container");

ig.setLayout(eg.InfiniteGrid.PackingLayout, {
	ratioWeight: 10000,
	margin: 10,
});
ig.on({
	"append": function (e) {
		var groupKey = e.groupKey + 1;

		ig.append(getItems(groupKey * num, num), groupKey);
	}
});
ig.append(getItems(0, num), 0);

