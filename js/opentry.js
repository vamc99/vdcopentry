
function addteeth(teethType){
    
    //  Add Teeth Number Selector
    var divselector = document.createElement("div");
    var selectTeeth = document.createElement("select");
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
    for(problem in teethProblem) {
         selectProblem.options[selectProblem.options.length] = new Option(teethProblem[problem], problem);
    }
    // End

    // Maxilla
    if(teethType=='maxilla'){
        console.log(teethType);
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
