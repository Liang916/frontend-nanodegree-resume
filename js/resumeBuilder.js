var bio =
{
    "name":"Yuxia Liang",
    "role":"Web Developer",
    "contacts":
        {
            "mobile":"1234567890",
            "email":"yuxialiang@hotmail.com",
            "github":"Liang916",
            "location":"Shaoxing"
        },
    "skill":["HTML","CSS","JavaScript","Python"],
    "bioPic":"images/fry.jpg"
};

var education =
{
    "university":
    [
        {
            "name":"University of Warwick",
            "city":"Coventry, UK",
            "degree":"BSc",
            "major":"Management",
            "description":"Focused on management of information systems, digital innovation, e-commerce and social media"
        },
        {
            "name":"London School of Economics",
            "city":"London, UK",
            "degree":"MSc",
            "major":"Management of Information Systems and Digital Innovation",
            "description":"Focused on operations and project management, customer service management, economics for business, globalisation studies, financial reporting"
        }
    ]
};

var project =
{
    "project1":
    {
        "name":"Deloitte Bootcamp Project",
        "description":"Obtained distinction in the Deloitte Boot Camp Project in which the team developed a cloud based CRM plan for a music app"
    },
    "project2":
    {
        "name":"Global Integral Project",
        "description":"Analysed different country profiles"
    }
};

var work =
[
    {
        "employer":"Subway",
        "title":"Marketing Trainee",
        "time":"7/2015-9/2015",
        "description":[
            "Achieved high customer satisfaction due to excellent service",
            "Increased revenue"
            ]
    },
    {
        "employer":"Zhongyu Real Estate Ltd.",
        "title":"Accountant",
        "time":"7/2014-9/2014",
        "description":[
            "Organised and input everyday income and expenses",
            "Prepared documents for loan application"
            ]
    },
    {
        "employer":"Aiku Garment Factory",
        "title":"Order Coordinator",
        "time":"7/2013-8/2013",
        "description":[
            "Allocated orders from America and Africa",
            "Scheduled meetings between the director and trading partners",
            "Translated documents"
            ]
    }
];




$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));

if (bio.skill.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skill[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skill[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skill[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skill[3]);
    $("#skills").append(formattedSkill);
};



for (experience in work)
{
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work[experience].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work[experience].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%",work[experience].time);
    var formattedDescription = HTMLworkDescription.replace("%data%",work[experience].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);

};













