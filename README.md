# Twitter Search Console

### What is it?
This is a simple npm package to search for Twitter timeline based on your input.

### Installation
```javascript
npm install -S twitter-search-console
```

### Usage
```javascript
var twitterSearchConsole = require('twitter-search-console');

twitterSearchConsole.get('Jakarta', yourconsumerkey, yourappsecret, yourusertoken, yourusersecret); // Jakarta is your search term
```

### Future Plans
1. Using process.argv
2. Refined search result for better user experience