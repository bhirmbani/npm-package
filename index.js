var OAuth = require('oauth');
var setting = {};

setting.get = (term, consumerkey, appsecret, usertoken, usersecret) => {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    consumerkey, //consumerkey
    appsecret, //appsecret
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${term}`,
    usertoken, //user token 
    usersecret, //user secret             
    function (e, data){
      if (e) console.error(e);        
      console.log(require('util').inspect(data));
      let result = JSON.parse(data)
      console.log(result);
    });
}

module.exports = setting;

