//Function used to hide elements from webpage. Used when filtering courses by level.
function remove(element) {
    document.getElementById(element).style.display = 'none';
}

//Function used to show elements on webpage. Used when filtering courses by level.
function add(element) {
    document.getElementById(element).style.display = 'block'
}

//Function used sort levels. Takes element as parameter and places that element at the top of the page
function reOrder(element) {
    let content = document.getElementById(element);
    let parent = content.parentNode;
    parent.insertBefore(content, parent.firstChild);
}


/* THE FOLLOWING WILL BE A DECLARATION OF OBJECTS. EACH COURSE WILL BE REPRESENTED AS A SINGLE OBJECT */
let title1 = "<b> <u> CST8101: Computer Essentials </u> </b> <br>"
let desc1 = " <br> Learned the foundations of computer hardware and software, as well as how to create backups, and how to configure windows and virtual machine environment. Explored and worked with different numerical systems."
let id1 = 1
let course1 = {title:title1, description:desc1, id:id1, display:false}

let title2 = "<b> <u>CST8116: Introduction To Computer Programming</u></b> <br>"
let desc2 = "Learned the foundational basics of computer programming in the Java language, including the use of sequential /selection / repetition structures, and object oriented programming techniques including abstraction, encapsulation, inheritance and polymorphism." 
let id2 = 2
let course2 = {title:title2, description:desc2, id:id2, display:false}

let title3 = "<b> <u>CST8215: Introduction To Databases</u></b> <br>"
let desc3 = "<br> Learned the fundamentals of relational databases via the learning of beginner + advanced SQL and database normalization." 
let id3 = 3
let course3 = {title:title3, description:desc3, id:id3, display:false}

let title4 = "<b> <u> CST8300: Achieving Success in Changing Environments </u></b> <br>"
let desc4 = "Learned of the different potential nuances and ethical problems that are arising in the field of technology. Learned to work alone and with a team in applying critical thinking and decision making for difficult problems in our complex society." 
let id4 = 4
let course4 = {title:title4, description:desc4, id:id4, display:false}

let title5 = "<b> <u> ENL1813: Communications 1 </u></b> <br>"
let desc5 = "<br>Learned business speaking and writing skills, alongside business documentation skills. Developed communication skills which will contribute to success in professional environments." 
let id5 = 5
let course5 = {title:title5, description:desc5, id:id5, display:false}

let title6 = "<b> <u> MAT8001: Technical Mathematics for Computer Science </u></b> <br>"
let desc6 = "Investigated and learned how to manipulate algebraic systems, how to work with different number systems (Binary, Octal, Decimal, Hexadecimal), and how to use boolean algebra and logic for problem solving." 
let id6 = 6
let course6 = {title:title6, description:desc6, id:id6, display:false}

let title7 = "<b> <u>CST2355: Database Systems</u></b> <br>"
let desc7 = "<br> Acquired practical experience of different relational database systems including MS Access, Microsoft SQL Server, MySql and Oracle. Practical experience also extended to writing and running SQL, SQL scripts and PL/SQL blocks. Covered different database concepts such as case structures, rollup and cube operations, security + transaction control, and more." 
let id7 = 7
let course7 = {title:title7, description:desc7, id:id7, display:false}

let title8 = "<b> <u>CST8102: Operating System Fundamentals (GNU/Linux)</u></b> <br>"
let desc8 = "Learned through theoretical and practical means the details of operating system structures, process and storage managenment, configuration and administration. Developed skills using GNU/Linux command-line tools and utilities." 
let id8 = 8
let course8 = {title:title8, description:desc8, id:id8, display:false}

let title9 = "<b> <u>CST8284: Object Oriented Programming (Java)</u></b> <br>"
let desc9 = " Furthered my understanding of object oriented programming methodology and concepts, including abstraction, encapsulation, inheritance and polymorphism through theoretical and practical means." 
let id9 = 9
let course9 = {title:title9, description:desc9, id:id9, display:false}

let title10 = "<b> <u> CST8285:Web Programming  </u></b> <br>"
let desc10 = "<br> Learned web programming, design and implementation fundamentals through theoretical and practical experience of HTML, CSS, JavaScript and PHP." 
let id10 = 10
let course10 = {title:title10, description:desc10, id:id10, display:false}

let title11 = "<b> <u> ENL2019T: Technical Communication for Engineering Technologies </u></b> <br>"
let desc11 = "Developed the ability to communicate clearly and consicely in a technically-oriented workplace. Honed skills in report writing by writing a complete technical report on a web technology." 
let id11 = 11
let course11 = {title:title11, description:desc11, id:id11, display:false}



//The following are three 'level' objects, each representing a particular level of study and an option in the filter courses section.
let allLevels = {title: 'allLevels', id: 'allLevels', display:false}
let level1 = {title: 'level1', id: 'lvl1', display:false}
let level2 = {title: 'level2', id: 'lvl2', display:false}


