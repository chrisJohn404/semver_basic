
function isAGtrThanB(a, b) {
	const aSplits = a.split('.');
	const bSplits = b.split('.');
	
	if(aSplits.length != bSplits.length || aSplits.length != 3) {
		throw new Error('Version number strings should be in the form x.x.x');
	}

	let isGtr = false;

	for (let i = 0; i < 3; i++) {
		if(aSplits[i] > bSplits[i]) {
			isGtr = true;
			break;
		} else if(aSplits[i] < bSplits[i]) {
			isGtr = false;
			break;
		}
	}
	return isGtr;
}


module.exports = {
	isAGtrThanB
};
