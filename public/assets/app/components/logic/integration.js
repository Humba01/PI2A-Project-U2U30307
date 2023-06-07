let timer1 = setTimeout(() => {
      
  for(let k = 0; k < i.length; k++) {
    for(let j = 1; j < 9; j++) {
      let padraoId = "cs"+i[k].toString()+j.toString();
  
      let indicadores = document.createElement("div");
        indicadores.style.height = "30px";
        indicadores.style.width = "30px";
        indicadores.style.borderRadius = "20%";
        indicadores.style.marginLeft = "10px";
        indicadores.style.marginTop = "10px";
        indicadores.style.zIndex = "1";
        indicadores.style.position = "absolute";
        indicadores.style.backgroundColor = "#01010144";
        indicadores.style.visibility = "hidden";
        indicadores.id = "ind"+i[k].toString()+j.toString();

        let pElemento = document.getElementById(padraoId);
        let pElementoImg = document.getElementById("pcimg"+i[k].toString()+j.toString());
          pElemento.appendChild(indicadores);

        let sensorb2 = (k+j + 1) % 2;

        if(sensorb2 == 0) {
          pElemento.style.backgroundColor = "#fce2af";
        }
        
        if(sensorb2 == 1) {
          pElemento.style.backgroundColor = "#872a14";
        }

        if(k == 1) {
          pElementoImg.src = modelos["#p"];
        }

        if(k == 6) {
          pElementoImg.src = modelos["#P"];
        }

        if((k == 0 && j == 1) || (k == 0 && j == 8)) {
          pElementoImg.src = modelos["#r"];
        }

        if((k == 7 && j == 1) || (k == 7 && j == 8)) {
          pElementoImg.src = modelos["#R"];
        }

        if((k == 0 && j == 2) || (k == 0 && j == 7)) {
          pElementoImg.src = modelos["#n"];
        }

        if((k == 7 && j == 2) || (k == 7 && j == 7)) {
          pElementoImg.src = modelos["#N"];
        }

        if((k == 0 && j == 3) || (k == 0 && j == 6)) {
          pElementoImg.src = modelos["#b"];
        }

        if((k == 7 && j == 3) || (k == 7 && j == 6)) {
          pElementoImg.src = modelos["#B"];
        }

        if(k == 0 && j == 4) {
          pElementoImg.src = modelos["#q"];
        }

        if(k == 7 && j == 4) {
          pElementoImg.src = modelos["#Q"];
        }

        if(k == 0 && j == 5) {
          pElementoImg.src = modelos["#k"];
        }

        if(k == 7 && j == 5) {
          pElementoImg.src = modelos["#K"];
        }
      
    }
  }

}, 1200);
