

function start() { // Inicio da função start()

	// variaveis que recebem os keycodes das teclas
	let TECLA = {
		W: 87,
		S: 83,
		D: 68
	}

	let podeAtirar=true;

	let jogo = {}

	let velocidade = 5;

	let posicaoY = parseInt(Math.random() * 334);

	jogo.pressionou = [];

	//Verifica se o usuário pressionou alguma tecla	

	$(document).keydown(function (e) {
		jogo.pressionou[e.which] = true;
	});


	$(document).keyup(function (e) {
		jogo.pressionou[e.which] = false;
	});

	//Principais variáveis do jogo





	jogo.timer = setInterval(loop, 30);





	//Função que movimenta o fundo do jogo

	function movefundo() {

		let esquerda = parseInt($("#fundoGame").css("background-position"));
		$("#fundoGame").css("background-position", esquerda - 1);

	} // fim da função movefundo()



	function movejogador() {

		if (jogo.pressionou[TECLA.W]) {
			let topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top", topo - 10);

			if (topo <= 0) {

				$("#jogador").css("top", topo + 10);
			}


		}

		if (jogo.pressionou[TECLA.S]) {

			let topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top", topo + 10);


			if (topo >= 434) {
				$("#jogador").css("top", topo - 10);

			}

		}

		if (jogo.pressionou[TECLA.D]) {

			disparo();
			//Chama função Disparo	
		}

	} // fim da função movejogador()

	function moveinimigo1() {

		let posicaoX = parseInt($("#inimigo1").css("left"));
		$("#inimigo1").css("left", posicaoX - velocidade);
		$("#inimigo1").css("top", posicaoY);

		if (posicaoX <= 0) {
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left", 694);
			$("#inimigo1").css("top", posicaoY);

		}
	} //Fim da função moveinimigo1()

	function moveinimigo2() {
		let posicaoX = parseInt($("#inimigo2").css("left"));
		$("#inimigo2").css("left", posicaoX - 3);

		if (posicaoX <= 0) {

			$("#inimigo2").css("left", 775);

		}
	} // Fim da função moveinimigo2()

	function moveamigo() {

		posicaoX = parseInt($("#amigo").css("left"));
		$("#amigo").css("left", posicaoX + 1);

		if (posicaoX > 906) {

			$("#amigo").css("left", 0);

		}

	} // fim da função moveamigo()

	function disparo() {
	
		if (podeAtirar==true) {
			
		podeAtirar=false;
		
		topo = parseInt($("#jogador").css("top"))
		posicaoX= parseInt($("#jogador").css("left"))
		tiroX = posicaoX + 190;
		topoTiro=topo+37;
		$("#fundoGame").append("<div id='disparo'></div");
		$("#disparo").css("top",topoTiro);
		$("#disparo").css("left",tiroX);
		
		var tempoDisparo=window.setInterval(executaDisparo, 30);

		
		
		} //Fecha podeAtirar
	 
			   function executaDisparo() {
			posicaoX = parseInt($("#disparo").css("left"));
			$("#disparo").css("left",posicaoX+15); 
	
					if (posicaoX>900) {
							
				window.clearInterval(tempoDisparo);
				tempoDisparo=null;
				$("#disparo").remove();
				podeAtirar=true;
						
					   }
		} // Fecha executaDisparo()
	} // Fecha disparo()

	//Game Loop
	function loop() {
		
		moveamigo();
		movefundo();
		moveinimigo2();
		movejogador();
		moveinimigo1();
	} // Fim da função loop()

	

	$("#inicio").hide();

	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima2'></div>");


} // Fim da função start

