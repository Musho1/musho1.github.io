$(document).ready(function()
{
	let x=document.querySelectorAll("td")
	let b=false
	let count=0
	let xax1
	let xax2
	let hashivx=0
	let hashivo=0
	let popoxel=false
	let color1="#00ff43"
	let color2="#ff5500"
	let color3="#2f4e47"
	let yntrel=""
	let languake
	let k=true
	let Count=0
	$("#xhashiv").css({
		color:color1
	})
	$("#ohashiv").css({
		color:color2
	})
	$("#change").click(function()
	{
		languake=$("#languake").val()
		color1=$("#guyn1").val()
		color2=$("#guyn2").val()
		color3=$("#guyn3").val()
		yntrel=$("#yntrel").val()
		count=0
		Count=0
		popoxel=true
		if(popoxel){
			hashivo=0
			hashivx=0
			$("#xhashiv").html(hashivx)
			$("#ohashiv").html(hashivo)

			popoxel=false
		}
		$("td").html("")
		$("td").css({
			"background-color":"white",

		})
		if(languake=="հայերեն")
		{
			$("#userx").html("X-խաղացող")
			$("#usery").html("Օ-խաղացող")
			$("#colorx").html("X-ի գույնը")
			$("#colory").html("O-ի գույնը")
			$("#colorfon").html("ֆոն-ի գույնը")
			$("#o1").html("երկուսով")
			$("#o2").html("միայնակ")
			$("#change").html("Փոփոխել")
		}
		else if(languake=="English"){
			$("#userx").html("UserX")
			$("#usery").html("UserO")
			$("#colorx").html("Color of X")
			$("#colory").html("Color of O")
			$("#colorfon").html("Background color")
			$("#o1").html("with two")
			$("#o2").html("alone")
			$("#change").html("Change")
		}
		if(yntrel=="միայնակ"||yntrel=="alone"){
			$("#xaxacox2").val("Computer")
			$("#xaxacox2").css({
				"pointer-events": "none",
				"background-color": "#dddddd"
			})
		}
		else {
			$("#xaxacox2").val("")
			$("#xaxacox2").css({
				"pointer-events": "painted",
				"background-color": "white"
			})
		}
		$("#fon").css({
			"background-color":color3
		})
		$("#xhashiv").css({
			color:color1
		})
		$("#ohashiv").css({
			color:color2
		})
		
		for(let i=0;i<9;i++){
			if($(x[i]).html()=="X"){
				$(x[i]).css({
					"background-color":color1,
				})
			}
			else if($(x[i]).html()=="O"){
				$(x[i]).css({
					"background-color":color2,
				})
			}
		}
		
		if(color3=="#ffffff"){
			$(".by").css({
				color:"#22C4D6"
			})
			$("label").css({
				color:"#22C4D6"
			})
			$("input").css({
				border:"1px solid #22c4d6"
			})
			$("i").css({
				color:"#22C4D6"
			})
			$("#usery").css({
				color:"#22C4D6"
			})
		}
		else 
		{
			$("#usery").css({
				color:"white"
			})
			$("label").css({
				color:"white"
			})
			$("i").css({
				color:"white"
			})
			$(".by").css({
				color:"white"
			})
			$("input").css({
				border:"none"
			})
			$("#xaxacox2").css({
				border:"none"
			})
		}
	})
	$("td").click(function(){
		if($(this).html()=="")
		{
			xax1=$("#xaxacox1").val()
			xax2=$("#xaxacox2").val()
			if(xax2==""){
				xax2="O"	
			}
			if(xax1==""){
				xax1="X"
			}
			xax1=xax1.split('')
			xax1[0]=xax1[0].toUpperCase()
			xax1=xax1.join('')

			xax2=xax2.split('')
			xax2[0]=xax2[0].toUpperCase()
			xax2=xax2.join('')
			$("#xaxacox1").val(xax1)
			$("#xaxacox2").val(xax2)
			if($("#xaxacox1").val()=="X")
			{
				$("#xaxacox1").val("")
			}
			if($("#xaxacox2").val()=="O")
			{
				$("#xaxacox2").val("")
			}

			if(xax2=="Artush")
			{
				xax2="Tyush"
			}
			if(xax1=="Artush")
			{
				xax1="Tyush"
			}
			if(xax2=="Artyom")
			{
				xax2="Tyom"
			}
			if(xax1=="Artyom")
			{
				xax1="Tyom"
			}
			if(count>=3){
				b=true
			}
			if(count%2==0)
			{
				$(this).html("X")
				$(this).css({
					"background-color":color1,
					color:"white"
				})
			}
			else
			{
				$(this).html("O")
				$(this).css({
					"background-color":color2,
					color:"white"
				})
			}
			if(yntrel=="միայնակ"||yntrel=="alone"){
				xax2="Computer"
				count+=2
				if($(this).html()=="X"){

					Count++
					k=true
					if(($(x[0]).html()==$(x[1]).html()) && ($(x[1]).html()==$(x[2]).html()) &&$(x[1]).html()!="" && $(x[0]).html() && $(x[2]).html()!=""){
						k=false				 
					}
					else if(($(x[0]).html()==$(x[3]).html()) && ($(x[3]).html()==$(x[6]).html()) &&$(x[3]).html()!="" && $(x[0]).html() && $(x[6]).html()!=""){
						k=false
					}
					else if(($(x[3]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[5]).html()) &&$(x[3]).html()!="" && $(x[4]).html() && $(x[5]).html()!=""){
						k=false
					}
					else if(($(x[6]).html()==$(x[7]).html()) && ($(x[7]).html()==$(x[8]).html()) &&$(x[7]).html()!="" && $(x[6]).html() && $(x[8]).html()!=""){
						k=false
					}			else if(($(x[8]).html()==$(x[5]).html()) && ($(x[5]).html()==$(x[2]).html()) &&$(x[8]).html()!="" && $(x[5]).html() && $(x[2]).html()!=""){
						k=false
					}
					else if(($(x[0]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[8]).html()) &&$(x[8]).html()!="" && $(x[0]).html() && $(x[4]).html()!=""){
						k=false
					}
					else if(($(x[2]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[6]).html()) &&$(x[2]).html()!="" && $(x[4]).html() && $(x[6]).html()!=""){
						k=false
					}
					else if(($(x[1]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[7]).html()) &&$(x[1]).html()!="" && $(x[4]).html() && $(x[7]).html()!=""){

						k=false
					}

					if(Count>=5)	
					{
						k=false
					}

					$(this).css({
						"background-color":color1
					})
					$(this).html("X")
					let ran=parseInt(Math.random()*9)
						if(($(x[0]).html()=="X"&& $(x[1]).html())=="X"&& $(x[2]).html()==""){
							ran=2
						}
						else if(($(x[0]).html()=="X"&& $(x[2]).html())=="X"&& $(x[1]).html()==""){
							ran=1
						}
						else if(($(x[1]).html()=="X"&& $(x[2]).html())=="X"&& $(x[0]).html()==""){
							ran=1
						}


						else if(($(x[3]).html()=="X"&& $(x[4]).html())=="X"&& $(x[5]).html()==""){
							ran=5
						}
						else if(($(x[3]).html()=="X"&& $(x[5]).html())=="X"&& $(x[4]).html()==""){
							ran=4
						}
						else if(($(x[4]).html()=="X"&& $(x[5]).html())=="X"&& $(x[3]).html()==""){
							ran=3
						}



						else if(($(x[6]).html()=="X"&& $(x[7]).html())=="X"&& $(x[8]).html()==""){
							ran=8
						}
						else if(($(x[6]).html()=="X"&& $(x[8]).html())=="X"&& $(x[7]).html()==""){
							ran=7
						}
						else if(($(x[7]).html()=="X"&& $(x[8]).html())=="X"&& $(x[6]).html()==""){
							ran=6
						}



						else if(($(x[0]).html()=="X"&& $(x[3]).html())=="X"&& $(x[6]).html()==""){
							ran=6
						}
						else if(($(x[0]).html()=="X"&& $(x[6]).html())=="X"&& $(x[3]).html()==""){
							ran=3
						}
						else if(($(x[3]).html()=="X"&& $(x[6]).html())=="X"&& $(x[0]).html()==""){
							ran=0
						}



						else if(($(x[1]).html()=="X"&& $(x[4]).html())=="X"&& $(x[7]).html()==""){
							ran=7
						}
						else if(($(x[1]).html()=="X"&& $(x[7]).html())=="X"&& $(x[4]).html()==""){
							ran=4
						}
						else if(($(x[4]).html()=="X"&& $(x[7]).html())=="X"&& $(x[1]).html()==""){
							ran=1
						}




						else if(($(x[2]).html()=="X"&& $(x[5]).html())=="X"&& $(x[8]).html()==""){
							ran=8
						}
						else if(($(x[2]).html()=="X"&& $(x[8]).html())=="X"&& $(x[5]).html()==""){
							ran=5
						}
						else if(($(x[5]).html()=="X"&& $(x[8]).html())=="X"&& $(x[2]).html()==""){
							ran=2
						}


						else if(($(x[0]).html()=="X"&& $(x[4]).html())=="X"&& $(x[8]).html()==""){
							ran=8
						}
						else if(($(x[0]).html()=="X"&& $(x[8]).html())=="X"&& $(x[4]).html()==""){
							ran=4
						}
						else if(($(x[4]).html()=="X"&& $(x[8]).html())=="X"&& $(x[0]).html()==""){
							ran=0
						}



						else if(($(x[2]).html()=="X"&& $(x[4]).html())=="X"&& $(x[6]).html()==""){
							ran=6
						}
						else if(($(x[2]).html()=="X"&& $(x[6]).html())=="X"&& $(x[4]).html()==""){
							ran=4
						}
						else if(($(x[4]).html()=="X"&& $(x[6]).html())=="X"&& $(x[2]).html()==""){
							ran=2
						}

					if($(x[ran]).html()=="")
					{
						k=false
						$(x[ran]).html("O")
						$(x[ran]).css({
							"background-color":color2,
							color:"white"
						})

					}	
					else{	
						while(k){
							ran=parseInt(Math.random()*9)
							if($(x[ran]).html()=="")
							{
								$(x[ran]).html("O")
								$(x[ran]).css({
									"background-color":color2,
									color:"white"
								})
								k=false
							}	
						}
					
					}
				}

			}
			else{
				count++
			}
			if(b){
				let haxtox
				if(($(x[0]).html()==$(x[1]).html()) && ($(x[1]).html()==$(x[2]).html()) &&$(x[1]).html()!="" && $(x[0]).html() && $(x[2]).html()!=""){				 
					count=0
					if($(x[0]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				}
				else if(($(x[0]).html()==$(x[3]).html()) && ($(x[3]).html()==$(x[6]).html()) &&$(x[3]).html()!="" && $(x[0]).html() && $(x[6]).html()!=""){
					
					count=0
					if($(x[0]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",	
						})
					},100)
				}
				else if(($(x[3]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[5]).html()) &&$(x[3]).html()!="" && $(x[4]).html() && $(x[5]).html()!=""){
					
					count=0
					if($(x[3]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",	
						})
					},100)
				}
				else if(($(x[6]).html()==$(x[7]).html()) && ($(x[7]).html()==$(x[8]).html()) &&$(x[7]).html()!="" && $(x[6]).html() && $(x[8]).html()!=""){

					count=0
					if($(x[6]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				} 
				else if(($(x[8]).html()==$(x[5]).html()) && ($(x[5]).html()==$(x[2]).html()) &&$(x[8]).html()!="" && $(x[5]).html() && $(x[2]).html()!=""){

					count=0
					if($(x[8]).html()=="O"){
						haxtox=xax2
					}
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				} 
				else if(($(x[0]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[8]).html()) &&$(x[8]).html()!="" && $(x[0]).html() && $(x[4]).html()!=""){

					count=0
					if($(x[0]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				}
				else if(($(x[2]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[6]).html()) &&$(x[2]).html()!="" && $(x[4]).html() && $(x[6]).html()!=""){

					count=0
					if($(x[2]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				} 	 
				else if(($(x[1]).html()==$(x[4]).html()) && ($(x[4]).html()==$(x[7]).html()) &&$(x[1]).html()!="" && $(x[4]).html() && $(x[7]).html()!=""){

					count=0
					if($(x[1]).html()=="O")
						haxtox=xax2
					else
						haxtox=xax1
					setTimeout (function(){
						alert("Shnorhavor  "+haxtox)
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				} 
				else if(count==9||count==10)
				{
					count=0
					Count=0
					setTimeout (function(){
						alert("No one")
						$("td").html("")
						$("td").css({
							"background-color":"white",

						})
					},100)
				}

				if(haxtox==xax1){
					Count=0

					hashivx++
					$("#xhashiv").html(hashivx)

				}
				if(haxtox==xax2){
					hashivo++
					Count=0

					$("#ohashiv").html(hashivo)

				}
			}
		}
	})

})