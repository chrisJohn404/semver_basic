
function isAGtrThanB(a, b) {
	const a_splits = a.split('.');
	const b_splits = b.split('.');
	
	if(a_splits.length != b_splits.length || a_splits.length != 3) {
		throw new Error('Version number strings should be in the form x.x.x');
	}

	let is_gtr = false;

	for (let i = 0; i < 3; i++) {
		if(a_splits[i] > b_splits[i]) {
			is_gtr = true;
			break;
		} else if(a_splits[i] < b_splits[i]) {
			is_gtr = false;
			break;
		}
	}
	return is_gtr;
}


module.exports = {
	isAGtrThanB
};
