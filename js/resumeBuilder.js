/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*var awesomeThoughts = "I am Tiana and I am AWESOME!";

var funThoughts =
	awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

var name = "Tiana";
var formattedName =
	HTMLheaderName.replace("%data%", name);

var role = "UX Designer & Front-End Developer";
var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills =
 ["design", "prototyping", "wireframing"];
*/

var bio = {
	"name": "Tiana Tucker",
	"role": "UX Designer & Front-End Developer",
	"contact" : {
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

var formattedRole =
	HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

var formattedName =
	HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

var formattedMobile =
	HTMLmobile.replace("%data%", bio.contact.mobile);
	$("#header").append(formattedMobile);

var formattedEmail =
	HTMLemail.replace("%data%", bio.contact.email);
	$("#header").append(formattedEmail);

var formattedGithub =
	HTMLgithub.replace("%data", bio.contact.github);
	$("#header").append(formattedGithub);

var formattedTwitter =
	HTMLtwitter.replace("%data%", bio.contact.twitter);
	$("#header").append(formattedTwitter);

var formattedLocation =
	HTMLlocation.replace("%data%", bio.contact.location);
	$("#header").append(formattedLocation);

var formattedWelcomeMsg =
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

var formattedSkills =
	HTMLskills.replace("%data%", bio.skills);
	$("#header").append(formattedSkills);

var formattedBiopic =
	HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBiopic);



