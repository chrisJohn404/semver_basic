<a href="https://github.com/chrisjohn404/semver_basic">
	<img 
	 alt="tag:?"
	 src="https://img.shields.io/github/workflow/status/chrisjohn404/semver_basic/test"
	>
</a>

A simple way to check version number strings.

```
const isAGtrThanB = require('semver_basic').isAGtrThanB;

let result = isAGtrThanB('2.0.1', '2.0.0'); // true
```

More: ./test/*