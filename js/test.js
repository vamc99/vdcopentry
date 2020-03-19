
function addteeth(teethType){
    
    //  Add Teeth Number Selector
    var divselector = document.createElement("div");
    var br = document.createElement("br");

    //  Teeth Problem Selector
    var selectProblem = document.createElement("select");
    var teethProblem = { // need to fetch it from database
        A : 'A',
        B : 'B',
        C : 'C',
        D : 'D',
        E : 'E'
    };
    selectProblem.name="problem";
    for(problem in teethProblem) {
         selectProblem.options[selectProblem.options.length] = new Option(teethProblem[problem], problem);
    }
    // End

    // Maxilla
    var selectTeeth = document.createElement("select");
    selectTeeth.name="teethnumber";
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
    removeButton.innerHTML ="Remove";
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

    var _obj = {
        patientName : _patientName,
        age : _age,
        patient : _patient,
        gender : _gender,
        teethnumber : _arrSelectedTeeth,
        teethProblem : _arrSelecteProblem,
        aboutpatient : _aboutpatient
    };
    db.collection("patient").doc(_phone).set({
        patientName : _patientName,
        age : _age,
        patient : _patient,
        gender : _gender,
        teethnumber : _arrSelectedTeeth,
        teethProblem : _arrSelecteProblem,
        aboutpatient : _aboutpatient,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
    
    // console.log(_patientName);
    // console.log(_phone);
    // console.log(_age);
    // console.log(_patient);
    // console.log(_gender);
    // console.log(_selectedTeeths.length);
    // console.log(_arrSelecteProblem);
    // console.log(_arrSelectedTeeth);
    
    // selectedTeeths.forEach((e) => {
    //     console.log(e.value);
    // });
    // selectProblem.forEach((e) => {
    //     console.log(e.value);
    // });
    //var formData = JSON.stringify(_obj);
    //console.log(formData);
    //insert data 
}