

var array=[];
var iswhite=true;
var board=document.getElementById("board");
for(let i=0; i<8; i++){
	array[i]=[];
	var tr_element=document.createElement("tr");
	board.appendChild(tr_element);
	for(let j=0; j<8; j++){
		array[i][j]= document.createElement("td");
		tr_element.appendChild(array[i][j]); 
		let square_color=iswhite ? "white" : "chocolate";
		array[i][j].style.backgroundColor=square_color;
		array[i][j].hasqueen=false;
		iswhite=!iswhite;	
	}
	iswhite=!iswhite;	
}
var solutionfound=false;
solver(0);


function solver(i){
	if(i<8){
	for(let j=0; j<8; j++){
		if(islegal(i,j)){
			array[i][j].hasqueen=true;
			if(i==7)solutionfound=true;
			solver(i+1);
			if(solutionfound)return;
			array[i][j].hasqueen=false;
		}
	}}
}

function islegal(i,j){
	for(let k=0; k<8; k++){
		if(k==i)continue;
		if(array[k][j].hasqueen)return false;
	}
	
	let y,x;
	
	y=i; x=j;
	while(--y>-1&&++x<8)
		if(array[y][x].hasqueen)return false;
	
	y=i; x=j;
	while(++y<8&&++x<8)
		if(array[y][x].hasqueen)return false;
	
	y=i; x=j;
	while(++y<8&&--x>-1)
		if(array[y][x].hasqueen)return false;
	
	y=i; x=j;
	while(--y>-1&&--x>-1)
		if(array[y][x].hasqueen)return false;
	
	return true;	
}

display_queens();

function display_queens(){
	for(let i=0; i<8; i++)
	for(let j=0; j<8; j++)
	if(array[i][j].hasqueen)
	array[i][j].innerHTML="♛";
}


