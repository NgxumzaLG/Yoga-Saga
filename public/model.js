var yogaPoses = ['Bending tree Pose', 'Michael Jackson Pose', 'Disco Pose', 'Warrior Pose',
	'Triangle Forward Pose', 'Chair Pose', 'Standing Pose', 'Yoga tree Pose'];

Array.prototype.randomPose = function () {
	return this[Math.floor((Math.random() * this.length))];
}


var myScore = document.querySelector('.my-score');
lblPose = document.getElementById("label-pose");
labelBox = document.getElementById("label-box");


// Compile Templates
var scoreTempSource = document.querySelector('.scoreTemplate').innerHTML;
var useScoreTemplate = Handlebars.compile(scoreTempSource);

var score = 0;

// localStorage 
if (localStorage['Score']) {
	score = JSON.parse(localStorage.getItem("Score"));

}

let whichPose = yogaPoses.randomPose();
let displayPose;

myScore.innerHTML = useScoreTemplate({ theScore: score });
// card.innerHTML = useScoreTemplate({camTemp: poseDetector})


// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/xM33p1bQt/";
let model, webcam, ctx, labelContainer, maxPredictions, canvas;

async function init() {
	const modelURL = URL + "model.json";
	const metadataURL = URL + "metadata.json";

	// load the model and metadata
	// Refer to tmImage.loadFromFiles() in the API to support files from a file picker
	// Note: the pose library adds a tmPose object to your window (window.tmPose)
	model = await tmPose.load(modelURL, metadataURL);
	maxPredictions = model.getTotalClasses();

	// Convenience function to setup a webcam
	const size = 200;
	const flip = true; // whether to flip the webcam
	webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
	await webcam.setup(); // request access to the webcam
	await webcam.play();
	window.requestAnimationFrame(loop);

	// append/get elements to the DOM
	 canvas = document.getElementById("canvas");
	canvas.width = size; canvas.height = size;
	ctx = canvas.getContext("2d");
	labelContainer = document.getElementById("label-container");
	for (let i = 0; i < maxPredictions; i++) { // and class labels
		labelContainer.appendChild(document.createElement("div"));
	}

	score = 0;
	localStorage.clear();
	await timerAlert();
}

async function loop(timestamp) {
	// console.log(timestamp);
	webcam.update(); // update the webcam frame
	await predict();
	window.requestAnimationFrame(loop);
	await countdown()
	console.log(whichPose)
	displayPose = `<h3 class= "text-primary"><strong>${whichPose}</strong></h3>`;
	console.log(displayPose);
	myScore.innerHTML = useScoreTemplate({ theScore: score });
	lblPose.innerHTML = displayPose;
}

// let sensingPaused = false;

async function predict() {



	// Prediction #1: run input through posenet
	// estimatePose can take in an image, video or canvas html element
	const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
	// Prediction 2: run input through teachable machine classification model
	const prediction = await model.predict(posenetOutput);

	for (let i = 0; i < maxPredictions; i++) {
		// const classPrediction =
		//     prediction[i].className + ": " + prediction[i].probability.toFixed(2);
		// 	labelContainer.childNodes[i].innerHTML = classPrediction;

		if (whichPose == prediction[i].className && prediction[i].probability.toFixed(2) >= 0.75) {
			whichPose = yogaPoses.randomPose();
			score += 5;

		}
	}

	// finally draw the poses
	drawPose(pose);
}

function drawPose(pose) {
	if (webcam.canvas) {
		ctx.drawImage(webcam.canvas, 0, 0);
		// draw the keypoints and skeleton
		if (pose) {
			const minPartConfidence = 0.5;
			tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
			tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
		}
	}
}



async function countdown() {

	setTimeout(async function () {
		labelBox.innerHTML = '';
		localStorage.setItem("Score", JSON.stringify(score));
// 				cument 
		await webcam.pause();

		var cam =	document.querySelector(".cam");
		cam.innerHTML = ""
		displayPose = ""
		lblPose.innerHTML = ""
		// ctx.clearRect(0,0, canvas.width, canvas.height)
		// location.reload()
	}, 50000);

}

async function timerAlert() {
	setTimeout(function () {
		labelBox.innerHTML = `<h4><strong>Your Time starts now!</strong></h4>`;

	}, 2000);

	setTimeout(function () {
		labelBox.innerHTML = '';

	}, 4500);

	setTimeout(function () {
		labelBox.innerHTML = `<h4 class= "text-danger"><strong>10 Seconds left!</strong></h4>`;

	}, 40000);

}
