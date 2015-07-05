(function() {
	/*I was too lazy to replace all the 'cookies' with 'document.cookie'*/
	var cookie = document.cookie;
	
	/*Initialize the final string*/
    var finalStr = "ngm://launch/";
	
	/*Get the A2SK (Not sure what this is, but it looked needed) from the cookies*/
    var a2sk = cookie.substring(cookie.indexOf("A2SK") + 5, (cookie.indexOf(";", cookie.indexOf("A2SK")) > -1)?cookie.indexOf(";", cookie.indexOf("A2SK")):cookie.length);
	
	/*Get the NPP, your Nexon Passport information, from the cookies*/
    var npp = cookie.substring(cookie.indexOf("NPP") + 4, (cookie.indexOf(";", cookie.indexOf("NPP")) > -1)?cookie.indexOf(";", cookie.indexOf("NPP")):cookie.length);
	
	/*After I finished the code, I wanted to test and see if you could remove -position from the final string, as we weren't logging in from the Event page*/
    var fixedStr = finalStr + encodeURIComponent("-dll:platform.nexon.com/NGM/Bin/NGMDll.dll: -locale:KR -mode:restore -game:106498:0 -token:'" + npp + "' -passarg:'undefined' -a2sk:'" + a2sk + "'");
    
	/*This is essentially what the Event page pushes to your browser*/
    finalStr = finalStr + encodeURIComponent("-dll:platform.nexon.com/NGM/Bin/NGMDll.dll: -locale:KR -mode:restore -game:106498:0 -token:'" + npp + "' -passarg:'undefined' -a2sk:'" + a2sk + "' -position:'GameWeb|http://maplestory2.nexon.com/Event/2015/StarterPack'");
	
	/*Try to run the game with the fixed string, instead of what the Event page pushes to you. Runs successfully*/
    window.location = fixedStr;
})();