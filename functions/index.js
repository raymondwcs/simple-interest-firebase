var functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
	function SimpleInterest(P,i,t) {
		this.principal = P;
		this.rate = i;
		this.time = t;
		this.interest = P * i * t;
	}
    var obj = new SimpleInterest(request.query.p,request.query.i,request.query.t);
    response.send(obj);
});