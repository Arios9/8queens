


var board=[];
create_board();
var solutionfound=false;
solver(0);

function create_board(){
	var iswhite=true;
	var table_element=document.getElementById("board");
	for(let i=0; i<8; i++){
		board[i]=[];
		var tr_element=document.createElement("tr");
		table_element.appendChild(tr_element);
		for(let j=0; j<8; j++){
			board[i][j]= document.createElement("td");
			tr_element.appendChild(board[i][j]); 
			let square_color=iswhite ? "white" : "chocolate";
			board[i][j].style.backgroundColor=square_color;
			board[i][j].hasqueen=false;
			iswhite=!iswhite;	
		}
		iswhite=!iswhite;	
	}	
}


function solver(i){
	if(i<8){
	for(let j=0; j<8; j++){
		if(islegal(i,j)){
			board[i][j].hasqueen=true;
			if(i==7)solutionfound=true;
			solver(i+1);
			if(solutionfound)return;
			board[i][j].hasqueen=false;
		}
	}}
}

function islegal(i,j){
	for(let k=0; k<8; k++){
		if(k==i)continue;
		if(board[k][j].hasqueen)return false;
	}
	let y,x;

	y=i; x=j;
	while(--y>-1&&++x<8)if(board[y][x].hasqueen)return false;
	y=i; x=j;
	while(++y<8&&++x<8)if(board[y][x].hasqueen)return false;
	y=i; x=j;
	while(++y<8&&--x>-1)if(board[y][x].hasqueen)return false;
	y=i; x=j;
	while(--y>-1&&--x>-1)if(board[y][x].hasqueen)return false;
	
	return true;	
}


display_queens();

function display_queens(){
	for(let i=0; i<8; i++)
	for(let j=0; j<8; j++)
	if(board[i][j].hasqueen)
	board[i][j].innerHTML="♛";
}


