let mapaTabuleiro = [], mapaIndicadores = [], eA, eB, auxA = [], auxB = [];

setTimeout(() => { 

  // mapeando tabuleiro e seus indicadores
  for(let k = 0; k < i.length; k++) {
    
    for(let j = 1; j < 9; j++) {
      let sensor = j % 8; 
      
      eA = document.getElementById("pcimg"+i[k].toString()+j.toString());
      eB = document.getElementById("ind"+i[k].toString()+j.toString());
      auxA.push(eA);
      auxB.push(eB)
      
      if(sensor == 0) {
        mapaTabuleiro.push(auxA);
        mapaIndicadores.push(auxB);
        auxA = [];
        auxB = [];
      }
    
    }
    
  }

  let sensoronoff = 0;

  function criaOuvinteClique(i, j) { 
    
    return (mapaTabuleiro[i][j].addEventListener("click", () => {
  
      if(sensoronoff == 0) {
        mapaIndicadores[i][j].style.visibility = "visible";
        sensoronoff = 1;
      } else {
        mapaIndicadores[i][j].style.visibility = "hidden";
        sensoronoff = 0;
      }

      // verifica se existe uma peça ao redor

        /** 
         * 
         * if(mapaTabuleiro[i][j]) { }
         *  
         */

      // logica de movimento (peoes)
        
        /**
         * => primeira jogada do tabuleiro;
         * 
         * mapaIndicadores[i][j].style.visibility = "visible"; 
         * mapaIndicadores[i-1][j].style.visibility = "visible";
         * 
         * => segunda jogada do tabuleiro;
         * 
         * mapaIndicadores[i][j].style.visibility = "visible";
         * mapaIndicadores[i-1][j].style.visibility = "visible";
         * mapaIndicadores[i-2][j].style.visibility = "visible";
         *  
         */

      // logica de movimento (torres)

        /**
         * 
         * mapaIndicadores[i][j].style.visibility = "visible";
         * mapaIndicadores[i-1][j].style.visibility = "visible";
         * mapaIndicadores[i-2][j].style.visibility = "visible";
         * mapaIndicadores[i-3][j].style.visibility = "visible";
         * mapaIndicadores[i-4][j].style.visibility = "visible";
         * mapaIndicadores[i-5][j].style.visibility = "visible";
         * mapaIndicadores[i-6][j].style.visibility = "visible";
         * mapaIndicadores[i][j-1].style.visibility = "visible";
         * mapaIndicadores[i][j-2].style.visibility = "visible";
         * mapaIndicadores[i][j-3].style.visibility = "visible";
         * mapaIndicadores[i][j-4].style.visibility = "visible";
         * mapaIndicadores[i][j-5].style.visibility = "visible";
         * mapaIndicadores[i][j-6].style.visibility = "visible";
         * 
         */

      // logica de movimento (cavalos)

        /**
         * 
         * mapaIndicadores[i][j].style.visibility = "visible";
         * mapaIndicadores[i][j-1].style.visibility = "visible";
         * mapaIndicadores[i-1][j-1].style.visibility = "visible";
         * mapaIndicadores[i-2][j-1].style.visibility = "visible";
         * mapaIndicadores[i][j+1].style.visibility = "visible";
         * mapaIndicadores[i-1][j+1].style.visibility = "visible";
         * mapaIndicadores[i-2][j+1].style.visibility = "visible";
         * 
         */

      // logica de movimento (bispos)

        /**
         * 
         * mapaIndicadores[i][j].style.visibility = "visible";
         * mapaIndicadores[i-1][j-1].style.visibility = "visible";
         * mapaIndicadores[i-2][j-2].style.visibility = "visible";
         * mapaIndicadores[i-3][j-3].style.visibility = "visible";
         * mapaIndicadores[i-4][j-4].style.visibility = "visible";
         * mapaIndicadores[i-5][j-5].style.visibility = "visible";
         * mapaIndicadores[i+1][j+1].style.visibility = "visible";
         * mapaIndicadores[i+2][j+2].style.visibility = "visible";
         * mapaIndicadores[i+3][j+3].style.visibility = "visible";
         * mapaIndicadores[i+4][j+4].style.visibility = "visible";
         * mapaIndicadores[i+5][j+5].style.visibility = "visible";
         * 
         */

      // logica de movimento (reis)
      // logica de movimento (rainhas)
  
    }));

  }

  function removeOuvinteClique(i, j) {
    mapaTabuleiro[i][j].removeEventListener("click", () => {
      mapaIndicadores[i][j].style.visibility = "hidden";
      sensoronoff = 0;
    });
  }

  let opcaoSelecaoPecasPretas = document.getElementById("op_preta");
  let opcaoSelecaoPecasBrancas = document.getElementById("op_branca");

  // if(mapaTabuleiro[i][j].src != null) {
  //   removeOuvinteClique(i, j);
  // };

  criaOuvinteClique(0, 0);
  criaOuvinteClique(0, 1);
  criaOuvinteClique(0, 2);
  criaOuvinteClique(0, 3);
  criaOuvinteClique(0, 4);
  criaOuvinteClique(0, 5);
  criaOuvinteClique(0, 6);
  criaOuvinteClique(0, 7);
  criaOuvinteClique(1, 0);
  criaOuvinteClique(1, 1);
  criaOuvinteClique(1, 2);
  criaOuvinteClique(1, 3);
  criaOuvinteClique(1, 4);
  criaOuvinteClique(1, 5);
  criaOuvinteClique(1, 6);
  criaOuvinteClique(1, 7);
  criaOuvinteClique(2, 0);
  criaOuvinteClique(2, 1);
  criaOuvinteClique(2, 2);
  criaOuvinteClique(2, 3);
  criaOuvinteClique(2, 4);
  criaOuvinteClique(2, 5);
  criaOuvinteClique(2, 6);
  criaOuvinteClique(2, 7);
  criaOuvinteClique(3, 0);
  criaOuvinteClique(3, 1);
  criaOuvinteClique(3, 2);
  criaOuvinteClique(3, 3);
  criaOuvinteClique(3, 4);
  criaOuvinteClique(3, 5);
  criaOuvinteClique(3, 6);
  criaOuvinteClique(3, 7);
  criaOuvinteClique(4, 0);
  criaOuvinteClique(4, 1);
  criaOuvinteClique(4, 2);
  criaOuvinteClique(4, 3);
  criaOuvinteClique(4, 4);
  criaOuvinteClique(4, 5);
  criaOuvinteClique(4, 6);
  criaOuvinteClique(4, 7);
  criaOuvinteClique(5, 0);
  criaOuvinteClique(5, 1);
  criaOuvinteClique(5, 2);
  criaOuvinteClique(5, 3);
  criaOuvinteClique(5, 4);
  criaOuvinteClique(5, 5);
  criaOuvinteClique(5, 6);
  criaOuvinteClique(5, 7);
  criaOuvinteClique(6, 0);
  criaOuvinteClique(6, 1);
  criaOuvinteClique(6, 2);
  criaOuvinteClique(6, 3);
  criaOuvinteClique(6, 4);
  criaOuvinteClique(6, 5);
  criaOuvinteClique(6, 6);
  criaOuvinteClique(6, 7);
  criaOuvinteClique(7, 0);
  criaOuvinteClique(7, 1);
  criaOuvinteClique(7, 2);
  criaOuvinteClique(7, 3);
  criaOuvinteClique(7, 4);
  criaOuvinteClique(7, 5);
  criaOuvinteClique(7, 6);
  criaOuvinteClique(7, 7);

  for(let a = 0; a < 8; a++){
    
    for(let b = 0; b < 8; b++){
  
      console.log(mapaTabuleiro[a][b]);

      if(mapaTabuleiro[a][b].src == ""){
        mapaTabuleiro[a][b].src = "./assets/imgs/another/120px-invisible_square.png";
        // mapaTabuleiro[a][b].style.visibility = "hidden";
      }

    }
  
  }

}, 1202);

