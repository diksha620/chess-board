
var no = document.getElementById("text").value 

const func = () => {

    document.getElementById('text').style.display = "none";
    document.getElementById('btn').style.display = "none";
    var no = document.getElementById("text").value;
    if(no <= 50 && no >=1){
      play(no);
      document.getElementById('btn1').style.display = "block";
      document.getElementById("heading").style.display = "none";
        

    }
    else if(no <= 0){
        //document.getElementById("heading").style.display = "block";
        document.getElementById("heading").innerHTML = "please enter positive no";
        document.getElementById("btn1").style.display = "block";
        
    }
    else if (no >= 50){
        //document.getElementById("heading").style.display = "block";
        document.getElementById("heading").innerHTML = "please enter no upto 50";
        document.getElementById("btn1").style.display = "block";
    }
    else {
        //document.getElementById("heading").style.display = "block";
        document.getElementById("heading").innerHTML = "please enter valid no";
        document.getElementById("btn1").style.display = "block";
    } 

}

const play = (no) => {
    if(!isNaN(no)){
        let center = document.createElement('center');
          let ChessTable = document.createElement('table');
            for (let i = 0; i <no ; i++) {
    
                let tr = document.createElement('tr');
                for (let j = 0; j < no; j++) {
                    let td = document.createElement('td');
                    if ((i + j) % 2 == 0) {
                        td.setAttribute('class', 'cell whitecell');
                        tr.appendChild(td);
                    }
                    else {
                        td.setAttribute('class', 'cell blackcell');
                        tr.appendChild(td);
                    }
                }      		
                ChessTable.appendChild(tr);
            }
            center.appendChild(ChessTable);
    
            ChessTable.setAttribute('cellspacing', '0');
            ChessTable.setAttribute('width', 'auto');
      
            document.body.appendChild(center); 
        }
        else {
          document.write("please enter no");
        }
}

        