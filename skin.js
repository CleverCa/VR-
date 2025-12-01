// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: ?????.ggsk
// Generated 2025-12-01T00:55:11

function pano2vrSkin(player,base) {
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_desc_in_maps', 2, true, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_map_1', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_1', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_floorplan_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_2', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_desc_in_maps_1', 2, true, { ignoreInState: 1  });
	player.addVariable('resp_phone_2', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_3', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_map_3', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_4', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_1 = {};
		me._variable_resp_phone_1.ggCurrentLogicState = -1;
		me._variable_resp_phone_1.logicBlock = function() {
			var newLogicState_resp_phone_1;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_1 = 0;
			}
			else {
				newLogicState_resp_phone_1 = -1;
			}
			if (me._variable_resp_phone_1.ggCurrentLogicState != newLogicState_resp_phone_1) {
				me._variable_resp_phone_1.ggCurrentLogicState = newLogicState_resp_phone_1;
				if (me._variable_resp_phone_1.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_1', true);
				}
				else {
					player.setVariableValue('resp_phone_1', false);
				}
			}
		}
		me._variable_resp_phone_2 = {};
		me._variable_resp_phone_2.ggCurrentLogicState = -1;
		me._variable_resp_phone_2.logicBlock = function() {
			var newLogicState_resp_phone_2;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_2 = 0;
			}
			else {
				newLogicState_resp_phone_2 = -1;
			}
			if (me._variable_resp_phone_2.ggCurrentLogicState != newLogicState_resp_phone_2) {
				me._variable_resp_phone_2.ggCurrentLogicState = newLogicState_resp_phone_2;
				if (me._variable_resp_phone_2.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_2', true);
				}
				else {
					player.setVariableValue('resp_phone_2', false);
				}
			}
		}
		me._variable_resp_phone_3 = {};
		me._variable_resp_phone_3.ggCurrentLogicState = -1;
		me._variable_resp_phone_3.logicBlock = function() {
			var newLogicState_resp_phone_3;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_3 = 0;
			}
			else {
				newLogicState_resp_phone_3 = -1;
			}
			if (me._variable_resp_phone_3.ggCurrentLogicState != newLogicState_resp_phone_3) {
				me._variable_resp_phone_3.ggCurrentLogicState = newLogicState_resp_phone_3;
				if (me._variable_resp_phone_3.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_3', true);
				}
				else {
					player.setVariableValue('resp_phone_3', false);
				}
			}
		}
		me._variable_resp_phone_4 = {};
		me._variable_resp_phone_4.ggCurrentLogicState = -1;
		me._variable_resp_phone_4.logicBlock = function() {
			var newLogicState_resp_phone_4;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_4 = 0;
			}
			else {
				newLogicState_resp_phone_4 = -1;
			}
			if (me._variable_resp_phone_4.ggCurrentLogicState != newLogicState_resp_phone_4) {
				me._variable_resp_phone_4.ggCurrentLogicState = newLogicState_resp_phone_4;
				if (me._variable_resp_phone_4.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_4', true);
				}
				else {
					player.setVariableValue('resp_phone_4', false);
				}
			}
		}
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((192px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_3') == true)) || 
				((player.getOS() == 6)) || 
				((player.getOS() == 5))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style.transition='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		me._controller.logicBlock_visible();
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_zoomout=document.createElement('div');
		els=me._btn_zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iMzIiIGNsYXNzPSJzdDEiIHgyPSI0OCIgeDE9IjE2IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiB5MT0iMzIiLz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._btn_zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_zoomout.onmouseenter=function (e) {
			me._btn_zoomout__img.style.visibility='hidden';
			me._btn_zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_zoomout']=true;
		}
		me._btn_zoomout.onmousedown=function (e) {
			me.elementMouseDown['btn_zoomout']=true;
		}
		me._btn_zoomout.onmouseup=function (e) {
			me.elementMouseDown['btn_zoomout']=false;
		}
		me._btn_zoomout.onmouseleave=function (e) {
			me._btn_zoomout__img.style.visibility='inherit';
			me._btn_zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_zoomout']=false;
			me.elementMouseOver['btn_zoomout']=false;
		}
		me._btn_zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_zoomout']) {
				player.changeFovLog(1,true);
			}
		}
		me._btn_zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_zoomout);
		el=me._btn_zoomin=document.createElement('div');
		els=me._btn_zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iMzIiIGNsYXNzPSJzdDEiIHgyPSI0OCIgeDE9IjE2IiB5MT0iMzIiLz4KICA8bGluZSB5Mj0iNDgiIGNsYXNzPSJzdDEiIHgyPSIzMiIgeDE9IjMyIiB5'+
			'MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiB5MT0iMzIiLz4KICA8bGluZSBzdH'+
			'lsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0OCIgeDI9IjMyIiB4MT0iMzIiIHkxPSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_zoomin.onmouseenter=function (e) {
			me._btn_zoomin__img.style.visibility='hidden';
			me._btn_zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_zoomin']=true;
		}
		me._btn_zoomin.onmousedown=function (e) {
			me.elementMouseDown['btn_zoomin']=true;
		}
		me._btn_zoomin.onmouseup=function (e) {
			me.elementMouseDown['btn_zoomin']=false;
		}
		me._btn_zoomin.onmouseleave=function (e) {
			me._btn_zoomin__img.style.visibility='inherit';
			me._btn_zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_zoomin']=false;
			me.elementMouseOver['btn_zoomin']=false;
		}
		me._btn_zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_zoomin']) {
				player.changeFovLog(-1,true);
			}
		}
		me._btn_zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_zoomin);
		el=me._btn_right=document.createElement('div');
		els=me._btn_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIzNC4xLDE4LjEgNDgsMzIgNDgsMzIgMzQuMSw0NS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjMyIiBjbGFzcz0ic3Qx'+
			'IiB4Mj0iNDYuNCIgeDE9IjE2IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzQuMDggMTguMDYgNDggMzIuMDEgNDggMzIuMDEgMzQuMDggNDUuOTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjMyIiB4Mj0iNDYuMzYiIHgxPSIxNiIgeTE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_right.onmouseenter=function (e) {
			me._btn_right__img.style.visibility='hidden';
			me._btn_right__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_right']=true;
		}
		me._btn_right.onmousedown=function (e) {
			me.elementMouseDown['btn_right']=true;
		}
		me._btn_right.onmouseup=function (e) {
			me.elementMouseDown['btn_right']=false;
		}
		me._btn_right.onmouseleave=function (e) {
			me._btn_right__img.style.visibility='inherit';
			me._btn_right__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_right']=false;
			me.elementMouseOver['btn_right']=false;
		}
		me._btn_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_right']) {
				player.changePanLog(-1,true);
			}
		}
		me._btn_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_right);
		el=me._btn_down=document.createElement('div');
		els=me._btn_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0NS45LDM0LjEgMzIsNDggMzIsNDggMTguMSwzNC4xICYj'+
			'eDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjQ2LjQiIGNsYXNzPSJzdDEiIHgyPSIzMiIgeDE9IjMyIiB5MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTQgMzQuMDggMzEuOTkgNDggMzEuOTkgNDggMTguMDYgMzQuMDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMD'+
			'AwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQ2LjM2IiB4Mj0iMzIiIHgxPSIzMiIgeTE9IjE2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_down.onmouseenter=function (e) {
			me._btn_down__img.style.visibility='hidden';
			me._btn_down__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_down']=true;
		}
		me._btn_down.onmousedown=function (e) {
			me.elementMouseDown['btn_down']=true;
		}
		me._btn_down.onmouseup=function (e) {
			me.elementMouseDown['btn_down']=false;
		}
		me._btn_down.onmouseleave=function (e) {
			me._btn_down__img.style.visibility='inherit';
			me._btn_down__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_down']=false;
			me.elementMouseOver['btn_down']=false;
		}
		me._btn_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_down']) {
				player.changeTiltLog(-1,true);
			}
		}
		me._btn_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_down);
		el=me._btn_up=document.createElement('div');
		els=me._btn_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjE3LjYiIGNsYXNzPSJz'+
			'dDEiIHgyPSIzMiIgeDE9IjMyIiB5MT0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDYgMjkuOTMgMzIuMDEgMTYgMzIuMDEgMTYgNDUuOTQgMjkuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjE3LjY0IiB4Mj0iMzIiIHgxPSIzMiIgeTE9IjQ4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_up.onmouseenter=function (e) {
			me._btn_up__img.style.visibility='hidden';
			me._btn_up__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_up']=true;
		}
		me._btn_up.onmousedown=function (e) {
			me.elementMouseDown['btn_up']=true;
		}
		me._btn_up.onmouseup=function (e) {
			me.elementMouseDown['btn_up']=false;
		}
		me._btn_up.onmouseleave=function (e) {
			me._btn_up__img.style.visibility='inherit';
			me._btn_up__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_up']=false;
			me.elementMouseOver['btn_up']=false;
		}
		me._btn_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_up']) {
				player.changeTiltLog(1,true);
			}
		}
		me._btn_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_up);
		el=me._btn_left=document.createElement('div');
		els=me._btn_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIyOS45LDQ1LjkgMTYsMzIgMTYsMzIgMjkuOSwxOC4xICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjMyIiBjbGFzcz0ic3Qx'+
			'IiB4Mj0iMTcuNiIgeDE9IjQ4IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjkuOTMgNDUuOTQgMTYgMzEuOTkgMTYgMzEuOTkgMjkuOTMgMTguMDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjMyIiB4Mj0iMTcuNjQiIHgxPSI0OCIgeTE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_left.onmouseenter=function (e) {
			me._btn_left__img.style.visibility='hidden';
			me._btn_left__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_left']=true;
		}
		me._btn_left.onmousedown=function (e) {
			me.elementMouseDown['btn_left']=true;
		}
		me._btn_left.onmouseup=function (e) {
			me.elementMouseDown['btn_left']=false;
		}
		me._btn_left.onmouseleave=function (e) {
			me._btn_left__img.style.visibility='inherit';
			me._btn_left__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_left']=false;
			me.elementMouseOver['btn_left']=false;
		}
		me._btn_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_left']) {
				player.changePanLog(1,true);
			}
		}
		me._btn_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_left);
		me.divSkin.appendChild(me._controller);
		me._controller.logicBlock_visible();
		me.elementMouseOver['btn_zoomout']=false;
		me.elementMouseOver['btn_zoomin']=false;
		me.elementMouseOver['btn_right']=false;
		me.elementMouseOver['btn_down']=false;
		me.elementMouseOver['btn_up']=false;
		me.elementMouseOver['btn_left']=false;
		player.addListener('changenode', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_1.logicBlock();
			me._variable_resp_phone_2.logicBlock();
			me._variable_resp_phone_3.logicBlock();
			me._variable_resp_phone_4.logicBlock();
		});
		player.addListener('varchanged_resp_phone_3', function(event) {
			me._controller.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._btn_zoomout.ggUpdateConditionTimer();
		me._btn_zoomin.ggUpdateConditionTimer();
		me._btn_right.ggUpdateConditionTimer();
		me._btn_down.ggUpdateConditionTimer();
		me._btn_up.ggUpdateConditionTimer();
		me._btn_left.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};