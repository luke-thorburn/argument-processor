
const utils = {};

utils.randomString = function() {
	return Math.random().toString().substr(2, 10);
}

function node_walk(node, func) {
	var result = func(node);
	for (node = node.firstChild; result !== false && node; node = node.nextSibling) {
		result = node_walk(node, func);
	}
	return result;
};

utils.getCaret = function(elem) {
	var sel = window.getSelection();
	var cum_length = [0, 0];

	if(sel.anchorNode == elem)
		cum_length = [sel.anchorOffset, sel.extentOffset];
	else {
		var nodes_to_find = [sel.anchorNode, sel.extentNode];
		if(!elem.contains(sel.anchorNode) || !elem.contains(sel.extentNode))
			return undefined;
		else {
			var found = [0,0];
			var i;
			node_walk(elem, function(node) {
				for(i = 0; i < 2; i++) {
					if(node == nodes_to_find[i]) {
						found[i] = true;
						if(found[i == 0 ? 1 : 0])
							return false; // all done
					}
				}

				if(node.textContent && !node.firstChild) {
					for(i = 0; i < 2; i++) {
						if(!found[i])
							cum_length[i] += node.textContent.length;
					}
				}
			});
			cum_length[0] += sel.anchorOffset;
			cum_length[1] += sel.extentOffset;
		}
	}
	if(cum_length[0] <= cum_length[1])
		return cum_length;
	return [cum_length[1], cum_length[0]];
}

utils.setCaret = function(el, caret) {
	let range = document.createRange();
	let sel = window.getSelection();
	
	if (el.childNodes.length > 0) {
		
		try {
			range.setStart(el.childNodes[0], caret[0]);
			range.setEnd(el.childNodes[0], caret[1]);
		} catch {
			range.setStart(el.childNodes[0], 0);
			range.setEnd(el.childNodes[0], 0);
		}

		sel.removeAllRanges();
		sel.addRange(range);

	}	
}

utils.recency = function(milliseconds) {
	let now = Date.parse(String(new Date())),
		diff = (now - milliseconds) / 1000;
	if (diff < 60) {
		return `${Math.round(diff)} s`;
	} else if (diff < 3600) {
		return `${Math.round(diff/60)} min`;
	}  else if (diff < 43200) {
		return `${Math.round(diff/3600)} h`;
	} else {
		return (new Date(milliseconds)).toDateString();
	}

}

utils.downloadObjectAsJson = function(exportObj, exportName){
	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href",     dataStr);
	downloadAnchorNode.setAttribute("download", exportName);
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

export default utils;