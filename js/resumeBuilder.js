var work = {
	"jobs": [
		{
			"title": "UI/UX Designer",
			"employer": "Noblis",
			"dates": "January 2015 - Present",
			"location": "Washington, DC",
			"description": "Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy. Topping gummi bears liquorice cotton candy dragée jelly-o chocolate bar jelly beans."

		},
		{
			"title": "Inbound Marketing Coordinator",
			"employer": "2U, Inc.",
			"dates": "May 2013 - May 2014",
			"location": "Landover, MD",
			"description": "Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy. Topping gummi bears liquorice cotton candy dragée jelly-o chocolate bar jelly beans."
		},
		{
			"title": "Online Marketing & Communications Assistant",
			"employer": "DIS - Danish Institute for Study Abroad",
			"dates": "January 2012 - January 2013",
			"location": "Copenhagen, Denmark",
			"description": "Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy. Topping gummi bears liquorice cotton candy dragée jelly-o chocolate bar jelly beans."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "November 2015",
			"description": "Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy.",
			"images": ""
		},
		{
			"title": "Online Resume",
			"dates": "December 2015",
			"description": "Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy.",
			"images": ""
		}
	]
}

var bio = {
	"name": "Tiana Tucker",
	"role": "UX Designer & Front-End Developer",
	"contact": {
		"mobile": "202-643-6008",
		"email": "tianatucker@gmail.com",
		"github": "tianatucker",
		"twitter": "@TianaMTucker",
		"location": "Washington, DC"
	},
	"welcomeMessage": "Hi there! Thanks for stopping by.",
	"skills": [
	 "design", "wireframing", "prototyping"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name": "Elon University",
			"location": "Elon, NC",
			"degree": "Bachelor of Arts",
			"major": "Communication Science",
			"dates": "August 2007 - May 2011"
		}
	],
	"onlineCourse": [
		{
			"title": "User Experience Design Immersive",
			"school": "General Assembly",
			"dates": "June 2014 - August 2014",
			"url": "https://generalassemb.ly/education/user-experience-design-immersive"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "October 2015 - Present",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}


function displayWork () {
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

function displayEducation() {
	for (school in education.schools, education.onlineCourse) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[school].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[school].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
	}
}

displayWork();
projects.display();
displayEducation();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

//console.log(locationizer(work));

$("#mapDiv").append(googleMap);