function resolveAfter2Seconds() {
    return new Promise(resolve => {
	setTimeout(() => {
	    resolve(1);
	}, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    return result;
}

var r = asyncCall().then(result => {
    console.log(result + 1);
});
