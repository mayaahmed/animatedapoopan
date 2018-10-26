
 var contactNav = document.getElementById("navId2");
 var btn2 = document.getElementById("toggleButton2");
btn2.innerHTML = "&#8592";

contactNav.style.right = "-255px";

function toggleRight(){
	contactNav.style.height = window.innerHeight - 60+"px";
	if(contactNav.style.right == "-255px"){
		contactNav.style.right = "0px";
        btn2.innerHTML = "&#8594";
	} else {
		contactNav.style.right = "-255px";
        btn2.innerHTML = "&#8592";
	}
}

 var contactDiv = document.getElementById("contacts");

function address(){

var descriptString = "Amooma means Grandma and Apoopan means Grandpa in Malayalam.  In Kerala, children grow up listening to the many escapades of Amooma and Apoopan. There is a pleasant timeless quality about these simple stories. The book takes you back to childhood, and memories of dark nights, when your own grandmother told you such stories, and put you to sleep."; 


var addString= " <br/> <br/> &copy; Punjiri Web and Mobile Technologies, 2016.  <br/> Mangalore, Karnataka, India  <br/>  Email: maya.ahmed@gmail.com <br/>";

var newString = descriptString + addString;
contactDiv.innerHTML= newString;
}

address();

var overlay = document.getElementById("overlay");
window.addEventListener("load", function(){
    overlay.style.display="none";

  })
