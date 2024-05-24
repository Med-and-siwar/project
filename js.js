
var generateID = (function () {
    var count = 100;
    return function () {
        return count++;
    };
})();

var allStudents = [];

function makeStudent(name, image, notes) {
    var id = generateID(); 
    var student = {
        id: id,
        name: name,
        image: image,
        notes: notes
    };
    allStudents.push(student);
}

makeStudent('Rami', 'https://img.freepik.com/premium-photo/child-boy-with-book-bag-colored-background_488220-73213.jpg?size=626&ext=jpg&ga=GA1.2.658110048.1715693284&semt=ais_user_b', [18, 15, 18]);

makeStudent('Imene', 'https://img.freepik.com/premium-photo/little-girl-with-pigtails-books-reading-studying-points-side_222185-2110.jpg?w=740', [15, 12, 14]);

makeStudent('Taym', 'https://img.freepik.com/free-photo/front-view-little-boy-desk-reading_23-2148470001.jpg?w=740&t=st=1716387651~exp=1716388251~hmac=4e0ee02c11c7ad98b5fb83fca54cca883603497af9fd61b93ce402f25fcaff11', [4, 10, 8]);

makeStudent('Marwa', 'https://img.freepik.com/premium-photo/little-schoolgirl-casual-dress-holding-books-against-blue-background_361125-675.jpg?w=740', [18, 15, 12]);


function displayStudents(allStudents){
    var container = $('#students-container');
    container.empty();
    var ins=$('#instructor-container')
    ins.empty();
    
    allStudents.forEach(function(student){
        var studentDiv = $('<div class="student"></div>');
        var name = $('<h2>' + student.name + '</h2>');
        var image = $('<img  id="photo" src="' + student.image + '" alt="' + student.name + '">');
        var notes = $('<p>Notes: ' + student.notes.join(', ') + '</p>');
        
        image.click(function() {
            var avg = sum(student.notes) / student.notes.length;
            if(avg>=10){
                alert(student.name +' '+'s average ' + avg.toFixed(2)+':'+' Graduated' );
        
            }
        else
        alert(student.name +' '+'s average ' + avg.toFixed(2)+' :'+' NOT Graduated' ); 
        


        });
        studentDiv.append(image,name,notes);
            container.append(studentDiv);
});
}


$('#displayStudentsBtn').click(function(){
  
    displayStudents(allStudents);
});
//

function removestudent(studentName) {
    allStudents = allStudents.filter(function(element) {
      return element.name.toUpperCase() !== studentName.toUpperCase();
    });
    displayStudents(allStudents); 
}

$('#delete-button').click(function(){
    var ir = $('#input-remove').val(); 
    removestudent(ir); 
});


//

function searchstudent(studentname){
   var stud=allStudents.filter(function(element){
        return element.name.toUpperCase()===studentname.toUpperCase();
    });
    displayStudents(stud)

}

$('#Search1').click(function(){
    var inpu = $('#searchinput').val(); 
    searchstudent(inpu); 
});



///

function sum (arr){
    var sum = 0
    for (i=0 ; i<arr.length ; i++){
        sum =sum + arr[i]
    } 
    return sum
}

///

var instructors = [];

function makeInstructor(name, classroom, materials) {
    var instructor = {
        name: name,
        classroom: classroom,
        materials: materials,
    };

    instructors.push(instructor);
}

makeInstructor('Omar','a',['english','arabic','math']);
makeInstructor('Jihen','b',['frensh','espagnol','math']);
makeInstructor('Sami','c',['arabic','physique','informatique']);


function displayInstructors(instructors) {
    var c = $('#instructor-container');
    c.empty(); 


    instructors.forEach(function(instructor) {
        var instructorDiv = $('<div class="instructor"></div>');
        var name = $('<h2>' + instructor.name + '</h2>');
        var classroom = $('<h3>' + instructor.classroom + '</h3>');
        var materials = $('<p>Materials: ' + instructor.materials.join(', ') + '</p>');
        instructorDiv.append(name, classroom, materials);
        c.append(instructorDiv);
    });
}
    // settimeout(function() {
    //     $('#instructor-container').html('');
    // }, 5000);

    $('#displayInstructors').click(function() {
    $('#students-container').html('')
    console.log("button clicked")
    displayInstructors(instructors);
});


function removeinstructor(instructorName) {
    instructors= instructors.filter(function(element) {
   return element.name.toLowerCase() !== instructorName.toLowerCase();
      });
      displayInstructors(instructors); 
  }

  $('#removeinstructor').click(function(){
      var x = $('#input-removei').val(); 
      removeinstructor(x); 
  })

  $("#reload").click(function() {
   
    location.reload()
});





















