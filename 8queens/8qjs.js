

var a=[];
var iswhite=true;
var board=document.getElementById("board");
for(let i=0; i<8; i++){
	a[i]=[];
	for(let j=0; j<8; j++){
a[i][j]= document.createElement("div");
board.appendChild(a[i][j]); 
a[i][j].classList.add("squares");
a[i][j].hasqueen=false;
if(iswhite)a[i][j].style.backgroundColor="white";
else a[i][j].style.backgroundColor="chocolate ";
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
			a[i][j].hasqueen=true;
			if(i==7)solutionfound=true;
			solver(i+1);
			if(solutionfound)return;
			a[i][j].hasqueen=false;
		}
	}}
}

function islegal(i,j){
	for(let k=0; k<8; k++){
		if(k==i)continue;
		if(a[k][j].hasqueen)return false;
	}
	
	let y,x;
	
	y=i; x=j;
	while(--y>-1&&++x<8)
		if(a[y][x].hasqueen)return false;
	
	y=i; x=j;
	while(++y<8&&++x<8)
		if(a[y][x].hasqueen)return false;
	
	y=i; x=j;
	while(++y<8&&--x>-1)
		if(a[y][x].hasqueen)return false;
	
	y=i; x=j;
	while(--y>-1&&--x>-1)
		if(a[y][x].hasqueen)return false;
	
	return true;	
}




for(let i=0; i<8; i++){
for(let j=0; j<8; j++){	
	if(a[i][j].hasqueen)
	a[i][j].innerHTML="Q";
}
}









