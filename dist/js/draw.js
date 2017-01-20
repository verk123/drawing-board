"use strict";function Pencil(){var e=0;canvas.onmousedown=function(t){var t=window.event||t,n=t.pageX-this.offsetLeft,o=t.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(n,o),e=1},canvas.onmousemove=function(t){t=window.event||t;var n=t.pageX-this.offsetLeft,o=t.pageY-this.offsetTop;e&&(ctx.lineTo(n,o),ctx.stroke())},canvas.onmouseup=function(){e=0},canvas.onmouseout=function(){e=0}}function Pen(){setLineWidth(0)}function Tuya(){setLineWidth(4)}function setLineWidth(e){switch(e){case 0:ctx.lineWidth=1;break;case 1:ctx.lineWidth=3;break;case 2:ctx.lineWidth=5;break;case 3:ctx.lineWidth=8;break;case 4:ctx.lineWidth=30;break;default:ctx.lineWidth=1}}function LineW1(){setLineWidth(0)}function LineW3(){setLineWidth(1)}function LineW5(){setLineWidth(2)}function LineW8(){setLineWidth(3)}function Line(){canvas.onmousedown=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(t,n)},canvas.onmousemove=null,canvas.onmouseout=null,canvas.onmouseup=function(e){var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;ctx.lineTo(t,n),ctx.closePath(),ctx.stroke()}}function Square(){canvas.onmousedown=function(e){e=e||window.event,rectX=e.pageX-this.offsetLeft,rectY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop,o=t-rectX,a=n-rectY;ctx.strokeRect(rectX,rectY,o,a)},canvas.onmousemove=null,canvas.onmouseout=null}function SquareFill(){canvas.onmousedown=function(e){e=e||window.event,rectX=e.pageX-this.offsetLeft,rectY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop,o=t-rectX,a=n-rectY;ctx.fillRect(rectX,rectY,o,a)},canvas.onmousemove=null,canvas.onmouseout=null}function Poly(e){e=e||window.event,canvas.onmousedown=function(e){e=e||window.event,polyX=e.pageX-this.offsetLeft,polyY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(t,n);var o=2*polyX-t,a=n;ctx.lineTo(o,a);var c=2*(t-polyX),i=t-polyX,l=Math.sqrt(c*c-i*i);ctx.lineTo(polyX,n-l),ctx.closePath(),ctx.stroke()},canvas.onmousemove=null,canvas.onmouseout=null}function PolyFill(e){e=e||window.event,canvas.onmousedown=function(e){e=e||window.event,polyX=e.pageX-this.offsetLeft,polyY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(t,n);var o=2*polyX-t,a=n;ctx.lineTo(o,a);var c=2*(t-polyX),i=t-polyX,l=Math.sqrt(c*c-i*i);ctx.lineTo(polyX,n-l),ctx.closePath(),ctx.fillStyle=color,ctx.fill()},canvas.onmousemove=null,canvas.onmouseout=null}function Circular(){canvas.onmousedown=function(e){e=e||window.event,arcX=e.pageX-this.offsetLeft,arcY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop,o=t-arcX,a=n-arcY,c=Math.sqrt(o*o+a*a);ctx.beginPath(),ctx.arc(arcX,arcY,c,0,360,!1),ctx.closePath(),ctx.stroke()},canvas.onmousemove=null,canvas.onmouseout=null}function CircularFill(){canvas.onmousedown=function(e){e=e||window.event,arcX=e.pageX-this.offsetLeft,arcY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop,o=t-arcX,a=n-arcY,c=Math.sqrt(o*o+a*a);ctx.beginPath(),ctx.arc(arcX,arcY,c,0,360,!1),ctx.closePath(),ctx.fillStyle=color,ctx.fill()},canvas.onmousemove=null,canvas.onmouseout=null}function Color(){$(".showColor").bigColorpicker(function(e,t){color=t,ctx.strokeStyle=color}),$("#f333").bigColorpicker("f3","L",6)}function FrontColor(){canvas.onmousedown=function(e){ctx.fillStyle=color,ctx.fillRect(0,0,1100,550)},canvas.onmouseup=null,canvas.onmouseout=null,canvas.onmousemove=null}function Straw(){canvas.onmousedown=function(e){var e=e||window.event,t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop,o=ctx.getImageData(t,n,1,1),a="rgb("+o.data[0]+","+o.data[1]+","+o.data[2]+")";ctx.strokeStyle=a,ctx.fillStyle=a,Pencil()},canvas.onmousemove=null,canvas.onmouseout=null,canvas.onmouseup=null}function Magnifier(){var e=window.prompt("请输入要放大的百分比(只接受整型)","100"),t=1090*e/100,n=550*e/100;canvas.style.widht=parseInt(t)+"px",canvas.style.height=parseInt(n)+"px"}function Font(){canvas.onmousedown=function(e){var e=e||window.event,t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop,o=window.prompt("请输入文字","");null!=o&&(ctx.fillStyle=color,ctx.fillText(o,t,n))},canvas.onmousemove=null,canvas.onmouseup=null,canvas.onmouseout=null}function Eraser(){canvas.onmousedown=function(e){var e=e||window.event,t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;ctx.clearRect(t-ctx.lineWidth,n-ctx.lineWidth,2*ctx.lineWidth,2*ctx.lineWidth),eraserFlag=1},canvas.onmousemove=function(e){var e=e||window.event,t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;eraserFlag&&(ctx.clearRect(t-ctx.lineWidth,n-ctx.lineWidth,3*ctx.lineWidth,3*ctx.lineWidth),saveImageToAry())},canvas.onmouseup=function(e){eraserFlag=0},canvas.onmouseout=function(e){eraserFlag=0}}function CancelPrev(){cancelIndex--,ctx.clearRect(0,0,canvas.width,canvas.height);var e=new Image,t=cancelList.length-1-cancelIndex,n=cancelList[t];e.src=n,e.onload=function(){ctx.drawImage(e,0,0,e.width,e.height,0,0,canvas.width,canvas.height)}}function Redo(){cancelIndex++,ctx.clearRect(0,0,canvas.width,canvas.height);var e=new Image,t=cancelList.length-1-cancelIndex,n=cancelList[t];e.src=n,e.onload=function(){ctx.drawImage(e,0,0,e.width,e.height,0,0,canvas.width,canvas.height)}}function ClearSceen(){ctx.clearRect(0,0,1100,550)}function Download(){var e=canvas.toDataURL("image/png"),t=function(e,t){var n=document.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=e,n.download=t;var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)};t(e,"canvas.png")}function Saveimg(){save()}var pencil=document.getElementById("pencil"),pen=document.getElementById("pen"),tuya=document.getElementById("tuya"),line=document.getElementById("line"),square=document.getElementById("square"),circular=document.getElementById("circular"),poly=document.getElementById("poly"),squareFill=document.getElementById("squareFill"),circularFill=document.getElementById("circularFill"),polyFill=document.getElementById("polyFill"),lineW_1=document.getElementById("lineW_1"),lineW_3=document.getElementById("lineW_3"),lineW_5=document.getElementById("lineW_5"),lineW_8=document.getElementById("lineW_8"),color=document.getElementById("color"),frontColor=document.getElementById("frontColor"),straw=document.getElementById("straw"),font=document.getElementById("font"),eraser=document.getElementById("eraser"),magnifier=document.getElementById("magnifier"),cancelPrev=document.getElementById("cancelPrev"),redo=document.getElementById("redo"),clearSceen=document.getElementById("clearSceen"),download=document.getElementById("download"),saveImg=document.getElementById("saveImg"),penType=[pencil,pen,tuya],lineType=[line,square,circular,poly,squareFill,circularFill,polyFill],colorType=[color,frontColor,straw,font,eraser,magnifier],funcType=[cancelPrev,redo,clearSceen,download,saveImg],lineWidths=[lineW_1,lineW_3,lineW_5,lineW_8],canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),rectX=0,rectY=0,polyX=0,polyY=0,arcX=0,arcY=0,eraserFlag=0,color="#000",cancelList=new Array,cancelIndex=0,color="#000000",saveImageToAry=function(){cancelIndex=0;var e=canvas.toDataURL();cancelList.push(e)};