/**
    if(peca[x][y]['peca']=='peao'){
		if(peca[x][y]['cor']=="branco"){

				if(!peca[x-1][y]['peca']){
					possivel(x-1,y);
				}if(y-1>0 && peca[x-1][y-1]['peca']){
					possivel(x-1,y-1);						
				}
				if(y+1<9 && peca[x-1][y+1]['peca']){
					possivel(x-1,y+1);					
				}					

				if(x==7){				
					if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
						possivel(x-2,y);
					}
				}

		}
		
		
		if(peca[x][y]['cor']=="preto"){
				
				if(!peca[x+1][y]['peca']){
					possivel(x+1,y);
				}if(y-1>0 && peca[x+1][y-1]['peca']){
					possivel(x+1,y-1);						
				}
				if(y+1<9 && peca[x+1][y+1]['peca']){
					possivel(x+1,y+1);					
				}					

				if(x==2){
				
					if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
						possivel(x+2,y);
					}
		
				}

		}
	}
///////////////////////////////////////////////////////////////////////////////////////FIM PEAO//////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////CAVALO ////////////////////////////////

	if(peca[x][y]['peca']=='cavalo'){
		
		possivel(x-1,y-2);
		possivel(x+1,y+2);
		possivel(x+1,y-2);
		possivel(x-1,y+2);
		possivel(x-2,y-1);
		possivel(x+2,y+1);
		possivel(x+2,y-1);
		possivel(x-2,y+1);
		
	}
//////////////////////////////////////////////////////////////////////////////////////FIM CAVALO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////REI ///////////////////////////////////
	if(peca[x][y]['peca']=='rei'){
		possivel(x-1,y);
		possivel(x,y-1);
		possivel(x-1,y-1);
		possivel(x+1,y);
		possivel(x,y+1);
		possivel(x+1,y+1);
		possivel(x-1,y+1);
		possivel(x+1,y-1);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM REI ////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////TORRE ///////////////////////////////////
	if(peca[x][y]['peca']=='torre'){
		
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM TORRE ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////BISPO ///////////////////////////////////
	if(peca[x][y]['peca']=='bispo'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM BISPO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////RAINHA ///////////////////////////////////
	if(peca[x][y]['peca']=='rainha'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
		
	}
//////////////////////////////////////////////////////////////////////////////////////FIM RAINHA ////////////////////////////



function possivel(px,py){
		if(px>0 && px <9 && py>0 && py <9 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
			document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; //muda cor de fundo
			possiveis[c] = "t"+(px)+(py); c++;
			
			if(!peca[px][py]['peca']){
				return true;
			}
		}else{
			return false;
		}

	
	}

	return c;
}

function volta_fundo(){
	var cf;
	for(cf=0;cf<possiveis.length;cf++){
		document.getElementById(possiveis[cf]).style.backgroundColor = "";
	}	
}

function verifica_possivel(x,y,c){
	var pode=0;
	var cp;
	var div = "t"+x+y;
	
	for(cp=1;cp<c;cp++){
		
		if(possiveis[cp]==div){
			pode ++;
		}
		if(pode>0){
			return 1;
		}
	}	
	
}

function seleciona(x,y){
	
		
		if((movimenta['selecionada']['x']==0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor']==vez){
			if(movimenta['selecionada']['x']!=0){
				volta_fundo(); //volta a cor de fundo normal
			}
			if(peca[x][y]['peca']){ //se tiver uma peca nessa posição
				movimenta['selecionada']['x'] = x;	//recebe x selecionado
				movimenta['selecionada']['y'] = y;  //recebe y selecionado
				movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
				movimenta['selecionada']['cor'] = peca[x][y]['cor'];	//recebe a cor selecionada
				
				cont_possiveis = possiveis_movimentos();	
			}
			
		}else if(verifica_possivel(x,y,cont_possiveis)){ //se for segundo clique e a cor da peca destino for diferente da selecionada
			
			if(peca[x][y]['peca']=="rei"){
				alert(movimenta['selecionada']['cor']+" venceu (:");
				
			}
			
			//Pra trocar de peça quando o peão chegar do outro lado
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='branco' && x==1){
				document.getElementById('escolhebranco').style.display='block';	
				document.getElementById('fundo').style.display='block';	
				xe=x;ye=y;
			}
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='preto' && x==8){
				document.getElementById('escolhepreto').style.display='block';	
				document.getElementById('fundo').style.display='block';					
				xe=x;ye=y;
			}
			
			if(peca[x][y]['cor'] != movimenta['selecionada']['cor']){
				movimenta['destino']['x'] =x;	//recebe o x do destino(segundo clique)
				movimenta['destino']['y'] =y;  //recebe y do destino(segundo clique)
				
				if(peca[x][y]['peca']){  //se tiver alguma peca nessa posição
					movimenta['destino']['peca'] = peca[x][y]['peca'];	//destino recebe a peca selecionada
					movimenta['destino']['cor'] = peca[x][y]['cor'];	//destino recebe a cor selecionada
				}
				
				
				document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).innerHTML = ""; //selcionada fica sem imagem
				document.getElementById("t"+x+""+y).innerHTML = il[movimenta['selecionada']['cor']][movimenta['selecionada']['peca']]; //destino recebe a imagem da peça selecinada
				peca[x][y]['peca']=movimenta['selecionada']['peca'];	//posicao destino recebe a peca
				peca[x][y]['cor']=movimenta['selecionada']['cor'];		//posicao destino recebe a cor
								
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;		//peca selecionada recebe 0
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		//cor selecionada recebe 0
					
				movimenta['selecionada']['x'] =0;	//selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['y'] =0;	//selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['peca']="0";	//selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['cor']="0";	//selecionada cor recebe 0 (pra na proxima ver q é o primeiro movimento)
				
				
			}

			volta_fundo(); //volta a cor de fundo normal
			
			if(vez=="branco"){vez="preto";}else{vez="branco";} //troca a vez

		}
		
		

	
}

	function escolhe(pecae,core){
			peca[xe][ye]['peca']=pecae;
			document.getElementById("t"+xe+""+ye).innerHTML = il[core][pecae];
			document.getElementById('escolhe'+core).style.display='none';
			document.getElementById('fundo').style.display='none';
	}

	function escolhecor_incio(cor){
			document.getElementById('escolhecor-inicio').style.display='none';
			document.getElementById('fundo').style.display='none';
			vez = cor; //vez de quem jogar

	}
 */