// The following list contains all the courses
const courses = [course1, course2, course3, course4, course5, course6, course7, course8, course9, course10, course11];

//The following list contains all levels.
const levels = [allLevels, level1, level2];

//The following list will contain all the courses that are currently displayed on the screen. Will be modified in the searchCourse() function.
let coursesDisplayTrue = []


//Each div element that is supposed to hold a course in the HTML file contains an ID 1 - 11.
//The following function takes each of those div elements (using IDs) and adds to the HTML the appropriate course as defined above by iterating through the list of courses 
function showCourseNew(){
    let id = 1
    for (let course of courses) {
        let element = document.getElementById(id)
        element.innerHTML += course.title
        element.innerHTML += course.description
        id ++
    }
}





//The following is the main function that will act allow for website search.
function searchCourse(input) {
    let counter = 0
    let courseCounter = 0

    //if the user searches for anything with 2 or less characters, do not return anything.
    if (input.length <= 2) {
        return
    }

    //The following for loop checks to see which levels are currently being displayed. For each level that is displayed, 
    //add the appropriate courses (that correspond to that level) to the coursesDisplayTrue list declared above. 
    for (let level of levels) {
        if (level.title === 'allLevels' && level.display === true) {
            coursesDisplayTrue = []
            coursesDisplayTrue.push(course1,course2, course3, course4, course5, course6, course7, course8, course9, course10, course11)
        }
        else if (level.title === 'level1' && level.display === true) {
            coursesDisplayTrue = []
            coursesDisplayTrue.push(course1,course2, course3, course4, course5, course6)
        }
        else if (level.title === 'level2' && level.display === true) {
            coursesDisplayTrue = []
            coursesDisplayTrue.push(course7, course8, course9, course10, course11)
        }
    }

    /*
    The following for loop goes through each course that is being displayed. It takes the contents (both the title and the description) and compares it with
    the input of the user (which is a parameter of the function). If there is a match, highlight the text and scroll to the text that is matched.
    */
    for (let course of coursesDisplayTrue) {
        let courseTitleLowerCase = course.title.toLowerCase();
        let courseDescLowerCase = course.description.toLowerCase();
        let inputLowerCase = input.toLowerCase();
        
        if (courseTitleLowerCase.includes(inputLowerCase)) {
            document.getElementById(course.id).scrollIntoView({behavior:'smooth'});
            let re = new RegExp(input, 'i');
            document.getElementById(course.id).innerHTML = document.getElementById(course.id).innerHTML.replace((course.title).match(re), "<mark id='20'>" + (course.title).match(re) + "</mark>" );
            counter += 1
        }
        else {
            courseCounter +=1
        }

        if (courseDescLowerCase.includes(inputLowerCase)) {
            document.getElementById(course.id).scrollIntoView({behavior:'smooth'});
            let re = new RegExp(input, 'i');
            document.getElementById(course.id).innerHTML = document.getElementById(course.id).innerHTML.replace((course.description).match(re), "<mark id='20'>" + (course.description).match(re) + "</mark>" );
            counter += 1
        }
        else {
            courseCounter += 1
        }
    }

    //If there are 2 or more matches found, alert the user. If there is only a single match, the user will not be alerted.
    if (counter >= 2) {
        alert (counter + " Matches found")
    }

    //If there are no matches found, alert the user that not match has been found
    else if (courseCounter === (coursesDisplayTrue.length)*2) {
        alert("No match found")
    }
    
}



//The following function makes sure that after each new search, the previous highlighted text (from the previous search) will be removed.
function removeTag(){
    let marks=document.getElementsByTagName('mark');
    let counter = marks.length-1;
    for(i=counter;i>=0;i--){
        marks[i].outerHTML = marks[i].innerHTML;
    }
}


//the following function goes through each level in the list of levels declared above. If that level is selected in the 'filter', then change the display attribute of the level object to true.
function display() {
    for (let level of levels) {
        if (document.getElementById('levelSelect').value === level.title){
            level.display = true;
        }
        else {
            level.display = false
        }
    }
}


// Function below checks which of the options in the filter is selected and calls the appropriate 'add()' and 'remove()' functions
function filterLevels(element) {


    if (element === 'allLevels') {
        add('lvl1');
        add('lvl2');
    }

    else if (element === 'level1') {
        add('lvl1');
        remove('lvl2');
    }

    else if (element === 'level2') {
        add('lvl2');
        remove('lvl1');
    }
}


// Function below checks which of the options in the sort is selected and calls the 'reOrder()' method with the appropriate parameters
function sortLevels(element) {
    if (element === '1') {
        reOrder('lvl1');
    }
    else if (element === '2') {
        reOrder('lvl2');
    }

}
