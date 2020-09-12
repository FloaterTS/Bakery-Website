function openMenu(evt, menuName) 
{
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");

    document.getElementById(menuName).style.display = "block";
}

function myFunctionCr() 
{
	var imgg = document.createElement("IMG");
	imgg.id = 'toDel';
	imgg.src = "https://appstickers-cdn.appadvice.com/1156146320/818966510/7283c3b61d212c3184a583949b65a623-0.png";
	document.body.appendChild(imgg);
}

function myFunctionDel() 
{
	document.body.removeChild(document.getElementById('toDel'));
}

function countdownTimer()
{
	var countdownDate = new Date("July 11, 2020 15:00:00").getTime();

	var actualTime = new Date().getTime();
  
	var difference = countdownDate - actualTime;

	var days = Math.floor(difference / (1000 * 60 * 60 * 24));
	var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
	document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";

	if (difference < 0)
		document.getElementById("countdown").innerHTML = "Happy Founding Day!";
}

function startCountdown()
{
	countdownTimer();
	setInterval(countdownTimer, 1000);
}

function reverseList() 
{
	var olist = document.getElementById('theList'); 

	var items = olist.getElementsByTagName('li');
	
	for(var i = 0; i < items.length / 2; i++) 
	{
		var val = items[i].value;
		items[i].value = items[items.length - i - 1].value;
		items[items.length - i - 1].value = val;
		var content = items[i].innerHTML;
		items[i].innerHTML = items[items.length - i - 1].innerHTML;
		items[items.length - i - 1].innerHTML = content;
	}
}

function radioList(listType)
{
	document.getElementById('theList').type = listType;
}

function ravase()
{
	var ravaseList = ["Open and ready to sweeten you up!", "Bakers trade cake recipes on a knead to know basis.", 
	"Butter late than never!", "Muffin compares to you!", "Don't be afraid to take whisks!", "What's up cake? Muffin much.",
	"Cut my cake into pieces. This is my last re-torte.", "Some only dream of cake. Others bake it happen.", 
	"I carrot cake my eyes off you.", "Donut be jelly of my pancake."];
	
	var randCounter = Math.floor(Math.random() * ravaseList.length)
	
	document.getElementById('ravas').innerHTML = ravaseList[randCounter];
}

function theHappyHours()
{
	var happyHours = [["08:00:00","09:30:00"],["14:00:00","16:00:00"],["18:30:00","19:30:00"]];
	
	var happy = document.getElementById('happy');
	happy.innerHTML = "";
	
	var currentDate = new Date();
	
	for(var i = 0; i < happyHours.length; i++)
	{
		var startSplit = happyHours[i][0].split(":");
		var startHour = parseInt(startSplit[0]);
		var startMin = parseInt(startSplit[1]);
		var startSec = parseInt(startSplit[2]);

		var endSplit = happyHours[i][1].split(":");
		var endHour = parseInt(endSplit[0]);
		var endMin = parseInt(endSplit[1]);
		var endSec = parseInt(endSplit[2]);
		
		var happyStart = new Date();
		happyStart.setHours(startHour);
		happyStart.setMinutes(startMin);
		happyStart.setSeconds(startSec);
		
		var happyEnd = new Date();
		happyEnd.setHours(endHour);
		happyEnd.setMinutes(endMin);
		happyEnd.setSeconds(endSec);
		
		if(happyStart < currentDate && currentDate < happyEnd)
		{
			happy.innerHTML = "Happy hours! Hooray!";
			break;
		}
	}
}

function getAge(birthDate)
{
	var currentDate = new Date();
	
	var difference = currentDate - birthDate;
	
	var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
	var months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * (365/12)));
	var days = Math.floor((difference % (1000 * 60 * 60 * 24 * (365/12))) / (1000 * 60 * 60 * 24) - years/4 + 1);
	var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((difference % (1000 * 60)) / 1000);

	document.getElementById("age").innerHTML = years + " years " + months + " months " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

var ageInterval;

function findAge()
{
	var birth = document.getElementById("birth");
	var birthString = birth.value;
	var birthSplit = birthString.split("#");
	var birthDay = birthSplit[0];
	var birthMonth = birthSplit[1];
	var birthYear = birthSplit[2];
	var birthStringNew = birthYear + '-' + birthMonth + '-' + birthDay;
	
	var birthDate = new Date(birthStringNew);
	
	clearInterval(ageInterval);
	
	if(isNaN(birthDate.getTime()))
		document.getElementById("age").innerHTML = "Sorry! Invalid date format.";
	else
	{
		getAge(birthDate);
		ageInterval = setInterval(getAge, 1000, birthDate);
	}
	birth.value = "";
}

function addNextWord(elem, words)
{
	if(words.length == 0)
		return;
	var nextWord = words.pop();
	elem.innerHTML = elem.innerHTML + " " + nextWord;
}

function wordByWord()
{
	var elems = document.getElementsByClassName('wordbyword');
	for(var i = 0; i < elems.length; i++)
	{
		var text = elems[i].innerHTML;
		elems[i].innerHTML = ' ';
		var words = text.split(" ").reverse();
		setInterval(addNextWord, 333, elems[i], words);
	}
}













