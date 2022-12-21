function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	//console.log(document.cookie)
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
    	while (c.charAt(0) == ' ') {
      		c = c.substring(1);
    	}
    	if (c.indexOf(name) == 0) {
      		return c.substring(name.length, c.length);
    	}
  	}
  	return "";
}

function main() {
	let userName = getCookie('userName') 
	if(userName != '') {
		document.getElementById('popup-container-id').style.display = 'none'
	}
	else {
		document.getElementById('popup-container-id').style.display = 'flex'
	}
	document.getElementById('popup-close-btn').addEventListener('click', ()=> {
		document.getElementById('popup-container-id').style.display = 'none'
	})

	document.getElementById('cookie-btn-id').addEventListener('click', () => {
		setCookie("username", 'random-uncle', 365)
		document.getElementById('popup-container-id').style.display = 'none'
	})
}

main()
