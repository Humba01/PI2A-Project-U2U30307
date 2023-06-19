// Solucionador de incompatibilidade com o ReactJS
setTimeout(() => {

	const raizTabuleiro = document.getElementById('raiz-tabuleiro')
		, escolhecorBranco = document.getElementById('escolhecor-op-branco')
		, escolhecorPreto = document.getElementById('escolhecor-op-preto')
		, escolheopBrancoRainha = document.getElementById('eboprainha')
		, escolheopBrancoTorre = document.getElementById('eboptorre')
		, escolheopBrancoCavalo = document.getElementById('ebopcavalo')
		, escolheopBrancoBispo = document.getElementById('ebopbispo')
		, escolheopPretoRainha = document.getElementById('epoprainha')
		, escolheopPretoTorre = document.getElementById('epoptorre')
		, escolheopPretoCavalo = document.getElementById('epopcavalo')
		, escolheopPretoBispo = document.getElementById('epopbispo')
		, t11 = document.getElementById('t11')
		, t12 = document.getElementById('t12')
		, t13 = document.getElementById('t13')
		, t14 = document.getElementById('t14')
		, t15 = document.getElementById('t15')
		, t16 = document.getElementById('t16')
		, t17 = document.getElementById('t17')
		, t18 = document.getElementById('t18')
		, t21 = document.getElementById('t21')
		, t22 = document.getElementById('t22')
		, t23 = document.getElementById('t23')
		, t24 = document.getElementById('t24')
		, t25 = document.getElementById('t25')
		, t26 = document.getElementById('t26')
		, t27 = document.getElementById('t27')
		, t28 = document.getElementById('t28')
		, t31 = document.getElementById('t31')
		, t32 = document.getElementById('t32')
		, t33 = document.getElementById('t33')
		, t34 = document.getElementById('t34')
		, t35 = document.getElementById('t35')
		, t36 = document.getElementById('t36')
		, t37 = document.getElementById('t37')
		, t38 = document.getElementById('t38')
		, t41 = document.getElementById('t41')
		, t42 = document.getElementById('t42')
		, t43 = document.getElementById('t43')
		, t44 = document.getElementById('t44')
		, t45 = document.getElementById('t45')
		, t46 = document.getElementById('t46')
		, t47 = document.getElementById('t47')
		, t48 = document.getElementById('t48')
		, t51 = document.getElementById('t51')
		, t52 = document.getElementById('t52')
		, t53 = document.getElementById('t53')
		, t54 = document.getElementById('t54')
		, t55 = document.getElementById('t55')
		, t56 = document.getElementById('t56')
		, t57 = document.getElementById('t57')
		, t58 = document.getElementById('t58')
		, t61 = document.getElementById('t61')
		, t62 = document.getElementById('t62')
		, t63 = document.getElementById('t63')
		, t64 = document.getElementById('t64')
		, t65 = document.getElementById('t65')
		, t66 = document.getElementById('t66')
		, t67 = document.getElementById('t67')
		, t68 = document.getElementById('t68')
		, t71 = document.getElementById('t71')
		, t72 = document.getElementById('t72')
		, t73 = document.getElementById('t73')
		, t74 = document.getElementById('t74')
		, t75 = document.getElementById('t75')
		, t76 = document.getElementById('t76')
		, t77 = document.getElementById('t77')
		, t78 = document.getElementById('t78')
		, t81 = document.getElementById('t81')
		, t82 = document.getElementById('t82')
		, t83 = document.getElementById('t83')
		, t84 = document.getElementById('t84')
		, t85 = document.getElementById('t85')
		, t86 = document.getElementById('t86')
		, t87 = document.getElementById('t87')
		, t88 = document.getElementById('t88');

		// propriedades dos elementos
			// 01
		raizTabuleiro.onload = inicia_jogo();

			// 02
		escolhecorBranco.onclick = escolhecor_incio('branco');

			// 03
		escolhecorPreto.onclick = escolhecor_incio('preto');

			// 04
		escolheopBrancoRainha.onclick = escolhe('rainha','branco');

			// 05
		escolheopBrancoTorre.onclick = escolhe('torre','branco');

			// 06
		escolheopBrancoCavalo.onclick = escolhe('cavalo','branco');

			// 07
		escolheopBrancoBispo.onclick = escolhe('bispo','branco');

			// 08
		escolheopPretoRainha.onclick = escolhe('rainha','preto');

			// 09
		escolheopPretoTorre.onclick = escolhe('torre','preto');

			// 10
		escolheopPretoCavalo.onclick = escolhe('cavalo','preto');

			// 11
		escolheopPretoBispo.onclick = escolhe('bispo','preto');

			// 12
		t11.onclick = seleciona(1,1);

			// 13
		t12.onclick = seleciona(1,2);

			// 14
		t13.onclick = seleciona(1,3);

			// 15
		t14.onclick = seleciona(1,4);

			// 16
		t15.onclick = seleciona(1,5);

			// 17
		t16.onclick = seleciona(1,6);

			// 18
		t17.onclick = seleciona(1,7);

			// 19
		t18.onclick = seleciona(1,8);

			// 20
		t21.onclick = seleciona(2,1);

			// 21
		t22.onclick = seleciona(2,2);

			// 22
		t23.onclick = seleciona(2,3);

			// 23
		t24.onclick = seleciona(2,4);

			// 24
		t25.onclick = seleciona(2,5);

			// 25
		t26.onclick = seleciona(2,6);

			// 26
		t27.onclick = seleciona(2,7);

			// 27
		t28.onclick = seleciona(2,8);

			// 28
		t31.onclick = seleciona(3,1);

			// 29
		t32.onclick = seleciona(3,2);

			// 30
		t33.onclick = seleciona(3,3);

			// 31
		t34.onclick = seleciona(3,4);

			// 32
		t35.onclick = seleciona(3,5);

			// 33
		t36.onclick = seleciona(3,6);

			// 34
		t37.onclick = seleciona(3,7);

			// 35
		t38.onclick = seleciona(3,8);

			// 36
		t41.onclick = seleciona(4,1);

			// 37
		t42.onclick = seleciona(4,2);

			// 38
		t43.onclick = seleciona(4,3);

			// 39
		t44.onclick = seleciona(4,4);

			// 40
		t45.onclick = seleciona(4,5);

			// 41
		t46.onclick = seleciona(4,6);

			// 42
		t47.onclick = seleciona(4,7);

			// 43
		t48.onclick = seleciona(4,8);

			// 44
		t51.onclick = seleciona(5,1);

			// 45
		t52.onclick = seleciona(5,2);

			// 46
		t53.onclick = seleciona(5,3);

			// 47
		t54.onclick = seleciona(5,4);

			// 48
		t55.onclick = seleciona(5,5);

			// 49
		t56.onclick = seleciona(5,6);

			// 50
		t57.onclick = seleciona(5,7);

			// 51
		t58.onclick = seleciona(5,8);

			// 52
		t61.onclick = seleciona(6,1);

			// 53
		t62.onclick = seleciona(6,2);

			// 54
		t63.onclick = seleciona(6,3);

			// 55
		t64.onclick = seleciona(6,4);

			// 56
		t65.onclick = seleciona(6,5);

			// 57
		t66.onclick = seleciona(6,6);

			// 58
		t67.onclick = seleciona(6,7);

			// 59
		t68.onclick = seleciona(6,8);

			// 60
		t71.onclick = seleciona(7,1);

			// 61
		t72.onclick = seleciona(7,2);

			// 62
		t73.onclick = seleciona(7,3);

			// 63
		t74.onclick = seleciona(7,4);

			// 64
		t75.onclick = seleciona(7,5);

			// 65
		t76.onclick = seleciona(7,6);

			// 66
		t77.onclick = seleciona(7,7);

			// 67
		t78.onclick = seleciona(7,8);

			// 68
		t81.onclick = seleciona(8,1);

			// 69
		t82.onclick = seleciona(8,2);

			// 70
		t83.onclick = seleciona(8,3);

			// 71
		t84.onclick = seleciona(8,4);

			// 72
		t85.onclick = seleciona(8,5);

			// 73
		t86.onclick = seleciona(8,6);

			// 74
		t87.onclick = seleciona(8,7);

			// 75
		t88.onclick = seleciona(8,8);

}, 1500);
