


let board=[];
let solutions=[];
let current_solution = 0;
let solution_number_element=document.getElementById("solution_number");
create_board();
solver(0);
display_queens(current_solution);

function create_board(){
	let iswhite=true;
	let table_element=document.getElementById("board");
	for(let i=0; i<8; i++){
		board[i]=[];
		let tr_element=document.createElement("tr");
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
	if(i==8)return;
	for(let j=0; j<8; j++){
		if(islegal(i,j)){
			board[i][j].hasqueen=true;
			if(i==7)add_solution_to_array();
			solver(i+1);
			board[i][j].hasqueen=false;
		}
	}
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


function display_queens(index){
	clear_board();
    let solution_squares = solutions[index];
	for(let i=0; i<8; i++)
	solution_squares[i].innerHTML="♛";
	solution_number_element.innerHTML=current_solution+1;
}

function clear_board(){
	for(let i=0; i<8; i++)
	for(let j=0; j<8; j++)
	board[i][j].innerHTML="";
}


function add_solution_to_array(){
	let solution_squares=[];
	for(let i=0; i<8; i++)
	for(let j=0; j<8; j++)
	if(board[i][j].hasqueen)
	solution_squares.push(board[i][j]);
	solutions.push(solution_squares);	
}

document.getElementById("next_button").onclick = () => {
	move_to_next_solution();
};

window.onkeypress = (e) => {
	if(e.keyCode == 32)
	move_to_next_solution();
};

function move_to_next_solution(){
	current_solution = (current_solution + 1)%92;
	display_queens(current_solution);
}







