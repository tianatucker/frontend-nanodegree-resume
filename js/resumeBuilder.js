var work = {
	'jobs': [
		{
			'title': 'UI/UX Designer',
			'employer': 'Noblis',
			'dates': 'January 2015 - Present',
			'location': 'Washington, DC',
			'description': 'Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy. Topping gummi bears liquorice cotton candy dragée jelly-o chocolate bar jelly beans.'

		},
		{
			'title': 'Inbound Marketing Coordinator',
			'employer': '2U, Inc.',
			'dates': 'May 2013 - May 2014',
			'location': 'Landover, MD',
			'description': 'Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy. Topping gummi bears liquorice cotton candy dragée jelly-o chocolate bar jelly beans.'
		},
		{
			'title': 'Online Marketing & Communications Assistant',
			'employer': 'DIS - Danish Institute for Study Abroad',
			'dates': 'January 2012 - January 2013',
			'location': 'Copenhagen, Denmark',
			'description': 'Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy. Topping gummi bears liquorice cotton candy dragée jelly-o chocolate bar jelly beans.'
		}
	]
}

var projects = {
	'projects': [
		{
			'title': 'Portfolio',
			'dates': 'November 2015',
			'description': 'Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy.',
			'images': ''
		},
		{
			'title': 'Online Resume',
			'dates': 'December 2015',
			'description': 'Cupcake ipsum dolor. Sit amet powder jujubes sweet roll gummies. Donut topping cotton candy.',
			'images': ''
		}
	]
}

var bio = {
	'name': 'Tiana Tucker',
	'role': 'UX Designer & Front-End Developer',
	'contacts': {
		'mobile': '202-643-6008',
		'email': 'tianatucker@gmail.com',
		'github': 'tianatucker',
		'twitter': '@TianaMTucker',
		'location': 'Washington, DC'
	},
	'welcomeMessage': 'Hi there! Thanks for stopping by.',
	'skills': [
	 	'design',
	 	'wireframing',
	 	'prototyping'
	],
	'bioPic': 'images/Tiana_web_circle.jpeg'
}

var education = {
	'schools': [
		{
			'name': 'Elon University',
			'location': 'Elon, NC',
			'degree': 'Bachelor of Arts',
			'major': 'Communication Science',
			'dates': 'August 2007 - May 2011'
		},
		{
			'name': 'General Assembly',
			'location': 'Washington, DC',
			'degree': '',
			'major': 'User Experience Design Immersive',
			'dates': 'June 2014 - August 2014'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'dates': 'October 2015 - Present',
			'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
	]
}

//Bio in the header
function displayBio() {
	var formattedRole =	HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);

	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);

	var formattedBiopic = HTMLbioPic.replace('%data%', bio.bioPic);
	$('#header').append(formattedBiopic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelcomeMsg);

	$('#header').append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkills);

	var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkills);

	var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkills);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);

}

//Work Experience section
function displayWork () {
for (job in work.jobs){
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$('.work-entry:last').append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
	$('.work-entry:last').append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location)
	$('.work-entry:last').append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
	$('.work-entry:last').append(formattedDescription);
	}
}

//Projects section
projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

//Education section
function displayEducation() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$('.education-entry:last').append(formattedNameDegree);

		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
		$('.education-entry:last').append(formattedMajor);

	}
}

function displayOnlineCourse() {
		$('#education').append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$('.education-entry:last').append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
		$('.education-entry:last').append(formattedDates);

		var formattedWebsite = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
		$('.education-entry:last').append(formattedWebsite);
	}
}

displayWork();
projects.display();
displayEducation();
displayOnlineCourse();
displayBio();

//Page clicks recording
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//Location function and map
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

$('#mapDiv').append(googleMap);