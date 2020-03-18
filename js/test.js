function addteeth(){
    //  Add Teeth Number Selector
    var divselector = document.createElement("div");
    var selectTeeth = document.createElement("select");
    var removeButton = document.createElement("button");
    var br = document.createElement("br");
    for (var i=11; i<=18; i++) {
        selectTeeth.options[selectTeeth.options.length] = new Option(i, i);
    }
    //  End
    //  Add Teeth Problem Selector
    var selectProblem = document.createElement("select");
    var teethProblem = {
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
    //removeButton.setAttribute('class', 'remove');
    removeButton.innerHTML ="Remove";
    divselector.append(selectTeeth);
    divselector.append(selectProblem);
    divselector.append(removeButton);
    divselector.append(br);
    document.getElementById("teethnumber_id").appendChild(divselector);
    removeButton.onclick= function(){
        divselector.remove()
    };
}