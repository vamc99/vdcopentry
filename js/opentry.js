var user = sessionStorage.getItem("email");
if (user != null) {
    console.log(user);
    //console.log("hello");
}


function addteeth(teethType){

    //  Add Teeth Number Selector
    var divselector = document.createElement("div");
    divselector.classList.add("m-2");
    var selectTeeth = document.createElement("select");
    selectTeeth.name="teethnumber";
    var br = document.createElement("br");

    //  Teeth Problem Selector
    var selectProblem = document.createElement("select");
    selectProblem.name="problem";

    var teethProblem = { // need to fetch it from database
        A : 'A',
        B : 'B',
        C : 'C',
        D : 'D',
        E : 'E'
    };
    for(problem in teethProblem) {
         selectProblem.options[selectProblem.options.length] = new Option(teethProblem[problem], problem);
    }
    // End

    // Maxilla
    if(teethType=='maxilla'){
        for (var i=11; i<=18; i++) {
            selectTeeth.options[selectTeeth.options.length] = new Option(i, i);
        }
        for (var i=21; i<=28; i++) {
            selectTeeth.options[selectTeeth.options.length] = new Option(i, i);
        }
    }else{ // Mandible
        for (var i=31; i<=38; i++) {
            selectTeeth.options[selectTeeth.options.length] = new Option(i, i);
        }
        for (var i=41; i<=48; i++) {
            selectTeeth.options[selectTeeth.options.length] = new Option(i, i);
        }
    }  
    //  End
    // Remove Button
    var removeButton = document.createElement("button");
    var itag = document.createElement("i");
    removeButton.classList.add("btn","btn-danger","btn-circle");
    itag.classList.add("fa", "fa-minus");
    removeButton.append(itag);
    //removeButton.innerHTML ="R";
    removeButton.onclick= function(){
        divselector.remove()
    };

    divselector.append(selectTeeth);
    divselector.append(selectProblem);
    divselector.append(removeButton);
    divselector.append(br);
   
    if(teethType == 'maxilla'){
        document.getElementById("maxilla").appendChild(divselector);
    }else{
        document.getElementById("mandible").appendChild(divselector);
    }
    
   
}
function insertRecord(){
    var _phone = document.getElementsByName("phone")[0].value;
    var _date = document.getElementsByName("opdate")[0].value;
    var _patientName = document.getElementsByName("pname")[0].value;
    var _age = document.getElementsByName("age")[0].value;
    var _patient = document.getElementsByName("patient")[0].value;
    var _gender = document.getElementsByName("gender")[0].value;
    var _selectedTeeths = document.getElementsByName("teethnumber");
    var _selectProblem = document.getElementsByName("problem");
    var _aboutpatient = document.getElementsByName("aboutpatient")[0].value;
    var _arrSelectedTeeth =[];
    var _arrSelecteProblem = [];
    for (let index = 0; index < _selectedTeeths.length; index++) {
        _arrSelectedTeeth[index] = _selectedTeeths[index].value;
        _arrSelecteProblem[index] = _selectProblem[index].value;
        
    }
    var _teeth = {}
    for(var i = 0; i < _arrSelecteProblem.length; i++){
        _teeth[_arrSelectedTeeth[i]] = _arrSelecteProblem[i];
    }

    db.collection("patient").doc(_phone).collection(_date).doc(_patient)
    .set({
        patientName : _patientName,
        age : _age,
        gender : _gender,
        teeth: _teeth,
        aboutpatient : _aboutpatient,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
