var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(JSON
    //   .parse(body)[1].name);
    //   
    var myObj = JSON
      .parse(body)
      .filter(function(color){
        return color.name === process.argv[2];
      })[0].rgb;
    console.log('r: ' + myObj.r + ' g: ' + myObj.g + ' b: ' + myObj.b);
  }
});