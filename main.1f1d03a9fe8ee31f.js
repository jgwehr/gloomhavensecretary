"use strict";(self.webpackChunkgloomhavensecretary=self.webpackChunkgloomhavensecretary||[]).push([[179],{3640:(yt,it,w)=>{w.d(it,{v:()=>q});var t=w(641),R=w(2713);class J{constructor(h,M,O){this.name=h,this.abilities=M,this.edition=O}}var $=w(1599),H=w(1412),rt=w(83),x=w(1502),E=w(9239),F=w(7342),k=w(8386),N=w(62),V=w(1723);class gt{constructor(h){this.game=h}addModifier(h,M,O=-1){(O<0||O>h.cards.length)&&(O=Math.floor(Math.random()*(h.cards.length-h.current))+h.current+1),h.cards.splice(O,0,M)}drawModifier(h){h.current=h.current+1,h.current==h.cards.length&&this.shuffleModifiers(h)}shuffleModifiers(h){h.cards=h.cards.filter((M,O)=>O>h.current||M.type!=N.kl.bless&&M.type!=N.kl.curse),h.current=-1,h.cards=h.cards.map(M=>({value:M,sort:Math.random()})).sort((M,O)=>M.sort-O.sort).map(({value:M})=>M)}removeDrawnDiscards(h){const M=h.cards.length;h.cards=h.cards.filter((O,S)=>S>h.current||O.type!=N.kl.bless&&O.type!=N.kl.curse),h.current=h.current-(M-h.cards.length)}next(){this.checkShuffle(this.game.monsterAttackModifierDeck),this.game.figures.forEach(h=>{h instanceof t.z&&this.checkShuffle(h.attackModifierDeck)})}draw(){this.shuffleModifiers(this.game.monsterAttackModifierDeck),this.game.figures.forEach(h=>{h instanceof t.z&&this.shuffleModifiers(h.attackModifierDeck)})}checkShuffle(h){h.cards.some((M,O)=>O<=h.current&&M.shuffle)&&this.shuffleModifiers(h)}buildCharacterAttackModifierDeck(h){const M=new N.ut;let O=0;return h.perks.forEach(S=>{S.cards&&S.cards.forEach((tt,Mt)=>{if(S.type==V.Ib.add||S.type==V.Ib.replace){let bt=Object.assign(new N.YY(tt.attackModifier.type),tt.attackModifier);bt.id="perk"+O,(!this.findByAttackModifier(N.UO,bt)||S.type==V.Ib.add||Mt>0)&&(bt.character=!0),this.findByAttackModifier(M.attackModifiers,bt)||(O++,M.attackModifiers.push(bt))}})}),h.progress&&h.progress.perks&&h.progress.perks.forEach((S,tt)=>{for(let Mt=0;Mt<S;Mt++){const bt=h.perks[tt];bt.cards=bt.cards||[],bt.cards.forEach((St,ti)=>{(!this.findByAttackModifier(N.UO,St.attackModifier)||bt.type==V.Ib.add||bt.type==V.Ib.replace&&ti>0)&&(St.attackModifier.character=!0)}),bt.type==V.Ib.add?this.addCards(M,bt.cards):bt.type==V.Ib.remove?this.removeCards(M,bt.cards):bt.type==V.Ib.replace&&(this.removeCards(M,[bt.cards[0]]),this.addCards(M,bt.cards.slice(1,bt.cards.length)))}}),M}findByAttackModifier(h,M){return h.find(O=>{let S=Object.assign(new N.YY(M.type),M);S.id="",S.revealed=!1;let tt=Object.assign(new N.YY(O.type),O);return tt.id="",tt.revealed=!1,JSON.stringify(S)==JSON.stringify(tt)})}addCards(h,M){M.forEach(O=>{for(let S=0;S<O.count;S++){const tt=this.findByAttackModifier(h.attackModifiers,O.attackModifier);if(tt){let Mt=Object.assign(new N.YY(tt.type),tt);h.cards.push(Mt)}else console.warn("Did not found AM to add: ",O.attackModifier,h)}})}removeCards(h,M){M.forEach(O=>{for(let S=0;S<O.count;S++){const tt=this.findByAttackModifier(h.cards,O.attackModifier);if(tt){const Mt=h.cards.indexOf(tt);h.cards.splice(Mt,1)}else console.warn("Did not found AM to replace: ",O.attackModifier,h)}})}}var B=w(6998),X=w(8557),Q=w(2944),at=w(2679),st=w(554);class mt{constructor(h){this.xpMap=[0,45,95,150,210,275,345,420,500],this.game=h}characterIcon(h){return h.iconUrl?h.iconUrl:"./assets/images/character/icons/"+h.edition+"-"+h.name+".svg"}characterThumbnail(h){return h.thumbnailUrl?h.thumbnailUrl:"./assets/images/character/thumbnail/"+h.edition+"-"+h.name+".png"}addCharacter(h,M){if(!this.game.figures.some(O=>O instanceof t.z&&O.name==h.name&&O.edition==h.edition)){let O=new t.z(h,M);for(O.availableSummons.filter(S=>S.special).forEach(S=>this.createSpecialSummon(O,S)),O.number=1;q.game.figures.some(S=>S instanceof t.z&&S.number==O.number);)O.number++;this.game.figures.push(O),this.game.state==rt.D2.next&&q.attackModifierManager.shuffleModifiers(O.attackModifierDeck),q.sortFigures()}this.game.levelCalculation&&q.levelManager.calculateScenarioLevel()}removeCharacter(h){if(this.game.figures.splice(this.game.figures.indexOf(h),1),h.marker){const M=h.edition+"-"+h.name;this.game.figures.forEach(O=>{O instanceof t.z?(O.markers.splice(O.markers.indexOf(M),1),O.summons&&O.summons.forEach(S=>{S.markers.splice(S.markers.indexOf(M),1)})):O instanceof k.C?O.markers.splice(O.markers.indexOf(M),1):O instanceof x.Q&&O.entities.forEach(S=>{S.markers.splice(S.markers.indexOf(M),1)})})}this.game.levelCalculation&&q.levelManager.calculateScenarioLevel()}addSummon(h,M){h.summons=h.summons.filter(O=>O.name!=M.name||O.number!=M.number||O.color!=M.color),h.summons.push(M)}removeSummon(h,M){h.summons.splice(h.summons.indexOf(M),1)}addObjective(h){let M=0;for(;this.game.figures.some(S=>S instanceof k.C&&S.id==M);)M++;let O=new k.C(M);h&&(O.name=h.name,O.maxHealth=h.health,O.health=(0,Q.j9)(""+h.health),O.escort=h.escort,h.initiative&&(O.initiative=h.initiative)),this.game.figures.push(O),q.sortFigures()}removeObjective(h){this.game.sections.some(M=>M.objectives&&M.objectives.length>0)&&(this.game.sections=[]),this.game.figures.splice(this.game.figures.indexOf(h),1)}next(){this.game.figures.forEach(h=>{h instanceof t.z?(h.initiative=0,h.initiativeVisible=!1,h.off=!1,h.summons=h.summons.filter(M=>!M.dead&&M.health>0),st.r.settings.expireConditions&&(h.entityConditions=h.entityConditions.filter(M=>!M.expired),h.summons.forEach(M=>{M.entityConditions=M.entityConditions.filter(O=>!O.expired)})),st.r.settings.applyConditions&&(h.entityConditions.filter(M=>-1!=M.types.indexOf(X.CP.turn)).forEach(M=>M.state=X.tT.normal),h.summons.forEach(M=>{M.entityConditions.filter(O=>-1!=O.types.indexOf(X.CP.turn)).forEach(O=>O.state=X.tT.normal)}))):h instanceof k.C&&(h.off=!1,st.r.settings.expireConditions&&(h.entityConditions=h.entityConditions.filter(M=>!M.expired)),st.r.settings.applyConditions&&h.entityConditions.filter(M=>-1!=M.types.indexOf(X.CP.turn)).forEach(M=>M.state=X.tT.normal))})}addXP(h,M){h.progress.experience+=M,this.xpMap.forEach((O,S)=>{h.progress.experience>=O&&(S<this.xpMap.length-1&&h.progress.experience<this.xpMap[S+1]||S==this.xpMap.length-1)&&this.setLevel(h,S+1)})}setLevel(h,M){const O=h.stats.find(S=>S.level==M);O?h.stat=O:(h.errors=h.errors||[],!h.errors.find(S=>S.type==H.r.unknown)&&!h.errors.find(S=>S.type==H.r.stat)&&(console.error("No character stat found for level: "+M),h.errors.push(new H.o(H.r.stat,"character",h.name,h.edition,"",""+M))),h.stat=new B.a(M,0)),h.level=M,h.health==h.maxHealth&&(h.health=h.stat.health),h.maxHealth=h.stat.health,h.health>h.maxHealth&&(h.health=h.maxHealth),h.availableSummons.filter(S=>S.special).forEach(S=>this.createSpecialSummon(h,S)),(h.progress.experience<q.characterManager.xpMap[M-1]||h.progress.experience>=q.characterManager.xpMap[M])&&(h.progress.experience=q.characterManager.xpMap[M-1]),this.game.levelCalculation&&q.levelManager.calculateScenarioLevel()}createSpecialSummon(h,M){if(h.summons=h.summons.filter(O=>O.name!=M.name||0!=O.number||O.color!=at.mp.custom),!M.level||M.level<=h.level){let O=new at.eU(M.name,h.level,0,at.mp.custom);O.maxHealth="number"==typeof M.health?M.health:(0,Q.j9)(M.health,h.level),O.attack="number"==typeof M.attack?M.attack:(0,Q.j9)(M.attack,h.level),O.movement="number"==typeof M.movement?M.movement:(0,Q.j9)(M.movement,h.level),O.range="number"==typeof M.range?M.range:(0,Q.j9)(M.range,h.level),O.health=O.maxHealth,O.state=at.HY.true,O.init=!1,this.addSummon(h,O)}}applyDonations(h){for(let M=0;M<h.donations;M++)q.attackModifierManager.addModifier(h.attackModifierDeck,new N.YY(N.kl.bless)),q.attackModifierManager.addModifier(h.attackModifierDeck,new N.YY(N.kl.bless));h.donations=0}draw(){this.game.figures.forEach(h=>{h instanceof t.z&&(h.initiativeVisible=!0,this.applyDonations(h)),(h instanceof t.z||h instanceof k.C)&&!h.exhausted&&h.health>0&&(h.off=!1)})}}var Gt=w(982),ct=w(7918),ot=w(3951);class Tt{constructor(h){this.game=h}monsterThumbnail(h){return h.thumbnailUrl?h.thumbnailUrl:(h.thumbnail||(h.thumbnail=h.edition+"-"+h.name),"./assets/images/monster/thumbnail/"+h.thumbnail+".png")}getStat(h,M){return h.stats.find(S=>S.level==h.level&&S.type==M)||(h.errors=h.errors||[],!h.errors.find(S=>S.type==H.r.unknown)&&!h.errors.find(S=>S.type==H.r.stat)&&(console.error("Could not find '"+M+"' stats for monster: "+h.name+" level: "+h.level),h.errors.push(new H.o(H.r.stat,"monster",h.name,h.edition,M,""+h.level))),new E.c(M,h.level,0,0,0,0))}addMonster(h){this.game.scenario||q.scenarioManager.setScenario(new ct.$(new ot.t("","",[],[],[],[],[],[],[],""),!0));let M=this.game.figures.find(O=>O instanceof $.A&&O.name==h.name&&O.edition==h.edition);if(!M){if(M=new x.Q(h),M.level=q.game.level,M.off=!0,!this.applySameDeck(M)){if(!M.abilities||0==M.abilities.length){const O=q.abilities(M);M.abilities=O.filter(S=>isNaN(+S.level)||+S.level<=(M&&M.level||0)).map(S=>O.indexOf(S))}this.shuffleAbilities(M)}this.game.figures.push(M),q.game.state==rt.D2.next&&q.sortFigures()}return M}removeMonster(h){h.entities=[],this.game.figures.splice(this.game.figures.indexOf(h),1),h.drawExtra||this.game.figures.forEach(M=>{M instanceof x.Q&&M.drawExtra&&(M.name!=h.name||M.edition!=h.edition)&&q.deckData(M).name==q.deckData(h).name&&q.deckData(M).edition==q.deckData(h).edition&&(this.getSameDeckMonster(M)||(M.drawExtra=!1))})}addMonsterEntity(h,M,O,S=!1){if(!h.stats.some(Mt=>Mt.type==O))return h.errors=h.errors||[],void(!h.errors.find(Mt=>Mt.type==H.r.unknown)&&!h.errors.find(Mt=>Mt.type==H.r.monsterType)&&(console.error("Missing type '"+O+"' for "+h.name),h.errors.push(new H.o(H.r.monsterType,"monster",h.name,h.edition,O))));let tt=new Gt.g(M,O,h);S&&(tt.summon=at.HY.new),h.entities.push(tt),this.game.state==rt.D2.next&&-1==h.ability&&(this.applySameDeck(h)?-1==h.ability&&(h.ability=0):h.ability=0),this.game.state==rt.D2.next&&1==h.entities.filter(Mt=>!Mt.dead&&Mt.health>0).length&&q.sortFigures(),h.off&&(h.off=!1,this.game.state==rt.D2.next&&(h.active=!q.game.figures.some(Mt=>Mt.active))),this.game.state==rt.D2.next&&(tt.active=tt.active||q.game.figures.some(Mt=>Mt.active&&Mt.getInitiative()>h.getInitiative()),tt.off=!1)}removeMonsterEntity(h,M){h.entities.splice(h.entities.indexOf(M),1),(0==h.entities.length||h.entities.every(O=>O.dead||O.health<=0))&&(h.off||q.game.state!=rt.D2.next?h.off=!0:(q.roundManager.toggleFigure(h),h.active=!1))}toggleActive(h,M){this.game.state==rt.D2.next&&(h.active?(M.active=!M.active,h.entities.every(O=>O.dead||O.health<=0||!O.active)&&q.roundManager.toggleFigure(h)):M.active?(M.active=!1,h.entities.every(O=>O.dead||O.health<=0||!O.active)&&(h.off=!0)):(h.off=!1,M.active=!0),M.active?(M.off=!1,!h.active&&this.game.figures.every(O=>!O.active)&&(h.active=!0)):M.off=!0)}getSameDeckMonster(h){return this.game.figures.find(M=>M instanceof x.Q&&(M.name!=h.name||M.edition!=h.edition)&&q.deckData(M).name==q.deckData(h).name&&q.deckData(M).edition==q.deckData(h).edition&&!M.drawExtra)}applySameDeck(h){const M=this.getSameDeckMonster(h);return!!M&&(h.abilities=JSON.parse(JSON.stringify(M.abilities)),h.ability=M.ability,h.drawExtra&&this.drawExtra(h),!0)}drawExtra(h){if(h.drawExtra){h.ability=-1;const M=this.getSameDeckMonster(h);if(!M)return console.error("Draw extra for '"+h.name+"' ("+h.deck+" not possible, not same deck monster found!"),void(h.drawExtra=!1);h.ability=M.ability+1+this.game.figures.filter(O=>O instanceof x.Q&&(O.name!=h.name||O.edition!=h.edition)&&q.deckData(O).name==q.deckData(h).name&&q.deckData(O).edition==q.deckData(h).edition&&O.drawExtra&&O.ability>M.ability).length,h.ability>=h.abilities.length&&this.shuffleAbilities(h)}else this.applySameDeck(h)}next(){this.game.figures.forEach(h=>{if(h instanceof x.Q){const M=this.getAbility(h);M&&(M.shuffle||h.ability>=h.abilities.length)&&this.shuffleAbilities(h),st.r.settings.expireConditions&&h.entities.forEach(O=>{O.entityConditions=O.entityConditions.filter(S=>!S.expired)}),st.r.settings.applyConditions&&h.entities.forEach(O=>{O.entityConditions.filter(S=>-1!=S.types.indexOf(X.CP.turn)).forEach(S=>S.state=X.tT.normal)}),h.entities=h.entities.filter(O=>!O.dead&&O.health>0),h.off=0==h.entities.length}})}draw(){this.game.figures.filter(h=>h instanceof x.Q&&!h.drawExtra).forEach(h=>{h instanceof x.Q&&h.entities.length>0&&h.entities.some(M=>!M.dead&&M.health>0)&&(h.ability=h.ability+1+this.game.figures.filter(M=>M instanceof x.Q&&(M.name!=h.name||M.edition!=h.edition)&&q.deckData(M).name==q.deckData(h).name&&q.deckData(M).edition==q.deckData(h).edition&&M.drawExtra&&M.ability>-1).length,h.ability>=h.abilities.length&&this.shuffleAbilities(h))}),this.game.figures.filter(h=>h instanceof x.Q&&h.drawExtra).forEach(h=>{h instanceof x.Q&&(this.drawExtra(h),h.ability>=h.abilities.length&&this.shuffleAbilities(h))})}shuffleAbilities(h){if(h.ability=q.game.state==rt.D2.draw||0==h.entities.length?-1:0,h.drawExtra){const M=this.getSameDeckMonster(h);return M?void this.shuffleAbilities(M):(console.error("Shuffle for '"+h.name+"' ("+h.deck+" not possible, not same deck monster found!"),h.drawExtra=!1,void this.shuffleAbilities(h))}h.abilities=h.abilities.map(M=>({value:M,sort:Math.random()})).sort((M,O)=>M.sort-O.sort).map(({value:M})=>M),this.game.figures.filter(M=>M instanceof x.Q&&this.getSameDeckMonster(M)&&this.getSameDeckMonster(M)==h).map(M=>M).forEach(M=>{M.abilities=JSON.parse(JSON.stringify(h.abilities)),q.game.state==rt.D2.draw?M.ability=-1:(M.ability=h.ability,M.drawExtra&&this.drawExtra(M))})}drawAbility(h){if(h.drawExtra){const M=this.getSameDeckMonster(h);return M?void this.drawAbility(M):(console.error("Draw for '"+h.name+"' ("+h.deck+" not possible, not same deck monster found!"),h.drawExtra=!1,void this.drawAbility(h))}h.ability+=1,this.game.figures.forEach(M=>{M instanceof x.Q&&this.getSameDeckMonster(M)&&(M.ability=h.ability,M.drawExtra&&this.drawExtra(M))})}getAbility(h){if(h.ability<0||h.ability>=h.abilities.length)return;const M=q.abilities(h);return M?M[h.abilities[h.ability]]:void 0}}class ee{constructor(h){this.undos=[],this.redos=[],this.undoInfos=[],this.game=h,this.lastSaveTimestamp=(new Date).getTime()}init(){const h=localStorage.getItem("ghs-game");if(null!=h){const O=Object.assign(new rt.i4,JSON.parse(h));this.game.fromModel(O),q.uiChange.emit()}else localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel()));if(st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword&&st.r.settings.serverAutoconnect&&this.connect(),st.r.settings.browserNavigation){const O=+(localStorage.getItem("ghs-popstate")&&"number"==typeof localStorage.getItem("ghs-popstate")&&localStorage.getItem("ghs-popstate")||"0");localStorage.setItem("ghs-popstate",""+O),history.replaceState(O,"")}window.addEventListener("popstate",O=>{if(st.r.settings.browserNavigation){const S=+(localStorage.getItem("ghs-popstate")||"0");localStorage.setItem("ghs-popstate",O.state),S<O.state?this.redo():S>O.state&&this.undo()}}),this.loadLocalStorage();const M=this.undos.length+this.redos.length-this.undoInfos.length;for(let O=0;O<M;O++)this.undoInfos.unshift([])}loadLocalStorage(){this.undos=[];const h=localStorage.getItem("ghs-undo");if(null!=h){this.undos=JSON.parse(h);let S=1,tt=localStorage.getItem("ghs-undo-"+S);for(;tt;){const Mt=JSON.parse(tt);this.undos.push(...Mt),S++,tt=localStorage.getItem("ghs-undo-"+S)}}this.redos=[];const M=localStorage.getItem("ghs-redo");if(null!=M){this.redos=JSON.parse(M);let S=1,tt=localStorage.getItem("ghs-redo-"+S);for(;tt;){const Mt=JSON.parse(tt);this.redos.push(...Mt),S++,tt=localStorage.getItem("ghs-redo-"+S)}}this.undoInfos=[];const O=localStorage.getItem("ghs-undo-infos");if(null!=O){this.undoInfos=JSON.parse(O);let S=1,tt=localStorage.getItem("ghs-undo-infos-"+S);for(;tt;){const Mt=JSON.parse(tt);this.undoInfos.push(...Mt),S++,tt=localStorage.getItem("ghs-undo-infos-"+S)}}}saveLocalStorage(){this.clearLocalStorage();let h=250;if(this.undos.length<h)localStorage.setItem("ghs-undo",JSON.stringify(this.undos));else{let M=1;for(localStorage.setItem("ghs-undo",JSON.stringify(this.undos.slice(0,h)));this.undos.length>M*h;)localStorage.setItem("ghs-undo-"+M,JSON.stringify(this.undos.slice(M*h,M*h+h))),M++}if(this.redos.length<h)localStorage.setItem("ghs-redo",JSON.stringify(this.redos));else{let M=1;for(localStorage.setItem("ghs-redo",JSON.stringify(this.redos.slice(0,h)));this.redos.length>M*h;)localStorage.setItem("ghs-redo-"+M,JSON.stringify(this.redos.slice(M*h,M*h+h))),M++}if(h=1e3,this.undoInfos.length<h)localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos));else{let M=1;for(localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos.slice(0,h)));this.undoInfos.length>M*h;)localStorage.setItem("ghs-undo-infos-"+M,JSON.stringify(this.undoInfos.slice(M*h,M*h+h))),M++}}clearLocalStorage(){let h=1;for(localStorage.removeItem("ghs-undo");localStorage.getItem("ghs-undo-"+h);)localStorage.removeItem("ghs-undo-"+h);for(h=1,localStorage.removeItem("ghs-redo");localStorage.getItem("ghs-redo-"+h);)localStorage.removeItem("ghs-redo-"+h);for(h=1,localStorage.removeItem("ghs-undo-infos");localStorage.getItem("ghs-undo-infos-"+h);)localStorage.removeItem("ghs-undo-infos-"+h)}buildWsUrl(h,M,O){let S=M.split("/");const tt=S[0];let Mt="";return S.length>1&&(Mt="/"+S.splice(1,S.length+1).join("/")),Mt=h+tt+":"+O+Mt,Mt}connect(){st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword&&(this.disconnect(),this.ws=new WebSocket(this.buildWsUrl(st.r.settings.serverWss?"wss://":"ws://",st.r.settings.serverUrl,st.r.settings.serverPort)),this.ws.onmessage=this.onMessage,this.ws.onopen=this.onOpen)}disconnect(){this.permissions=void 0,this.ws&&this.ws.readyState!=WebSocket.CLOSED&&this.ws.close()}onMessage(h){try{const M=JSON.parse(h.data);switch(M.type){case"game":window.document.body.classList.add("working");let O=M.payload;const S=M.undoinfo;S&&(S.length>0&&"serverSync"==S[0]?q.stateManager.before("serverSync",...S.slice(1)):q.stateManager.before("serverSync",...S)),q.game.fromModel(O,!0),q.stateManager.saveLocal(),q.uiChange.emit(),setTimeout(()=>{window.document.body.classList.remove("working")},1);break;case"settings":if(st.r.settings.serverSettings){let tt=M.payload;tt.serverUrl||(tt.serverUrl=st.r.settings.serverUrl),tt.serverPort||(tt.serverPort=st.r.settings.serverPort),tt.serverPassword||(tt.serverPassword=st.r.settings.serverPassword),tt.serverSettings||(tt.serverSettings=st.r.settings.serverSettings),st.r.settings=tt,localStorage.setItem("ghs-settings",JSON.stringify(st.r.settings))}break;case"permissions":q.stateManager.permissions=M.payload||void 0;break;case"error":console.warn("[GHS] Error: "+M.message),"Permission(s) missing"==M.message&&q.stateManager.undo(),M.message.startsWith("Invalid password")&&(console.warn("Disconnect..."),h.target?.close())}}catch(M){console.error("[GHS] "+h.data,M)}}onOpen(h){const M=h.target;M&&M.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&(M.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-game"})),st.r.settings.serverSettings&&M.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-settings"})))}requestSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&st.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-settings"}))}wsState(){return st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword?this.ws&&this.ws.readyState||-1:-99}reset(){this.game=new rt.lA,localStorage.removeItem("ghs-game"),this.clearLocalStorage()}saveLocal(){localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel())),this.lastSaveTimestamp=(new Date).getTime()}saveSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&st.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"settings",payload:st.r.settings}))}before(...h){window.document.body.classList.add("working"),this.addToUndo(h||[])}after(h=1){if(this.saveLocal(),this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword){let M={password:st.r.settings.serverPassword,type:"game",payload:this.game.toModel(),undoinfo:this.undoInfos[this.undos.length-1]};this.ws.send(JSON.stringify(M))}q.uiChange.emit(),h?setTimeout(()=>{window.document.body.classList.remove("working")},h):window.document.body.classList.remove("working")}addToUndo(h){if(this.game.toModel()!=this.undos[this.undos.length-1]&&(this.undos.push(this.game.toModel()),this.undos.length>st.r.settings.maxUndo&&this.undos.splice(0,this.undos.length-st.r.settings.maxUndo),this.undoInfos.splice(this.undoInfos.length-this.redos.length,this.redos.length),this.undoInfos.push(h),this.undoInfos.length>this.undos.length&&this.undoInfos.splice(0,this.undoInfos.length-this.undos.length),this.redos=[],this.saveLocalStorage(),st.r.settings.browserNavigation)){const M="number"==typeof history.state?history.state+1:1;history.pushState(M,""),localStorage.setItem("ghs-popstate",""+M)}}hasUndo(){return this.undos.length>0}undo(){if(this.undos.length>0){window.document.body.classList.add("working"),this.redos.push(this.game.toModel());const h=this.undos.splice(this.undos.length-1,1)[0];this.game.fromModel(h),this.saveLocalStorage(),this.after()}}hasRedo(){return this.redos.length>0}redo(){if(this.redos.length>0){window.document.body.classList.add("working"),this.undos.push(this.game.toModel());const h=this.redos.splice(this.redos.length-1,1)[0];this.game.fromModel(h),this.saveLocalStorage(),this.after()}}savePermissions(h,M){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"permissions",payload:{permissions:M,password:h}}))}hasCharacterPermission(h){return null==this.permissions||this.permissions.characters||this.permissions.character.some(M=>M.name==h.name&&M.edition==h.edition)}hasMonsterPermission(h){return null==this.permissions||this.permissions.monsters||this.permissions.monster.some(M=>M.name==h.name&&M.edition==h.edition)}}class xt{constructor(h){this.game=h}changeHealth(h,M){this.changeHealthHighlightConditions(h,M),h.health+=M,h.health>h.maxHealth?h.health=(0,Q.j9)(""+h.maxHealth):h.health<0&&(h.health=0)}changeHealthHighlightConditions(h,M){if(st.r.settings.applyConditions){h.entityConditions.filter(tt=>tt.name==X.fT.poison||tt.name==X.fT.poison_x).forEach(tt=>{tt.highlight=M<0&&!tt.expired});const O=h.entityConditions.find(tt=>!tt.expired&&tt.name==X.fT.ward),S=h.entityConditions.find(tt=>!tt.expired&&tt.name==X.fT.brittle);M<0&&O&&!S?(O.value-=M,O.highlight=!0):O&&(O.highlight=!1),M<0&&S&&!O?(S.value-=M,S.highlight=!0):S&&(S.highlight=!1),S&&O&&(S.highlight=!1,O.highlight=!1)}}hasCondition(h,M){return h.entityConditions.some(O=>O.name==M.name&&!O.expired)}activeConditions(h){return h.entityConditions.filter(M=>!M.expired)}isImmune(h,M,O){const S=h.stats.find(Mt=>Mt.level==M.level&&Mt.type==M.type);let tt=null!=S&&null!=S.immunities&&-1!=S.immunities.indexOf(O);if(!tt){if(O==X.fT.wound_x)return this.isImmune(h,M,X.fT.wound);if(O==X.fT.poison_x)return this.isImmune(h,M,X.fT.poison);if(O==X.fT.rupture)return this.isImmune(h,M,X.fT.wound);if(O==X.fT.infect)return this.isImmune(h,M,X.fT.poison);if(O==X.fT.chill)return this.isImmune(h,M,X.fT.immobilize)||this.isImmune(h,M,X.fT.muddle)}return tt}toggleCondition(h,M,O,S){if(this.hasCondition(h,M))h.entityConditions=h.entityConditions.filter(tt=>tt.name!=M.name);else{let tt=h.entityConditions.find(Mt=>Mt.name==M.name);tt?(tt.expired=!1,tt.state=X.tT.normal):(tt=new X.hT(M.name,M.value),h.entityConditions.push(tt)),O||-1==tt.types.indexOf(X.CP.expire)?O&&-1!=tt.types.indexOf(X.CP.turn)&&(tt.state=X.tT.turn):tt.state=X.tT.expire,S&&-1!=tt.types.indexOf(X.CP.turn)&&(tt.state=X.tT.expire)}}applyCondition(h,M){const O=h.entityConditions.find(S=>S.name==M&&!S.expired&&-1!=S.types.indexOf(X.CP.apply));O&&((O.name==X.fT.poison||O.name==X.fT.poison_x)&&(h.health-=O.value,h.health<0&&(h.health=0),0==h.health&&(h instanceof Gt.g||h instanceof at.eU)&&!h.dead&&(h.dead=!0),O.highlight=!1),O.name==X.fT.ward&&(h.health+=Math.floor((O.value-1)/2),h.health>(0,Q.j9)(""+h.maxHealth)&&(h.health=(0,Q.j9)(""+h.maxHealth)),h.health>0&&(h instanceof Gt.g||h instanceof at.eU)&&h.dead&&(h.dead=!1),O.value=1,O.expired=!0,O.highlight=!1),O.name==X.fT.brittle&&(h.health-=Math.floor((O.value-1)/2),h.health<0&&(h.health=0),0==h.health&&(h instanceof Gt.g||h instanceof at.eU)&&!h.dead&&(h.dead=!0),O.value=1,O.expired=!0,O.highlight=!1))}declineApplyCondition(h,M){const O=h.entityConditions.find(S=>S.name==M&&!S.expired&&-1!=S.types.indexOf(X.CP.apply));O&&(O.highlight=!1,O.name==X.fT.ward&&(O.value=1,O.expired=!0),O.name==X.fT.brittle&&(O.value=1,O.expired=!0))}restoreConditions(h){h.entityConditions.forEach(M=>{M.name==X.fT.chill&&(M.expired?M.expired=!1:M.value++),-1!=M.types.indexOf(X.CP.expire)&&(M.expired?M.expired=!1:M.state==X.tT.expire&&(M.state=X.tT.normal))})}expireConditions(h){h.entityConditions.forEach(M=>{M.name==X.fT.chill&&(1==M.value?M.expired=!0:M.value--)}),h.entityConditions.forEach(M=>{-1!=M.types.indexOf(X.CP.expire)&&(M.state==X.tT.normal?M.state=X.tT.expire:M.state==X.tT.expire&&(M.expired=!0))})}applyConditionsTurn(h){const M=h.entityConditions.find(O=>!O.expired&&O.state==X.tT.normal&&O.name==X.fT.regenerate);if(M){const O=h.entityConditions.every(S=>S.expired||-1==S.types.indexOf(X.CP.preventHeal))&&h.health<h.maxHealth;h.entityConditions.filter(S=>!S.expired&&-1!=S.types.indexOf(X.CP.clearHeal)).forEach(S=>S.expired=!0),O&&(M.state=X.tT.expire,h.health+=M.value,h.health>(0,Q.j9)(""+h.maxHealth)&&(h.health=(0,Q.j9)(""+h.maxHealth))),M.highlight=!0,setTimeout(()=>{M.highlight=!1},1e3)}h.entityConditions.filter(O=>!O.expired&&O.state==X.tT.normal&&-1!=O.types.indexOf(X.CP.turn)).forEach(O=>{O.state=X.tT.turn,(O.name==X.fT.wound||O.name==X.fT.wound_x)&&(h.health=h.health-O.value,h.health<0&&(h.health=0),0==h.health&&(h instanceof t.z||h instanceof k.C)&&!h.exhausted&&(h.exhausted=!0),0==h.health&&(h instanceof Gt.g||h instanceof at.eU)&&!h.dead&&(h.dead=!0),O.highlight=!0,setTimeout(()=>{O.highlight=!1},1e3))})}unapplyConditionsTurn(h){h.entityConditions.filter(O=>O.state==X.tT.turn&&-1!=O.types.indexOf(X.CP.turn)).forEach(O=>{O.expired?O.expired=!1:(O.state=X.tT.normal,(O.name==X.fT.wound||O.name==X.fT.wound_x)&&(h.health=h.health+O.value,h.health>(0,Q.j9)(""+h.maxHealth)&&(h.health=(0,Q.j9)(""+h.maxHealth)),h.health>0&&(h instanceof Gt.g||h instanceof at.eU)&&h.dead&&(h.dead=!1)))});const M=h.entityConditions.find(O=>O.name==X.fT.regenerate);if(M){const O=h.entityConditions.every(S=>-1==S.types.indexOf(X.CP.preventHeal))&&M.state==X.tT.expire;h.entityConditions.filter(S=>S.expired&&-1!=S.types.indexOf(X.CP.clearHeal)).forEach(S=>S.expired=!1),O&&(M.state=X.tT.normal,h.health-=M.value,h.health<0&&(h.health=0))}}applyConditionsAfter(h){const M=h.entityConditions.find(O=>!O.expired&&O.name==X.fT.bane);M&&(h.health=h.health-10,h.health<0&&(h.health=0),0==h.health&&(h instanceof Gt.g||h instanceof at.eU)&&!h.dead&&(h.dead=!0),M.expired=!0,M.highlight=!0,setTimeout(()=>{M.highlight=!1},1e3))}unapplyConditionsAfter(h){const M=h.entityConditions.find(O=>O.expired&&O.name==X.fT.bane);M&&(h.health=h.health+10,h.health>(0,Q.j9)(""+h.maxHealth)&&(h.health=(0,Q.j9)(""+h.maxHealth)),h.health>0&&(h instanceof Gt.g||h instanceof at.eU)&&h.dead&&(h.dead=!1),M.highlight=!1,M.expired=!1)}highlightedConditions(h){return h.entityConditions.filter(M=>M.highlight)}hasMarker(h,M){return h.markers&&-1!=h.markers.indexOf(M)}toggleMarker(h,M){this.hasMarker(h,M)?h.markers.splice(h.markers.indexOf(M),1):h.markers.push(M)}undoInfos(h,M,O){let S=[];return h instanceof t.z&&M instanceof t.z?S.push(O+".char","data.character."+h.name):h instanceof at.eU&&M instanceof t.z?S.push(O+".summon","data.character."+M.name,"data.summon."+h.name):h instanceof k.C?S.push(O+".objective",h.title||h.name):M instanceof x.Q&&h instanceof Gt.g&&S.push(O+".monster","data.monster."+M.name,"monster."+h.type,""+h.number),S}}var vt=w(1571);class Ot{constructor(h){this.game=h}ge5PlayerOffset(){if(!this.game.ge5Player)return 0;const h=this.game.figures.filter(M=>M instanceof t.z&&!M.absent).length;return h<=4?0:h-3}adjustedLevel(){const h=this.game.level-this.ge5PlayerOffset()+this.game.bonusAdjustment;return h<0?0:h>7?7:h}trap(){return 2+this.game.level}experience(){return 4+2*this.adjustedLevel()}loot(){let h=2+Math.floor(this.adjustedLevel()/2);return this.adjustedLevel()>=7&&(h=6),h}terrain(){return 1+Math.ceil(this.game.level/3)}scenarioLevel(){const h=this.game.figures.filter(O=>O instanceof t.z&&!O.absent).length;if(0==h)return 0;const M=this.game.figures.filter(O=>O instanceof t.z&&!O.absent).map(O=>O.level).reduce((O,S)=>O+S);return Math.ceil((M/h+(this.game.solo?1:0))/2)+this.ge5PlayerOffset()}calculateScenarioLevel(){this.game.levelAdjustment>6?this.game.levelAdjustment=6:this.game.levelAdjustment<-6&&(this.game.levelAdjustment=-6);let h=this.scenarioLevel()+this.game.levelAdjustment;h>7?h=7:h<0&&(h=0),this.setLevel(h)}setLevel(h){this.game.level!=h&&(this.game.level=h,this.game.figures.forEach(M=>{M instanceof x.Q&&(M.level=h,M.entities.forEach(O=>{O.level=h}))}))}}class Y{constructor(h){this.game=h}setScenario(h){if(this.game.scenario=h?new ct.$(h,h.custom):void 0,h&&!h.custom){const M=q.editionData.find(O=>O.edition==h.edition);if(!M)return void console.error("Could not find edition data!");q.roundManager.resetScenario(),this.applyScenarioData(M,h)}else h||q.roundManager.resetScenario()}finishScenario(h=!0){this.game.figures.forEach(M=>{M instanceof t.z&&(q.characterManager.addXP(M,(h?q.levelManager.experience():0)+M.experience),M.progress.gold+=M.loot*q.levelManager.loot())}),h&&this.game.party&&this.game.scenario&&(this.game.party.scenarios.push(new ot._(this.game.scenario.index,this.game.scenario.edition,this.game.scenario.group,this.game.scenario.custom,this.game.scenario.custom?this.game.scenario.name:"")),this.game.party.manualScenarios=this.game.party.manualScenarios.filter(M=>this.game.scenario&&(this.game.scenario.index!=M.index||this.game.scenario.edition!=M.edition||this.game.scenario.group!=M.group))),this.game.scenario=void 0,this.game.sections=[],q.roundManager.resetScenario()}addSection(h){const M=q.editionData.find(O=>O.edition==h.edition);M?this.game.sections.some(O=>O.edition==h.edition&&O.index==h.index&&O.group==h.group)||(this.game.sections.push(h),this.applyScenarioData(M,h)):console.error("Could not find edition data!")}applyScenarioData(h,M){M.monsters&&M.monsters.forEach(O=>{const S=q.monstersData(!0).find(tt=>tt.name==O&&(tt.edition==h.edition||h.extentions&&-1!=h.extentions.indexOf(tt.edition)));if(S){let tt=q.monsterManager.addMonster(S);M.allies&&-1!=M.allies.indexOf(tt.name)&&(tt.isAlly=!0)}else console.error("Monster not found: '"+O+"'")}),M.objectives&&M.objectives.forEach(O=>{q.characterManager.addObjective(O)})}scenarioData(h){const M=q.editionData.find(O=>O.edition==h);return M?this.game.party.campaignMode&&M.scenarios.some(O=>O.initial)?M.scenarios.filter(O=>{if(O.initial||this.game.party.scenarios.find(Mt=>O.index==Mt.index&&O.edition==Mt.edition&&O.group==Mt.group)||this.game.party.manualScenarios.find(Mt=>O.index==Mt.index&&O.edition==Mt.edition&&O.group==Mt.group))return!0;let S=!1,tt=!O.requires||0==O.requires.length;return this.game.party.scenarios.forEach(Mt=>{const bt=M.scenarios.find(St=>St.index==Mt.index&&St.edition==Mt.edition&&St.group==Mt.group);bt&&bt.group==O.group&&bt.unlocks&&-1!=bt.unlocks.indexOf(O.index)&&(S=!0)}),tt||(tt=O.requires.some(Mt=>Mt.every(bt=>this.game.party.scenarios.find(St=>St.index==bt&&St.group==O.group&&St.edition==O.edition)))),S&&tt}):M.scenarios:[]}isBlocked(h){let M=!1;const O=q.editionData.find(S=>S.edition==h.edition);return O&&this.game.party.scenarios.forEach(S=>{const tt=O.scenarios.find(Mt=>Mt.index==S.index&&Mt.edition==S.edition&&Mt.group==S.group);tt&&tt.blocks&&-1!=tt.blocks.indexOf(h.index)&&(M=!0)}),M}scenarioUndoArgs(h){return(h=h||q.game.scenario)?[h.index,"data.scenario."+h.name,h.custom?"scenario.custom":"data.edition."+h.edition]:["","",""]}scenarioDataForModel(h){if(h.isCustom)return new ot.t(h.custom,"",[],[],[],[],[],[],[],"");const M=q.scenarioData(!0).find(O=>O.index==h.index&&O.edition==h.edition&&O.group==h.group);if(M)return new ot.t(M.name,M.index,M.unlocks,M.blocks,M.requires,M.links,M.monsters,M.allies,M.objectives,M.edition,M.group,M.spoiler);console.warn("Invalid scenario data:",h)}sectionDataForModel(h){const M=q.sectionData(!0).find(O=>O.index==h.index&&O.edition==h.edition&&O.group==h.group);if(M)return new ot.t(M.name,M.index,M.unlocks,M.blocks,M.requires,M.links,M.monsters,M.allies,M.objectives,M.edition,M.group,M.spoiler);console.warn("Invalid section data:",h)}toModel(h,M=!1,O=""){return new ot._(h.index,h.edition,h.group,M,O)}}var G=w(4922);class nt{constructor(h){this.working=!1,this.game=h}nextAvailable(){return this.game.figures.length>0&&(this.game.state==rt.D2.next||this.game.figures.every(h=>h instanceof x.Q||h instanceof k.C&&(h.getInitiative()>0||h.exhausted||!st.r.settings.initiativeRequired)||h instanceof t.z&&(h.getInitiative()>0||h.exhausted||h.absent||!st.r.settings.initiativeRequired)))}nextGameState(){this.working=!0,this.game.totalSeconds+=this.game.playSeconds,this.game.playSeconds=0,this.game.state==rt.D2.next?(this.game.state=rt.D2.draw,q.characterManager.next(),q.monsterManager.next(),q.attackModifierManager.next(),st.r.settings.moveElements&&this.game.elementBoard.forEach(h=>{h.state==G.fq.strong?h.state=G.fq.waning:h.state==G.fq.waning&&(h.state=G.fq.inert)}),q.sortFigures(),this.game.figures.forEach(h=>h.active=!1)):this.nextAvailable()&&(0==this.game.round&&q.attackModifierManager.draw(),this.game.state=rt.D2.next,this.game.round++,q.characterManager.draw(),q.monsterManager.draw(),st.r.settings.moveElements&&this.game.elementBoard.forEach(h=>{h.state==G.fq.new&&(h.state=G.fq.strong)}),q.sortFigures(),this.game.figures.length>0&&this.toggleFigure(this.game.figures[0])),q.uiChange.emit(),setTimeout(()=>this.working=!1,1)}toggleFigure(h){const M=this.game.figures,O=M.indexOf(h);if(-1!=O){h.active||h.off?h.active&&!h.off?this.afterTurn(h):M.some((S,tt)=>tt<O&&S.active)?this.beforeTurn(h):h.active=!0:this.turn(h),this.permanentDead(h)&&this.afterTurn(h);for(let S=0;S<M.length;S++){const tt=M[S];h.active&&(S!=O&&(tt.active=!1),S<O?this.afterTurn(tt):(!(tt instanceof x.Q)||tt instanceof x.Q&&tt.entities.length>0)&&this.beforeTurn(tt)),h.off&&!this.permanentDead(tt)&&(S<O&&!tt.off&&!M.some(Mt=>Mt.active)?this.turn(tt):S>O&&(!(tt instanceof x.Q)||tt instanceof x.Q&&tt.entities.length>0)&&(!tt.off&&S>O&&!M.some((Mt,bt)=>Mt.active&&bt<S)?this.turn(tt):tt.active=!1))}}else console.error("Invalid figure")}beforeTurn(h){h.off?(h.off=!1,h instanceof x.Q&&h.entities.forEach(M=>{M.active=h.active&&!M.off}),st.r.settings.expireConditions&&(h instanceof t.z?(q.entityManager.restoreConditions(h),h.summons.forEach(M=>{q.entityManager.restoreConditions(M)})):h instanceof k.C?q.entityManager.restoreConditions(h):h instanceof x.Q&&h.entities.forEach(M=>{q.entityManager.restoreConditions(M)}))):h instanceof x.Q&&h.entities.forEach(M=>{M.active=h.active,M.off=!1}),st.r.settings.applyConditions&&(h.active||(h instanceof t.z?(q.entityManager.unapplyConditionsTurn(h),h.summons.forEach(M=>{q.entityManager.unapplyConditionsTurn(M)})):h instanceof k.C?q.entityManager.unapplyConditionsTurn(h):h instanceof x.Q&&h.entities.forEach(M=>{q.entityManager.unapplyConditionsTurn(M)}))),st.r.settings.applyConditions&&(h instanceof t.z?(q.entityManager.unapplyConditionsAfter(h),h.summons.forEach(M=>{q.entityManager.unapplyConditionsAfter(M)})):h instanceof k.C?q.entityManager.unapplyConditionsAfter(h):h instanceof x.Q&&h.entities.forEach(M=>{q.entityManager.unapplyConditionsAfter(M)}),h.off&&!this.permanentDead(h)&&(h.off=!1))}turn(h){h.active=!0,h instanceof x.Q&&h.entities.every(M=>!M.off)&&h.entities.forEach(M=>{M.active=!0}),this.game.elementBoard.forEach(M=>{M.state==G.fq.new&&(M.state=G.fq.strong)}),st.r.settings.applyConditions&&(h instanceof t.z?(q.entityManager.applyConditionsTurn(h),h.summons.forEach(M=>{q.entityManager.applyConditionsTurn(M)}),h.exhausted&&this.toggleFigure(h)):h instanceof k.C?(q.entityManager.applyConditionsTurn(h),h.exhausted&&this.toggleFigure(h)):h instanceof x.Q&&(h.entities.forEach(M=>{q.entityManager.applyConditionsTurn(M)}),h.entities.every(M=>M.dead)&&this.toggleFigure(h)))}afterTurn(h){if(!h.off)if(h.off=!0,h.active=!1,h instanceof x.Q&&h.entities.forEach(M=>{M.active=!1,M.off=!0}),st.r.settings.expireConditions&&(h instanceof t.z?(q.entityManager.expireConditions(h),h.summons.forEach(M=>{q.entityManager.expireConditions(M)})):h instanceof k.C?q.entityManager.expireConditions(h):h instanceof x.Q&&h.entities.forEach(M=>{q.entityManager.expireConditions(M)})),st.r.settings.applyConditions&&(h instanceof t.z?(q.entityManager.applyConditionsTurn(h),h.summons.forEach(M=>{q.entityManager.applyConditionsTurn(M)})):h instanceof k.C?q.entityManager.applyConditionsTurn(h):h instanceof x.Q&&h.entities.forEach(M=>{q.entityManager.applyConditionsTurn(M)}),h instanceof t.z?(q.entityManager.applyConditionsAfter(h),h.summons.forEach(M=>{q.entityManager.applyConditionsAfter(M)})):h instanceof k.C?q.entityManager.applyConditionsAfter(h):h instanceof x.Q&&h.entities.forEach(M=>{q.entityManager.applyConditionsAfter(M)})),h instanceof t.z)for(let M of h.summons)M.state==at.HY.new&&(M.state=at.HY.true);else h instanceof x.Q&&h.entities.forEach(M=>{M.summon==at.HY.new&&(M.summon=at.HY.true)})}permanentDead(h){return(h instanceof t.z||h instanceof k.C)&&(h.exhausted||h.health<=0)||h instanceof x.Q&&h.entities.every(M=>M.dead||M.health<=0)}resetScenario(){this.game.playSeconds=0,this.game.sections=[],this.game.round=0,this.game.state=rt.D2.draw,this.game.elementBoard.forEach(h=>h.state=G.fq.inert),this.game.monsterAttackModifierDeck=new N.ut,this.game.figures=this.game.figures.filter(h=>h instanceof t.z),this.game.figures.forEach(h=>{h instanceof t.z&&(h.health=h.maxHealth,h.loot=0,h.experience=0,h.entityConditions=[],h.summons=[],h.initiative=0,h.active=!1,h.off=!1,h.exhausted=!1,h.absent=!1,h.availableSummons.filter(M=>M.special).forEach(M=>q.characterManager.createSpecialSummon(h,M)),h.attackModifierDeck=q.attackModifierManager.buildCharacterAttackModifierDeck(h),q.characterManager.applyDonations(h))}),q.uiChange.emit()}}const q=new class K{constructor(){this.game=new rt.lA,this.editionData=[],this.uiChange=new vt.vpe,this.stateManager=new ee(this.game),this.entityManager=new xt(this.game),this.characterManager=new mt(this.game),this.monsterManager=new Tt(this.game),this.attackModifierManager=new gt(this.game),this.levelManager=new Ot(this.game),this.scenarioManager=new Y(this.game),this.roundManager=new nt(this.game),this.uiChange.subscribe({next:()=>{this.game.levelCalculation&&this.levelManager.calculateScenarioLevel()}})}editions(){return this.editionData.map(h=>h.edition)}currentEditions(){return this.game.edition?[this.game.edition,...this.editionExtensions(this.game.edition)]:this.editions()}editionExtensions(h){const M=this.editionData.find(O=>O.edition==h);return M&&M.extentions||[]}charactersData(h=!1){return this.editionData.filter(M=>h||!this.game.edition||M.edition==this.game.edition||M.extentions&&-1!=M.extentions.indexOf(this.game.edition)).map(M=>M.characters).flat().filter((M,O,S)=>M.replace||!M.replace&&!S.find(tt=>tt.replace&&tt.name==M.name&&tt.edition==M.edition))}monstersData(h=!1){return this.editionData.filter(M=>h||!this.game.edition||M.edition==this.game.edition||M.extentions&&-1!=M.extentions.indexOf(this.game.edition)).map(M=>M.monsters).flat().filter((M,O,S)=>M.replace||!M.replace&&!S.find(tt=>tt.replace&&tt.name==M.name&&tt.edition==M.edition))}decksData(h=!1){return this.editionData.filter(M=>h||!this.game.edition||M.edition==this.game.edition||M.extentions&&-1!=M.extentions.indexOf(this.game.edition)).map(M=>M.decks).flat()}scenarioData(h=!1){return this.editionData.filter(M=>h||!this.game.edition||M.edition==this.game.edition||M.extentions&&-1!=M.extentions.indexOf(this.game.edition)).map(M=>M.scenarios).flat()}sectionData(h=!1){return this.editionData.filter(M=>h||!this.game.edition||M.edition==this.game.edition||M.extentions&&-1!=M.extentions.indexOf(this.game.edition)).map(M=>M.sections).flat()}itemData(h=!1){return this.editionData.filter(M=>h||!this.game.edition||M.edition==this.game.edition||M.extentions&&-1!=M.extentions.indexOf(this.game.edition)).map(M=>M.items).flat()}item(h,M){return this.itemData(!0).find(O=>O&&O.id==h&&O.edition==M)}hazardousTerrain(){return!!this.game.edition&&this.editionData.some(h=>h.edition==this.game.edition&&h.hazardousTerrain)}conditions(h=!1){if(h||!this.game.edition)return X.G3;const M=this.editionData.find(O=>O.edition==this.game.edition);return M&&M.conditions?M.conditions.map(O=>O.split(":").length>1?new X.gP(O.split(":")[0],+O.split(":")[1]):new X.gP(O)):[]}conditionsForTypes(...h){return this.conditions(!1).filter(M=>h.every(O=>-1!=M.types.indexOf(O)))}allConditionsForTypes(...h){return this.conditions(!0).filter(M=>h.every(O=>-1!=M.types.indexOf(O)))}markers(){return this.game.figures.filter(h=>h instanceof t.z&&h.marker).map(h=>h.edition+"-"+h.name)}sortFigures(){this.game.figures.sort((h,M)=>this.game.state==rt.D2.draw?this.sortFiguresByTypeAndName(h,M):st.r.settings.initiativeRequired?h.getInitiative()==M.getInitiative()?this.sortFiguresByTypeAndName(h,M):h.getInitiative()-M.getInitiative():0)}sortFiguresByTypeAndName(h,M){let O=h.name.toLowerCase();h instanceof t.z?O=h.title.toLowerCase()||st.r.getLabel("data.character."+h.name).toLowerCase():h instanceof x.Q?O=st.r.getLabel("data.monster."+h.name).toLowerCase():h instanceof k.C&&(O=h.title?h.title:st.r.getLabel(h.name?"data.objective."+h.name:h.escort?"escort":"objective").toLowerCase());let S=M.name.toLowerCase();return M instanceof t.z?S=M.title.toLowerCase()||st.r.getLabel("data.character."+M.name).toLowerCase():M instanceof x.Q?S=st.r.getLabel("data.monster."+M.name).toLowerCase():M instanceof k.C&&(S=M.title?M.title:st.r.getLabel(M.name?"data.objective."+M.name:M.escort?"escort":"objective").toLowerCase()),h instanceof t.z&&M instanceof x.Q?-1:h instanceof x.Q&&M instanceof t.z?1:h instanceof t.z&&M instanceof k.C?-1:h instanceof k.C&&M instanceof t.z?1:h instanceof x.Q&&M instanceof k.C?-1:h instanceof k.C&&M instanceof x.Q?1:h instanceof x.Q&&M instanceof x.Q?0:O<S?-1:1}deckData(h){let M=this.decksData(!0).find(O=>(O.name==h.deck||O.name==h.name)&&O.edition==h.edition);return M||(M=this.decksData(!0).find(O=>(O.name==h.deck||O.name==h.name)&&-1!=this.editionExtensions(h.edition).indexOf(O.edition))),M||(h.errors=h.errors||[],!h.errors.find(O=>O.type==H.r.unknown)&&!h.errors.find(O=>O.type==H.r.deck)&&(console.error("Unknwon deck: "+h.name+(h.deck?"["+h.deck+"]":"")+" for "+h.edition),h.errors.push(new H.o(H.r.deck,h instanceof t.z?"character":"monster",h.name,h.edition,h.deck))),new J("",[],""))}abilities(h){return this.deckData(h).abilities||[]}getCharacterData(h,M){let O=this.charactersData(!0).find(S=>S.name==h&&S.edition==M);return O||(O=this.charactersData(!0).find(S=>S.name==h),O||(O=new R.x,O.name=h,O.edition=M,O.errors=O.errors||[],O.errors.find(S=>S.type==H.r.unknown)||(console.error("unknown character '"+h+"' for edition '"+M+"'"),O.errors.push(new H.o(H.r.unknown,"character",h,M)))),O)}isCharacter(h){return h instanceof t.z}isObjective(h){return h instanceof k.C}isMonster(h){return h instanceof x.Q}isMonsterEntity(h){return h instanceof Gt.g}isSummon(h){return h instanceof at.eU}toCharacter(h){return h}toObjective(h){return h}toMonster(h){return h}toMonsterEntity(h){return h}toSummon(h){return h}getEdition(h){return this.game.figures.some(M=>typeof h==typeof M&&h.name==M.name&&h.edition!=M.edition||this.game.edition&&h.edition!=this.game.edition)?h.edition:""}getMonsterData(h,M){let O=this.monstersData(!0).find(S=>S.name==h&&S.edition==M);return O||(O=this.monstersData(!0).find(S=>S.name==h),O||(O=new $.A(h,0,new E.c(F.M.normal,0,0,0,0,0),[],""),O.errors=O.errors||[],O.name=h,O.edition=M,O.errors.find(S=>S.type==H.r.unknown)||(console.error("unknown monster '"+h+"' for edition '"+M+"'"),O.errors.push(new H.o(H.r.unknown,"monster",h,M)))),O)}}},554:(yt,it,w)=>{w.d(it,{r:()=>H});var t=w(5861),R=w(3692),J=w(3640);const H=new class ${constructor(){this.defaultLocale="en",this.defaultEditionDataUrls=["./assets/data/gh.json","./assets/data/jotl.json","./assets/data/fc.json","./assets/data/fh.json","./assets/data/cs.json"],this.settings=new R.Z,this.label={},this.locales=["en","de","fr"],this.loadSettings()}reset(){localStorage.removeItem("ghs-settings"),this.loadSettings()}loadSettings(){var x=this;return(0,t.Z)(function*(){const E=localStorage.getItem("ghs-settings");if(null!=E)x.settings=Object.assign(new R.Z,JSON.parse(E));else try{yield fetch("./ghs-settings-default.json").then(F=>{if(!F.ok)throw Error();return F.json()}).then(F=>{x.settings=Object.assign(new R.Z,F)})}catch{x.settings=new R.Z}x.setLocale(x.settings.locale),x.sortSpoilers()})()}init(){var x=this;return(0,t.Z)(function*(){for(let E of x.defaultEditionDataUrls)-1==H.settings.editionDataUrls.indexOf(E)&&-1==H.settings.excludeEditionDataUrls.indexOf(E)&&H.settings.editionDataUrls.push(E);for(let E of H.settings.editionDataUrls)yield H.loadEditionData(E)})()}storeSettings(){localStorage.setItem("ghs-settings",JSON.stringify(this.settings)),this.settings.serverSettings&&J.v.stateManager.saveSettings(),J.v.uiChange.emit()}setCalculate(x){this.settings.calculate=x,this.storeSettings()}setCalculateStats(x){this.settings.calculateStats=x,this.storeSettings()}setAbilityNumbers(x){this.settings.abilityNumbers=x,this.storeSettings()}setEliteFirst(x){this.settings.eliteFirst=x,this.storeSettings()}setExpireConditions(x){this.settings.expireConditions=x,this.storeSettings()}setApplyConditions(x){this.settings.applyConditions=x,this.storeSettings()}setActiveApplyConditions(x){this.settings.activeApplyConditions=x,this.storeSettings()}setMoveElements(x){this.settings.moveElements=x,this.storeSettings()}setHideStats(x){this.settings.hideStats=x,this.storeSettings()}setRandomStandees(x){this.settings.randomStandees=x,this.storeSettings()}setActiveStandees(x){this.settings.activeStandees=x,this.storeSettings()}setAllyAttackModifierDeck(x){this.settings.allyAttackModifierDeck=x,this.storeSettings()}setInitiativeRequired(x){this.settings.initiativeRequired=x,this.storeSettings()}setDisableStandees(x){this.settings.disableStandees=x,this.storeSettings()}setDragValues(x){this.settings.dragValues=x,this.storeSettings()}setHideAbsent(x){this.settings.hideAbsent=x,this.storeSettings()}setFullscreen(x){this.settings.fullscreen=x,this.storeSettings()}setFhStyle(x){this.settings.fhStyle=x,this.storeSettings()}setDisableColumns(x){this.settings.disableColumns=x,this.storeSettings()}setAutoscroll(x){this.settings.autoscroll=x,this.storeSettings()}setHints(x){this.settings.hints=x,this.storeSettings()}setBrowserNavigation(x){this.settings.browserNavigation=x,this.storeSettings()}setZoom(x){this.settings.zoom=x,this.storeSettings()}setBarsize(x){this.settings.barsize=x,this.storeSettings()}setFontsize(x){this.settings.fontsize=x,this.storeSettings()}setServerAutoconnect(x){this.settings.serverAutoconnect=x,this.storeSettings()}setServerSettings(x){this.settings.serverSettings=x,x?J.v.stateManager.requestSettings():this.storeSettings()}setServerWss(x){this.settings.serverWss=x,this.storeSettings()}setServer(x,E,F){this.settings.serverUrl=x,this.settings.serverPort=E,this.settings.serverPassword=F,this.storeSettings()}setMaxUndo(x){this.settings.maxUndo=x,this.storeSettings()}addSpoiler(x){-1==this.settings.spoilers.indexOf(x)&&(this.settings.spoilers.push(x),this.sortSpoilers(),this.storeSettings())}addSpoilers(x){for(let E of x)-1==this.settings.spoilers.indexOf(E.name)&&this.settings.spoilers.push(E.name);this.storeSettings()}removeSpoiler(x){-1!=this.settings.spoilers.indexOf(x)&&(this.settings.spoilers.splice(this.settings.spoilers.indexOf(x),1),this.storeSettings())}removeAllSpoilers(){this.settings.spoilers=[],this.storeSettings()}sortSpoilers(){this.settings.spoilers.sort((x,E)=>x.toLowerCase()>E.toLowerCase()?1:x.toLowerCase()<E.toLowerCase()?-1:0)}cleanEditionData(){J.v.editionData=[]}loadEditionData(x){var E=this;return(0,t.Z)(function*(){try{return yield fetch(x).then(k=>{if(k.ok)return k.json();console.warn("Invalid data url: "+x+" ["+k.statusText+"]")}).then(k=>-1!=J.v.editions().indexOf(k.edition)?(console.warn("Edition already exists: "+k.edition),!1):(k.url=x,J.v.editionData.push(k),E.loadDataLabel(k),!0))}catch(F){return console.warn("Invalid data url: "+x+" ["+F+"]"),!1}})()}loadDataLabel(x){this.label.data||(this.label.data={}),this.settings.locale!=this.defaultLocale&&x.label&&x.label[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,x.label[this.defaultLocale]),x.labelSpoiler&&x.labelSpoiler[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,x.labelSpoiler[this.defaultLocale]))),x.label&&x.label[this.settings.locale]&&(this.label.data=this.merge(this.label.data,x.label[this.settings.locale])),x.labelSpoiler&&x.labelSpoiler[this.settings.locale]&&(this.label.data=this.merge(this.label.data,x.labelSpoiler[this.settings.locale])),this.label.data.edition||(this.label.data.edition={}),this.label.data.character||(this.label.data.character={}),this.label.data.monster||(this.label.data.monster={}),this.label.data.deck||(this.label.data.deck={}),this.label.data.ability||(this.label.data.ability={}),this.label.data.scenario||(this.label.data.scenario={}),this.label.data.section||(this.label.data.section={}),this.label.data.objective||(this.label.data.objective={}),this.label.data.summon||(this.label.data.summon={})}isObject(x){return x&&"object"==typeof x&&!Array.isArray(x)}merge(x,...E){if(!E.length)return x;const F=x;if(this.isObject(F)){const k=E.length;for(let N=0;N<k;N+=1){const V=E[N];if(this.isObject(V))for(const gt in V)V.hasOwnProperty(gt)&&(this.isObject(V[gt])?((!F[gt]||!this.isObject(F[gt]))&&(F[gt]={}),this.merge(F[gt],V[gt])):F[gt]=Array.isArray(F[gt])&&Array.isArray(V[gt])?Array.from(new Set(F[gt].concat(V[gt]))):V[gt])}}return F}getEditionByUrl(x){if(J.v.editionData.some(E=>E.url==x))return J.v.editionData.find(E=>E.url==x)?.edition;console.error("No edition data found for url '"+x+"'")}addEditionDataUrl(x){var E=this;return(0,t.Z)(function*(){return!(-1!=E.settings.editionDataUrls.indexOf(x)||!(yield E.loadEditionData(x))||(E.settings.editionDataUrls.push(x),-1!=E.settings.excludeEditionDataUrls.indexOf(x)&&E.settings.excludeEditionDataUrls.splice(E.settings.excludeEditionDataUrls.indexOf(x),1),E.storeSettings(),0))})()}removeEditionDataUrl(x){var E=this;return(0,t.Z)(function*(){-1!=E.settings.editionDataUrls.indexOf(x)&&(J.v.editionData=J.v.editionData.filter(F=>F.url!=x),E.settings.editionDataUrls.splice(E.settings.editionDataUrls.indexOf(x),1),-1!=E.defaultEditionDataUrls.indexOf(x)&&E.settings.excludeEditionDataUrls.push(x),E.storeSettings())})()}restoreDefaultEditionDataUrls(){var x=this;return(0,t.Z)(function*(){for(let E of x.defaultEditionDataUrls)-1==x.settings.editionDataUrls.indexOf(E)&&(x.settings.editionDataUrls.push(E),yield x.loadEditionData(E));x.storeSettings()})()}setLocale(x){var E=this;return(0,t.Z)(function*(){x!=E.defaultLocale&&(yield fetch("./assets/locales/"+E.defaultLocale+".json").then(F=>F.json()).then(F=>{E.label=E.merge(E.label,F)}).catch(F=>{console.error("Invalid locale: "+x,F)})),yield fetch("./assets/locales/"+x+".json").then(F=>(E.settings.locale=x,F.json())).then(F=>{E.label=E.merge(E.label,F),E.storeSettings()}).catch(F=>{console.error("Invalid locale: "+x,F)}),E.label.data={};for(let F of J.v.editionData)E.loadDataLabel(F)})()}getLabel(x,E=[],F=!0,k=this.label,N="",V=!1){if(x+="",!k)return V?this.emptyLabel(x,E,N):N&&x?this.getLabel(x):x||"";if(k[x])return"object"==typeof k[x]?k[x]["."]?this.insertLabelArguments(k[x]["."],E,F):V?this.emptyLabel(x,E,N):N&&x?this.getLabel(x):x||"":this.insertLabelArguments(k[x],E,F);{let gt=x.split(".");if(k[gt[0]])return x=gt.slice(1,gt.length).join("."),this.getLabel(x,E,F,k[gt[0]],N+gt[0]+".",V)}return V?this.emptyLabel(x,E,N):N&&x?this.getLabel(x):x||""}emptyLabel(x,E,F){return(F?F+(F.endsWith(".")?"":"."):"")+x+(E&&E.length>0?" ["+E+"]":"")}insertLabelArguments(x,E,F){if(E)for(let k in E)for(;-1!=x.indexOf(`{${k}}`);)x=x.replace(`{${k}}`,F?this.getLabel(E[k]):E[k]);return x}}},62:(yt,it,w)=>{w.d(it,{UO:()=>rt,US:()=>$,YY:()=>J,fy:()=>F,kl:()=>t,tI:()=>R,u$:()=>x,ut:()=>E});var t=(()=>{return(k=t||(t={})).plus0="plus0",k.plus1="plus1",k.plus2="plus2",k.plus3="plus3",k.plus4="plus4",k.minus1="minus1",k.minus2="minus2",k.null="null",k.double="double",k.bless="bless",k.curse="curse",k.invalid="invalid",t;var k})(),R=(()=>{return(k=R||(R={})).plus="plus",k.minus="minus",k.multiply="multiply",R;var k})();class J{constructor(N,V,gt=[],B=!1){switch(this.value=0,this.valueType=R.plus,this.shuffle=!1,this.revealed=!1,this.character=!1,this.type=N,this.id=V||N,this.effects=gt,this.rolling=B,N){case t.plus0:this.value=0;break;case t.plus1:this.value=1;break;case t.plus2:this.value=2;break;case t.plus3:this.value=3;break;case t.plus4:this.value=4;break;case t.minus1:this.valueType=R.minus,this.value=1;break;case t.minus2:this.valueType=R.minus,this.value=2;break;case t.null:this.valueType=R.multiply,this.value=0,this.shuffle=!0;break;case t.double:this.valueType=R.multiply,this.value=2,this.shuffle=!0;break;case t.bless:this.valueType=R.multiply,this.value=2;break;case t.curse:this.valueType=R.multiply,this.value=0}}}var $=(()=>{return(k=$||($={})).condition="condition",k.custom="custom",k.element="element",k.elementHalf="elementHalf",k.heal="heal",k.pierce="pierce",k.pull="pull",k.push="push",k.range="range",k.refreshItem="refreshItem",k.retaliate="retaliate",k.shield="shield",k.specialTarget="specialTarget",k.summon="summon",k.swing="swing",k.target="target",$;var k})();const rt=[new J(t.plus0),new J(t.plus1),new J(t.minus1),new J(t.plus2),new J(t.minus2),new J(t.double),new J(t.null),new J(t.bless),new J(t.curse)],x=[t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus1,t.plus1,t.plus1,t.plus1,t.plus1,t.minus1,t.minus1,t.minus1,t.minus1,t.minus1,t.plus2,t.minus2,t.double,t.null];class E{constructor(){this.attackModifiers=JSON.parse(JSON.stringify(rt)),this.current=-1,this.cards=x.map(N=>this.cardById(N)||new J(t.invalid))}cardById(N){let V=this.attackModifiers.find(gt=>gt.id==N);if(V)return JSON.parse(JSON.stringify(V))}toModel(){return new F(this.current,this.cards.map(N=>N&&N.id||""))}fromModel(N){N.current!=this.current&&(this.current=+N.current),this.cards=N.cards.map(V=>this.cardById(V)||new J(t.invalid))}}class F{constructor(N,V){this.current=N,this.cards=V}}},641:(yt,it,w)=>{w.d(it,{z:()=>F});var t=w(6998),R=w(2713),J=w(2679),$=w(3640),H=w(1412),rt=w(8557),x=w(5205),E=w(62);class F extends R.x{constructor(V,gt){super(V),this.title="",this.initiative=0,this.experience=0,this.loot=0,this.exhausted=!1,this.summons=[],this.donations=0,this.initiativeVisible=!1,this.attackModifierDeckVisible=!1,this.fullview=!1,this.number=0,this.absent=!1,this.off=!1,this.active=!1,this.entityConditions=[],this.markers=[],this.errors=V.errors||[],gt<1?gt=1:gt>9&&(gt=9);const B=this.stats.find(X=>X.level==gt);B?(this.stat=B,this.level=gt,this.maxHealth=this.stat.health):(!this.errors.find(X=>X.type==H.r.unknown)&&!this.errors.find(X=>X.type==H.r.stat)&&(console.error("No character stat found for level: "+gt),this.errors.push(new H.o(H.r.stat,"character",V.name,V.edition,"",""+gt))),this.stat=new t.a(gt,0),this.level=0,this.maxHealth=0),this.health=this.maxHealth,this.progress=new x.f,"jotl"!=this.edition&&0==this.progress.gold&&(this.progress.gold=15*(this.level+1)),this.attackModifierDeck=$.v.attackModifierManager.buildCharacterAttackModifierDeck(this)}getInitiative(){return this.absent?200:this.exhausted||this.health<=0?100:this.initiative}toModel(){return new k(this.name,this.edition,this.marker,this.title,this.initiative,this.experience,this.loot,this.exhausted,this.level,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(V=>V.toModel()),this.markers,this.summons.map(V=>V.toModel()),this.progress,this.initiativeVisible,this.attackModifierDeckVisible,this.fullview,this.number,this.attackModifierDeck.toModel(),this.donations,this.absent)}fromModel(V){if(this.edition=V.edition,!this.edition){const B=$.v.charactersData(!0).find(X=>X.name==V.name);this.edition=B?B.edition:""}if(this.marker=V.marker||this.marker,this.title=V.title,(!this.initiativeVisible||V.initiative<=0||this.initiative!=V.initiative)&&(this.initiativeVisible=V.initiativeVisible),V.number)this.number=V.number;else for(this.number=1;$.v.game.figures.some(B=>B instanceof F&&(B.name!=this.name||B.edition!=this.edition)&&B.number==this.number);)this.number++;this.initiative=V.initiative,this.experience=V.experience,this.loot=V.loot,this.exhausted=V.exhausted,this.level=V.level,this.off=V.off,this.active=V.active,this.health=V.health,this.maxHealth=V.maxHealth,this.entityConditions=[],V.entityConditions&&(this.entityConditions=V.entityConditions.map(B=>{let X=new rt.hT(B.name,B.value);return X.fromModel(B),X})),this.markers=V.markers,this.summons=this.summons.filter(B=>{let X=!1;return V.summons.forEach(Q=>{Q.number!=B.number||Q.color!=B.color||(X=!0)}),X}),V.summons.forEach(B=>{let X=this.summons.find(Q=>Q.name==Q.name&&Q.number==B.number&&Q.color==B.color);X||(X=new J.eU(B.name,B.level,B.number,B.color),this.summons.push(X)),X.fromModel(B)}),this.progress=new x.f,V.progress&&(this.progress=Object.assign(new x.f,V.progress)),this.progress.loot&&!this.progress.gold&&(this.progress.gold=this.progress.loot,this.progress.loot=0);let gt=$.v.attackModifierManager.buildCharacterAttackModifierDeck(this);V.attackModifierDeck&&gt.fromModel(V.attackModifierDeck),this.mergeAttackModifierDeck(gt),V.attackModifierDeckVisible&&(this.attackModifierDeckVisible=!0),this.fullview=V.fullview,this.donations=V.donations||0,this.absent=V.absent}mergeAttackModifierDeck(V){let gt=!1;return this.attackModifierDeck||(this.attackModifierDeck=new E.ut,gt=!0),this.attackModifierDeck.current!=V.current&&(this.attackModifierDeck.current=V.current,gt=!0),(this.attackModifierDeck.attackModifiers.length!=V.attackModifiers.length||!this.attackModifierDeck.attackModifiers.map(B=>B.id).every((B,X)=>V.attackModifiers[X].id==B))&&(this.attackModifierDeck.attackModifiers=V.attackModifiers,gt=!0),(this.attackModifierDeck.cards.length!=V.cards.length||!this.attackModifierDeck.cards.map(B=>B.id).every((B,X)=>V.cards[X].id==B))&&(this.attackModifierDeck.cards=V.cards,gt=!0),gt}}class k{constructor(V,gt,B,X,Q,at,st,mt,Gt,ct,ot,Tt,ee,xt,vt,Ot,Y,G,nt,K,q,ft,h,M){this.name=V,this.edition=gt,this.marker=B,this.title=X,this.initiative=Q,this.experience=at,this.loot=st,this.exhausted=mt,this.level=Gt,this.off=ct,this.active=ot,this.health=Tt,this.maxHealth=ee,this.entityConditions=JSON.parse(JSON.stringify(xt)),this.markers=vt,this.summons=Ot,this.progress=JSON.parse(JSON.stringify(Y)),this.initiativeVisible=G,this.attackModifierDeckVisible=nt,this.fullview=K,this.number=q,this.attackModifierDeck=ft,this.donations=h,this.absent=M}}},5205:(yt,it,w)=>{w.d(it,{f:()=>t});class t{constructor(){this.experience=0,this.gold=0,this.loot=0,this.items=[],this.personalQuest=0,this.battleGoals=0,this.notes="",this.retired=!1,this.retirements=0,this.perks=[],this.donations=0}}},6998:(yt,it,w)=>{w.d(it,{a:()=>t});class t{constructor(J,$){this.level=J,this.health=$}}},8557:(yt,it,w)=>{w.d(it,{CP:()=>R,G3:()=>x,fT:()=>t,gP:()=>$,hT:()=>H,tT:()=>J});var t=(()=>{return(E=t||(t={})).stun="stun",E.immobilize="immobilize",E.disarm="disarm",E.wound="wound",E.muddle="muddle",E.poison="poison",E.invisible="invisible",E.strengthen="strengthen",E.curse="curse",E.bless="bless",E.regenerate="regenerate",E.chill="chill",E.infect="infect",E.ward="ward",E.bane="bane",E.brittle="brittle",E.impair="impair",E.rupture="rupture",E.poison_x="poison_x",E.wound_x="wound_x",t;var E})(),R=(()=>{return(E=R||(R={})).action="action",E.standard="standard",E.entity="entity",E.character="character",E.monster="monster",E.upgrade="upgrade",E.stack="stack",E.turn="turn",E.expire="expire",E.value="value",E.clearHeal="clearHeal",E.preventHeal="preventHeal",E.apply="apply",E.positive="positive",E.negative="negative",R;var E})(),J=(()=>{return(E=J||(J={})).normal="normal",E.expire="expire",E.turn="turn",J;var E})();class ${constructor(F,k=1){this.types=[],this.value=1,this.name=F,this.value=k,this.types.push(R.action),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.ward,t.rupture,t.poison_x,t.wound_x].indexOf(this.name)&&this.types.push(R.entity),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.impair,t.rupture,t.ward].indexOf(this.name)&&this.types.push(R.standard),(-1!=this.types.indexOf(R.entity)||-1!=[t.chill,t.impair,t.ward].indexOf(this.name))&&this.types.push(R.character),-1!=this.types.indexOf(R.entity)&&this.types.push(R.monster),-1!=[t.poison_x,t.wound_x].indexOf(this.name)&&(this.types.push(R.upgrade),this.types.push(R.value)),-1!=[t.chill].indexOf(this.name)&&this.types.push(R.stack),-1!=[t.wound,t.wound_x,t.regenerate].indexOf(this.name)&&this.types.push(R.turn),-1!=[t.wound,t.wound_x,t.poison,t.poison_x,t.bane,t.brittle,t.infect,t.rupture].indexOf(this.name)&&this.types.push(R.clearHeal),-1!=[t.poison,t.poison_x,t.ward,t.brittle].indexOf(this.name)&&this.types.push(R.apply),-1!=[t.poison,t.poison_x,t.infect].indexOf(this.name)&&this.types.push(R.preventHeal),-1!=[t.stun,t.immobilize,t.disarm,t.muddle,t.invisible,t.strengthen,t.impair].indexOf(this.name)&&this.types.push(R.expire),-1!=[t.regenerate,t.ward,t.invisible,t.strengthen,t.bless].indexOf(this.name)&&this.types.push(R.positive),-1==this.types.indexOf(R.positive)&&this.types.push(R.negative)}}class H extends ${constructor(F,k=1){super(F,k),this.expired=!1,this.highlight=!1,this.state=J.normal}toModel(){return new rt(this.name,this.value,this.state,this.expired,this.highlight)}fromModel(F){this.name=F.name,this.value=F.value,this.state=F.state,this.expired=F.expired,this.highlight=F.highlight}}class rt{constructor(F,k,N,V,gt){this.highlight=!1,this.name=F,this.value=k,this.state=N,this.expired=V,this.highlight=gt}}const x=Object.values(t).map(E=>new $(E))},4922:(yt,it,w)=>{w.d(it,{W_:()=>t,fq:()=>R,gf:()=>$});var t=(()=>{return(H=t||(t={})).all="all",H.fire="fire",H.ice="ice",H.air="air",H.earth="earth",H.light="light",H.dark="dark",t;var H})(),R=(()=>{return(H=R||(R={})).strong="strong",H.waning="waning",H.inert="inert",H.new="new",R;var H})();class J{constructor(rt){this.state=R.inert,this.type=rt}}const $=[new J(t.fire),new J(t.ice),new J(t.air),new J(t.earth),new J(t.light),new J(t.dark)]},2944:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GB:()=>EntityExpressionRegex,HY:()=>EntityValueRegex,j9:()=>EntityValueFunction});var _businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3640),_Character__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(641);const EntityExpressionRegex=/^([xCL0-9\+\/\-\*\(\)]+)$/,EntityValueRegex=/\[([xCL0-9\+\/\-\*\(\)]+)(\{(.*)\})?\]/;function EntityValueFunction(value,L){if(!value)return 0;let expression=value,func;const match=value.match(EntityValueRegex);match&&match[0].length==value.length&&(expression=match[1],func=match[3]);let C=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.figures.filter(yt=>yt instanceof _Character__WEBPACK_IMPORTED_MODULE_1__.z).length;C<1&&(C=1),null==L&&(L=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.level),expression=expression.replace(/[x]/g,"*"),expression=expression.replace(/[C]/g,""+C),expression=expression.replace(/[L]/g,""+L);let result=eval(expression);if(func&&func.startsWith("%")&&(func=func.replace("%","")),func)switch(func){case"math.ceil":result=Math.ceil(result);break;case"math.floor":result=Math.floor(result);break;default:console.error("Unknown expression: "+func+"("+match+")")}return Math.round(result)}},1412:(yt,it,w)=>{w.d(it,{o:()=>R,r:()=>t});var t=(()=>{return(J=t||(t={})).deck="deck",J.stat="stat",J.monsterType="monsterType",J.unknown="unknown",t;var J})();class R{constructor($,...H){this.type=$,this.args=H}}},83:(yt,it,w)=>{w.d(it,{D2:()=>N,i4:()=>V,lA:()=>k});var t=w(3640),R=w(554),J=w(62),$=w(641),H=w(4922),rt=w(1502),x=w(8386),E=w(2721),F=w(7918);class k{constructor(){this.edition=void 0,this.figures=[],this.state=N.draw,this.scenario=void 0,this.sections=[],this.level=1,this.levelCalculation=!0,this.levelAdjustment=0,this.bonusAdjustment=0,this.ge5Player=!0,this.round=0,this.playSeconds=0,this.totalSeconds=0,this.monsterAttackModifierDeck=new J.ut,this.allyAttackModifierDeck=new J.ut,this.solo=!1,this.elementBoard=JSON.parse(JSON.stringify(H.gf)),this.party=new E.f,this.parties=[this.party]}toModel(){return new V(this.edition,this.figures.map(B=>B.name),this.figures.filter(B=>B instanceof $.z).map(B=>B.toModel()),this.figures.filter(B=>B instanceof rt.Q).map(B=>B.toModel()),this.figures.filter(B=>B instanceof x.C).map(B=>B.toModel()),this.state,this.scenario&&t.v.scenarioManager.toModel(this.scenario,this.scenario.custom,this.scenario.custom?this.scenario.name:"")||void 0,this.sections.map(B=>t.v.scenarioManager.toModel(B)),this.level,this.levelCalculation,this.levelAdjustment,this.bonusAdjustment,this.ge5Player,this.round,this.playSeconds,this.totalSeconds,this.monsterAttackModifierDeck.toModel(),this.allyAttackModifierDeck.toModel(),this.elementBoard,this.solo,this.party,this.parties)}fromModel(B,X=!1){if(this.edition=B.edition,this.figures=this.figures.filter(Q=>-1!=B.characters.map(at=>at.name).indexOf(Q.name)||-1!=B.monsters.map(at=>at.name).indexOf(Q.name)||-1!=B.objectives.map(at=>at.name).indexOf(Q.name)),B.characters.forEach(Q=>{let at=this.figures.find(st=>st instanceof $.z&&st.name==Q.name&&st.edition==Q.edition);at||(at=new $.z(t.v.getCharacterData(Q.name,Q.edition),Q.level),this.figures.push(at)),at.fromModel(Q)}),B.monsters.forEach(Q=>{let at=this.figures.find(st=>st instanceof rt.Q&&st.name==Q.name&&st.edition==Q.edition);at||(at=new rt.Q(t.v.getMonsterData(Q.name,Q.edition)),this.figures.push(at)),at.fromModel(Q)}),B.objectives.forEach(Q=>{let at=this.figures.find(st=>st instanceof x.C&&st.id==Q.id);if(!at){if(!Q.id)for(Q.id=0;this.figures.some(st=>st instanceof x.C&&st.id==Q.id);)Q.id++;at=new x.C(Q.id),this.figures.push(at)}at.fromModel(Q)}),this.figures=this.figures.filter(Q=>!(Q instanceof x.C)||B.objectives.some(at=>at.id==Q.id)),this.figures.sort((Q,at)=>B.figures.indexOf(Q.name)-B.figures.indexOf(at.name)),this.state=B.state,B.scenario){const Q=t.v.scenarioManager.scenarioDataForModel(B.scenario);this.scenario=Q?new F.$(Q,B.scenario.isCustom):void 0}else this.scenario=void 0;this.sections=[],B.sections.forEach(Q=>{const at=t.v.scenarioManager.sectionDataForModel(Q);at&&this.sections.push(at)}),this.level=B.level,null!=R.r.settings.levelCalculation&&(B.levelCalculation=R.r.settings.levelCalculation,R.r.settings.levelCalculation=void 0,R.r.storeSettings()),null!=R.r.settings.levelAdjustment&&(B.levelAdjustment=R.r.settings.levelAdjustment,R.r.settings.levelAdjustment=void 0,R.r.storeSettings()),null!=R.r.settings.bonusAdjustment&&(B.bonusAdjustment=R.r.settings.bonusAdjustment,R.r.settings.bonusAdjustment=void 0,R.r.storeSettings()),null!=R.r.settings.ge5Player&&(B.ge5Player=R.r.settings.ge5Player,R.r.settings.ge5Player=void 0,R.r.storeSettings()),this.levelCalculation=B.levelCalculation,this.levelAdjustment=B.levelAdjustment,this.bonusAdjustment=B.bonusAdjustment,this.ge5Player=B.ge5Player,this.round=B.round,B.playSeconds>this.playSeconds&&(this.playSeconds=B.playSeconds),B.totalSeconds>this.totalSeconds&&(this.totalSeconds=B.totalSeconds),this.monsterAttackModifierDeck=this.monsterAttackModifierDeck||new J.ut,B.monsterAttackModifierDeck&&B.monsterAttackModifierDeck.cards&&B.monsterAttackModifierDeck.cards.length>0&&this.monsterAttackModifierDeck.fromModel(B.monsterAttackModifierDeck),B.attackModifier&&B.attackModifiers&&this.monsterAttackModifierDeck.fromModel(new J.fy(B.attackModifier,B.attackModifiers)),this.allyAttackModifierDeck=this.allyAttackModifierDeck||new J.ut,B.allyAttackModifierDeck&&B.allyAttackModifierDeck.cards&&B.allyAttackModifierDeck.cards.length>0&&this.allyAttackModifierDeck.fromModel(B.allyAttackModifierDeck),this.elementBoard=this.elementBoard||H.gf,B.elementBoard&&B.elementBoard.forEach((Q,at)=>this.elementBoard[at].state=Q.state),B.newElements.forEach(Q=>{const at=this.elementBoard.find(st=>st.type==Q);at&&(at.state=H.fq.new)}),B.strongElements.forEach(Q=>{const at=this.elementBoard.find(st=>st.type==Q);at&&(at.state=H.fq.strong)}),B.elements.forEach(Q=>{const at=this.elementBoard.find(st=>st.type==Q);at&&(at.state=H.fq.waning)}),this.solo=B.solo,this.party=B.party?Object.assign(new E.f,B.party):new E.f,this.parties=[this.party],B.parties&&B.parties.forEach(Q=>{Q.id!=this.party.id&&this.parties.push(Object.assign(new E.f,Q))})}}var N=(()=>{return(gt=N||(N={})).draw="draw",gt.next="next",N;var gt})();class V{constructor(B,X=[],Q=[],at=[],st=[],mt=N.next,Gt,ct=[],ot=0,Tt=!0,ee=0,xt=0,vt=!0,Ot=0,Y=0,G=0,nt=new J.fy(-1,J.u$),K=new J.fy(-1,J.u$),q=[],ft=!1,h=new E.f,M=[]){this.sections=[],this.newElements=[],this.strongElements=[],this.elements=[],this.edition=B,this.figures=X,this.characters=Q,this.monsters=at,this.objectives=st,this.state=mt,this.scenario=Gt,this.sections=ct,this.level=ot,this.levelCalculation=Tt,this.levelAdjustment=ee,this.bonusAdjustment=xt,this.ge5Player=vt,this.round=Ot,this.playSeconds=Y,this.totalSeconds=G,this.monsterAttackModifierDeck=nt,this.allyAttackModifierDeck=K,this.elementBoard=JSON.parse(JSON.stringify(q)),this.solo=ft,this.party=JSON.parse(JSON.stringify(h)),this.parties=JSON.parse(JSON.stringify(M))}}},1502:(yt,it,w)=>{w.d(it,{Q:()=>H});var t=w(982),R=w(1599),J=w(3640),$=w(2679);class H extends R.A{constructor(E){if(super(E.name,E.count,E.baseStat,E.stats,E.edition,E.deck,E.boss,E.flying,E.thumbnail,E.thumbnailUrl,E.spoiler),this.summonColor=$.mp.blue,this.level=1,this.off=!1,this.active=!1,this.drawExtra=!1,this.ability=-1,this.abilities=[],this.entities=[],this.isAlly=!1,this.errors=E.errors,E.baseStat)for(let F of E.stats){if(!F.health&&0!=F.health&&(F.health=E.baseStat.health||0),!F.movement&&0!=F.movement&&(F.movement=E.baseStat.movement||0),!F.attack&&0!=F.attack&&(F.attack=E.baseStat.attack||0),!F.range&&0!=F.range&&(F.range=E.baseStat.range||0),F.actions||(F.actions=Object.assign([],E.baseStat.actions)),F.immunities||(F.immunities=Object.assign([],E.baseStat.immunities)),!F.special&&(F.special=[],E.baseStat.special))for(let k of E.baseStat.special)F.special.push(Object.assign([],k));F.note||(F.note=E.baseStat.note),F.type||(F.type=E.baseStat.type)}}getInitiative(){const E=J.v.monsterManager.getAbility(this);return this.entities.length>0&&this.entities.some(F=>!F.dead&&F.health>0)&&E&&E.initiative||100}toModel(){return new rt(this.name,this.edition,this.level,this.off,this.active,this.drawExtra,this.ability,this.abilities,this.entities.map(E=>E.toModel()),this.isAlly)}fromModel(E){if(this.edition=E.edition,!this.edition){const F=J.v.monstersData(!0).find(k=>k.name==E.name);this.edition=F?F.edition:""}this.level=E.level,this.off=E.off,this.active=E.active,this.drawExtra=E.drawExtra,this.abilities=E.abilities&&E.abilities.length>0&&E.abilities||J.v.abilities(this)&&J.v.abilities(this).map((F,k)=>k)||[],this.ability=E.ability,this.entities=this.entities.filter(F=>-1!=E.entities.map(k=>k.number).indexOf(F.number)),E.entities.forEach(F=>{let k=this.entities.find(N=>N.number==F.number);k||(k=new t.g(F.number,F.type,this),this.entities.push(k)),k.fromModel(F)}),this.isAlly=E.isAlly}}class rt{constructor(E,F,k,N,V,gt,B,X,Q,at){this.name=E,this.edition=F,this.level=k,this.off=N,this.active=V,this.drawExtra=gt,this.ability=B,this.abilities=X,this.entities=Q,this.isAlly=at}}},982:(yt,it,w)=>{w.d(it,{g:()=>rt});var t=w(8557),R=w(2944),J=w(1412),$=w(9239),H=w(2679);class rt{constructor(F,k,N){this.dead=!1,this.summon=H.HY.false,this.active=!1,this.off=!1,this.entityConditions=[],this.markers=[],this.number=F,this.type=k;const V=N.stats.find(gt=>gt.level==N.level&&gt.type==k);V?this.stat=V:(this.stat=new $.c(k,N.level,0,0,0,0),N.errors=N.errors||[],!N.errors.find(gt=>gt.type==J.r.unknown)&&!N.errors.find(gt=>gt.type==J.r.stat)&&(console.error("Could not find '"+k+"' stats for monster: "+N.name+" level: "+N.level),N.errors.push(new J.o(J.r.stat,"monster",N.name,N.edition,k,""+N.level)))),this.maxHealth="number"==typeof this.stat.health?this.stat.health:(0,R.j9)(this.stat.health,N.level),this.health=this.maxHealth,this.level=N.level}toModel(){return new x(this.number,this.type,this.dead,this.summon,this.active,this.off,this.health,this.maxHealth,this.entityConditions.map(F=>F.toModel()),this.markers)}fromModel(F){this.dead=F.dead,this.summon=F.summon,this.active=F.active,this.off=F.off,this.health=F.health,this.maxHealth=F.maxHealth,this.entityConditions=[],F.entityConditions&&(this.entityConditions=F.entityConditions.map(k=>{let N=new t.hT(k.name,k.value);return N.fromModel(k),N})),this.markers=F.markers}}class x{constructor(F,k,N,V,gt,B,X,Q,at,st){this.number=F,this.type=k,this.dead=N,this.summon=V,this.active=gt,this.off=B,this.health=X,this.maxHealth=Q,this.entityConditions=JSON.parse(JSON.stringify(at)),this.markers=JSON.parse(JSON.stringify(st))}}},9239:(yt,it,w)=>{w.d(it,{c:()=>t});class t{constructor(J,$,H,rt,x,E,F=[],k=[],N=[],V=""){this.type=J,this.level=$,this.health=H,this.movement=rt,this.attack=x,this.range=E,this.actions=F||[],this.immunities=k||[],this.special=N||[],this.note=V}}},7342:(yt,it,w)=>{w.d(it,{M:()=>t});var t=(()=>{return(R=t||(t={})).normal="normal",R.elite="elite",R.boss="boss",t;var R})()},8386:(yt,it,w)=>{w.d(it,{C:()=>R});var t=w(8557);class R{constructor(H){this.title="",this.exhausted=!1,this.escort=!1,this.name="",this.level=0,this.off=!1,this.active=!1,this.edition="",this.health=7,this.maxHealth=7,this.entityConditions=[],this.markers=[],this.initiative=99,this.id=H}getInitiative(){return this.exhausted||this.health<=0?100:this.initiative}toModel(){return new J(this.id,this.title,this.name,this.escort,this.level,this.exhausted,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(H=>H.toModel()),this.markers,this.initiative)}fromModel(H){this.id=H.id,this.title=H.title,this.name=H.name,this.escort=H.escort,this.level=H.level,this.exhausted=H.exhausted,this.off=H.off,this.active=H.active,this.health=H.health,this.maxHealth=H.maxHealth,this.entityConditions=[],H.entityConditions&&(this.entityConditions=H.entityConditions.map(rt=>{let x=new t.hT(rt.name,rt.value);return x.fromModel(rt),x})),this.markers=H.markers,this.initiative=H.initiative}}class J{constructor(H,rt,x,E,F,k,N,V,gt,B,X,Q,at){this.entityConditions=[],this.markers=[],this.id=H,this.title=rt,this.name=x,this.escort=E,this.level=F,this.exhausted=k,this.off=N,this.active=V,this.health=gt,this.maxHealth=B,this.entityConditions=JSON.parse(JSON.stringify(X)),this.markers=JSON.parse(JSON.stringify(Q)),this.initiative=at}}},2721:(yt,it,w)=>{w.d(it,{f:()=>t});class t{constructor(){this.id=0,this.name="",this.location="",this.notes="",this.achievements="",this.reputation=0,this.prosperity=0,this.scenarios=[],this.manualScenarios=[],this.campaignMode=!1,this.globalAchievements="",this.donations=0,this.characters=[]}}},1723:(yt,it,w)=>{w.d(it,{Ib:()=>$}),w(62);var $=(()=>{return(H=$||($={})).add="add",H.remove="remove",H.replace="replace",H.custom="custom",$;var H})()},7918:(yt,it,w)=>{w.d(it,{$:()=>R});var t=w(3951);class R extends t.t{constructor($,H=!1){super($.name,$.index,$.unlocks,$.blocks,$.requires,$.links,$.monsters,$.allies,$.objectives,$.edition,$.group,$.spoiler),this.custom=H}}},3692:(yt,it,w)=>{w.d(it,{Z:()=>t});class t{constructor(){this.calculate=!0,this.calculateStats=!0,this.abilityNumbers=!0,this.eliteFirst=!0,this.expireConditions=!0,this.applyConditions=!0,this.activeApplyConditions=!0,this.moveElements=!0,this.hideStats=!0,this.randomStandees=!1,this.activeStandees=!0,this.allyAttackModifierDeck=!0,this.initiativeRequired=!0,this.levelCalculation=void 0,this.levelAdjustment=void 0,this.bonusAdjustment=void 0,this.ge5Player=void 0,this.disableStandees=!1,this.fullscreen=!1,this.fhStyle=!1,this.autoscroll=!0,this.disableColumns=!1,this.dragValues=!0,this.hideAbsent=!1,this.hints=!0,this.zoom=100,this.barsize=1,this.fontsize=1,this.locale="en",this.editionDataUrls=[],this.excludeEditionDataUrls=[],this.spoilers=[],this.browserNavigation=!1,this.serverAutoconnect=!0,this.serverSettings=!1,this.serverWss=!1,this.maxUndo=50}}},2679:(yt,it,w)=>{w.d(it,{HY:()=>R,eU:()=>$,mp:()=>J});var t=w(8557),R=(()=>{return(rt=R||(R={})).new="new",rt.true="true",rt.false="false",R;var rt})(),J=(()=>{return(rt=J||(J={})).blue="blue",rt.green="green",rt.yellow="yellow",rt.orange="orange",rt.white="white",rt.purple="purple",rt.pink="pink",rt.red="red",rt.custom="custom",J;var rt})();class ${constructor(x,E,F,k,N=2,V=0,gt=0,B=0){this.dead=!1,this.state=R.new,this.init=!0,this.entityConditions=[],this.markers=[],this.name=x,this.level=E,this.number=F,this.color=k,this.health=N,this.maxHealth=N,this.attack=V,this.movement=gt,this.range=B}toModel(){return new H(this.name,this.number,this.color,this.attack,this.movement,this.range,this.dead,this.state,this.level,this.health,this.maxHealth,this.entityConditions.map(x=>x.toModel()),this.markers)}fromModel(x){this.name=x.name||"",this.number=x.number,this.color=x.color,this.attack=x.attack,this.movement=x.movement,this.range=x.range,this.dead=x.dead,this.state=x.state,this.level=x.level,this.health=x.health,this.maxHealth=x.maxHealth,this.entityConditions=[],x.entityConditions&&(this.entityConditions=x.entityConditions.map(E=>{let F=new t.hT(E.name,E.value);return F.fromModel(E),F})),this.markers=x.markers,this.init=!1}}class H{constructor(x,E,F,k,N,V,gt,B,X,Q,at,st,mt){this.name=x,this.number=E,this.color=F,this.attack=k,this.movement=N,this.range=V,this.dead=gt,this.state=B,this.level=X,this.health=Q,this.maxHealth=at,this.entityConditions=st,this.markers=mt}}},2713:(yt,it,w)=>{w.d(it,{x:()=>R});class R{constructor($){this.name="",this.stats=[],this.availableSummons=[],this.color="#000000",this.marker=!1,this.deck="",this.perks=[],this.edition="",this.spoiler=!1,this.replace=!1,$&&(this.errors=$.errors||[],this.name=$.name,this.stats=$.stats||[],this.characterClass=$.characterClass||void 0,this.availableSummons=$.availableSummons||[],this.edition=$.edition||"",this.iconUrl=$.iconUrl||void 0,this.thumbnailUrl=$.thumbnailUrl||void 0,this.color=$.color||"#00000",this.marker=$.marker||!1,this.spoiler=$.spoiler||!1,this.deck=$.name,$.deck&&(this.deck=$.deck),this.perks=$.perks||[])}}},1599:(yt,it,w)=>{w.d(it,{A:()=>t});class t{constructor(J,$,H,rt,x,E,F=!1,k=!1,N,V,gt=!1){this.errors=[],this.hidden=!1,this.replace=!1,this.errors=[],this.name=J,this.count=$,this.baseStat=H,this.stats=rt,this.edition=x,this.deck=J,E&&(this.deck=E),this.boss=F,this.flying=k,this.thumbnail=N,this.thumbnailUrl=V,this.spoiler=!0}}},3951:(yt,it,w)=>{w.d(it,{_:()=>R,t:()=>t});class t{constructor($,H,rt,x,E,F,k,N,V,gt,B,X=!1){this.initial=!1,this.name=$,this.index=H,this.unlocks=rt,this.blocks=x,this.requires=E,this.links=F,this.monsters=k,this.allies=N,this.edition=gt,this.objectives=V,this.group=B,this.spoiler=X}}class R{constructor($,H,rt,x=!1,E=""){this.index=$,this.edition=H,this.group=rt,this.isCustom=x,this.custom=E}}},8817:(yt,it,w)=>{var t=w(1571);
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let R=null;function J(){return R}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const x=new t.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let E=(()=>{class n{historyGo(e){throw new Error("Not implemented")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return function F(){return(0,t.LFG)(N)}()},providedIn:"platform"}),n})(),N=(()=>{class n extends E{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return J().getBaseHref(this._doc)}onPopState(e){const i=J().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){const i=J().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,i,c){V()?this._history.pushState(e,i,c):this.location.hash=c}replaceState(e,i,c){V()?this._history.replaceState(e,i,c):this.location.hash=c}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:function(){return function gt(){return new N((0,t.LFG)(x))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),n})();function V(){return!!window.history.pushState}function B(n,r){if(0==n.length)return r;if(0==r.length)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,2==e?n+r.substring(1):1==e?n+r:n+"/"+r}function X(n){const r=n.match(/#|\?|$/),e=r&&r.index||n.length;return n.slice(0,e-("/"===n[e-1]?1:0))+n.slice(e)}function Q(n){return n&&"?"!==n[0]?"?"+n:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let at=(()=>{class n{historyGo(e){throw new Error("Not implemented")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return(0,t.f3M)(mt)},providedIn:"root"}),n})();const st=new t.OlP("appBaseHref");let mt=(()=>{class n extends at{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??(0,t.f3M)(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return B(this._baseHref,e)}path(e=!1){const i=this._platformLocation.pathname+Q(this._platformLocation.search),c=this._platformLocation.hash;return c&&e?`${i}${c}`:i}pushState(e,i,c,u){const p=this.prepareExternalUrl(c+Q(u));this._platformLocation.pushState(e,i,p)}replaceState(e,i,c,u){const p=this.prepareExternalUrl(c+Q(u));this._platformLocation.replaceState(e,i,p)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(E),t.LFG(st,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),ct=(()=>{class n{constructor(e){this._subject=new t.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const i=this._locationStrategy.getBaseHref();this._baseHref=X(ee(i)),this._locationStrategy.onPopState(c=>{this._subject.emit({url:this.path(!0),pop:!0,state:c.state,type:c.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Q(i))}normalize(e){return n.stripTrailingSlash(function Tt(n,r){return n&&r.startsWith(n)?r.substring(n.length):r}(this._baseHref,ee(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",c=null){this._locationStrategy.pushState(c,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Q(i)),c)}replaceState(e,i="",c=null){this._locationStrategy.replaceState(c,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Q(i)),c)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{const i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(c=>c(e,i))}subscribe(e,i,c){return this._subject.subscribe({next:e,error:i,complete:c})}}return n.normalizeQueryParams=Q,n.joinWithSlash=B,n.stripTrailingSlash=X,n.\u0275fac=function(e){return new(e||n)(t.LFG(at))},n.\u0275prov=t.Yz7({token:n,factory:function(){return function ot(){return new ct((0,t.LFG)(at))}()},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ee(n){return n.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let It=(()=>{class n{constructor(e,i,c,u){this._iterableDiffers=e,this._keyValueDiffers=i,this._ngEl=c,this._renderer=u,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&((0,t.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(i=>this._toggleClass(i.key,i.currentValue)),e.forEachChangedItem(i=>this._toggleClass(i.key,i.currentValue)),e.forEachRemovedItem(i=>{i.previousValue&&this._toggleClass(i.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(i=>{if("string"!=typeof i.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,t.AaK)(i.item)}`);this._toggleClass(i.item,!0)}),e.forEachRemovedItem(i=>this._toggleClass(i.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(i=>this._toggleClass(i,!0)):Object.keys(e).forEach(i=>this._toggleClass(i,!!e[i])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(i=>this._toggleClass(i,!1)):Object.keys(e).forEach(i=>this._toggleClass(i,!1)))}_toggleClass(e,i){(e=e.trim())&&e.split(/\s+/g).forEach(c=>{i?this._renderer.addClass(this._ngEl.nativeElement,c):this._renderer.removeClass(this._ngEl.nativeElement,c)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.ZZ4),t.Y36(t.aQg),t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ce{constructor(r,e,i,c){this.$implicit=r,this.ngForOf=e,this.index=i,this.count=c}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Yt=(()=>{class n{constructor(e,i,c){this._viewContainer=e,this._template=i,this._differs=c,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const i=this._viewContainer;e.forEachOperation((c,u,p)=>{if(null==c.previousIndex)i.createEmbeddedView(this._template,new ce(c.item,this._ngForOf,-1,-1),null===p?void 0:p);else if(null==p)i.remove(null===u?void 0:u);else if(null!==u){const b=i.get(u);i.move(b,p),yu(b,c)}});for(let c=0,u=i.length;c<u;c++){const b=i.get(c).context;b.index=c,b.count=u,b.ngForOf=this._ngForOf}e.forEachIdentityChange(c=>{yu(i.get(c.currentIndex),c)})}static ngTemplateContextGuard(e,i){return!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(t.ZZ4))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),n})();function yu(n,r){n.context.$implicit=r.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let qt=(()=>{class n{constructor(e,i){this._viewContainer=e,this._context=new pr,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){mr("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){mr("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,i){return!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),n})();class pr{constructor(){this.$implicit=null,this.ngIf=null}}function mr(n,r){if(r&&!r.createEmbeddedView)throw new Error(`${n} must be a TemplateRef, but received '${(0,t.AaK)(r)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ii{constructor(r,e){this._viewContainerRef=r,this._templateRef=e,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(r){r&&!this._created?this.create():!r&&this._created&&this.destroy()}}let pe=(()=>{class n{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const i=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let i=0;i<this._defaultViews.length;i++)this._defaultViews[i].enforceState(e)}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0}),n})(),lo=(()=>{class n{constructor(e,i,c){this.ngSwitch=c,c._addCase(),this._view=new ii(e,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(pe,9))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0}),n})(),Ee=(()=>{class n{constructor(e,i,c){c._addDefault(new ii(e,i))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(pe,9))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitchDefault",""]],standalone:!0}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let zs=(()=>{class n{transform(e,i,c){if(null==e)return null;if(!this.supports(e))
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
throw function zn(n,r){return new t.vHH(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return e.slice(i,c)}supports(e){return"string"==typeof e||Array.isArray(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"slice",type:n,pure:!1,standalone:!0}),n})(),Vm=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ou="browser";function _r(n){return n===Ou}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ys extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fc extends class rt{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function H(n){R||(R=n)}(new Ys)}onAndCancel(r,e,i){return r.addEventListener(e,i,!1),()=>{r.removeEventListener(e,i,!1)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return(e=e||this.getDefaultDocument()).createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return"window"===e?window:"document"===e?r:"body"===e?r.body:null}getBaseHref(r){const e=function Nu(){return uo=uo||document.querySelector("base"),uo?uo.getAttribute("href"):null}();return null==e?null:function Zc(n){br=br||document.createElement("a"),br.setAttribute("href",n);const r=br.pathname;return"/"===r.charAt(0)?r:`/${r}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}resetBaseElement(){uo=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function fr(n,r){r=encodeURIComponent(r);for(const e of n.split(";")){const i=e.indexOf("="),[c,u]=-1==i?[e,""]:[e.slice(0,i),e.slice(i+1)];if(c.trim()===r)return decodeURIComponent(u)}return null}(document.cookie,r)}}let br,uo=null;const Fu=new t.OlP("TRANSITION_ID"),Ke=[{provide:t.ip1,useFactory:function e_(n,r,e){return()=>{e.get(t.CZH).donePromise.then(()=>{const i=J(),c=r.querySelectorAll(`style[ng-transition="${n}"]`);for(let u=0;u<c.length;u++)i.remove(c[u])})}},deps:[Fu,x,t.zs3],multi:!0}];let Ce=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $s=new t.OlP("EventManagerPlugins");let Ks=(()=>{class n{constructor(e,i){this._zone=i,this._eventNameToPlugin=new Map,e.forEach(c=>c.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,i,c){return this._findPluginFor(i).addEventListener(e,i,c)}addGlobalEventListener(e,i,c){return this._findPluginFor(i).addGlobalEventListener(e,i,c)}getZone(){return this._zone}_findPluginFor(e){const i=this._eventNameToPlugin.get(e);if(i)return i;const c=this._plugins;for(let u=0;u<c.length;u++){const p=c[u];if(p.supports(e))return this._eventNameToPlugin.set(e,p),p}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG($s),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class Zu{constructor(r){this._doc=r}addGlobalEventListener(r,e,i){const c=J().getGlobalEventTarget(this._doc,r);if(!c)throw new Error(`Unsupported event target ${c} for event ${e}`);return this.addEventListener(c,e,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ru=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const i=new Set;e.forEach(c=>{this._stylesSet.has(c)||(this._stylesSet.add(c),i.add(c))}),this.onStylesAdded(i)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),Or=(()=>{class n extends Ru{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,i,c){e.forEach(u=>{const p=this._doc.createElement("style");p.textContent=u,c.push(i.appendChild(p))})}addHost(e){const i=[];this._addStylesToHost(this._stylesSet,e,i),this._hostNodes.set(e,i)}removeHost(e){const i=this._hostNodes.get(e);i&&i.forEach(Vu),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((i,c)=>{this._addStylesToHost(e,c,i)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(Vu))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function Vu(n){J().remove(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ho={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},fo=/%COMP%/g;function Xs(n,r,e){for(let i=0;i<r.length;i++){let c=r[i];Array.isArray(c)?Xs(n,c,e):(c=c.replace(fo,n),e.push(c))}return e}function Uu(n){return r=>{if("__ngUnwrap__"===r)return n;!1===n(r)&&(r.preventDefault(),r.returnValue=!1)}}let wr=(()=>{class n{constructor(e,i,c){this.eventManager=e,this.sharedStylesHost=i,this.appId=c,this.rendererByCompId=new Map,this.defaultRenderer=new Rc(e)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;switch(i.encapsulation){case t.ifc.Emulated:{let c=this.rendererByCompId.get(i.id);return c||(c=new ea(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,c)),c.applyToHost(e),c}case 1:case t.ifc.ShadowDom:return new Hu(this.eventManager,this.sharedStylesHost,e,i);default:if(!this.rendererByCompId.has(i.id)){const c=Xs(i.id,i.styles,[]);this.sharedStylesHost.addStyles(c),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Ks),t.LFG(Or),t.LFG(t.AFp))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class Rc{constructor(r){this.eventManager=r,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(r,e){return e?document.createElementNS(ho[e]||e,r):document.createElement(r)}createComment(r){return document.createComment(r)}createText(r){return document.createTextNode(r)}appendChild(r,e){(r_(r)?r.content:r).appendChild(e)}insertBefore(r,e,i){r&&(r_(r)?r.content:r).insertBefore(e,i)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let i="string"==typeof r?document.querySelector(r):r;if(!i)throw new Error(`The selector "${r}" did not match any elements`);return e||(i.textContent=""),i}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,i,c){if(c){e=c+":"+e;const u=ho[c];u?r.setAttributeNS(u,e,i):r.setAttribute(e,i)}else r.setAttribute(e,i)}removeAttribute(r,e,i){if(i){const c=ho[i];c?r.removeAttributeNS(c,e):r.removeAttribute(`${i}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,i,c){c&(t.JOm.DashCase|t.JOm.Important)?r.style.setProperty(e,i,c&t.JOm.Important?"important":""):r.style[e]=i}removeStyle(r,e,i){i&t.JOm.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,i){r[e]=i}setValue(r,e){r.nodeValue=e}listen(r,e,i){return"string"==typeof r?this.eventManager.addGlobalEventListener(r,e,Uu(i)):this.eventManager.addEventListener(r,e,Uu(i))}}function r_(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class ea extends Rc{constructor(r,e,i,c){super(r),this.component=i;const u=Xs(c+"-"+i.id,i.styles,[]);e.addStyles(u),this.contentAttr=function bi(n){return"_ngcontent-%COMP%".replace(fo,n)}(c+"-"+i.id),this.hostAttr=function xr(n){return"_nghost-%COMP%".replace(fo,n)}(c+"-"+i.id)}applyToHost(r){super.setAttribute(r,this.hostAttr,"")}createElement(r,e){const i=super.createElement(r,e);return super.setAttribute(i,this.contentAttr,""),i}}class Hu extends Rc{constructor(r,e,i,c){super(r),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const u=Xs(c.id,c.styles,[]);for(let p=0;p<u.length;p++){const b=document.createElement("style");b.textContent=u[p],this.shadowRoot.appendChild(b)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,i){return super.insertBefore(this.nodeOrShadowRoot(r),e,i)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Bu=(()=>{class n extends Zu{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,c){return e.addEventListener(i,c,!1),()=>this.removeEventListener(e,i,c)}removeEventListener(e,i,c){return e.removeEventListener(i,c)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dr=["alt","control","meta","shift"],qu={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ju={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let po=(()=>{class n extends Zu{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,i,c){const u=n.parseEventName(i),p=n.eventCallback(u.fullKey,c,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>J().onAndCancel(e,u.domEventName,p))}static parseEventName(e){const i=e.toLowerCase().split("."),c=i.shift();if(0===i.length||"keydown"!==c&&"keyup"!==c)return null;const u=n._normalizeKey(i.pop());let p="",b=i.indexOf("code");if(b>-1&&(i.splice(b,1),p="code."),Dr.forEach(j=>{const W=i.indexOf(j);W>-1&&(i.splice(W,1),p+=j+".")}),p+=u,0!=i.length||0===u.length)return null;const T={};return T.domEventName=c,T.fullKey=p,T}static matchEventFullKeyCode(e,i){let c=qu[e.key]||e.key,u="";return i.indexOf("code.")>-1&&(c=e.code,u="code."),!(null==c||!c)&&(c=c.toLowerCase()," "===c?c="space":"."===c&&(c="dot"),Dr.forEach(p=>{p!==c&&(0,Ju[p])(e)&&(u+=p+".")}),u+=c,u===i)}static eventCallback(e,i,c){return u=>{n.matchEventFullKeyCode(u,e)&&c.runGuarded(()=>i(u))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const a_=(0,t.eFA)(t._c5,"browser",[{provide:t.Lbi,useValue:Ou},{provide:t.g9A,useValue:function Qu(){Ys.makeCurrent()},multi:!0},{provide:x,useFactory:function s_(){return(0,t.RDi)(document),document},deps:[]}]),mo=new t.OlP(""),na=[{provide:t.rWj,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yi{addToWindow(r){t.dqk.getAngularTestability=(i,c=!0)=>{const u=r.findTestabilityInTree(i,c);if(null==u)throw new Error("Could not find testability for element.");return u},t.dqk.getAllAngularTestabilities=()=>r.getAllTestabilities(),t.dqk.getAllAngularRootElements=()=>r.getAllRootElements(),t.dqk.frameworkStabilizers||(t.dqk.frameworkStabilizers=[]),t.dqk.frameworkStabilizers.push(i=>{const c=t.dqk.getAllAngularTestabilities();let u=c.length,p=!1;const b=function(T){p=p||T,u--,0==u&&i(p)};c.forEach(function(T){T.whenStable(b)})})}findTestabilityInTree(r,e,i){return null==e?null:r.getTestability(e)??(i?J().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}},deps:[]},{provide:t.lri,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]},{provide:t.dDg,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]}],ia=[{provide:t.zSh,useValue:"root"},{provide:t.qLn,useFactory:function Gu(){return new t.qLn},deps:[]},{provide:$s,useClass:Bu,multi:!0,deps:[x,t.R0b,t.Lbi]},{provide:$s,useClass:po,multi:!0,deps:[x]},{provide:wr,useClass:wr,deps:[Ks,Or,t.AFp]},{provide:t.FYo,useExisting:wr},{provide:Ru,useExisting:Or},{provide:Or,useClass:Or,deps:[x]},{provide:Ks,useClass:Ks,deps:[$s,t.R0b]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class U1{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,useClass:Ce,deps:[]},[]];let oa=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:t.AFp,useValue:e.appId},{provide:Fu,useExisting:t.AFp},Ke]}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(mo,12))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[...ia,...na],imports:[Vm,t.hGG]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */typeof window<"u"&&window;let f_=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new(e||n):t.LFG(p_),i},providedIn:"root"}),n})(),p_=(()=>{class n extends f_{constructor(e){super(),this._doc=e}sanitize(e,i){if(null==i)return null;switch(e){case t.q3G.NONE:return i;case t.q3G.HTML:return(0,t.qzn)(i,"HTML")?(0,t.z3N)(i):(0,t.EiD)(this._doc,String(i)).toString();case t.q3G.STYLE:return(0,t.qzn)(i,"Style")?(0,t.z3N)(i):i;case t.q3G.SCRIPT:if((0,t.qzn)(i,"Script"))return(0,t.z3N)(i);throw new Error("unsafe value used in a script context");case t.q3G.URL:return(0,t.qzn)(i,"URL")?(0,t.z3N)(i):(0,t.mCW)(String(i));case t.q3G.RESOURCE_URL:if((0,t.qzn)(i,"ResourceURL"))return(0,t.z3N)(i);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,t.JVY)(e)}bypassSecurityTrustStyle(e){return(0,t.L6k)(e)}bypassSecurityTrustScript(e){return(0,t.eBb)(e)}bypassSecurityTrustUrl(e){return(0,t.LAX)(e)}bypassSecurityTrustResourceUrl(e){return(0,t.pB0)(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new e:function K1(n){return new p_(n.get(x))}(t.LFG(t.zs3)),i},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function En(n){return null!=n&&"false"!=`${n}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function m_(n,r=0){return function W1(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?Number(n):r}function me(n){return Array.isArray(n)?n:[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Me(n){return null==n?"":"string"==typeof n?n:`${n}px`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function be(n){return n instanceof t.SBq?n.nativeElement:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var $t=w(7579),Re=w(3269),hn=w(2076);function Ji(...n){const r=(0,Re.yG)(n);return(0,hn.D)(n,r)}var je=w(8306),Sn=w(8421),Jc=w(5577),__=w(1144),In=w(576),Mn=w(4004);const{isArray:X1}=Array;function We(n){return(0,Mn.U)(r=>function ed(n,r){return X1(r)?n(...r):n(r)}(n,r))}const zc=["addListener","removeListener"],Co=["addEventListener","removeEventListener"],tb=["on","off"];function zi(n,r,e,i){if((0,In.m)(e)&&(i=e,e=void 0),i)return zi(n,r,e).pipe(We(i));const[c,u]=function M_(n){return(0,In.m)(n.addEventListener)&&(0,In.m)(n.removeEventListener)}(n)?Co.map(p=>b=>n[p](r,b,e)):function v_(n){return(0,In.m)(n.addListener)&&(0,In.m)(n.removeListener)}(n)?zc.map(nd(n,r)):function C_(n){return(0,In.m)(n.on)&&(0,In.m)(n.off)}(n)?tb.map(nd(n,r)):[];if(!c&&(0,__.z)(n))return(0,Jc.z)(p=>zi(p,r,e))((0,Sn.Xf)(n));if(!c)throw new TypeError("Invalid event target");return new je.y(p=>{const b=(...T)=>p.next(1<T.length?T:T[0]);return c(b),()=>u(b)})}function nd(n,r){return e=>i=>n[e](r,i)}var Ln=w(727);class y_ extends Ln.w0{constructor(r,e){super()}schedule(r,e=0){return this}}const Mo={setInterval(n,r,...e){const{delegate:i}=Mo;return i?.setInterval?i.setInterval(n,r,...e):setInterval(n,r,...e)},clearInterval(n){const{delegate:r}=Mo;return(r?.clearInterval||clearInterval)(n)},delegate:void 0};var sa=w(8737);class id extends y_{constructor(r,e){super(r,e),this.scheduler=r,this.work=e,this.pending=!1}schedule(r,e=0){var i;if(this.closed)return this;this.state=r;const c=this.id,u=this.scheduler;return null!=c&&(this.id=this.recycleAsyncId(u,c,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(u,this.id,e),this}requestAsyncId(r,e,i=0){return Mo.setInterval(r.flush.bind(r,this),i)}recycleAsyncId(r,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&Mo.clearInterval(e)}execute(r,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(r,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(r,e){let c,i=!1;try{this.work(r)}catch(u){i=!0,c=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),c}unsubscribe(){if(!this.closed){const{id:r,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,sa.P)(i,this),null!=r&&(this.id=this.recycleAsyncId(e,r,null)),this.delay=null,super.unsubscribe()}}}const si={schedule(n){let r=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=si;i&&(r=i.requestAnimationFrame,e=i.cancelAnimationFrame);const c=r(u=>{e=void 0,n(u)});return new Ln.w0(()=>e?.(c))},requestAnimationFrame(...n){const{delegate:r}=si;return(r?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:r}=si;return(r?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0},Ir={now:()=>(Ir.delegate||Date).now(),delegate:void 0};class Lr{constructor(r,e=Lr.now){this.schedulerActionCtor=r,this.now=e}schedule(r,e=0,i){return new this.schedulerActionCtor(this,r).schedule(i,e)}}Lr.now=Ir.now;class Gc extends Lr{constructor(r,e=Lr.now){super(r,e),this.actions=[],this._active=!1}flush(r){const{actions:e}=this;if(this._active)return void e.push(r);let i;this._active=!0;do{if(i=r.execute(r.state,r.delay))break}while(r=e.shift());if(this._active=!1,i){for(;r=e.shift();)r.unsubscribe();throw i}}}const Yc=new class b_ extends Gc{flush(r){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let c;r=r||i.shift();do{if(c=r.execute(r.state,r.delay))break}while((r=i[0])&&r.id===e&&i.shift());if(this._active=!1,c){for(;(r=i[0])&&r.id===e&&i.shift();)r.unsubscribe();throw c}}}(class Qc extends id{constructor(r,e){super(r,e),this.scheduler=r,this.work=e}requestAsyncId(r,e,i=0){return null!==i&&i>0?super.requestAsyncId(r,e,i):(r.actions.push(this),r._scheduled||(r._scheduled=si.requestAnimationFrame(()=>r.flush(void 0))))}recycleAsyncId(r,e,i=0){var c;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(r,e,i);const{actions:u}=r;null!=e&&(null===(c=u[u.length-1])||void 0===c?void 0:c.id)!==e&&(si.cancelAnimationFrame(e),r._scheduled=void 0)}});let $c,yo=1;const _e={};function Kc(n){return n in _e&&(delete _e[n],!0)}const od={setImmediate(n){const r=yo++;return _e[r]=!0,$c||($c=Promise.resolve()),$c.then(()=>Kc(r)&&n()),r},clearImmediate(n){Kc(n)}},{setImmediate:Nr,clearImmediate:O_}=od,ca={setImmediate(...n){const{delegate:r}=ca;return(r?.setImmediate||Nr)(...n)},clearImmediate(n){const{delegate:r}=ca;return(r?.clearImmediate||O_)(n)},delegate:void 0},Oi=(new class Wc extends Gc{flush(r){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let c;r=r||i.shift();do{if(c=r.execute(r.state,r.delay))break}while((r=i[0])&&r.id===e&&i.shift());if(this._active=!1,c){for(;(r=i[0])&&r.id===e&&i.shift();)r.unsubscribe();throw c}}}(class P_ extends id{constructor(r,e){super(r,e),this.scheduler=r,this.work=e}requestAsyncId(r,e,i=0){return null!==i&&i>0?super.requestAsyncId(r,e,i):(r.actions.push(this),r._scheduled||(r._scheduled=ca.setImmediate(r.flush.bind(r,void 0))))}recycleAsyncId(r,e,i=0){var c;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(r,e,i);const{actions:u}=r;null!=e&&(null===(c=u[u.length-1])||void 0===c?void 0:c.id)!==e&&(ca.clearImmediate(e),r._scheduled=void 0)}}),new Gc(id)),w_=Oi;var cn=w(4482),Se=w(5403),sd=w(3532);function Xc(n=0,r,e=w_){let i=-1;return null!=r&&((0,sd.K)(r)?e=r:i=r),new je.y(c=>{let u=function D_(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;u<0&&(u=0);let p=0;return e.schedule(function(){c.closed||(c.next(p++),0<=i?this.schedule(void 0,i):c.complete())},u)})}function Qi(n,r=Oi){return function ga(n){return(0,cn.e)((r,e)=>{let i=!1,c=null,u=null,p=!1;const b=()=>{if(u?.unsubscribe(),u=null,i){i=!1;const j=c;c=null,e.next(j)}p&&e.complete()},T=()=>{u=null,p&&e.complete()};r.subscribe((0,Se.x)(e,j=>{i=!0,c=j,u||(0,Sn.Xf)(n(j)).subscribe(u=(0,Se.x)(e,b,T))},()=>{p=!0,(!i||!u||u.closed)&&e.complete()}))})}(()=>Xc(n,r))}function yn(n,r){return(0,cn.e)((e,i)=>{let c=0;e.subscribe((0,Se.x)(i,u=>n.call(r,u,c++)&&i.next(u)))})}var tl=w(5032);function Gi(n){return(0,cn.e)((r,e)=>{(0,Sn.Xf)(n).subscribe((0,Se.x)(e,()=>e.complete(),tl.Z)),!e.closed&&r.subscribe(e)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ua;try{ua=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ua=!1}let Pi,Zr,Oo,Rr,Gn=(()=>{class n{constructor(e){this._platformId=e,this.isBrowser=this._platformId?_r(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!ua)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.Lbi))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fr(n){return function cd(){if(null==Pi&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Pi=!0}))}finally{Pi=Pi||!1}return Pi}()?n:!!n.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function el(){if(null==Oo){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return Oo=!1,Oo;if("scrollBehavior"in document.documentElement.style)Oo=!0;else{const n=Element.prototype.scrollTo;Oo=!!n&&!/\{\s*\[native code\]\s*\}/.test(n.toString())}}return Oo}function da(){if("object"!=typeof document||!document)return 0;if(null==Zr){const n=document.createElement("div"),r=n.style;n.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";const e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",n.appendChild(e),document.body.appendChild(n),Zr=0,0===n.scrollLeft&&(n.scrollLeft=1,Zr=0===n.scrollLeft?1:2),n.remove()}return Zr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ha(n){if(function k_(){if(null==Rr){const n=typeof document<"u"?document.head:null;Rr=!(!n||!n.createShadowRoot&&!n.attachShadow)}return Rr}()){const r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Po(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){const r=n.shadowRoot.activeElement;if(r===n)break;n=r}return n}function fn(n){return n.composedPath?n.composedPath()[0]:n.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yi(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const A_=new t.OlP("cdk-dir-doc",{providedIn:"root",factory:function T_(){return(0,t.f3M)(x)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}),nb=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let xi=(()=>{class n{constructor(e){if(this.value="ltr",this.change=new t.vpe,e){const c=e.documentElement?e.documentElement.dir:null;this.value=function fa(n){const r=n?.toLowerCase()||"";return"auto"===r&&typeof navigator<"u"&&navigator?.language?nb.test(navigator.language)?"rtl":"ltr":"rtl"===r?"rtl":"ltr"}((e.body?e.body.dir:null)||c||"ltr")}}ngOnDestroy(){this.change.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A_,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),pa=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),Nn=(()=>{class n{constructor(e,i,c){this._ngZone=e,this._platform=i,this._scrolled=new $t.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=c}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new je.y(i=>{this._globalSubscription||this._addGlobalListener();const c=e>0?this._scrolled.pipe(Qi(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{c.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Ji()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const c=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(yn(u=>!u||c.indexOf(u)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((c,u)=>{this._scrollableContainsElement(u,e)&&i.push(u)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let c=be(i),u=e.getElementRef().nativeElement;do{if(c==u)return!0}while(c=c.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>zi(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(Gn),t.LFG(x,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),wo=(()=>{class n{constructor(e,i,c,u){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=c,this.dir=u,this._destroyed=new $t.x,this._elementScrolled=new je.y(p=>this.ngZone.runOutsideAngular(()=>zi(this.elementRef.nativeElement,"scroll").pipe(Gi(this._destroyed)).subscribe(p)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const i=this.elementRef.nativeElement,c=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=c?e.end:e.start),null==e.right&&(e.right=c?e.start:e.end),null!=e.bottom&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),c&&0!=da()?(null!=e.left&&(e.right=i.scrollWidth-i.clientWidth-e.left),2==da()?e.left=e.right:1==da()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const i=this.elementRef.nativeElement;el()?i.scrollTo(e):(null!=e.top&&(i.scrollTop=e.top),null!=e.left&&(i.scrollLeft=e.left))}measureScrollOffset(e){const i="left",c="right",u=this.elementRef.nativeElement;if("top"==e)return u.scrollTop;if("bottom"==e)return u.scrollHeight-u.clientHeight-u.scrollTop;const p=this.dir&&"rtl"==this.dir.value;return"start"==e?e=p?c:i:"end"==e&&(e=p?i:c),p&&2==da()?e==i?u.scrollWidth-u.clientWidth-u.scrollLeft:u.scrollLeft:p&&1==da()?e==i?u.scrollLeft+u.scrollWidth-u.clientWidth:-u.scrollLeft:e==i?u.scrollLeft:u.scrollWidth-u.clientWidth-u.scrollLeft}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Nn),t.Y36(t.R0b),t.Y36(xi,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),n})(),nl=(()=>{class n{constructor(e,i,c){this._platform=e,this._change=new $t.x,this._changeListener=u=>{this._change.next(u)},this._document=c,i.runOutsideAngular(()=>{if(e.isBrowser){const u=this._getWindow();u.addEventListener("resize",this._changeListener),u.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:c}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+c,right:e.left+i,height:c,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),c=e.documentElement,u=c.getBoundingClientRect();return{top:-u.top||e.body.scrollTop||i.scrollY||c.scrollTop||0,left:-u.left||e.body.scrollLeft||i.scrollX||c.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(Qi(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Gn),t.LFG(t.R0b),t.LFG(x,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Do=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),Yn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[pa,Do,pa,Do]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Vr extends $t.x{constructor(r){super(),this._value=r}get value(){return this.getValue()}_subscribe(r){const e=super._subscribe(r);return!e.closed&&r.next(this._value),e}getValue(){const{hasError:r,thrownError:e,_value:i}=this;if(r)throw e;return this._throwIfClosed(),i}next(r){super.next(this._value=r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Xe=w(515);function tn(n){return n<=0?()=>Xe.E:(0,cn.e)((r,e)=>{let i=0;r.subscribe((0,Se.x)(e,c=>{++i<=n&&(e.next(c),n<=i&&e.complete())}))})}function ll(n){return yn((r,e)=>n<=e)}var Ao=w(4671);function Br(n,r){return n===r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Pd=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),xd=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Pd]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const{isArray:uv}=Array,{getPrototypeOf:wd,prototype:dv,keys:Dd}=Object;var fv=w(9672);function pv(...n){const r=(0,Re.yG)(n),e=(0,Re.jO)(n),{args:i,keys:c}=function kd(n){if(1===n.length){const r=n[0];if(uv(r))return{args:r,keys:null};if(function hv(n){return n&&"object"==typeof n&&wd(n)===dv}(r)){const e=Dd(r);return{args:e.map(i=>r[i]),keys:e}}}return{args:n,keys:null}}(n);if(0===i.length)return(0,hn.D)([],r);const u=new je.y(function To(n,r,e=Ao.y){return i=>{$n(r,()=>{const{length:c}=n,u=new Array(c);let p=c,b=c;for(let T=0;T<c;T++)$n(r,()=>{const j=(0,hn.D)(n[T],r);let W=!1;j.subscribe((0,Se.x)(i,ht=>{u[T]=ht,W||(W=!0,b--),b||i.next(e(u.slice()))},()=>{--p||i.complete()}))},i)},i)}}(i,r,c?p=>function Ad(n,r){return n.reduce((e,i,c)=>(e[i]=r[c],e),{})}(c,p):Ao.y));return e?u.pipe(We(e)):u}function $n(n,r,e){n?(0,fv.f)(e,n,r):r()}var mv=w(8189);function Ma(...n){return function _v(){return(0,mv.J)(1)}()((0,hn.D)(n,(0,Re.yG)(n)))}function Eo(...n){const r=(0,Re.yG)(n);return(0,cn.e)((e,i)=>{(r?Ma(n,e,r):Ma(n,e)).subscribe(i)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Fn=new Set;let wi,gl=(()=>{class n{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Td}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function vv(n){if(!Fn.has(n))try{wi||(wi=document.createElement("style"),wi.setAttribute("type","text/css"),document.head.appendChild(wi)),wi.sheet&&(wi.sheet.insertRule(`@media ${n} {body{ }}`,0),Fn.add(n))}catch(r){console.error(r)}}(e),this._matchMedia(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Gn))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Td(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Cv=(()=>{class n{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new $t.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return So(me(e)).some(c=>this._registerQuery(c).mql.matches)}observe(e){let u=pv(So(me(e)).map(p=>this._registerQuery(p).observable));return u=Ma(u.pipe(tn(1)),u.pipe(ll(1),function cO(n,r=Oi){return(0,cn.e)((e,i)=>{let c=null,u=null,p=null;const b=()=>{if(c){c.unsubscribe(),c=null;const j=u;u=null,i.next(j)}};function T(){const j=p+n,W=r.now();if(W<j)return c=this.schedule(void 0,j-W),void i.add(c);b()}e.subscribe((0,Se.x)(i,j=>{u=j,p=r.now(),c||(c=r.schedule(T,n),i.add(c))},()=>{b(),i.complete()},void 0,()=>{u=c=null}))})}(0))),u.pipe((0,Mn.U)(p=>{const b={matches:!1,breakpoints:{}};return p.forEach(({matches:T,query:j})=>{b.matches=b.matches||T,b.breakpoints[j]=T}),b}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const i=this._mediaMatcher.matchMedia(e),u={observable:new je.y(p=>{const b=T=>this._zone.run(()=>p.next(T));return i.addListener(b),()=>{i.removeListener(b)}}).pipe(Eo(i),(0,Mn.U)(({matches:p})=>({query:e,matches:p})),Gi(this._destroySubject)),mql:i};return this._queries.set(e,u),u}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(gl),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function So(n){return n.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zd=(()=>{class n{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function dl(n){return!!(n.offsetWidth||n.offsetHeight||"function"==typeof n.getClientRects&&n.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const i=function Rd(n){try{return n.frameElement}catch{return null}}(function bv(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e));if(i&&(-1===Di(i)||!this.isVisible(i)))return!1;let c=e.nodeName.toLowerCase(),u=Di(e);return e.hasAttribute("contenteditable")?-1!==u:!("iframe"===c||"object"===c||this._platform.WEBKIT&&this._platform.IOS&&!function Ud(n){let r=n.nodeName.toLowerCase(),e="input"===r&&n.type;return"text"===e||"password"===e||"select"===r||"textarea"===r}(e))&&("audio"===c?!!e.hasAttribute("controls")&&-1!==u:"video"===c?-1!==u&&(null!==u||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,i){return function Hd(n){return!function hl(n){return function yv(n){return"input"==n.nodeName.toLowerCase()}(n)&&"hidden"==n.type}(n)&&(function Vd(n){let r=n.nodeName.toLowerCase();return"input"===r||"select"===r||"button"===r||"textarea"===r}(n)||function Mv(n){return function jd(n){return"a"==n.nodeName.toLowerCase()}(n)&&n.hasAttribute("href")}(n)||n.hasAttribute("contenteditable")||fl(n))}(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Gn))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function fl(n){if(!n.hasAttribute("tabindex")||void 0===n.tabIndex)return!1;let r=n.getAttribute("tabindex");return!(!r||isNaN(parseInt(r,10)))}function Di(n){if(!fl(n))return null;const r=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}class mO{constructor(r,e,i,c,u=!1){this._element=r,this._checker=e,this._ngZone=i,this._document=c,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,u||this.attachAnchors()}get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}destroy(){const r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){const e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return"start"==r?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const i=this._getFirstTabbableElement(e);return i?.focus(r),!!i}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){const e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){const e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;const e=r.children;for(let i=0;i<e.length;i++){const c=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(c)return c}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;const e=r.children;for(let i=e.length-1;i>=0;i--){const c=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(c)return c}return null}_createAnchor(){const r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._ngZone.isStable?r():this._ngZone.onStable.pipe(tn(1)).subscribe(r)}}let ya=(()=>{class n{constructor(e,i,c){this._checker=e,this._ngZone=i,this._document=c}create(e,i=!1){return new mO(e,this._checker,this._ngZone,this._document,i)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Zd),t.LFG(t.R0b),t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qr(n){return 0===n.buttons||0===n.offsetX&&0===n.offsetY}function Jr(n){const r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!r||-1!==r.identifier||null!=r.radiusX&&1!==r.radiusX||null!=r.radiusY&&1!==r.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qd=new t.OlP("cdk-input-modality-detector-options"),pl={ignoreKeys:[18,17,224,91,16]},ki=Fr({passive:!0,capture:!0});let zr=(()=>{class n{constructor(e,i,c,u){this._platform=e,this._mostRecentTarget=null,this._modality=new Vr(null),this._lastTouchMs=0,this._onKeydown=p=>{this._options?.ignoreKeys?.some(b=>b===p.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=fn(p))},this._onMousedown=p=>{Date.now()-this._lastTouchMs<650||(this._modality.next(qr(p)?"keyboard":"mouse"),this._mostRecentTarget=fn(p))},this._onTouchstart=p=>{Jr(p)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=fn(p))},this._options={...pl,...u},this.modalityDetected=this._modality.pipe(ll(1)),this.modalityChanged=this.modalityDetected.pipe(function qe(n,r=Ao.y){return n=n??Br,(0,cn.e)((e,i)=>{let c,u=!0;e.subscribe((0,Se.x)(i,p=>{const b=r(p);(u||!n(c,b))&&(u=!1,c=b,i.next(p))}))})}()),e.isBrowser&&i.runOutsideAngular(()=>{c.addEventListener("keydown",this._onKeydown,ki),c.addEventListener("mousedown",this._onMousedown,ki),c.addEventListener("touchstart",this._onTouchstart,ki)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,ki),document.removeEventListener("mousedown",this._onMousedown,ki),document.removeEventListener("touchstart",this._onTouchstart,ki))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Gn),t.LFG(t.R0b),t.LFG(x),t.LFG(qd,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _l=new t.OlP("cdk-focus-monitor-default-options"),Qr=Fr({passive:!0,capture:!0});let yO=(()=>{class n{constructor(e,i,c,u,p){this._ngZone=e,this._platform=i,this._inputModalityDetector=c,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new $t.x,this._rootNodeFocusAndBlurListener=b=>{for(let j=fn(b);j;j=j.parentElement)"focus"===b.type?this._onFocus(b,j):this._onBlur(b,j)},this._document=u,this._detectionMode=p?.detectionMode||0}monitor(e,i=!1){const c=be(e);if(!this._platform.isBrowser||1!==c.nodeType)return Ji(null);const u=ha(c)||this._getDocument(),p=this._elementInfo.get(c);if(p)return i&&(p.checkChildren=!0),p.subject;const b={checkChildren:i,subject:new $t.x,rootNode:u};return this._elementInfo.set(c,b),this._registerGlobalListeners(b),b.subject}stopMonitoring(e){const i=be(e),c=this._elementInfo.get(i);c&&(c.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(c))}focusVia(e,i,c){const u=be(e);u===this._getDocument().activeElement?this._getClosestElementsInfo(u).forEach(([b,T])=>this._originChanged(b,i,T)):(this._setOrigin(i),"function"==typeof u.focus&&u.focus(c))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused","touch"===i),e.classList.toggle("cdk-keyboard-focused","keyboard"===i),e.classList.toggle("cdk-mouse-focused","mouse"===i),e.classList.toggle("cdk-program-focused","program"===i)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&i,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,i){const c=this._elementInfo.get(i),u=fn(e);!c||!c.checkChildren&&i!==u||this._originChanged(i,this._getFocusOrigin(u),c)}_onBlur(e,i){const c=this._elementInfo.get(i);!c||c.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(c,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const i=e.rootNode,c=this._rootNodeFocusListenerCount.get(i)||0;c||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Qr),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Qr)}),this._rootNodeFocusListenerCount.set(i,c+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Gi(this._stopInputModalityDetector)).subscribe(u=>{this._setOrigin(u,!0)}))}_removeGlobalListeners(e){const i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){const c=this._rootNodeFocusListenerCount.get(i);c>1?this._rootNodeFocusListenerCount.set(i,c-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Qr),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Qr),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,c){this._setClasses(e,i),this._emitOrigin(c,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){const i=[];return this._elementInfo.forEach((c,u)=>{(u===e||c.checkChildren&&u.contains(e))&&i.push([u,c])}),i}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:i,mostRecentModality:c}=this._inputModalityDetector;if("mouse"!==c||!i||i===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const u=e.labels;if(u)for(let p=0;p<u.length;p++)if(u[p].contains(i))return!0;return!1}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(Gn),t.LFG(zr),t.LFG(x,8),t.LFG(_l,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zd="cdk-high-contrast-black-on-white",vl="cdk-high-contrast-white-on-black",Cl="cdk-high-contrast-active";let Av=(()=>{class n{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=(0,t.f3M)(Cv).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const i=this._document.defaultView||window,c=i&&i.getComputedStyle?i.getComputedStyle(e):null,u=(c&&c.backgroundColor||"").replace(/ /g,"");switch(e.remove(),u){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(Cl,zd,vl),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?e.add(Cl,zd):2===i&&e.add(Cl,vl)}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Gn),t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Zn=(()=>{class n{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Av))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[xd]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Lo=w(6451);function Qd(n,r,e){const i=(0,In.m)(n)||r||e?{next:n,error:r,complete:e}:n;return i?(0,cn.e)((c,u)=>{var p;null===(p=i.subscribe)||void 0===p||p.call(i);let b=!0;c.subscribe((0,Se.x)(u,T=>{var j;null===(j=i.next)||void 0===j||j.call(i,T),u.next(T)},()=>{var T;b=!1,null===(T=i.complete)||void 0===T||T.call(i),u.complete()},T=>{var j;b=!1,null===(j=i.error)||void 0===j||j.call(i,T),u.error(T)},()=>{var T,j;b&&(null===(T=i.unsubscribe)||void 0===T||T.call(i)),null===(j=i.finalize)||void 0===j||j.call(i)}))}):Ao.y}function Gr(n,r){return(0,cn.e)((e,i)=>{let c=null,u=0,p=!1;const b=()=>p&&!c&&i.complete();e.subscribe((0,Se.x)(i,T=>{c?.unsubscribe();let j=0;const W=u++;(0,Sn.Xf)(n(T,W)).subscribe(c=(0,Se.x)(i,ht=>i.next(r?r(T,ht,W,j++):ht),()=>{c=null,b()}))},()=>{p=!0,b()}))})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ml(n,r,e){for(let i in r)if(r.hasOwnProperty(i)){const c=r[i];c?n.setProperty(i,c,e?.has(i)?"important":""):n.removeProperty(i)}return n}function No(n,r){const e=r?"":"none";Ml(n.style,{"touch-action":r?"":"none","-webkit-user-drag":r?"":"none","-webkit-tap-highlight-color":r?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function yl(n,r,e){Ml(n.style,{position:r?"":"fixed",top:r?"":"0",opacity:r?"":"0",left:r?"":"-999em"},e)}function ba(n,r){return r&&"none"!=r?n+" "+r:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gd(n){const r=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*r}function jt(n,r){return n.getPropertyValue(r).split(",").map(i=>i.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oa(n){const r=n.getBoundingClientRect();return{top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height,x:r.x,y:r.y}}function Pa(n,r,e){const{top:i,bottom:c,left:u,right:p}=n;return e>=i&&e<=c&&r>=u&&r<=p}function Fo(n,r,e){n.top+=r,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function Yd(n,r,e,i){const{top:c,right:u,bottom:p,left:b,width:T,height:j}=n,W=T*r,ht=j*r;return i>c-ht&&i<p+ht&&e>b-W&&e<u+W}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $d{constructor(r){this._document=r,this.positions=new Map}clear(){this.positions.clear()}cache(r){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),r.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Oa(e)})})}handleScroll(r){const e=fn(r),i=this.positions.get(e);if(!i)return null;const c=i.scrollPosition;let u,p;if(e===this._document){const j=this.getViewportScrollPosition();u=j.top,p=j.left}else u=e.scrollTop,p=e.scrollLeft;const b=c.top-u,T=c.left-p;return this.positions.forEach((j,W)=>{j.clientRect&&e!==W&&e.contains(W)&&Fo(j.clientRect,b,T)}),c.top=u,c.left=p,{top:b,left:T}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bl(n){const r=n.cloneNode(!0),e=r.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();r.removeAttribute("id");for(let c=0;c<e.length;c++)e[c].removeAttribute("id");return"canvas"===i?th(n,r):("input"===i||"select"===i||"textarea"===i)&&Xd(n,r),Kd("canvas",n,r,th),Kd("input, textarea, select",n,r,Xd),r}function Kd(n,r,e,i){const c=r.querySelectorAll(n);if(c.length){const u=e.querySelectorAll(n);for(let p=0;p<c.length;p++)i(c[p],u[p])}}let Wd=0;function Xd(n,r){"file"!==r.type&&(r.value=n.value),"radio"===r.type&&r.name&&(r.name=`mat-clone-${r.name}-${Wd++}`)}function th(n,r){const e=r.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sv=Fr({passive:!0}),Yr=Fr({passive:!1}),ai=new Set(["position"]);class Iv{constructor(r,e,i,c,u,p){this._config=e,this._document=i,this._ngZone=c,this._viewportRuler=u,this._dragDropRegistry=p,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new $t.x,this._pointerMoveSubscription=Ln.w0.EMPTY,this._pointerUpSubscription=Ln.w0.EMPTY,this._scrollSubscription=Ln.w0.EMPTY,this._resizeSubscription=Ln.w0.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new $t.x,this.started=new $t.x,this.released=new $t.x,this.ended=new $t.x,this.entered=new $t.x,this.exited=new $t.x,this.dropped=new $t.x,this.moved=this._moveEvents,this._pointerDown=b=>{if(this.beforeStarted.next(),this._handles.length){const T=this._getTargetHandle(b);T&&!this._disabledHandles.has(T)&&!this.disabled&&this._initializeDragSequence(T,b)}else this.disabled||this._initializeDragSequence(this._rootElement,b)},this._pointerMove=b=>{const T=this._getPointerPositionOnPage(b);if(!this._hasStartedDragging){if(Math.abs(T.x-this._pickupPositionOnPage.x)+Math.abs(T.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const Vt=Date.now()>=this._dragStartTime+this._getDragStartDelay(b),Kt=this._dropContainer;if(!Vt)return void this._endDragSequence(b);(!Kt||!Kt.isDragging()&&!Kt.isReceiving())&&(b.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(b)))}return}b.preventDefault();const j=this._getConstrainedPointerPosition(T);if(this._hasMoved=!0,this._lastKnownPointerPosition=T,this._updatePointerDirectionDelta(j),this._dropContainer)this._updateActiveDropContainer(j,T);else{const W=this.constrainPosition?this._initialClientRect:this._pickupPositionOnPage,ht=this._activeTransform;ht.x=j.x-W.x+this._passiveTransform.x,ht.y=j.y-W.y+this._passiveTransform.y,this._applyRootElementTransform(ht.x,ht.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:j,event:b,distance:this._getDragDistance(j),delta:this._pointerDirectionDelta})})},this._pointerUp=b=>{this._endDragSequence(b)},this._nativeDragStart=b=>{if(this._handles.length){const T=this._getTargetHandle(b);T&&!this._disabledHandles.has(T)&&!this.disabled&&b.preventDefault()}else this.disabled||b.preventDefault()},this.withRootElement(r).withParent(e.parentDragRef||null),this._parentPositions=new $d(i),p.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(r){const e=En(r);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(i=>No(i,e)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(r){this._handles=r.map(i=>be(i)),this._handles.forEach(i=>No(i,this.disabled)),this._toggleNativeDragInteractions();const e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(r){return this._previewTemplate=r,this}withPlaceholderTemplate(r){return this._placeholderTemplate=r,this}withRootElement(r){const e=be(r);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this._pointerDown,Yr),e.addEventListener("touchstart",this._pointerDown,Sv),e.addEventListener("dragstart",this._nativeDragStart,Yr)}),this._initialTransform=void 0,this._rootElement=e),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(r){return this._boundaryElement=r?be(r):null,this._resizeSubscription.unsubscribe(),r&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(r){return this._parentDragRef=r,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(r){!this._disabledHandles.has(r)&&this._handles.indexOf(r)>-1&&(this._disabledHandles.add(r),No(r,!0))}enableHandle(r){this._disabledHandles.has(r)&&(this._disabledHandles.delete(r),No(r,this.disabled))}withDirection(r){return this._direction=r,this}_withDropContainer(r){this._dropContainer=r}getFreeDragPosition(){const r=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:r.x,y:r.y}}setFreeDragPosition(r){return this._activeTransform={x:0,y:0},this._passiveTransform.x=r.x,this._passiveTransform.y=r.y,this._dropContainer||this._applyRootElementTransform(r.x,r.y),this}withPreviewContainer(r){return this._previewContainer=r,this}_sortFromLastPointerPosition(){const r=this._lastKnownPointerPosition;r&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(r),r)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(r){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this,event:r}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(r),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const e=this._getPointerPositionOnPage(r);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:r})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(r){$r(r)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const e=this._dropContainer;if(e){const i=this._rootElement,c=i.parentNode,u=this._placeholder=this._createPlaceholderElement(),p=this._anchor=this._anchor||this._document.createComment(""),b=this._getShadowRoot();c.insertBefore(p,i),this._initialTransform=i.style.transform||"",this._preview=this._createPreviewElement(),yl(i,!1,ai),this._document.body.appendChild(c.replaceChild(u,i)),this._getPreviewInsertionPoint(c,b).appendChild(this._preview),this.started.next({source:this,event:r}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this,event:r}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(r,e){this._parentDragRef&&e.stopPropagation();const i=this.isDragging(),c=$r(e),u=!c&&0!==e.button,p=this._rootElement,b=fn(e),T=!c&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),j=c?Jr(e):qr(e);if(b&&b.draggable&&"mousedown"===e.type&&e.preventDefault(),i||u||T||j)return;if(this._handles.length){const zt=p.style;this._rootElementTapHighlight=zt.webkitTapHighlightColor||"",zt.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._initialClientRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(zt=>this._updateOnScroll(zt)),this._boundaryElement&&(this._boundaryRect=Oa(this._boundaryElement));const W=this._previewTemplate;this._pickupPositionInElement=W&&W.template&&!W.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialClientRect,r,e);const ht=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:ht.x,y:ht.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(r){yl(this._rootElement,!0,ai),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._initialClientRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),c=this._getPointerPositionOnPage(r),u=this._getDragDistance(c),p=e._isOverContainer(c.x,c.y);this.ended.next({source:this,distance:u,dropPoint:c,event:r}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:p,distance:u,dropPoint:c,event:r}),e.drop(this,i,this._initialIndex,this._initialContainer,p,u,c),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:r,y:e},{x:i,y:c}){let u=this._initialContainer._getSiblingContainerFromPosition(this,r,e);!u&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(r,e)&&(u=this._initialContainer),u&&u!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=u,this._dropContainer.enter(this,r,e,u===this._initialContainer&&u.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:u,currentIndex:u.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,c),this._dropContainer._sortItem(this,r,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(r,e):this._applyPreviewTransform(r-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_createPreviewElement(){const r=this._previewTemplate,e=this.previewClass,i=r?r.template:null;let c;if(i&&r){const u=r.matchSize?this._initialClientRect:null,p=r.viewContainer.createEmbeddedView(i,r.context);p.detectChanges(),c=Lv(p,this._document),this._previewRef=p,r.matchSize?Nv(c,u):c.style.transform=Zo(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else c=bl(this._rootElement),Nv(c,this._initialClientRect),this._initialTransform&&(c.style.transform=this._initialTransform);return Ml(c.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},ai),No(c,!1),c.classList.add("cdk-drag-preview"),c.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(u=>c.classList.add(u)):c.classList.add(e)),c}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const r=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(r.left,r.top);const e=function Ev(n){const r=getComputedStyle(n),e=jt(r,"transition-property"),i=e.find(b=>"transform"===b||"all"===b);if(!i)return 0;const c=e.indexOf(i),u=jt(r,"transition-duration"),p=jt(r,"transition-delay");return Gd(u[c])+Gd(p[c])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{const c=p=>{(!p||fn(p)===this._preview&&"transform"===p.propertyName)&&(this._preview?.removeEventListener("transitionend",c),i(),clearTimeout(u))},u=setTimeout(c,1.5*e);this._preview.addEventListener("transitionend",c)}))}_createPlaceholderElement(){const r=this._placeholderTemplate,e=r?r.template:null;let i;return e?(this._placeholderRef=r.viewContainer.createEmbeddedView(e,r.context),this._placeholderRef.detectChanges(),i=Lv(this._placeholderRef,this._document)):i=bl(this._rootElement),i.style.pointerEvents="none",i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(r,e,i){const c=e===this._rootElement?null:e,u=c?c.getBoundingClientRect():r,p=$r(i)?i.targetTouches[0]:i,b=this._getViewportScrollPosition();return{x:u.left-r.left+(p.pageX-u.left-b.left),y:u.top-r.top+(p.pageY-u.top-b.top)}}_getPointerPositionOnPage(r){const e=this._getViewportScrollPosition(),i=$r(r)?r.touches[0]||r.changedTouches[0]||{pageX:0,pageY:0}:r,c=i.pageX-e.left,u=i.pageY-e.top;if(this._ownerSVGElement){const p=this._ownerSVGElement.getScreenCTM();if(p){const b=this._ownerSVGElement.createSVGPoint();return b.x=c,b.y=u,b.matrixTransform(p.inverse())}}return{x:c,y:u}}_getConstrainedPointerPosition(r){const e=this._dropContainer?this._dropContainer.lockAxis:null;let{x:i,y:c}=this.constrainPosition?this.constrainPosition(r,this,this._initialClientRect,this._pickupPositionInElement):r;if("x"===this.lockAxis||"x"===e?c=this._pickupPositionOnPage.y:("y"===this.lockAxis||"y"===e)&&(i=this._pickupPositionOnPage.x),this._boundaryRect){const{x:u,y:p}=this._pickupPositionInElement,b=this._boundaryRect,{width:T,height:j}=this._getPreviewRect(),W=b.top+p,ht=b.bottom-(j-p);i=xa(i,b.left+u,b.right-(T-u)),c=xa(c,W,ht)}return{x:i,y:c}}_updatePointerDirectionDelta(r){const{x:e,y:i}=r,c=this._pointerDirectionDelta,u=this._pointerPositionAtLastDirectionChange,p=Math.abs(e-u.x),b=Math.abs(i-u.y);return p>this._config.pointerDirectionChangeThreshold&&(c.x=e>u.x?1:-1,u.x=e),b>this._config.pointerDirectionChangeThreshold&&(c.y=i>u.y?1:-1,u.y=i),c}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const r=this._handles.length>0||!this.isDragging();r!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=r,No(this._rootElement,r))}_removeRootElementListeners(r){r.removeEventListener("mousedown",this._pointerDown,Yr),r.removeEventListener("touchstart",this._pointerDown,Sv),r.removeEventListener("dragstart",this._nativeDragStart,Yr)}_applyRootElementTransform(r,e){const i=Zo(r,e),c=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=c.transform&&"none"!=c.transform?c.transform:""),c.transform=ba(i,this._initialTransform)}_applyPreviewTransform(r,e){const i=this._previewTemplate?.template?void 0:this._initialTransform,c=Zo(r,e);this._preview.style.transform=ba(c,i)}_getDragDistance(r){const e=this._pickupPositionOnPage;return e?{x:r.x-e.x,y:r.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:r,y:e}=this._passiveTransform;if(0===r&&0===e||this.isDragging()||!this._boundaryElement)return;const i=this._rootElement.getBoundingClientRect(),c=this._boundaryElement.getBoundingClientRect();if(0===c.width&&0===c.height||0===i.width&&0===i.height)return;const u=c.left-i.left,p=i.right-c.right,b=c.top-i.top,T=i.bottom-c.bottom;c.width>i.width?(u>0&&(r+=u),p>0&&(r-=p)):r=0,c.height>i.height?(b>0&&(e+=b),T>0&&(e-=T)):e=0,(r!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:r})}_getDragStartDelay(r){const e=this.dragStartDelay;return"number"==typeof e?e:$r(r)?e.touch:e?e.mouse:0}_updateOnScroll(r){const e=this._parentPositions.handleScroll(r);if(e){const i=fn(r);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&Fo(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=ha(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(r,e){const i=this._previewContainer||"global";if("parent"===i)return r;if("global"===i){const c=this._document;return e||c.fullscreenElement||c.webkitFullscreenElement||c.mozFullScreenElement||c.msFullscreenElement||c.body}return be(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialClientRect),this._previewRect}_getTargetHandle(r){return this._handles.find(e=>r.target&&(r.target===e||e.contains(r.target)))}}function Zo(n,r){return`translate3d(${Math.round(n)}px, ${Math.round(r)}px, 0)`}function xa(n,r,e){return Math.max(r,Math.min(e,n))}function $r(n){return"t"===n.type[0]}function Lv(n,r){const e=n.rootNodes;if(1===e.length&&e[0].nodeType===r.ELEMENT_NODE)return e[0];const i=r.createElement("div");return e.forEach(c=>i.appendChild(c)),i}function Nv(n,r){n.style.width=`${r.width}px`,n.style.height=`${r.height}px`,n.style.transform=Zo(r.left,r.top)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function en(n,r,e){const i=wa(r,n.length-1),c=wa(e,n.length-1);if(i===c)return;const u=n[i],p=c<i?-1:1;for(let b=i;b!==c;b+=p)n[b]=n[b+p];n[c]=u}function wa(n,r){return Math.max(0,Math.min(r,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Zv{constructor(r,e){this._element=r,this._dragDropRegistry=e,this._itemPositions=[],this.orientation="vertical",this._previousSwap={drag:null,delta:0,overlaps:!1}}start(r){this.withItems(r)}sort(r,e,i,c){const u=this._itemPositions,p=this._getItemIndexFromPointerPosition(r,e,i,c);if(-1===p&&u.length>0)return null;const b="horizontal"===this.orientation,T=u.findIndex(fe=>fe.drag===r),j=u[p],ht=j.clientRect,zt=T>p?1:-1,Vt=this._getItemOffsetPx(u[T].clientRect,ht,zt),Kt=this._getSiblingOffsetPx(T,u,zt),ve=u.slice();return en(u,T,p),u.forEach((fe,io)=>{if(ve[io]===fe)return;const mi=fe.drag===r,cr=mi?Vt:Kt,Cc=mi?r.getPlaceholderElement():fe.drag.getRootElement();fe.offset+=cr,b?(Cc.style.transform=ba(`translate3d(${Math.round(fe.offset)}px, 0, 0)`,fe.initialTransform),Fo(fe.clientRect,0,cr)):(Cc.style.transform=ba(`translate3d(0, ${Math.round(fe.offset)}px, 0)`,fe.initialTransform),Fo(fe.clientRect,cr,0))}),this._previousSwap.overlaps=Pa(ht,e,i),this._previousSwap.drag=j.drag,this._previousSwap.delta=b?c.x:c.y,{previousIndex:T,currentIndex:p}}enter(r,e,i,c){const u=null==c||c<0?this._getItemIndexFromPointerPosition(r,e,i):c,p=this._activeDraggables,b=p.indexOf(r),T=r.getPlaceholderElement();let j=p[u];if(j===r&&(j=p[u+1]),!j&&(null==u||-1===u||u<p.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(j=p[0]),b>-1&&p.splice(b,1),j&&!this._dragDropRegistry.isDragging(j)){const W=j.getRootElement();W.parentElement.insertBefore(T,W),p.splice(u,0,r)}else be(this._element).appendChild(T),p.push(r);T.style.transform="",this._cacheItemPositions()}withItems(r){this._activeDraggables=r.slice(),this._cacheItemPositions()}withSortPredicate(r){this._sortPredicate=r}reset(){this._activeDraggables.forEach(r=>{const e=r.getRootElement();if(e){const i=this._itemPositions.find(c=>c.drag===r)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(r){return("horizontal"===this.orientation&&"rtl"===this.direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(i=>i.drag===r)}updateOnScroll(r,e){this._itemPositions.forEach(({clientRect:i})=>{Fo(i,r,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}_cacheItemPositions(){const r="horizontal"===this.orientation;this._itemPositions=this._activeDraggables.map(e=>{const i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:Oa(i)}}).sort((e,i)=>r?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getItemOffsetPx(r,e,i){const c="horizontal"===this.orientation;let u=c?e.left-r.left:e.top-r.top;return-1===i&&(u+=c?e.width-r.width:e.height-r.height),u}_getSiblingOffsetPx(r,e,i){const c="horizontal"===this.orientation,u=e[r].clientRect,p=e[r+-1*i];let b=u[c?"width":"height"]*i;if(p){const T=c?"left":"top",j=c?"right":"bottom";-1===i?b-=p.clientRect[T]-u[j]:b+=u[T]-p.clientRect[j]}return b}_shouldEnterAsFirstChild(r,e){if(!this._activeDraggables.length)return!1;const i=this._itemPositions,c="horizontal"===this.orientation;if(i[0].drag!==this._activeDraggables[0]){const p=i[i.length-1].clientRect;return c?r>=p.right:e>=p.bottom}{const p=i[0].clientRect;return c?r<=p.left:e<=p.top}}_getItemIndexFromPointerPosition(r,e,i,c){const u="horizontal"===this.orientation,p=this._itemPositions.findIndex(({drag:b,clientRect:T})=>{if(b===r)return!1;if(c){const j=u?c.x:c.y;if(b===this._previousSwap.drag&&this._previousSwap.overlaps&&j===this._previousSwap.delta)return!1}return u?e>=Math.floor(T.left)&&e<Math.floor(T.right):i>=Math.floor(T.top)&&i<Math.floor(T.bottom)});return-1!==p&&this._sortPredicate(p,r)?p:-1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ih{constructor(r,e,i,c,u){this._dragDropRegistry=e,this._ngZone=c,this._viewportRuler=u,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new $t.x,this.entered=new $t.x,this.exited=new $t.x,this.dropped=new $t.x,this.sorted=new $t.x,this._isDragging=!1,this._draggables=[],this._siblings=[],this._activeSiblings=new Set,this._viewportScrollSubscription=Ln.w0.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new $t.x,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Tv(n=0,r=Oi){return n<0&&(n=0),Xc(n,n,r)}(0,Yc).pipe(Gi(this._stopScrollTimers)).subscribe(()=>{const p=this._scrollNode,b=this.autoScrollStep;1===this._verticalScrollDirection?p.scrollBy(0,-b):2===this._verticalScrollDirection&&p.scrollBy(0,b),1===this._horizontalScrollDirection?p.scrollBy(-b,0):2===this._horizontalScrollDirection&&p.scrollBy(b,0)})},this.element=be(r),this._document=i,this.withScrollableParents([this.element]),e.registerDropContainer(this),this._parentPositions=new $d(i),this._sortStrategy=new Zv(this.element,e),this._sortStrategy.withSortPredicate((p,b)=>this.sortPredicate(p,b,this))}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(r,e,i,c){this._draggingStarted(),null==c&&this.sortingDisabled&&(c=this._draggables.indexOf(r)),this._sortStrategy.enter(r,e,i,c),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:r,container:this,currentIndex:this.getItemIndex(r)})}exit(r){this._reset(),this.exited.next({item:r,container:this})}drop(r,e,i,c,u,p,b,T={}){this._reset(),this.dropped.next({item:r,currentIndex:e,previousIndex:i,container:this,previousContainer:c,isPointerOverContainer:u,distance:p,dropPoint:b,event:T})}withItems(r){const e=this._draggables;return this._draggables=r,r.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(c=>c.isDragging()).every(c=>-1===r.indexOf(c))?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(r){return this._sortStrategy.direction=r,this}connectedTo(r){return this._siblings=r.slice(),this}withOrientation(r){return this._sortStrategy.orientation=r,this}withScrollableParents(r){const e=be(this.element);return this._scrollableElements=-1===r.indexOf(e)?[e,...r]:r.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(r){return this._isDragging?this._sortStrategy.getItemIndex(r):this._draggables.indexOf(r)}isReceiving(){return this._activeSiblings.size>0}_sortItem(r,e,i,c){if(this.sortingDisabled||!this._clientRect||!Yd(this._clientRect,.05,e,i))return;const u=this._sortStrategy.sort(r,e,i,c);u&&this.sorted.next({previousIndex:u.previousIndex,currentIndex:u.currentIndex,container:this,item:r})}_startScrollingIfNecessary(r,e){if(this.autoScrollDisabled)return;let i,c=0,u=0;if(this._parentPositions.positions.forEach((p,b)=>{b===this._document||!p.clientRect||i||Yd(p.clientRect,.05,r,e)&&([c,u]=function rh(n,r,e,i){const c=Kr(r,i),u=oh(r,e);let p=0,b=0;if(c){const T=n.scrollTop;1===c?T>0&&(p=1):n.scrollHeight-T>n.clientHeight&&(p=2)}if(u){const T=n.scrollLeft;1===u?T>0&&(b=1):n.scrollWidth-T>n.clientWidth&&(b=2)}return[p,b]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b,p.clientRect,r,e),(c||u)&&(i=b))}),!c&&!u){const{width:p,height:b}=this._viewportRuler.getViewportSize(),T={width:p,height:b,top:0,right:p,bottom:b,left:0};c=Kr(T,e),u=oh(T,r),i=window}i&&(c!==this._verticalScrollDirection||u!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=c,this._horizontalScrollDirection=u,this._scrollNode=i,(c||u)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const r=be(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=r.msScrollSnapType||r.scrollSnapType||"",r.scrollSnapType=r.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const r=be(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(r).clientRect}_reset(){this._isDragging=!1;const r=be(this.element).style;r.scrollSnapType=r.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_isOverContainer(r,e){return null!=this._clientRect&&Pa(this._clientRect,r,e)}_getSiblingContainerFromPosition(r,e,i){return this._siblings.find(c=>c._canReceive(r,e,i))}_canReceive(r,e,i){if(!this._clientRect||!Pa(this._clientRect,e,i)||!this.enterPredicate(r,this))return!1;const c=this._getShadowRoot().elementFromPoint(e,i);if(!c)return!1;const u=be(this.element);return c===u||u.contains(c)}_startReceiving(r,e){const i=this._activeSiblings;!i.has(r)&&e.every(c=>this.enterPredicate(c,this)||this._draggables.indexOf(c)>-1)&&(i.add(r),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(r){this._activeSiblings.delete(r),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(r=>{if(this.isDragging()){const e=this._parentPositions.handleScroll(r);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const r=ha(be(this.element));this._cachedShadowRoot=r||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const r=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,r))}}function Kr(n,r){const{top:e,bottom:i,height:c}=n,u=.05*c;return r>=e-u&&r<=e+u?1:r>=i-u&&r<=i+u?2:0}function oh(n,r){const{left:e,right:i,width:c}=n,u=.05*c;return r>=e-u&&r<=e+u?1:r>=i-u&&r<=i+u?2:0}const Da=Fr({passive:!1,capture:!0});let Rv=(()=>{class n{constructor(e,i){this._ngZone=e,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=c=>c.isDragging(),this.pointerMove=new $t.x,this.pointerUp=new $t.x,this.scroll=new $t.x,this._preventDefaultWhileDragging=c=>{this._activeDragInstances.length>0&&c.preventDefault()},this._persistentTouchmoveListener=c=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&c.preventDefault(),this.pointerMove.next(c))},this._document=i}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,Da)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,Da)}startDragging(e,i){if(!(this._activeDragInstances.indexOf(e)>-1)&&(this._activeDragInstances.push(e),1===this._activeDragInstances.length)){const c=i.type.startsWith("touch");this._globalListeners.set(c?"touchend":"mouseup",{handler:u=>this.pointerUp.next(u),options:!0}).set("scroll",{handler:u=>this.scroll.next(u),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:Da}),c||this._globalListeners.set("mousemove",{handler:u=>this.pointerMove.next(u),options:Da}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((u,p)=>{this._document.addEventListener(p,u.handler,u.options)})})}}stopDragging(e){const i=this._activeDragInstances.indexOf(e);i>-1&&(this._activeDragInstances.splice(i,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(e){return this._activeDragInstances.indexOf(e)>-1}scrolled(e){const i=[this.scroll];return e&&e!==this._document&&i.push(new je.y(c=>this._ngZone.runOutsideAngular(()=>{const p=b=>{this._activeDragInstances.length&&c.next(b)};return e.addEventListener("scroll",p,!0),()=>{e.removeEventListener("scroll",p,!0)}}))),(0,Lo.T)(...i)}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((e,i)=>{this._document.removeEventListener(i,e.handler,e.options)}),this._globalListeners.clear()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vv={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let Ol=(()=>{class n{constructor(e,i,c,u){this._document=e,this._ngZone=i,this._viewportRuler=c,this._dragDropRegistry=u}createDrag(e,i=Vv){return new Iv(e,i,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(e){return new ih(e,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x),t.LFG(t.R0b),t.LFG(nl),t.LFG(Rv))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Pl=new t.OlP("CDK_DRAG_PARENT"),ka=new t.OlP("CdkDropListGroup");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jv=(()=>{class n{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=En(e)}ngOnDestroy(){this._items.clear()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:["cdkDropListGroupDisabled","disabled"]},exportAs:["cdkDropListGroup"],features:[t._Bn([{provide:ka,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xl=new t.OlP("CDK_DRAG_CONFIG");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let wl=0;const Hv=new t.OlP("CdkDropList");let Ro=(()=>{class n{constructor(e,i,c,u,p,b,T){this.element=e,this._changeDetectorRef=c,this._scrollDispatcher=u,this._dir=p,this._group=b,this._destroyed=new $t.x,this.connectedTo=[],this.id="cdk-drop-list-"+wl++,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.dropped=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.sorted=new t.vpe,this._unsortedItems=new Set,this._dropListRef=i.createDropList(e),this._dropListRef.data=this,T&&this._assignDefaults(T),this._dropListRef.enterPredicate=(j,W)=>this.enterPredicate(j.data,W.data),this._dropListRef.sortPredicate=(j,W,ht)=>this.sortPredicate(j,W.data,ht.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),b&&b._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=En(e)}addItem(e){this._unsortedItems.add(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}removeItem(e){this._unsortedItems.delete(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){const e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Eo(this._dir.value),Gi(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{const i=me(this.connectedTo).map(c=>"string"==typeof c?n._dropLists.find(p=>p.id===c):c);if(this._group&&this._group._items.forEach(c=>{-1===i.indexOf(c)&&i.push(c)}),!this._scrollableParentsResolved){const c=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(u=>u.getElementRef().nativeElement);this._dropListRef.withScrollableParents(c),this._scrollableParentsResolved=!0}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=En(this.sortingDisabled),e.autoScrollDisabled=En(this.autoScrollDisabled),e.autoScrollStep=m_(this.autoScrollStep,2),e.connectedTo(i.filter(c=>c&&c!==this).map(c=>c._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()})}_assignDefaults(e){const{lockAxis:i,draggingDisabled:c,sortingDisabled:u,listAutoScrollDisabled:p,listOrientation:b}=e;this.disabled=c??!1,this.sortingDisabled=u??!1,this.autoScrollDisabled=p??!1,this.orientation=b||"vertical",i&&(this.lockAxis=i)}_syncItemsWithRef(){this._dropListRef.withItems(this.getSortedItems().map(e=>e._dragRef))}}return n._dropLists=[],n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Ol),t.Y36(t.sBO),t.Y36(Nn),t.Y36(xi,8),t.Y36(ka,12),t.Y36(xl,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,i){2&e&&(t.uIk("id",i.id),t.ekj("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()))},inputs:{connectedTo:["cdkDropListConnectedTo","connectedTo"],data:["cdkDropListData","data"],orientation:["cdkDropListOrientation","orientation"],id:"id",lockAxis:["cdkDropListLockAxis","lockAxis"],disabled:["cdkDropListDisabled","disabled"],sortingDisabled:["cdkDropListSortingDisabled","sortingDisabled"],enterPredicate:["cdkDropListEnterPredicate","enterPredicate"],sortPredicate:["cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:["cdkDropListAutoScrollDisabled","autoScrollDisabled"],autoScrollStep:["cdkDropListAutoScrollStep","autoScrollStep"]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[t._Bn([{provide:ka,useValue:void 0},{provide:Hv,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dl=new t.OlP("CdkDragHandle");let sh=(()=>{class n{constructor(e,i){this.element=e,this._stateChanges=new $t.x,this._disabled=!1,this._parentDrag=i}get disabled(){return this._disabled}set disabled(e){this._disabled=En(e),this._stateChanges.next(this)}ngOnDestroy(){this._stateChanges.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Pl,12))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:["cdkDragHandleDisabled","disabled"]},features:[t._Bn([{provide:Dl,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vo=new t.OlP("CdkDragPlaceholder"),ah=new t.OlP("CdkDragPreview");let Wr=(()=>{class n{constructor(e,i,c,u,p,b,T,j,W,ht,zt){this.element=e,this.dropContainer=i,this._ngZone=u,this._viewContainerRef=p,this._dir=T,this._changeDetectorRef=W,this._selfHandle=ht,this._parentDrag=zt,this._destroyed=new $t.x,this.started=new t.vpe,this.released=new t.vpe,this.ended=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.dropped=new t.vpe,this.moved=new je.y(Vt=>{const Kt=this._dragRef.moved.pipe((0,Mn.U)(ve=>({source:this,pointerPosition:ve.pointerPosition,event:ve.event,delta:ve.delta,distance:ve.distance}))).subscribe(Vt);return()=>{Kt.unsubscribe()}}),this._dragRef=j.createDrag(e,{dragStartThreshold:b&&null!=b.dragStartThreshold?b.dragStartThreshold:5,pointerDirectionChangeThreshold:b&&null!=b.pointerDirectionChangeThreshold?b.pointerDirectionChangeThreshold:5,zIndex:b?.zIndex}),this._dragRef.data=this,n._dragInstances.push(this),b&&this._assignDefaults(b),i&&(this._dragRef._withDropContainer(i._dropListRef),i.addItem(this)),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(e){this._disabled=En(e),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(tn(1),Gi(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._setupHandlesListener(),this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)})})}ngOnChanges(e){const i=e.rootElementSelector,c=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),c&&!c.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this);const e=n._dragInstances.indexOf(this);e>-1&&n._dragInstances.splice(e,1),this._ngZone.runOutsideAngular(()=>{this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_updateRootElement(){const e=this.element.nativeElement;let i=e;this.rootElementSelector&&(i=void 0!==e.closest?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){const e=this.boundaryElement;return e?"string"==typeof e?this.element.nativeElement.closest(e):be(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){const i=this._dir,c=this.dragStartDelay,u=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,p=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.dragStartDelay="object"==typeof c&&c?c:m_(c),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(u).withPreviewTemplate(p).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe(tn(1)).subscribe(()=>{if(this._parentDrag)return void e.withParent(this._parentDrag._dragRef);let i=this.element.nativeElement.parentElement;for(;i;){if(i.classList.contains("cdk-drag")){e.withParent(n._dragInstances.find(c=>c.element.nativeElement===i)?._dragRef||null);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){const{lockAxis:i,dragStartDelay:c,constrainPosition:u,previewClass:p,boundaryElement:b,draggingDisabled:T,rootElementSelector:j,previewContainer:W}=e;this.disabled=T??!1,this.dragStartDelay=c||0,i&&(this.lockAxis=i),u&&(this.constrainPosition=u),p&&(this.previewClass=p),b&&(this.boundaryElement=b),j&&(this.rootElementSelector=j),W&&(this.previewContainer=W)}_setupHandlesListener(){this._handles.changes.pipe(Eo(this._handles),Qd(e=>{const i=e.filter(c=>c._parentDrag===this).map(c=>c.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),Gr(e=>(0,Lo.T)(...e.map(i=>i._stateChanges.pipe(Eo(i))))),Gi(this._destroyed)).subscribe(e=>{const i=this._dragRef,c=e.element.nativeElement;e.disabled?i.disableHandle(c):i.enableHandle(c)})}}return n._dragInstances=[],n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Hv,12),t.Y36(x),t.Y36(t.R0b),t.Y36(t.s_b),t.Y36(xl,8),t.Y36(xi,8),t.Y36(Ol),t.Y36(t.sBO),t.Y36(Dl,10),t.Y36(Pl,12))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDrag",""]],contentQueries:function(e,i,c){if(1&e&&(t.Suo(c,ah,5),t.Suo(c,Vo,5),t.Suo(c,Dl,5)),2&e){let u;t.iGM(u=t.CRH())&&(i._previewTemplate=u.first),t.iGM(u=t.CRH())&&(i._placeholderTemplate=u.first),t.iGM(u=t.CRH())&&(i._handles=u)}},hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,i){2&e&&t.ekj("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging())},inputs:{data:["cdkDragData","data"],lockAxis:["cdkDragLockAxis","lockAxis"],rootElementSelector:["cdkDragRootElement","rootElementSelector"],boundaryElement:["cdkDragBoundary","boundaryElement"],dragStartDelay:["cdkDragStartDelay","dragStartDelay"],freeDragPosition:["cdkDragFreeDragPosition","freeDragPosition"],disabled:["cdkDragDisabled","disabled"],constrainPosition:["cdkDragConstrainPosition","constrainPosition"],previewClass:["cdkDragPreviewClass","previewClass"],previewContainer:["cdkDragPreviewContainer","previewContainer"]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[t._Bn([{provide:Pl,useExisting:n}]),t.TTD]}),n})(),Bv=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Ol],imports:[Do]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Aa{attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;null!=r&&(this._attachedHost=null,r.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(r){this._attachedHost=r}}class uh extends Aa{constructor(r,e,i,c){super(),this.component=r,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=c}}class Xr extends Aa{constructor(r,e,i,c){super(),this.templateRef=r,this.viewContainerRef=e,this.context=i,this.injector=c}get origin(){return this.templateRef.elementRef}attach(r,e=this.context){return this.context=e,super.attach(r)}detach(){return this.context=void 0,super.detach()}}class Ta extends Aa{constructor(r){super(),this.element=r instanceof t.SBq?r.nativeElement:r}}class ts{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(r){return r instanceof uh?(this._attachedPortal=r,this.attachComponentPortal(r)):r instanceof Xr?(this._attachedPortal=r,this.attachTemplatePortal(r)):this.attachDomPortal&&r instanceof Ta?(this._attachedPortal=r,this.attachDomPortal(r)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Al extends ts{constructor(r,e,i,c,u){super(),this.outletElement=r,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=c,this.attachDomPortal=p=>{const b=p.element,T=this._document.createComment("dom-portal");b.parentNode.insertBefore(T,b),this.outletElement.appendChild(b),this._attachedPortal=p,super.setDisposeFn(()=>{T.parentNode&&T.parentNode.replaceChild(b,T)})},this._document=u}attachComponentPortal(r){const i=(r.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(r.component);let c;return r.viewContainerRef?(c=r.viewContainerRef.createComponent(i,r.viewContainerRef.length,r.injector||r.viewContainerRef.injector),this.setDisposeFn(()=>c.destroy())):(c=i.create(r.injector||this._defaultInjector||t.zs3.NULL),this._appRef.attachView(c.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(c.hostView),c.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(c)),this._attachedPortal=r,c}attachTemplatePortal(r){let e=r.viewContainerRef,i=e.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return i.rootNodes.forEach(c=>this.outletElement.appendChild(c)),i.detectChanges(),this.setDisposeFn(()=>{let c=e.indexOf(i);-1!==c&&e.remove(c)}),this._attachedPortal=r,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let hh=(()=>{class n extends ts{constructor(e,i,c){super(),this._componentFactoryResolver=e,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new t.vpe,this.attachDomPortal=u=>{const p=u.element,b=this._document.createComment("dom-portal");u.setAttachedHost(this),p.parentNode.insertBefore(b,p),this._getRootNode().appendChild(p),this._attachedPortal=u,super.setDisposeFn(()=>{b.parentNode&&b.parentNode.replaceChild(p,b)})},this._document=c}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const i=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,u=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),p=i.createComponent(u,i.length,e.injector||i.injector);return i!==this._viewContainerRef&&this._getRootNode().appendChild(p.hostView.rootNodes[0]),super.setDisposeFn(()=>p.destroy()),this._attachedPortal=e,this._attachedRef=p,this.attached.emit(p),p}attachTemplatePortal(e){e.setAttachedHost(this);const i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36(x))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[t.qOj]}),n})(),Ea=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fh=el();class DO{constructor(r,e){this._viewportRuler=r,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||"",this._previousHTMLStyles.top=r.style.top||"",r.style.left=Me(-this._previousScrollPosition.left),r.style.top=Me(-this._previousScrollPosition.top),r.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const r=this._document.documentElement,i=r.style,c=this._document.body.style,u=i.scrollBehavior||"",p=c.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,r.classList.remove("cdk-global-scrollblock"),fh&&(i.scrollBehavior=c.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fh&&(i.scrollBehavior=u,c.scrollBehavior=p)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ph{constructor(r,e,i,c){this._scrollDispatcher=r,this._ngZone=e,this._viewportRuler=i,this._config=c,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(r){this._overlayRef=r}enable(){if(this._scrollSubscription)return;const r=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=r.subscribe(()=>{const e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=r.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class mh{enable(){}disable(){}attach(){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function es(n,r){return r.some(e=>n.bottom<e.top||n.top>e.bottom||n.right<e.left||n.left>e.right)}function zv(n,r){return r.some(e=>n.top<e.top||n.bottom>e.bottom||n.left<e.left||n.right>e.right)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kO{constructor(r,e,i,c){this._scrollDispatcher=r,this._viewportRuler=e,this._ngZone=i,this._config=c,this._scrollSubscription=null}attach(r){this._overlayRef=r}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:c}=this._viewportRuler.getViewportSize();es(e,[{width:i,height:c,bottom:c,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let AO=(()=>{class n{constructor(e,i,c,u){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=c,this.noop=()=>new mh,this.close=p=>new ph(this._scrollDispatcher,this._ngZone,this._viewportRuler,p),this.block=()=>new DO(this._viewportRuler,this._document),this.reposition=p=>new kO(this._scrollDispatcher,this._viewportRuler,this._ngZone,p),this._document=u}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Nn),t.LFG(nl),t.LFG(t.R0b),t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Qv{constructor(r){if(this.scrollStrategy=new mh,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,r){const e=Object.keys(r);for(const i of e)void 0!==r[i]&&(this[i]=r[i])}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pn{constructor(r,e,i,c,u){this.offsetX=i,this.offsetY=c,this.panelClass=u,this.originX=r.originX,this.originY=r.originY,this.overlayX=e.overlayX,this.overlayY=e.overlayY}}class TO{constructor(r,e){this.connectionPair=r,this.scrollableViewProperties=e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Gv=(()=>{class n{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){const i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),0===this._attachedOverlays.length&&this.detach()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Ti=(()=>{class n extends Gv{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=c=>{const u=this._attachedOverlays;for(let p=u.length-1;p>-1;p--)if(u[p]._keydownEvents.observers.length>0){const b=u[p]._keydownEvents;this._ngZone?this._ngZone.run(()=>b.next(c)):b.next(c);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x),t.LFG(t.R0b,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Tl=(()=>{class n extends Gv{constructor(e,i,c){super(e),this._platform=i,this._ngZone=c,this._cursorStyleIsSet=!1,this._pointerDownListener=u=>{this._pointerDownEventTarget=fn(u)},this._clickListener=u=>{const p=fn(u),b="click"===u.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:p;this._pointerDownEventTarget=null;const T=this._attachedOverlays.slice();for(let j=T.length-1;j>-1;j--){const W=T[j];if(W._outsidePointerEvents.observers.length<1||!W.hasAttached())continue;if(W.overlayElement.contains(p)||W.overlayElement.contains(b))break;const ht=W._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>ht.next(u)):ht.next(u)}}}add(e){if(super.add(e),!this._isAttached){const i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x),t.LFG(Gn),t.LFG(t.R0b,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),El=(()=>{class n{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const e="cdk-overlay-container";if(this._platform.isBrowser||Yi()){const c=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let u=0;u<c.length;u++)c[u].remove()}const i=this._document.createElement("div");i.classList.add(e),Yi()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x),t.LFG(Gn))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Sa{constructor(r,e,i,c,u,p,b,T,j,W=!1){this._portalOutlet=r,this._host=e,this._pane=i,this._config=c,this._ngZone=u,this._keyboardDispatcher=p,this._document=b,this._location=T,this._outsideClickDispatcher=j,this._animationsDisabled=W,this._backdropElement=null,this._backdropClick=new $t.x,this._attachments=new $t.x,this._detachments=new $t.x,this._locationChanges=Ln.w0.EMPTY,this._backdropClickHandler=ht=>this._backdropClick.next(ht),this._backdropTransitionendHandler=ht=>{this._disposeBackdrop(ht.target)},this._keydownEvents=new $t.x,this._outsidePointerEvents=new $t.x,c.scrollStrategy&&(this._scrollStrategy=c.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=c.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(r){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const e=this._portalOutlet.attach(r);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(tn(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof e?.onDestroy&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const r=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),r}dispose(){const r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,r&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config={...this._config,...r},this._updateElementSize()}setDirection(r){this._config={...this._config,direction:r},this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){const r=this._config.direction;return r?"string"==typeof r?r:r.value:"ltr"}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const r=this._pane.style;r.width=Me(this._config.width),r.height=Me(this._config.height),r.minWidth=Me(this._config.minWidth),r.minHeight=Me(this._config.minHeight),r.maxWidth=Me(this._config.maxWidth),r.maxHeight=Me(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?"":"none"}_attachBackdrop(){const r="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(r)})}):this._backdropElement.classList.add(r)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const r=this._backdropElement;if(r){if(this._animationsDisabled)return void this._disposeBackdrop(r);r.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{r.addEventListener("transitionend",this._backdropTransitionendHandler)}),r.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(r)},500))}}_toggleClasses(r,e,i){const c=me(e||[]).filter(u=>!!u);c.length&&(i?r.classList.add(...c):r.classList.remove(...c))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const r=this._ngZone.onStable.pipe(Gi((0,Lo.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),r.unsubscribe())})})}_disposeScrollStrategy(){const r=this._scrollStrategy;r&&(r.disable(),r.detach&&r.detach())}_disposeBackdrop(r){r&&(r.removeEventListener("click",this._backdropClickHandler),r.removeEventListener("transitionend",this._backdropTransitionendHandler),r.remove(),this._backdropElement===r&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ia="cdk-overlay-connected-position-bounding-box",_h=/([A-Za-z%]+)$/;class Sl{constructor(r,e,i,c,u){this._viewportRuler=e,this._document=i,this._platform=c,this._overlayContainer=u,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new $t.x,this._resizeSubscription=Ln.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(r)}get positions(){return this._preferredPositions}attach(r){this._validatePositions(),r.hostElement.classList.add(Ia),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const r=this._originRect,e=this._overlayRect,i=this._viewportRect,c=this._containerRect,u=[];let p;for(let b of this._preferredPositions){let T=this._getOriginPoint(r,c,b),j=this._getOverlayPoint(T,e,b),W=this._getOverlayFit(j,e,i,b);if(W.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(b,T);this._canFitWithFlexibleDimensions(W,j,i)?u.push({position:b,origin:T,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(T,b)}):(!p||p.overlayFit.visibleArea<W.visibleArea)&&(p={overlayFit:W,overlayPoint:j,originPoint:T,position:b,overlayRect:e})}if(u.length){let b=null,T=-1;for(const j of u){const W=j.boundingBoxRect.width*j.boundingBoxRect.height*(j.position.weight||1);W>T&&(T=W,b=j)}return this._isPushed=!1,void this._applyPosition(b.position,b.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(p.position,p.originPoint);this._applyPosition(p.position,p.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ki(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ia),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const r=this._lastPosition;if(r){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const e=this._getOriginPoint(this._originRect,this._containerRect,r);this._applyPosition(r,e)}else this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,-1===r.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}_getOriginPoint(r,e,i){let c,u;if("center"==i.originX)c=r.left+r.width/2;else{const p=this._isRtl()?r.right:r.left,b=this._isRtl()?r.left:r.right;c="start"==i.originX?p:b}return e.left<0&&(c-=e.left),u="center"==i.originY?r.top+r.height/2:"top"==i.originY?r.top:r.bottom,e.top<0&&(u-=e.top),{x:c,y:u}}_getOverlayPoint(r,e,i){let c,u;return c="center"==i.overlayX?-e.width/2:"start"===i.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,u="center"==i.overlayY?-e.height/2:"top"==i.overlayY?0:-e.height,{x:r.x+c,y:r.y+u}}_getOverlayFit(r,e,i,c){const u=Il(e);let{x:p,y:b}=r,T=this._getOffset(c,"x"),j=this._getOffset(c,"y");T&&(p+=T),j&&(b+=j);let zt=0-b,Vt=b+u.height-i.height,Kt=this._subtractOverflows(u.width,0-p,p+u.width-i.width),ve=this._subtractOverflows(u.height,zt,Vt),fe=Kt*ve;return{visibleArea:fe,isCompletelyWithinViewport:u.width*u.height===fe,fitsInViewportVertically:ve===u.height,fitsInViewportHorizontally:Kt==u.width}}_canFitWithFlexibleDimensions(r,e,i){if(this._hasFlexibleDimensions){const c=i.bottom-e.y,u=i.right-e.x,p=ci(this._overlayRef.getConfig().minHeight),b=ci(this._overlayRef.getConfig().minWidth),j=r.fitsInViewportHorizontally||null!=b&&b<=u;return(r.fitsInViewportVertically||null!=p&&p<=c)&&j}return!1}_pushOverlayOnScreen(r,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};const c=Il(e),u=this._viewportRect,p=Math.max(r.x+c.width-u.width,0),b=Math.max(r.y+c.height-u.height,0),T=Math.max(u.top-i.top-r.y,0),j=Math.max(u.left-i.left-r.x,0);let W=0,ht=0;return W=c.width<=u.width?j||-p:r.x<this._viewportMargin?u.left-i.left-r.x:0,ht=c.height<=u.height?T||-b:r.y<this._viewportMargin?u.top-i.top-r.y:0,this._previousPushAmount={x:W,y:ht},{x:r.x+W,y:r.y+ht}}_applyPosition(r,e){if(this._setTransformOrigin(r),this._setOverlayElementStyles(e,r),this._setBoundingBoxStyles(e,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._lastPosition=r,this._positionChanges.observers.length){const i=this._getScrollVisibility(),c=new TO(r,i);this._positionChanges.next(c)}this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let i,c=r.overlayY;i="center"===r.overlayX?"center":this._isRtl()?"start"===r.overlayX?"right":"left":"start"===r.overlayX?"left":"right";for(let u=0;u<e.length;u++)e[u].style.transformOrigin=`${i} ${c}`}_calculateBoundingBoxRect(r,e){const i=this._viewportRect,c=this._isRtl();let u,p,b,W,ht,zt;if("top"===e.overlayY)p=r.y,u=i.height-p+this._viewportMargin;else if("bottom"===e.overlayY)b=i.height-r.y+2*this._viewportMargin,u=i.height-b+this._viewportMargin;else{const Vt=Math.min(i.bottom-r.y+i.top,r.y),Kt=this._lastBoundingBoxSize.height;u=2*Vt,p=r.y-Vt,u>Kt&&!this._isInitialRender&&!this._growAfterOpen&&(p=r.y-Kt/2)}if("end"===e.overlayX&&!c||"start"===e.overlayX&&c)zt=i.width-r.x+this._viewportMargin,W=r.x-this._viewportMargin;else if("start"===e.overlayX&&!c||"end"===e.overlayX&&c)ht=r.x,W=i.right-r.x;else{const Vt=Math.min(i.right-r.x+i.left,r.x),Kt=this._lastBoundingBoxSize.width;W=2*Vt,ht=r.x-Vt,W>Kt&&!this._isInitialRender&&!this._growAfterOpen&&(ht=r.x-Kt/2)}return{top:p,left:ht,bottom:b,right:zt,width:W,height:u}}_setBoundingBoxStyles(r,e){const i=this._calculateBoundingBoxRect(r,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));const c={};if(this._hasExactPosition())c.top=c.left="0",c.bottom=c.right=c.maxHeight=c.maxWidth="",c.width=c.height="100%";else{const u=this._overlayRef.getConfig().maxHeight,p=this._overlayRef.getConfig().maxWidth;c.height=Me(i.height),c.top=Me(i.top),c.bottom=Me(i.bottom),c.width=Me(i.width),c.left=Me(i.left),c.right=Me(i.right),c.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",c.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",u&&(c.maxHeight=Me(u)),p&&(c.maxWidth=Me(p))}this._lastBoundingBoxSize=i,Ki(this._boundingBox.style,c)}_resetBoundingBoxStyles(){Ki(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ki(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(r,e){const i={},c=this._hasExactPosition(),u=this._hasFlexibleDimensions,p=this._overlayRef.getConfig();if(c){const W=this._viewportRuler.getViewportScrollPosition();Ki(i,this._getExactOverlayY(e,r,W)),Ki(i,this._getExactOverlayX(e,r,W))}else i.position="static";let b="",T=this._getOffset(e,"x"),j=this._getOffset(e,"y");T&&(b+=`translateX(${T}px) `),j&&(b+=`translateY(${j}px)`),i.transform=b.trim(),p.maxHeight&&(c?i.maxHeight=Me(p.maxHeight):u&&(i.maxHeight="")),p.maxWidth&&(c?i.maxWidth=Me(p.maxWidth):u&&(i.maxWidth="")),Ki(this._pane.style,i)}_getExactOverlayY(r,e,i){let c={top:"",bottom:""},u=this._getOverlayPoint(e,this._overlayRect,r);return this._isPushed&&(u=this._pushOverlayOnScreen(u,this._overlayRect,i)),"bottom"===r.overlayY?c.bottom=this._document.documentElement.clientHeight-(u.y+this._overlayRect.height)+"px":c.top=Me(u.y),c}_getExactOverlayX(r,e,i){let p,c={left:"",right:""},u=this._getOverlayPoint(e,this._overlayRect,r);return this._isPushed&&(u=this._pushOverlayOnScreen(u,this._overlayRect,i)),p=this._isRtl()?"end"===r.overlayX?"left":"right":"end"===r.overlayX?"right":"left","right"===p?c.right=this._document.documentElement.clientWidth-(u.x+this._overlayRect.width)+"px":c.left=Me(u.x),c}_getScrollVisibility(){const r=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(c=>c.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:zv(r,i),isOriginOutsideView:es(r,i),isOverlayClipped:zv(e,i),isOverlayOutsideView:es(e,i)}}_subtractOverflows(r,...e){return e.reduce((i,c)=>i-Math.max(c,0),r)}_getNarrowedViewportRect(){const r=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+r-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:r-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,e){return"x"===e?r.offsetX??this._offsetX:r.offsetY??this._offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&me(r).forEach(e=>{""!==e&&-1===this._appliedPanelClasses.indexOf(e)&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getOriginRect(){const r=this._origin;if(r instanceof t.SBq)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();const e=r.width||0,i=r.height||0;return{top:r.y,bottom:r.y+i,left:r.x,right:r.x+e,height:i,width:e}}}function Ki(n,r){for(let e in r)r.hasOwnProperty(e)&&(n[e]=r[e]);return n}function ci(n){if("number"!=typeof n&&null!=n){const[r,e]=n.split(_h);return e&&"px"!==e?null:parseFloat(r)}return n||null}function Il(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}const Ll="cdk-global-overlay-wrapper";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Yv{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(r){const e=r.getConfig();this._overlayRef=r,this._width&&!e.width&&r.updateSize({width:this._width}),this._height&&!e.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(Ll),this._isDisposed=!1}top(r=""){return this._bottomOffset="",this._topOffset=r,this._alignItems="flex-start",this}left(r=""){return this._xOffset=r,this._xPosition="left",this}bottom(r=""){return this._topOffset="",this._bottomOffset=r,this._alignItems="flex-end",this}right(r=""){return this._xOffset=r,this._xPosition="right",this}start(r=""){return this._xOffset=r,this._xPosition="start",this}end(r=""){return this._xOffset=r,this._xPosition="end",this}width(r=""){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=""){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=""){return this.left(r),this._xPosition="center",this}centerVertically(r=""){return this.top(r),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:c,height:u,maxWidth:p,maxHeight:b}=i,T=!("100%"!==c&&"100vw"!==c||p&&"100%"!==p&&"100vw"!==p),j=!("100%"!==u&&"100vh"!==u||b&&"100%"!==b&&"100vh"!==b),W=this._xPosition,ht=this._xOffset,zt="rtl"===this._overlayRef.getConfig().direction;let Vt="",Kt="",ve="";T?ve="flex-start":"center"===W?(ve="center",zt?Kt=ht:Vt=ht):zt?"left"===W||"end"===W?(ve="flex-end",Vt=ht):("right"===W||"start"===W)&&(ve="flex-start",Kt=ht):"left"===W||"start"===W?(ve="flex-start",Vt=ht):("right"===W||"end"===W)&&(ve="flex-end",Kt=ht),r.position=this._cssPosition,r.marginLeft=T?"0":Vt,r.marginTop=j?"0":this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=T?"0":Kt,e.justifyContent=ve,e.alignItems=j?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Ll),i.justifyContent=i.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position="",this._overlayRef=null,this._isDisposed=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let $v=(()=>{class n{constructor(e,i,c,u){this._viewportRuler=e,this._document=i,this._platform=c,this._overlayContainer=u}global(){return new Yv}flexibleConnectedTo(e){return new Sl(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(nl),t.LFG(x),t.LFG(Gn),t.LFG(El))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),La=0,we=(()=>{class n{constructor(e,i,c,u,p,b,T,j,W,ht,zt,Vt){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=c,this._positionBuilder=u,this._keyboardDispatcher=p,this._injector=b,this._ngZone=T,this._document=j,this._directionality=W,this._location=ht,this._outsideClickDispatcher=zt,this._animationsModuleType=Vt}create(e){const i=this._createHostElement(),c=this._createPaneElement(i),u=this._createPortalOutlet(c),p=new Qv(e);return p.direction=p.direction||this._directionality.value,new Sa(u,i,c,p,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(e){const i=this._document.createElement("div");return i.id="cdk-overlay-"+La++,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){const e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(t.z2F)),new Al(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(AO),t.LFG(El),t.LFG(t._Vd),t.LFG($v),t.LFG(Ti),t.LFG(t.zs3),t.LFG(t.R0b),t.LFG(x),t.LFG(xi),t.LFG(ct),t.LFG(Tl),t.LFG(t.QbO,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const yh={provide:new t.OlP("cdk-connected-overlay-scroll-strategy"),deps:[we],useFactory:function Mh(n){return()=>n.scrollStrategies.reposition()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Fl=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[we,yh],imports:[pa,Ea,Yn,Yn]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Na(n){return new je.y(r=>{(0,Sn.Xf)(n()).subscribe(r)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zl(n,r){}class Rl{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Kv=(()=>{class n extends ts{constructor(e,i,c,u,p,b,T,j){super(),this._elementRef=e,this._focusTrapFactory=i,this._config=u,this._interactivityChecker=p,this._ngZone=b,this._overlayRef=T,this._focusMonitor=j,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=W=>{this._portalOutlet.hasAttached();const ht=this._portalOutlet.attachDomPortal(W);return this._contentAttached(),ht},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=c}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();const i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const c=()=>{e.removeEventListener("blur",c),e.removeEventListener("mousedown",c),e.removeAttribute("tabindex")};e.addEventListener("blur",c),e.addEventListener("mousedown",c)})),e.focus(i)}_focusByCssSelector(e,i){let c=this._elementRef.nativeElement.querySelector(e);c&&this._forceFocus(c,i)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{i||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let i=null;if("string"==typeof e?i=this._document.querySelector(e):"boolean"==typeof e?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&"function"==typeof i.focus){const c=Po(),u=this._elementRef.nativeElement;(!c||c===this._document.body||c===u||u.contains(c))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,i=Po();return e===i||e.contains(i)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Po())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(ya),t.Y36(x,8),t.Y36(Rl),t.Y36(Zd),t.Y36(t.R0b),t.Y36(Sa),t.Y36(yO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(1&e&&t.Gf(hh,7),2&e){let c;t.iGM(c=t.CRH())&&(i._portalOutlet=c.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){2&e&&t.uIk("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledBy)("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[t.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){1&e&&t.YNc(0,Zl,0,0,"ng-template",0)},dependencies:[hh],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Je{constructor(r,e){this.overlayRef=r,this.config=e,this.closed=new $t.x,this.disableClose=e.disableClose,this.backdropClick=r.backdropClick(),this.keydownEvents=r.keydownEvents(),this.outsidePointerEvents=r.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{27===i.keyCode&&!this.disableClose&&!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gv(n,...r){return r.length?r.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(r,e){if(this.containerInstance){const i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),i.next(r),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(r="",e=""){return this.overlayRef.updateSize({width:r,height:e}),this}addPanelClass(r){return this.overlayRef.addPanelClass(r),this}removePanelClass(r){return this.overlayRef.removePanelClass(r),this}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Oh=new t.OlP("DialogScrollStrategy"),ze=new t.OlP("DialogData"),Vl=new t.OlP("DefaultDialogConfig"),mn={provide:Oh,deps:[we],useFactory:function Wv(n){return()=>n.scrollStrategies.block()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ph=0,Ie=(()=>{class n{constructor(e,i,c,u,p,b){this._overlay=e,this._injector=i,this._defaultOptions=c,this._parentDialog=u,this._overlayContainer=p,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new $t.x,this._afterOpenedAtThisLevel=new $t.x,this._ariaHiddenElements=new Map,this.afterAllClosed=Na(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Eo(void 0))),this._scrollStrategy=b}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,i){(i={...this._defaultOptions||new Rl,...i}).id=i.id||"cdk-dialog-"+Ph++,i.id&&this.getDialogById(i.id);const u=this._getOverlayConfig(i),p=this._overlay.create(u),b=new Je(p,i),T=this._attachContainer(p,b,i);return b.containerInstance=T,this._attachDialogContent(e,b,T,i),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(b),b.closed.subscribe(()=>this._removeOpenDialog(b,!0)),this.afterOpened.next(b),b}closeAll(){xh(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){xh(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),xh(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const i=new Qv({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,c){const u=c.injector||c.viewContainerRef?.injector,p=[{provide:Rl,useValue:c},{provide:Je,useValue:i},{provide:Sa,useValue:e}];let b;c.container?"function"==typeof c.container?b=c.container:(b=c.container.type,p.push(...c.container.providers(c))):b=Kv;const T=new uh(b,c.viewContainerRef,t.zs3.create({parent:u||this._injector,providers:p}),c.componentFactoryResolver);return e.attach(T).instance}_attachDialogContent(e,i,c,u){if(e instanceof t.Rgc){const p=this._createInjector(u,i,c,void 0);let b={$implicit:u.data,dialogRef:i};u.templateContext&&(b={...b,..."function"==typeof u.templateContext?u.templateContext():u.templateContext}),c.attachTemplatePortal(new Xr(e,null,b,p))}else{const p=this._createInjector(u,i,c,this._injector),b=c.attachComponentPortal(new uh(e,u.viewContainerRef,p,u.componentFactoryResolver));i.componentInstance=b.instance}}_createInjector(e,i,c,u){const p=e.injector||e.viewContainerRef?.injector,b=[{provide:ze,useValue:e.data},{provide:Je,useValue:i}];return e.providers&&("function"==typeof e.providers?b.push(...e.providers(i,e,c)):b.push(...e.providers)),e.direction&&(!p||!p.get(xi,null,t.XFs.Optional))&&b.push({provide:xi,useValue:{value:e.direction,change:Ji()}}),t.zs3.create({parent:p||u,providers:b})}_removeOpenDialog(e,i){const c=this.openDialogs.indexOf(e);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((u,p)=>{u?p.setAttribute("aria-hidden",u):p.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const i=e.parentElement.children;for(let c=i.length-1;c>-1;c--){const u=i[c];u!==e&&"SCRIPT"!==u.nodeName&&"STYLE"!==u.nodeName&&!u.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(u,u.getAttribute("aria-hidden")),u.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(we),t.LFG(t.zs3),t.LFG(Vl,8),t.LFG(n,12),t.LFG(El),t.LFG(Oh))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function xh(n,r){let e=n.length;for(;e--;)r(n[e])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Xv=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Ie,mn],imports:[Fl,Ea,Zn,Ea]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const li=new je.y(tl.Z);class eC extends je.y{constructor(r,e){super(),this.source=r,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,(0,cn.A)(r)&&(this.lift=r.lift)}_subscribe(r){return this.getSubject().subscribe(r)}getSubject(){const r=this._subject;return(!r||r.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:r}=this;this._subject=this._connection=null,r?.unsubscribe()}connect(){let r=this._connection;if(!r){r=this._connection=new Ln.w0;const e=this.getSubject();r.add(this.source.subscribe((0,Se.x)(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),r.closed&&(this._connection=null,r=Ln.w0.EMPTY)}return r}refCount(){return function tC(){return(0,cn.e)((n,r)=>{let e=null;n._refCount++;const i=(0,Se.x)(r,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount)return void(e=null);const c=n._connection,u=e;e=null,c&&(!u||c===u)&&c.unsubscribe(),r.unsubscribe()});n.subscribe(i),i.closed||(e=n.connect())})}()(this)}}const nC={connector:()=>new $t.x};function Ul(n,r=nC){const{connector:e}=r;return(0,cn.e)((i,c)=>{const u=e();(0,Sn.Xf)(n(function wh(n){return new je.y(r=>n.subscribe(r))}(u))).subscribe(c),c.add(i.subscribe(u))})}function Ah(n,r){return r?e=>Ma(r.pipe(tn(1),function Dh(){return(0,cn.e)((n,r)=>{n.subscribe((0,Se.x)(r,tl.Z))})}()),e.pipe(Ah(n))):(0,Jc.z)((e,i)=>n(e,i).pipe(tn(1),function kh(n){return(0,Mn.U)(()=>n)}(e)))}
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Wi="Service workers are disabled or not supported by this browser";class Fa{constructor(r){if(this.serviceWorker=r,r){const i=zi(r,"controllerchange").pipe((0,Mn.U)(()=>r.controller)),u=Ma(Na(()=>Ji(r.controller)),i);this.worker=u.pipe(yn(W=>!!W)),this.registration=this.worker.pipe(Gr(()=>r.getRegistration()));const j=zi(r,"message").pipe((0,Mn.U)(W=>W.data)).pipe(yn(W=>W&&W.type)).pipe(function oC(n){return n?r=>Ul(n)(r):r=>function iC(n,r){const e=(0,In.m)(n)?n:()=>n;return(0,In.m)(r)?Ul(r,{connector:e}):i=>new eC(i,e)}(new $t.x)(r)}());j.connect(),this.events=j}else this.worker=this.events=this.registration=function rC(n){return Na(()=>function jl(n,r){const e=(0,In.m)(n)?n:()=>n,i=c=>c.error(e());return new je.y(r?c=>r.schedule(i,0,c):i)}(new Error(n)))}(Wi)}postMessage(r,e){return this.worker.pipe(tn(1),Qd(i=>{i.postMessage({action:r,...e})})).toPromise().then(()=>{})}postMessageWithOperation(r,e,i){const c=this.waitForOperationCompleted(i),u=this.postMessage(r,e);return Promise.all([u,c]).then(([,p])=>p)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(r){let e;return e="string"==typeof r?i=>i.type===r:i=>r.includes(i.type),this.events.pipe(yn(e))}nextEventOfType(r){return this.eventsOfType(r).pipe(tn(1))}waitForOperationCompleted(r){return this.eventsOfType("OPERATION_COMPLETED").pipe(yn(e=>e.nonce===r),tn(1),(0,Mn.U)(e=>{if(void 0!==e.result)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let LO=(()=>{class n{constructor(e){if(this.sw=e,this.subscriptionChanges=new $t.x,!e.isEnabled)return this.messages=li,this.notificationClicks=li,void(this.subscription=li);this.messages=this.sw.eventsOfType("PUSH").pipe((0,Mn.U)(c=>c.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,Mn.U)(c=>c.data)),this.pushManager=this.sw.registration.pipe((0,Mn.U)(c=>c.pushManager));const i=this.pushManager.pipe(Gr(c=>c.getSubscription()));this.subscription=(0,Lo.T)(i,this.subscriptionChanges)}get isEnabled(){return this.sw.isEnabled}requestSubscription(e){if(!this.sw.isEnabled)return Promise.reject(new Error(Wi));const i={userVisibleOnly:!0};let c=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),u=new Uint8Array(new ArrayBuffer(c.length));for(let p=0;p<c.length;p++)u[p]=c.charCodeAt(p);return i.applicationServerKey=u,this.pushManager.pipe(Gr(p=>p.subscribe(i)),tn(1)).toPromise().then(p=>(this.subscriptionChanges.next(p),p))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe(tn(1),Gr(i=>{if(null===i)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(c=>{if(!c)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(Wi))}decodeBase64(e){return atob(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Fa))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),Hl=(()=>{class n{constructor(e){if(this.sw=e,!e.isEnabled)return this.versionUpdates=li,this.available=li,this.activated=li,void(this.unrecoverable=li);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.available=this.versionUpdates.pipe(yn(i=>"VERSION_READY"===i.type),(0,Mn.U)(i=>({type:"UPDATE_AVAILABLE",current:i.currentVersion,available:i.latestVersion}))),this.activated=this.sw.eventsOfType("UPDATE_ACTIVATED"),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}get isEnabled(){return this.sw.isEnabled}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Wi));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Wi));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Fa))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bl{}const Th=new t.OlP("NGSW_REGISTER_SCRIPT");function sC(n,r,e,i){return()=>{if(!_r(i)||!("serviceWorker"in navigator)||!1===e.enabled)return;let c;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof e.registrationStrategy)c=e.registrationStrategy();else{const[p,...b]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":c=Ji(null);break;case"registerWithDelay":c=Za(+b[0]||0);break;case"registerWhenStable":c=b[0]?(0,Lo.T)(Eh(n),Za(+b[0])):Eh(n);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}n.get(t.R0b).runOutsideAngular(()=>c.pipe(tn(1)).subscribe(()=>navigator.serviceWorker.register(r,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))))}}function Za(n){return Ji(null).pipe(function Kn(n,r=Oi){const e=Xc(n,r);return Ah(()=>e)}(n))}function Eh(n){return n.get(t.z2F).isStable.pipe(yn(e=>e))}function aC(n,r){return new Fa(_r(r)&&!1!==n.enabled?navigator.serviceWorker:void 0)}let Ra=(()=>{class n{static register(e,i={}){return{ngModule:n,providers:[{provide:Th,useValue:e},{provide:Bl,useValue:i},{provide:Fa,useFactory:aC,deps:[Bl,t.Lbi]},{provide:t.ip1,useFactory:sC,deps:[t.zs3,Th,Bl,t.Lbi],multi:!0}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[LO,Hl]}),n})(),ns=(()=>{class n{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=c=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n}),n})(),Uo=(()=>{class n extends ns{}return n.\u0275fac=function(){let r;return function(i){return(r||(r=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,features:[t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bn=new t.OlP("NgValueAccessor");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ff=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const vf={provide:bn,useExisting:(0,t.Gpc)(()=>Wa),multi:!0};function Ms(n,r){return null==n?`${r}`:(r&&"object"==typeof r&&(r="Object"),`${n}: ${r}`.slice(0,50))}let Wa=(()=>{class n extends Uo{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const c=Ms(this._getOptionId(e),e);this.setProperty("value",c)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){const i=function DC(n){return n.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i):e}}return n.\u0275fac=function(){let r;return function(i){return(r||(r=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(u){return i.onChange(u.target.value)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([vf]),t.qOj]}),n})(),Xa=(()=>{class n{constructor(e,i,c){this._element=e,this._renderer=i,this._select=c,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(Ms(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Wa,9))},n.\u0275dir=t.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mg={provide:bn,useExisting:(0,t.Gpc)(()=>tc),multi:!0};function ys(n,r){return null==n?`${r}`:("string"==typeof r&&(r=`'${r}'`),r&&"object"==typeof r&&(r="Object"),`${n}: ${r}`.slice(0,50))}let tc=(()=>{class n extends Uo{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let i;if(this.value=e,Array.isArray(e)){const c=e.map(u=>this._getOptionId(u));i=(u,p)=>{u._setSelected(c.indexOf(p.toString())>-1)}}else i=(c,u)=>{c._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{const c=[],u=i.selectedOptions;if(void 0!==u){const p=u;for(let b=0;b<p.length;b++){const j=this._getOptionValue(p[b].value);c.push(j)}}else{const p=i.options;for(let b=0;b<p.length;b++){const T=p[b];if(T.selected){const j=this._getOptionValue(T.value);c.push(j)}}}this.value=c,e(c)}}_registerOption(e){const i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){const i=function _g(n){return n.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}}return n.\u0275fac=function(){let r;return function(i){return(r||(r=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(u){return i.onChange(u.target)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([mg]),t.qOj]}),n})(),ec=(()=>{class n{constructor(e,i,c){this._element=e,this._renderer=i,this._select=c,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(ys(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(ys(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(tc,9))},n.\u0275dir=t.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})(),wf=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[ff]}),n})(),Df=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[wf]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function k(o){for(let s in o)if(o[s]===k)return s;throw Error("Could not find renamed property on target object.")}function N(o,s){for(const a in s)s.hasOwnProperty(a)&&!o.hasOwnProperty(a)&&(o[a]=s[a])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function V(o){if("string"==typeof o)return o;if(Array.isArray(o))return"["+o.map(V).join(", ")+"]";if(null==o)return""+o;if(o.overriddenName)return`${o.overriddenName}`;if(o.name)return`${o.name}`;const s=o.toString();if(null==s)return""+s;const a=s.indexOf("\n");return-1===a?s:s.substring(0,a)}function gt(o,s){return null==o||""===o?null===s?"":s:null==s||""===s?o:o+" "+s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const B=k({__forward_ref__:k});function X(o){return o.__forward_ref__=X,o.toString=function(){return V(this())},o}function Q(o){return at(o)?o():o}function at(o){return"function"==typeof o&&o.hasOwnProperty(B)&&o.__forward_ref__===X}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mt extends Error{constructor(s,a){super(function Gt(o,s){return`NG0${Math.abs(o)}${s?": "+s.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s,a)),this.code=s}}function ct(o){return"string"==typeof o?o:null==o?"":String(o)}function vt(o,s){throw new mt(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bt(o,s){null==o&&function St(o,s,a,l){throw new Error(`ASSERTION ERROR: ${o}`+(null==l?"":` [Expected=> ${a} ${l} ${s} <=Actual]`))}(s,o,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qe(o){return{token:o.token,providedIn:o.providedIn||null,factory:o.factory,value:void 0}}function Mc(o){return{providers:o.providers||[],imports:o.imports||[]}}function Zs(o){return yc(o,Ge)||yc(o,_u)}function yc(o,s){return o.hasOwnProperty(s)?o[s]:null}function Im(o){return o&&(o.hasOwnProperty(lr)||o.hasOwnProperty(Lm))?o[lr]:null}const Ge=k({\u0275prov:k}),lr=k({\u0275inj:k}),_u=k({ngInjectableDef:k}),Lm=k({ngInjectorDef:k});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Rt=(()=>((Rt=Rt||{})[Rt.Default=0]="Default",Rt[Rt.Host=1]="Host",Rt[Rt.Self=2]="Self",Rt[Rt.SkipSelf=4]="SkipSelf",Rt[Rt.Optional=8]="Optional",Rt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let bc;function _n(o){const s=bc;return bc=o,s}function Oe(o,s,a){const l=Zs(o);return l&&"root"==l.providedIn?void 0===l.value?l.value=l.factory():l.value:a&Rt.Optional?null:void 0!==s?s:void vt(V(o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ft(o){return{toString:o}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var wn=(()=>((wn=wn||{})[wn.OnPush=0]="OnPush",wn[wn.Default=1]="Default",wn))(),vn=(()=>{return(o=vn||(vn={}))[o.Emulated=0]="Emulated",o[o.None=2]="None",o[o.ShadowDom=3]="ShadowDom",vn;var o})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ie=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),oo={},At=[],Rs=k({\u0275cmp:k}),ro=k({\u0275dir:k}),Pc=k({\u0275pipe:k}),ur=k({\u0275mod:k}),ei=k({\u0275fac:k}),so=k({__NG_ELEMENT_ID__:k});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let xc=0;function ao(o){return Ft(()=>{const a=!0===o.standalone,l={},g={type:o.type,providersResolver:null,decls:o.decls,vars:o.vars,factory:null,template:o.template||null,consts:o.consts||null,ngContentSelectors:o.ngContentSelectors,hostBindings:o.hostBindings||null,hostVars:o.hostVars||0,hostAttrs:o.hostAttrs||null,contentQueries:o.contentQueries||null,declaredInputs:l,inputs:null,outputs:null,exportAs:o.exportAs||null,onPush:o.changeDetection===wn.OnPush,directiveDefs:null,pipeDefs:null,standalone:a,dependencies:a&&o.dependencies||null,getStandaloneInjector:null,selectors:o.selectors||At,viewQuery:o.viewQuery||null,features:o.features||null,data:o.data||{},encapsulation:o.encapsulation||vn.Emulated,id:"c"+xc++,styles:o.styles||At,_:null,setInput:null,schemas:o.schemas||null,tView:null},d=o.dependencies,f=o.features;return g.inputs=Cu(o.inputs,l),g.outputs=Cu(o.outputs),f&&f.forEach(m=>m(g)),g.directiveDefs=d?()=>("function"==typeof d?d():d).map(vu).filter(wc):null,g.pipeDefs=d?()=>("function"==typeof d?d():d).map(Ne).filter(wc):null,g})}function Vs(o,s,a){const l=o.\u0275cmp;l.directiveDefs=()=>("function"==typeof s?s():s).map(vu),l.pipeDefs=()=>("function"==typeof a?a():a).map(Ne)}function vu(o){return oe(o)||Be(o)}function wc(o){return null!==o}function Dc(o){return Ft(()=>({type:o.type,bootstrap:o.bootstrap||At,declarations:o.declarations||At,imports:o.imports||At,exports:o.exports||At,transitiveCompileScopes:null,schemas:o.schemas||null,id:o.id||null}))}function Cu(o,s){if(null==o)return oo;const a={};for(const l in o)if(o.hasOwnProperty(l)){let g=o[l],d=g;Array.isArray(g)&&(d=g[1],g=g[0]),a[g]=l,s&&(s[g]=d)}return a}const Mu=ao;function kc(o){return{type:o.type,name:o.name,factory:null,pure:!1!==o.pure,standalone:!0===o.standalone,onDestroy:o.type.prototype.ngOnDestroy||null}}function oe(o){return o[Rs]||null}function Be(o){return o[ro]||null}function Ne(o){return o[Pc]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ee(o){return Array.isArray(o)&&"object"==typeof o[1]}function Jn(o){return Array.isArray(o)&&!0===o[1]}function Hs(o){return 0!=(8&o.flags)}function Bs(o){return 2==(2&o.flags)}function qs(o){return 1==(1&o.flags)}function kn(o){return null!==o.template}function C1(o){return 0!=(256&o[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oi(o,s){return o.hasOwnProperty(ei)?o[ei]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Tc{constructor(s,a,l){this.previousValue=s,this.currentValue=a,this.firstChange=l}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zs(){return Rm}function Rm(o){return o.type.prototype.ngOnChanges&&(o.setInput=Ou),Vm}function Vm(){const o=xu(this),s=o?.current;if(s){const a=o.previous;if(a===oo)o.previous=s;else for(let l in s)a[l]=s[l];o.current=null,this.ngOnChanges(s)}}function Ou(o,s,a,l){const g=xu(o)||function jm(o,s){return o[Pu]=s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o,{previous:oo,current:null}),d=g.current||(g.current={}),f=g.previous,m=this.declaredInputs[a],v=f[m];d[m]=new Tc(v&&v.currentValue,s,f===oo),o[l]=s}zs.ngInherit=!0;const Pu="__ngSimpleChanges__";function xu(o){return o[Pu]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Pe(o){for(;Array.isArray(o);)o=o[0];return o}function Ec(o,s){return Pe(s[o])}function re(o,s){return Pe(s[o.index])}function vr(o,s){return o.data[s]}function Cr(o,s){return o[s]}function dn(o,s){const a=s[o];return Ee(a)?a:a[0]}function Qs(o){return 64==(64&o[2])}function qi(o,s){return null==s?null:o[s]}function Bm(o){o[18]=0}function Sc(o,s){o[5]+=s;let a=o,l=o[3];for(;null!==l&&(1===s&&1===a[5]||-1===s&&0===a[5]);)l[5]+=s,a=l,l=l[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Ht={lFrame:uo(null),bindingsEnabled:!0};function Au(){return Ht.bindingsEnabled}function ut(){return Ht.lFrame.lView}function Xt(){return Ht.lFrame.tView}function Qm(o){return Ht.lFrame.contextLView=o,o[8]}function Tu(o){return Ht.lFrame.contextLView=null,o}function Ze(){let o=Gm();for(;null!==o&&64===o.type;)o=o.parent;return o}function Gm(){return Ht.lFrame.currentTNode}function Qn(o,s){const a=Ht.lFrame;a.currentTNode=o,a.isParent=s}function Lc(){return Ht.lFrame.isParent}function Mr(){Ht.lFrame.isParent=!1}function an(){const o=Ht.lFrame;let s=o.bindingRootIndex;return-1===s&&(s=o.bindingRootIndex=o.tView.bindingStartIndex),s}function yr(){return Ht.lFrame.bindingIndex++}function Mi(o){const s=Ht.lFrame,a=s.bindingIndex;return s.bindingIndex=s.bindingIndex+o,a}function Q1(o,s){const a=Ht.lFrame;a.bindingIndex=a.bindingRootIndex=o,Nc(s)}function Nc(o){Ht.lFrame.currentDirectiveIndex=o}function Xm(){return Ht.lFrame.currentQueryIndex}function Lu(o){Ht.lFrame.currentQueryIndex=o}function G1(o){const s=o[1];return 2===s.type?s.declTNode:1===s.type?o[6]:null}function t_(o,s,a){if(a&Rt.SkipSelf){let g=s,d=o;for(;!(g=g.parent,null!==g||a&Rt.Host||(g=G1(d),null===g||(d=d[15],10&g.type))););if(null===g)return!1;s=g,o=d}const l=Ht.lFrame=Ys();return l.currentTNode=s,l.lView=o,!0}function Fc(o){const s=Ys(),a=o[1];Ht.lFrame=s,s.currentTNode=a.firstChild,s.lView=o,s.tView=a,s.contextLView=o,s.bindingIndex=a.bindingStartIndex,s.inI18n=!1}function Ys(){const o=Ht.lFrame,s=null===o?null:o.child;return null===s?uo(o):s}function uo(o){const s={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:o,child:null,inI18n:!1};return null!==o&&(o.child=s),s}function Nu(){const o=Ht.lFrame;return Ht.lFrame=o.parent,o.currentTNode=null,o.lView=null,o}const br=Nu;function Zc(){const o=Nu();o.isParent=!0,o.tView=null,o.selectedIndex=-1,o.contextLView=null,o.elementDepthCount=0,o.currentDirectiveIndex=-1,o.currentNamespace=null,o.bindingRootIndex=-1,o.bindingIndex=-1,o.currentQueryIndex=0}function Ke(){return Ht.lFrame.selectedIndex}function yi(o){Ht.lFrame.selectedIndex=o}function Ce(){const o=Ht.lFrame;return vr(o.tView,o.selectedIndex)}function ho(o,s){for(let a=s.directiveStart,l=s.directiveEnd;a<l;a++){const d=o.data[a].type.prototype,{ngAfterContentInit:f,ngAfterContentChecked:m,ngAfterViewInit:v,ngAfterViewChecked:y,ngOnDestroy:P}=d;f&&(o.contentHooks||(o.contentHooks=[])).push(-a,f),m&&((o.contentHooks||(o.contentHooks=[])).push(a,m),(o.contentCheckHooks||(o.contentCheckHooks=[])).push(a,m)),v&&(o.viewHooks||(o.viewHooks=[])).push(-a,v),y&&((o.viewHooks||(o.viewHooks=[])).push(a,y),(o.viewCheckHooks||(o.viewCheckHooks=[])).push(a,y)),null!=P&&(o.destroyHooks||(o.destroyHooks=[])).push(a,P)}}function fo(o,s,a){ju(o,s,3,a)}function Pr(o,s,a,l){(3&o[2])===a&&ju(o,s,a,l)}function Ws(o,s){let a=o[2];(3&a)===s&&(a&=2047,a+=1,o[2]=a)}function ju(o,s,a,l){const d=l??-1,f=s.length-1;let m=0;for(let v=void 0!==l?65535&o[18]:0;v<f;v++)if("number"==typeof s[v+1]){if(m=s[v],null!=l&&m>=l)break}else s[v]<0&&(o[18]+=65536),(m<d||-1==d)&&(n_(o,a,s,v),o[18]=(4294901760&o[18])+v+2),v++}function n_(o,s,a,l){const g=a[l]<0,d=a[l+1],m=o[g?-a[l]:a[l]];if(g){if(o[2]>>11<o[18]>>16&&(3&o[2])===s){o[2]+=2048;try{d.call(m)}finally{}}}else try{d.call(m)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xr{constructor(s,a,l){this.factory=s,this.resolving=!1,this.canSeeViewProviders=a,this.injectImpl=l}}function ea(o,s,a){let l=0;for(;l<a.length;){const g=a[l];if("number"==typeof g){if(0!==g)break;l++;const d=a[l++],f=a[l++],m=a[l++];o.setAttribute(s,f,m,d)}else{const d=g,f=a[++l];Bu(d)?o.setProperty(s,d,f):o.setAttribute(s,d,f),l++}}return l}function Hu(o){return 3===o||4===o||6===o}function Bu(o){return 64===o.charCodeAt(0)}function Dr(o,s){if(null!==s&&0!==s.length)if(null===o||0===o.length)o=s.slice();else{let a=-1;for(let l=0;l<s.length;l++){const g=s[l];"number"==typeof g?a=g:0===a||qu(o,a,g,null,-1===a||2===a?s[++l]:null)}}return o}function qu(o,s,a,l,g){let d=0,f=o.length;if(-1===s)f=-1;else for(;d<o.length;){const m=o[d++];if("number"==typeof m){if(m===s){f=-1;break}if(m>s){f=d-1;break}}}for(;d<o.length;){const m=o[d];if("number"==typeof m)break;if(m===a){if(null===l)return void(null!==g&&(o[d+1]=g));if(l===o[d+1])return void(o[d+2]=g)}d++,null!==l&&d++,null!==g&&d++}-1!==f&&(o.splice(f,0,s),d=f+1),o.splice(d++,0,a),null!==l&&o.splice(d++,0,l),null!==g&&o.splice(d++,0,g)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ju(o){return-1!==o}function po(o){return 32767&o}function kr(o,s){let a=function Vc(o){return o>>16}(o),l=s;for(;a>0;)l=l[15],a--;return l}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zu=!0;function Ar(o){const s=zu;return zu=o,s}let s_=0;const Tn={};function mo(o,s){const a=ia(o,s);if(-1!==a)return a;const l=s[1];l.firstCreatePass&&(o.injectorIndex=s.length,na(l.data,o),na(s,null),na(l.blueprint,null));const g=oa(o,s),d=o.injectorIndex;if(Ju(g)){const f=po(g),m=kr(g,s),v=m[1].data;for(let y=0;y<8;y++)s[d+y]=m[f+y]|v[f+y]}return s[d+8]=g,d}function na(o,s){o.push(0,0,0,0,0,0,0,0,s)}function ia(o,s){return-1===o.injectorIndex||o.parent&&o.parent.injectorIndex===o.injectorIndex||null===s[o.injectorIndex+8]?-1:o.injectorIndex}function oa(o,s){if(o.parent&&-1!==o.parent.injectorIndex)return o.parent.injectorIndex;let a=0,l=null,g=s;for(;null!==g;){if(l=d_(g),null===l)return-1;if(a++,g=g[15],-1!==l.injectorIndex)return l.injectorIndex|a<<16}return-1}function jc(o,s,a){!function a_(o,s,a){let l;"string"==typeof a?l=a.charCodeAt(0)||0:a.hasOwnProperty(so)&&(l=a[so]),null==l&&(l=a[so]=s_++);const g=255&l;s.data[o+(g>>5)]|=1<<g}(o,s,a)}function l_(o,s,a){if(a&Rt.Optional||void 0!==o)return o;vt()}function g_(o,s,a,l){if(a&Rt.Optional&&void 0===l&&(l=null),0==(a&(Rt.Self|Rt.Host))){const g=o[9],d=_n(void 0);try{return g?g.get(s,l,a&Rt.Optional):Oe(s,l,a&Rt.Optional)}finally{_n(d)}}return l_(l,0,a)}function Yu(o,s,a,l=Rt.Default,g){if(null!==o){if(1024&s[2]){const f=function Y1(o,s,a,l,g){let d=o,f=s;for(;null!==d&&null!==f&&1024&f[2]&&!(256&f[2]);){const m=$u(d,f,a,l|Rt.Self,Tn);if(m!==Tn)return m;let v=d.parent;if(!v){const y=f[21];if(y){const P=y.get(a,Tn,l);if(P!==Tn)return P}v=d_(f),f=f[15]}d=v}return g}(o,s,a,l,Tn);if(f!==Tn)return f}const d=$u(o,s,a,l,Tn);if(d!==Tn)return d}return g_(s,a,l,g)}function $u(o,s,a,l,g){const d=function Ku(o){if("string"==typeof o)return o.charCodeAt(0)||0;const s=o.hasOwnProperty(so)?o[so]:void 0;return"number"==typeof s?s>=0?255&s:Hc:s}(a);if("function"==typeof d){if(!t_(s,o,l))return l&Rt.Host?l_(g,0,l):g_(s,a,l,g);try{const f=d(l);if(null!=f||l&Rt.Optional)return f;vt()}finally{br()}}else if("number"==typeof d){let f=null,m=ia(o,s),v=-1,y=l&Rt.Host?s[16][6]:null;for((-1===m||l&Rt.SkipSelf)&&(v=-1===m?oa(o,s):s[m+8],-1!==v&&Wu(l,!1)?(f=s[1],m=po(v),s=kr(v,s)):m=-1);-1!==m;){const P=s[1];if(ri(d,m,P.data)){const D=u_(m,s,a,f,l,y);if(D!==Tn)return D}v=s[m+8],-1!==v&&Wu(l,s[1].data[m+8]===y)&&ri(d,m,s)?(f=P,m=po(v),s=kr(v,s)):m=-1}}return g}function u_(o,s,a,l,g,d){const f=s[1],m=f.data[o+8],P=Uc(m,f,a,null==l?Bs(m)&&zu:l!=f&&0!=(3&m.type),g&Rt.Host&&d===m);return null!==P?ra(s,f,P,m):Tn}function Uc(o,s,a,l,g){const d=o.providerIndexes,f=s.data,m=1048575&d,v=o.directiveStart,P=d>>20,I=g?m+P:o.directiveEnd;for(let z=l?m:m+P;z<I;z++){const et=f[z];if(z<v&&a===et||z>=v&&et.type===a)return z}if(g){const z=f[v];if(z&&kn(z)&&z.type===a)return v}return null}function ra(o,s,a,l){let g=o[a];const d=s.data;if(function Xs(o){return o instanceof xr}(g)){const f=g;f.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Tt(o,s){const a=s?`. Dependency path: ${s.join(" > ")} > ${o}`:"";throw new mt(-200,`Circular dependency in DI detected for ${o}${a}`)}(function ot(o){return"function"==typeof o?o.name||o.toString():"object"==typeof o&&null!=o&&"function"==typeof o.type?o.type.name||o.type.toString():ct(o)}(d[a]));const m=Ar(f.canSeeViewProviders);f.resolving=!0;const v=f.injectImpl?_n(f.injectImpl):null;t_(o,l,Rt.Default);try{g=o[a]=f.factory(void 0,d,o,l),s.firstCreatePass&&a>=l.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vu(o,s,a){const{ngOnChanges:l,ngOnInit:g,ngDoCheck:d}=s.type.prototype;if(l){const f=Rm(s);(a.preOrderHooks||(a.preOrderHooks=[])).push(o,f),(a.preOrderCheckHooks||(a.preOrderCheckHooks=[])).push(o,f)}g&&(a.preOrderHooks||(a.preOrderHooks=[])).push(0-o,g),d&&((a.preOrderHooks||(a.preOrderHooks=[])).push(o,d),(a.preOrderCheckHooks||(a.preOrderCheckHooks=[])).push(o,d))}(a,d[a],s)}finally{null!==v&&_n(v),Ar(m),f.resolving=!1,br()}}return g}function ri(o,s,a){return!!(a[s+(o>>5)]&1<<o)}function Wu(o,s){return!(o&Rt.Self||o&Rt.Host&&s)}class _o{constructor(s,a){this._tNode=s,this._lView=a}get(s,a,l){return Yu(this._tNode,this._lView,s,l,a)}}function Hc(){return new _o(Ze(),ut())}function Bc(o){return Ft(()=>{const s=o.prototype.constructor,a=s[ei]||Xu(s),l=Object.prototype;let g=Object.getPrototypeOf(o.prototype).constructor;for(;g&&g!==l;){const d=g[ei]||Xu(g);if(d&&d!==a)return d;g=Object.getPrototypeOf(g)}return d=>new d})}function Xu(o){return at(o)?()=>{const s=Xu(Q(o));return s&&s()}:oi(o)}function d_(o){const s=o[1],a=s.type;return 2===a?s.declTNode:1===a?o[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qc(o){return function c_(o,s){if("class"===s)return o.classes;if("style"===s)return o.styles;const a=o.attrs;if(a){const l=a.length;let g=0;for(;g<l;){const d=a[g];if(Hu(d))break;if(0===d)g+=2;else if("number"==typeof d)for(g++;g<l&&"string"==typeof a[g];)g++;else{if(d===s)return a[g+1];g+=2}}}return null}(Ze(),o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Er="__parameters__";function vo(o,s,a){return Ft(()=>{const l=function td(o){return function(...a){if(o){const l=o(...a);for(const g in l)this[g]=l[g]}}}(s);function g(...d){if(this instanceof g)return l.apply(this,d),this;const f=new g(...d);return m.annotation=f,m;function m(v,y,P){const D=v.hasOwnProperty(Er)?v[Er]:Object.defineProperty(v,Er,{value:[]})[Er];for(;D.length<=P;)D.push(null);return(D[P]=D[P]||[]).push(f),v}}return a&&(g.prototype=Object.create(a.prototype)),g.prototype.ngMetadataName=o,g.annotationCls=g,g})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class le{constructor(s,a){this._desc=s,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof a?this.__NG_ELEMENT_ID__=a:void 0!==a&&(this.\u0275prov=Qe({token:this,providedIn:a.providedIn||"root",factory:a.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Re(o,s){void 0===s&&(s=o);for(let a=0;a<o.length;a++){let l=o[a];Array.isArray(l)?(s===o&&(s=o.slice(0,a)),Re(l,s)):s!==o&&s.push(l)}return s}function hn(o,s){o.forEach(a=>Array.isArray(a)?hn(a,s):s(a))}function Ji(o,s,a){s>=o.length?o.push(a):o.splice(s,0,a)}function je(o,s){return s>=o.length-1?o.pop():o.splice(s,1)[0]}function We(o,s,a){let l=Co(o,s);return l>=0?o[1|l]=a:(l=~l,function In(o,s,a,l){let g=o.length;if(g==s)o.push(a,l);else if(1===g)o.push(l,o[0]),o[0]=a;else{for(g--,o.push(o[g-1],o[g]);g>s;)o[g]=o[g-2],g--;o[s]=a,o[s+1]=l}}(o,l,s,a)),l}function zc(o,s){const a=Co(o,s);if(a>=0)return o[1|a]}function Co(o,s){return function zi(o,s,a){let l=0,g=o.length>>a;for(;g!==l;){const d=l+(g-l>>1),f=o[d<<a];if(s===f)return d<<a;f>s?g=d:l=d+1}return~(g<<a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o,s,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const si={},Qc="__NG_DI_FLAG__",Ir="ngTempTokenPath",Gc=/\n/gm,Yc="__source";let aa;function yo(o){const s=aa;return aa=o,s}function $c(o,s=Rt.Default){if(void 0===aa)throw new mt(-203,!1);return null===aa?Oe(o,void 0,s):aa.get(o,s&Rt.Optional?null:void 0,s)}function _e(o,s=Rt.Default){return(function gr(){return bc}()||$c)(Q(o),s)}function od(o,s=Rt.Default){return"number"!=typeof s&&(s=0|(s.optional&&8)|(s.host&&1)|(s.self&&2)|(s.skipSelf&&4)),_e(o,s)}function rd(o){const s=[];for(let a=0;a<o.length;a++){const l=Q(o[a]);if(Array.isArray(l)){if(0===l.length)throw new mt(900,!1);let g,d=Rt.Default;for(let f=0;f<l.length;f++){const m=l[f],v=O_(m);"number"==typeof v?-1===v?g=m.token:d|=v:g=m}s.push(_e(g,d))}else s.push(_e(l))}return s}function Nr(o,s){return o[Qc]=s,o.prototype[Qc]=s,o}function O_(o){return o[Qc]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const la=Nr(vo("Optional"),8),Oi=Nr(vo("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rr,Po,fa;function k_(o){Rr=o}function Yi(o){return function fn(){if(void 0===Po&&(Po=null,ie.trustedTypes))try{Po=ie.trustedTypes.createPolicy("angular",{createHTML:o=>o,createScript:o=>o,createScriptURL:o=>o})}catch{}return Po}()?.createHTML(o)||o}function E_(o){return function xi(){if(void 0===fa&&(fa=null,ie.trustedTypes))try{fa=ie.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:o=>o,createScript:o=>o,createScriptURL:o=>o})}catch{}return fa}()?.createHTML(o)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class xo{constructor(s){this.changingThisBreaksApplicationSecurity=s}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class ib extends xo{getTypeName(){return"HTML"}}class ob extends xo{getTypeName(){return"Style"}}class rb extends xo{getTypeName(){return"Script"}}class sb extends xo{getTypeName(){return"URL"}}class I_ extends xo{getTypeName(){return"ResourceURL"}}function Nn(o){return o instanceof xo?o.changingThisBreaksApplicationSecurity:o}function wo(o,s){const a=function L_(o){return o instanceof xo&&o.getTypeName()||null}(o);if(null!=a&&a!==s){if("ResourceURL"===a&&"URL"===s)return!0;throw new Error(`Required a safe ${s}, got a ${a} (see https://g.co/ng/security#xss)`)}return a===s}function nl(o){return new ib(o)}function ab(o){return new ob(o)}function cb(o){return new rb(o)}function lb(o){return new sb(o)}function gb(o){return new I_(o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ub{constructor(s){this.inertDocumentHelper=s}getInertBodyElement(s){s="<body><remove></remove>"+s;try{const a=(new window.DOMParser).parseFromString(Yi(s),"text/html").body;return null===a?this.inertDocumentHelper.getInertBodyElement(s):(a.removeChild(a.firstChild),a)}catch{return null}}}class db{constructor(s){if(this.defaultDoc=s,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const a=this.inertDocument.createElement("html");this.inertDocument.appendChild(a);const l=this.inertDocument.createElement("body");a.appendChild(l)}}getInertBodyElement(s){const a=this.inertDocument.createElement("template");if("content"in a)return a.innerHTML=Yi(s),a;const l=this.inertDocument.createElement("body");return l.innerHTML=Yi(s),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(l),l}stripCustomNsAttrs(s){const a=s.attributes;for(let g=a.length-1;0<g;g--){const f=a.item(g).name;("xmlns:ns1"===f||0===f.indexOf("ns1:"))&&s.removeAttribute(f)}let l=s.firstChild;for(;l;)l.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(l),l=l.nextSibling}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function Do(o){return(o=String(o)).match(fb)?o:"unsafe:"+o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yn(o){const s={};for(const a of o.split(","))s[a]=!0;return s}function Vr(...o){const s={};for(const a of o)for(const l in a)a.hasOwnProperty(l)&&(s[l]=!0);return s}const F_=Yn("area,br,col,hr,img,wbr"),Z_=Yn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),R_=Yn("rp,rt"),il=Vr(F_,Vr(Z_,Yn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Vr(R_,Yn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Vr(R_,Z_)),ol=Yn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ld=Vr(ol,Yn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Yn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),mb=Yn("script,style,template");class _b{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(s){let a=s.firstChild,l=!0;for(;a;)if(a.nodeType===Node.ELEMENT_NODE?l=this.startElement(a):a.nodeType===Node.TEXT_NODE?this.chars(a.nodeValue):this.sanitizedSomething=!0,l&&a.firstChild)a=a.firstChild;else for(;a;){a.nodeType===Node.ELEMENT_NODE&&this.endElement(a);let g=this.checkClobberedElement(a,a.nextSibling);if(g){a=g;break}a=this.checkClobberedElement(a,a.parentNode)}return this.buf.join("")}startElement(s){const a=s.nodeName.toLowerCase();if(!il.hasOwnProperty(a))return this.sanitizedSomething=!0,!mb.hasOwnProperty(a);this.buf.push("<"),this.buf.push(a);const l=s.attributes;for(let g=0;g<l.length;g++){const d=l.item(g),f=d.name,m=f.toLowerCase();if(!ld.hasOwnProperty(m)){this.sanitizedSomething=!0;continue}let v=d.value;ol[m]&&(v=Do(v)),this.buf.push(" ",f,'="',V_(v),'"')}return this.buf.push(">"),!0}endElement(s){const a=s.nodeName.toLowerCase();il.hasOwnProperty(a)&&!F_.hasOwnProperty(a)&&(this.buf.push("</"),this.buf.push(a),this.buf.push(">"))}chars(s){this.buf.push(V_(s))}checkClobberedElement(s,a){if(a&&(s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${s.outerHTML}`);return a}}const vb=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Cb=/([^\#-~ |!])/g;function V_(o){return o.replace(/&/g,"&amp;").replace(vb,function(s){return"&#"+(1024*(s.charCodeAt(0)-55296)+(s.charCodeAt(1)-56320)+65536)+";"}).replace(Cb,function(s){return"&#"+s.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let rl;function j_(o,s){let a=null;try{rl=rl||function N_(o){const s=new db(o);return function hb(){try{return!!(new window.DOMParser).parseFromString(Yi(""),"text/html")}catch{return!1}}()?new ub(s):s}(o);let l=s?String(s):"";a=rl.getInertBodyElement(l);let g=5,d=l;do{if(0===g)throw new Error("Failed to sanitize html because the input is unstable");g--,l=d,d=a.innerHTML,a=rl.getInertBodyElement(l)}while(l!==d);return Yi((new _b).sanitizeChildren(gd(a)||a))}finally{if(a){const l=gd(a)||a;for(;l.firstChild;)l.removeChild(l.firstChild)}}}function gd(o){return"content"in o&&function Mb(o){return o.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===o.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o)?o.content:null}var xe=(()=>((xe=xe||{})[xe.NONE=0]="NONE",xe[xe.HTML=1]="HTML",xe[xe.STYLE=2]="STYLE",xe[xe.SCRIPT=3]="SCRIPT",xe[xe.URL=4]="URL",xe[xe.RESOURCE_URL=5]="RESOURCE_URL",xe))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function U_(o){const s=ma();return s?E_(s.sanitize(xe.HTML,o)||""):wo(o,"HTML")?E_(Nn(o)):j_(function ha(){return void 0!==Rr?Rr:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),ct(o))}function ud(o){const s=ma();return s?s.sanitize(xe.URL,o)||"":wo(o,"URL")?Nn(o):Do(ct(o))}function ma(){const o=ut();return o&&o[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const B_=new le("ENVIRONMENT_INITIALIZER"),q_=new le("INJECTOR",-1),J_=new le("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class z_{get(s,a=si){if(a===si){const l=new Error(`NullInjectorError: No provider for ${V(s)}!`);throw l.name="NullInjectorError",l}return a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Db(...o){return{\u0275providers:Q_(0,o)}}function Q_(o,...s){const a=[],l=new Set;let g;return hn(s,d=>{const f=d;dd(f,a,[],l)&&(g||(g=[]),g.push(f))}),void 0!==g&&G_(g,a),a}function G_(o,s){for(let a=0;a<o.length;a++){const{providers:g}=o[a];hn(g,d=>{s.push(d)})}}function dd(o,s,a,l){if(!(o=Q(o)))return!1;let g=null,d=Im(o);const f=!d&&oe(o);if(d||f){if(f&&!f.standalone)return!1;g=o}else{const v=o.ngModule;if(d=Im(v),!d)return!1;g=v}const m=l.has(g);if(f){if(m)return!1;if(l.add(g),f.dependencies){const v="function"==typeof f.dependencies?f.dependencies():f.dependencies;for(const y of v)dd(y,s,a,l)}}else{if(!d)return!1;{if(null!=d.imports&&!m){let y;l.add(g);try{hn(d.imports,P=>{dd(P,s,a,l)&&(y||(y=[]),y.push(P))})}finally{}void 0!==y&&G_(y,s)}if(!m){const y=oi(g)||(()=>new g);s.push({provide:g,useFactory:y,deps:At},{provide:J_,useValue:g,multi:!0},{provide:B_,useValue:()=>_e(g),multi:!0})}const v=d.providers;null==v||m||hn(v,P=>{s.push(P)})}}return g!==o&&void 0!==o.providers}const kb=k({provide:String,useValue:k});function hd(o){return null!==o&&"object"==typeof o&&kb in o}function ko(o){return"function"==typeof o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fd=new le("Set Injector scope."),sl={},Tb={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let pd;function al(){return void 0===pd&&(pd=new z_),pd}class jr{}class K_ extends jr{constructor(s,a,l,g){super(),this.parent=a,this.source=l,this.scopes=g,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,cl(s,f=>this.processProvider(f)),this.records.set(q_,Ur(void 0,this)),g.has("environment")&&this.records.set(jr,Ur(void 0,this));const d=this.records.get(fd);null!=d&&"string"==typeof d.value&&this.scopes.add(d.value),this.injectorDefTypes=new Set(this.get(J_.multi,At,Rt.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const s of this._ngOnDestroyHooks)s.ngOnDestroy();for(const s of this._onDestroyHooks)s()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(s){this._onDestroyHooks.push(s)}runInContext(s){this.assertNotDestroyed();const a=yo(this),l=_n(void 0);try{return s()}finally{yo(a),_n(l)}}get(s,a=si,l=Rt.Default){this.assertNotDestroyed();const g=yo(this),d=_n(void 0);try{if(!(l&Rt.SkipSelf)){let m=this.records.get(s);if(void 0===m){const v=function Nb(o){return"function"==typeof o||"object"==typeof o&&o instanceof le}(s)&&Zs(s);m=v&&this.injectableDefInScope(v)?Ur(md(s),sl):null,this.records.set(s,m)}if(null!=m)return this.hydrate(s,m)}return(l&Rt.Self?al():this.parent).get(s,a=l&Rt.Optional&&a===si?null:a)}catch(f){if("NullInjectorError"===f.name){if((f[Ir]=f[Ir]||[]).unshift(V(s)),g)throw f;return function ca(o,s,a,l){const g=o[Ir];throw s[Yc]&&g.unshift(s[Yc]),o.message=function P_(o,s,a,l=null){o=o&&"\n"===o.charAt(0)&&"\u0275"==o.charAt(1)?o.slice(2):o;let g=V(s);if(Array.isArray(s))g=s.map(V).join(" -> ");else if("object"==typeof s){let d=[];for(let f in s)if(s.hasOwnProperty(f)){let m=s[f];d.push(f+":"+("string"==typeof m?JSON.stringify(m):V(m)))}g=`{${d.join(", ")}}`}return`${a}${l?"("+l+")":""}[${g}]: ${o.replace(Gc,"\n  ")}`}("\n"+o.message,g,a,l),o.ngTokenPath=g,o[Ir]=null,o}(f,s,"R3InjectorError",this.source)}throw f}finally{_n(d),yo(g)}}resolveInjectorInitializers(){const s=yo(this),a=_n(void 0);try{const l=this.get(B_.multi,At,Rt.Self);for(const g of l)g()}finally{yo(s),_n(a)}}toString(){const s=[],a=this.records;for(const l of a.keys())s.push(V(l));return`R3Injector[${s.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new mt(205,!1)}processProvider(s){let a=ko(s=Q(s))?s:Q(s&&s.provide);const l=function Sb(o){return hd(o)?Ur(void 0,o.useValue):Ur(W_(o),sl)}(s);if(ko(s)||!0!==s.multi)this.records.get(a);else{let g=this.records.get(a);g||(g=Ur(void 0,sl,!0),g.factory=()=>rd(g.multi),this.records.set(a,g)),a=s,g.multi.push(s)}this.records.set(a,l)}hydrate(s,a){return a.value===sl&&(a.value=Tb,a.value=a.factory()),"object"==typeof a.value&&a.value&&function Lb(o){return null!==o&&"object"==typeof o&&"function"==typeof o.ngOnDestroy}(a.value)&&this._ngOnDestroyHooks.add(a.value),a.value}injectableDefInScope(s){if(!s.providedIn)return!1;const a=Q(s.providedIn);return"string"==typeof a?"any"===a||this.scopes.has(a):this.injectorDefTypes.has(a)}}function md(o){const s=Zs(o),a=null!==s?s.factory:oi(o);if(null!==a)return a;if(o instanceof le)throw new mt(204,!1);if(o instanceof Function)return function Eb(o){const s=o.length;if(s>0)throw function Sn(o,s){const a=[];for(let l=0;l<o;l++)a.push(s);return a}(s,"?"),new mt(204,!1);const a=function Em(o){const s=o&&(o[Ge]||o[_u]);if(s){const a=function Sm(o){if(o.hasOwnProperty("name"))return o.name;const s=(""+o).match(/^function\s*([^\s(]+)/);return null===s?"":s[1]}(o);return console.warn(`DEPRECATED: DI is instantiating a token "${a}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${a}" class.`),s}return null}(o);return null!==a?()=>a.factory(o):()=>new o}(o);throw new mt(204,!1)}function W_(o,s,a){let l;if(ko(o)){const g=Q(o);return oi(g)||md(g)}if(hd(o))l=()=>Q(o.useValue);else if(function $_(o){return!(!o||!o.useFactory)}(o))l=()=>o.useFactory(...rd(o.deps||[]));else if(function Y_(o){return!(!o||!o.useExisting)}(o))l=()=>_e(Q(o.useExisting));else{const g=Q(o&&(o.useClass||o.provide));if(!function Ib(o){return!!o.deps}(o))return oi(g)||md(g);l=()=>new g(...rd(o.deps))}return l}function Ur(o,s,a=!1){return{factory:o,value:s,multi:a?[]:void 0}}function Fb(o){return!!o.\u0275providers}function cl(o,s){for(const a of o)Array.isArray(a)?cl(a,s):Fb(a)?cl(a.\u0275providers,s):s(a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class X_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vb{resolveComponentFactory(s){throw function Rb(o){const s=Error(`No component factory found for ${V(o)}. Did you add it to @NgModule.entryComponents?`);return s.ngComponent=o,s}(s)}}let _a=(()=>{class o{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return o.NULL=new Vb,o})();function jb(){return Hr(Ze(),ut())}function Hr(o,s){return new va(re(o,s))}let va=(()=>{class o{constructor(a){this.nativeElement=a}}return o.__NG_ELEMENT_ID__=jb,o})();function Ub(o){return o instanceof va?o.nativeElement:o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ev{}let Hb=(()=>{class o{}return o.__NG_ELEMENT_ID__=()=>function Bb(){const o=ut(),a=dn(Ze().index,o);return(Ee(a)?a:o)[11]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),o})(),qb=(()=>{class o{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return o.\u0275prov=Qe({token:o,providedIn:"root",factory:()=>null}),o})();class nv{constructor(s){this.full=s,this.major=s.split(".")[0],this.minor=s.split(".")[1],this.patch=s.split(".").slice(2).join(".")}}const Jb=new nv("14.2.5"),_d={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bd(o){return o.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ca{constructor(){this._console=console}handleError(s){const a=this._findOriginalError(s);this._console.error("ERROR",s),a&&this._console.error("ORIGINAL ERROR",a)}_findOriginalError(s){let a=s&&bd(s);for(;a&&bd(a);)a=bd(a);return a||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Od=new Map;let iO=0;const Ao="__ngContext__";function qe(o,s){Ee(s)?(o[Ao]=s[20],function rO(o){Od.set(o[20],o)}(s)):o[Ao]=s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Fn=(()=>((Fn=Fn||{})[Fn.Important=1]="Important",Fn[Fn.DashCase=2]="DashCase",Fn))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gl(o,s){return undefined(o,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function So(o){const s=o[3];return Jn(s)?s[3]:s}function Sd(o){return ul(o[13])}function Id(o){return ul(o[4])}function ul(o){for(;null!==o&&!Jn(o);)o=o[4];return o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Io(o,s,a,l,g){if(null!=l){let d,f=!1;Jn(l)?d=l:Ee(l)&&(f=!0,l=l[0]);const m=Pe(l);0===o&&null!==a?null==g?Ud(s,a,m):Di(s,a,m,g||null,!0):1===o&&null!==a?Di(s,a,m,g||null,!0):2===o?function ml(o,s,a){const l=ya(o,s);l&&function bv(o,s,a,l){o.removeChild(s,a,l)}(o,l,s,a)}(s,m,f):3===o&&s.destroyNode(m),null!=d&&function CO(o,s,a,l,g){const d=a[7];d!==Pe(a)&&Io(s,o,l,d,g);for(let m=10;m<a.length;m++){const v=a[m];zr(v[1],v,o,s,l,d)}}(s,o,d,a,g)}}function Fd(o,s,a){return o.createElement(s,a)}function Rd(o,s){const a=o[9],l=a.indexOf(s),g=s[3];512&s[2]&&(s[2]&=-513,Sc(g,-1)),a.splice(l,1)}function dl(o,s){if(o.length<=10)return;const a=10+s,l=o[a];if(l){const g=l[17];null!==g&&g!==o&&Rd(g,l),s>0&&(o[a-1][4]=l[4]);const d=je(o,10+s);!function uO(o,s){zr(o,s,s[11],2,null,null),s[0]=null,s[6]=null}(l[1],l);const f=d[19];null!==f&&f.detachView(d[1]),l[3]=null,l[4]=null,l[2]&=-65}return l}function Vd(o,s){if(!(128&s[2])){const a=s[11];a.destroyNode&&zr(o,s,a,3,null,null),function fO(o){let s=o[13];if(!s)return hl(o[1],o);for(;s;){let a=null;if(Ee(s))a=s[13];else{const l=s[10];l&&(a=l)}if(!a){for(;s&&!s[4]&&s!==o;)Ee(s)&&hl(s[1],s),s=s[3];null===s&&(s=o),Ee(s)&&hl(s[1],s),a=s&&s[4]}s=a}}(s)}}function hl(o,s){if(!(128&s[2])){s[2]&=-65,s[2]|=128,function yv(o,s){let a;if(null!=o&&null!=(a=o.destroyHooks))for(let l=0;l<a.length;l+=2){const g=s[a[l]];if(!(g instanceof xr)){const d=a[l+1];if(Array.isArray(d))for(let f=0;f<d.length;f+=2){const m=g[d[f]],v=d[f+1];try{v.call(m)}finally{}}else try{d.call(g)}finally{}}}}(o,s),function Mv(o,s){const a=o.cleanup,l=s[7];let g=-1;if(null!==a)for(let d=0;d<a.length-1;d+=2)if("string"==typeof a[d]){const f=a[d+1],m="function"==typeof f?f(s):Pe(s[f]),v=l[g=a[d+2]],y=a[d+3];"boolean"==typeof y?m.removeEventListener(a[d],v,y):y>=0?l[g=y]():l[g=-y].unsubscribe(),d+=2}else{const f=l[g=a[d+1]];a[d].call(f)}if(null!==l){for(let d=g+1;d<l.length;d++)(0,l[d])();s[7]=null}}(o,s),1===s[1].type&&s[11].destroy();const a=s[17];if(null!==a&&Jn(s[3])){a!==s[3]&&Rd(a,s);const l=s[19];null!==l&&l.detachView(o)}!function lv(o){Od.delete(o[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)}}function jd(o,s,a){return function fl(o,s,a){let l=s;for(;null!==l&&40&l.type;)l=(s=l).parent;if(null===l)return a[0];if(2&l.flags){const g=o.data[l.directiveStart].encapsulation;if(g===vn.None||g===vn.Emulated)return null}return re(l,a)}(o,s.parent,a)}function Di(o,s,a,l,g){o.insertBefore(s,a,l,g)}function Ud(o,s,a){o.appendChild(s,a)}function Hd(o,s,a,l,g){null!==l?Di(o,s,a,l,g):Ud(o,s,a)}function ya(o,s){return o.parentNode(s)}let xv=function Pv(o,s,a){return 40&o.type?re(o,a):null};function qr(o,s,a,l){const g=jd(o,l,s),d=s[11],m=function Ov(o,s,a){return xv(o,s,a)}(l.parent||s[6],l,s);if(null!=g)if(Array.isArray(a))for(let v=0;v<a.length;v++)Hd(d,g,a[v],m,!1);else Hd(d,g,a,m,!1)}function Jr(o,s){if(null!==s){const a=s.type;if(3&a)return re(s,o);if(4&a)return pl(-1,o[s.index]);if(8&a){const l=s.child;if(null!==l)return Jr(o,l);{const g=o[s.index];return Jn(g)?pl(-1,g):Pe(g)}}if(32&a)return gl(s,o)()||Pe(o[s.index]);{const l=qd(o,s);return null!==l?Array.isArray(l)?l[0]:Jr(So(o[16]),l):Jr(o,s.next)}}return null}function qd(o,s){return null!==s?o[16][6].projection[s.projection]:null}function pl(o,s){const a=10+o+1;if(a<s.length){const l=s[a],g=l[1].firstChild;if(null!==g)return Jr(l,g)}return s[7]}function ki(o,s,a,l,g,d,f){for(;null!=a;){const m=l[a.index],v=a.type;if(f&&0===s&&(m&&qe(Pe(m),l),a.flags|=4),64!=(64&a.flags))if(8&v)ki(o,s,a.child,l,g,d,!1),Io(s,o,g,m,d);else if(32&v){const y=gl(a,l);let P;for(;P=y();)Io(s,o,g,P,d);Io(s,o,g,m,d)}else 16&v?Jd(o,s,l,a,g,d):Io(s,o,g,m,d);a=f?a.projectionNext:a.next}}function zr(o,s,a,l,g,d){ki(a,l,o.firstChild,s,g,d,!1)}function Jd(o,s,a,l,g,d){const f=a[16],v=f[6].projection[l.projection];if(Array.isArray(v))for(let y=0;y<v.length;y++)Io(s,o,g,v[y],d);else ki(o,s,v,f[3],g,d,!0)}function Dv(o,s,a){o.setAttribute(s,"style",a)}function _l(o,s,a){""===a?o.removeAttribute(s,"class"):o.setAttribute(s,"class",a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qr(o,s,a){let l=o.length;for(;;){const g=o.indexOf(s,a);if(-1===g)return g;if(0===g||o.charCodeAt(g-1)<=32){const d=s.length;if(g+d===l||o.charCodeAt(g+d)<=32)return g}a=g+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const kv="ng-template";function zd(o,s,a){let l=0;for(;l<o.length;){let g=o[l++];if(a&&"class"===g){if(g=o[l],-1!==Qr(g.toLowerCase(),s,0))return!0}else if(1===g){for(;l<o.length&&"string"==typeof(g=o[l++]);)if(g.toLowerCase()===s)return!0;return!1}}return!1}function vl(o){return 4===o.type&&o.value!==kv}function Cl(o,s,a){return s===(4!==o.type||a?o.value:kv)}function Av(o,s,a){let l=4;const g=o.attrs||[],d=function Gr(o){for(let s=0;s<o.length;s++)if(Hu(o[s]))return s;return o.length}(g);let f=!1;for(let m=0;m<s.length;m++){const v=s[m];if("number"!=typeof v){if(!f)if(4&l){if(l=2|1&l,""!==v&&!Cl(o,v,a)||""===v&&1===s.length){if(Zn(l))return!1;f=!0}}else{const y=8&l?v:s[++m];if(8&l&&null!==o.attrs){if(!zd(o.attrs,y,a)){if(Zn(l))return!1;f=!0}continue}const D=Tv(8&l?"class":v,g,vl(o),a);if(-1===D){if(Zn(l))return!1;f=!0;continue}if(""!==y){let I;I=D>d?"":g[D+1].toLowerCase();const z=8&l?I:null;if(z&&-1!==Qr(z,y,0)||2&l&&y!==I){if(Zn(l))return!1;f=!0}}}}else{if(!f&&!Zn(l)&&!Zn(v))return!1;if(f&&Zn(v))continue;f=!1,l=v|1&l}}return Zn(l)||f}function Zn(o){return 0==(1&o)}function Tv(o,s,a,l){if(null===s)return-1;let g=0;if(l||!a){let d=!1;for(;g<s.length;){const f=s[g];if(f===o)return g;if(3===f||6===f)d=!0;else{if(1===f||2===f){let m=s[++g];for(;"string"==typeof m;)m=s[++g];continue}if(4===f)break;if(0===f){g+=4;continue}}g+=d?1:2}return-1}return function Ml(o,s){let a=o.indexOf(4);if(a>-1)for(a++;a<o.length;){const l=o[a];if("number"==typeof l)return-1;if(l===s)return a;a++}return-1}(s,o)}function Lo(o,s,a=!1){for(let l=0;l<s.length;l++)if(Av(o,s[l],a))return!0;return!1}function yl(o,s){return o?":not("+s.trim()+")":s}function ba(o){let s=o[0],a=1,l=2,g="",d=!1;for(;a<o.length;){let f=o[a];if("string"==typeof f)if(2&l){const m=o[++a];g+="["+f+(m.length>0?'="'+m+'"':"")+"]"}else 8&l?g+="."+f:4&l&&(g+=" "+f);else""!==g&&!Zn(f)&&(s+=yl(d,g),g=""),l=f,d=d||!Zn(l);a++}return""!==g&&(s+=yl(d,g)),s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const jt={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oa(o){Pa(Xt(),ut(),Ke()+o,!1)}function Pa(o,s,a,l){if(!l)if(3==(3&s[2])){const d=o.preOrderCheckHooks;null!==d&&fo(s,d,a)}else{const d=o.preOrderHooks;null!==d&&Pr(s,d,0,a)}yi(a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Yr(o,s=null,a=null,l){const g=eh(o,s,a,l);return g.resolveInjectorInitializers(),g}function eh(o,s=null,a=null,l,g=new Set){const d=[a||At,Db(o)];return l=l||("object"==typeof o?void 0:V(o)),new K_(d,s||al(),l||null,g)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let ai=(()=>{class o{static create(a,l){if(Array.isArray(a))return Yr({name:""},l,a,"");{const g=a.name??"";return Yr({name:g},a.parent,a.providers,g)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return o.THROW_IF_NOT_FOUND=si,o.NULL=new z_,o.\u0275prov=Qe({token:o,providedIn:"any",factory:()=>_e(q_)}),o.__NG_ELEMENT_ID__=-1,o})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vo(o,s=Rt.Default){const a=ut();return null===a?_e(o,s):Yu(Ze(),a,Q(o),s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kl(o,s){return o<<17|s<<2}function Rn(o){return o>>17&32767}function ch(o){return 2|o}function Ai(o){return(131068&o)>>2}function lh(o,s){return-131069&o|s<<2}function gh(o){return 1|o}function Ll(o,s){const a=o.contentQueries;if(null!==a)for(let l=0;l<a.length;l+=2){const g=a[l],d=a[l+1];if(-1!==d){const f=o.data[d];Lu(g),f.contentQueries(2,s[d],d)}}}function La(o,s,a,l,g,d,f,m,v,y,P){const D=s.blueprint.slice();return D[0]=g,D[2]=76|l,(null!==P||o&&1024&o[2])&&(D[2]|=1024),Bm(D),D[3]=D[15]=o,D[8]=a,D[10]=f||o&&o[10],D[11]=m||o&&o[11],D[12]=v||o&&o[12]||null,D[9]=y||o&&o[9]||null,D[6]=d,D[20]=function oO(){return iO++}(),D[21]=P,D[16]=2==s.type?o[16]:D,D}function we(o,s,a,l,g){let d=o.data[s];if(null===d)d=function vh(o,s,a,l,g){const d=Gm(),f=Lc(),v=o.data[s]=function Oh(o,s,a,l,g,d){return{type:a,index:l,insertBeforeIndex:null,injectorIndex:s?s.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:g,attrs:d,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:s,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,f?d:d&&d.parent,a,s,l,g);return null===o.firstChild&&(o.firstChild=v),null!==d&&(f?null==d.child&&null!==v.parent&&(d.child=v):null===d.next&&(d.next=v)),v}(o,s,a,l,g),function z1(){return Ht.lFrame.inI18n}()&&(d.flags|=64);else if(64&d.type){d.type=a,d.value=l,d.attrs=g;const f=function go(){const o=Ht.lFrame,s=o.currentTNode;return o.isParent?s:s.parent}();d.injectorIndex=null===f?-1:f.injectorIndex}return Qn(d,!0),d}function jo(o,s,a,l){if(0===a)return-1;const g=s.length;for(let d=0;d<a;d++)s.push(l),o.blueprint.push(l),o.data.push(null);return g}function Ch(o,s,a){Fc(s);try{const l=o.viewQuery;null!==l&&bn(1,l,a);const g=o.template;null!==g&&Mh(o,s,g,1,a),o.firstCreatePass&&(o.firstCreatePass=!1),o.staticContentQueries&&Ll(o,s),o.staticViewQueries&&bn(2,o.viewQuery,a);const d=o.components;null!==d&&function $v(o,s){for(let a=0;a<s.length;a++)Eh(o,s[a])}(s,d)}catch(l){throw o.firstCreatePass&&(o.incompleteFirstPass=!0,o.firstCreatePass=!1),l}finally{s[2]&=-5,Zc()}}function Nl(o,s,a,l){const g=s[2];if(128!=(128&g)){Fc(s);try{Bm(s),function Km(o){return Ht.lFrame.bindingIndex=o}(o.bindingStartIndex),null!==a&&Mh(o,s,a,2,l);const f=3==(3&g);if(f){const y=o.preOrderCheckHooks;null!==y&&fo(s,y,null)}else{const y=o.preOrderHooks;null!==y&&Pr(s,y,0,null),Ws(s,0)}if(function Th(o){for(let s=Sd(o);null!==s;s=Id(s)){if(!s[2])continue;const a=s[9];for(let l=0;l<a.length;l++){const g=a[l],d=g[3];0==(512&g[2])&&Sc(d,1),g[2]|=512}}}(s),function Bl(o){for(let s=Sd(o);null!==s;s=Id(s))for(let a=10;a<s.length;a++){const l=s[a],g=l[1];Qs(l)&&Nl(g,l,g.template,l[8])}}(s),null!==o.contentQueries&&Ll(o,s),f){const y=o.contentCheckHooks;null!==y&&fo(s,y)}else{const y=o.contentHooks;null!==y&&Pr(s,y,1),Ws(s,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function SO(o,s){const a=o.hostBindingOpCodes;if(null!==a)try{for(let l=0;l<a.length;l++){const g=a[l];if(g<0)yi(~g);else{const d=g,f=a[++l],m=a[++l];Q1(f,d),m(2,s[d])}}}finally{yi(-1)}}(o,s);const m=o.components;null!==m&&function Yv(o,s){for(let a=0;a<s.length;a++)sC(o,s[a])}(s,m);const v=o.viewQuery;if(null!==v&&bn(2,v,l),f){const y=o.viewCheckHooks;null!==y&&fo(s,y)}else{const y=o.viewHooks;null!==y&&Pr(s,y,2),Ws(s,2)}!0===o.firstUpdatePass&&(o.firstUpdatePass=!1),s[2]&=-41,512&s[2]&&(s[2]&=-513,Sc(s[3],-1))}finally{Zc()}}}function Mh(o,s,a,l,g){const d=Ke(),f=2&l;try{yi(-1),f&&s.length>22&&Pa(o,s,22,!1),a(l,g)}finally{yi(d)}}function yh(o,s,a){if(Hs(s)){const g=s.directiveEnd;for(let d=s.directiveStart;d<g;d++){const f=o.data[d];f.contentQueries&&f.contentQueries(1,a[d],d)}}}function Fl(o,s,a){!Au()||(function tC(o,s,a,l){const g=a.directiveStart,d=a.directiveEnd;o.firstCreatePass||mo(a,s),qe(l,s);const f=a.initialInputs;for(let m=g;m<d;m++){const v=o.data[m],y=kn(v);y&&Ah(s,a,v);const P=ra(s,o,m,a);qe(P,s),null!==f&&rC(0,m-g,P,v,0,f),y&&(dn(a.index,s)[8]=P)}}(o,s,a,re(a,s)),128==(128&a.flags)&&function eC(o,s,a){const l=a.directiveStart,g=a.directiveEnd,d=a.index,f=function Wm(){return Ht.lFrame.currentDirectiveIndex}();try{yi(d);for(let m=l;m<g;m++){const v=o.data[m],y=s[m];Nc(m),(null!==v.hostBindings||0!==v.hostVars||null!==v.hostAttrs)&&wh(v,y)}}finally{yi(-1),Nc(f)}}(o,s,a))}function bh(o,s,a=re){const l=s.localNames;if(null!==l){let g=s.index+1;for(let d=0;d<l.length;d+=2){const f=l[d+1],m=-1===f?a(s,o):o[f];o[g++]=m}}}function Na(o){const s=o.tView;return null===s||s.incompleteFirstPass?o.tView=Zl(1,null,o.template,o.decls,o.vars,o.directiveDefs,o.pipeDefs,o.viewQuery,o.schemas,o.consts):s}function Zl(o,s,a,l,g,d,f,m,v,y){const P=22+l,D=P+g,I=function Rl(o,s){const a=[];for(let l=0;l<s;l++)a.push(l<o?null:jt);return a}(P,D),z="function"==typeof y?y():y;return I[1]={type:o,blueprint:I,template:a,queries:null,viewQuery:m,declTNode:s,data:I.slice().fill(null,P),bindingStartIndex:P,expandoStartIndex:D,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof d?d():d,pipeRegistry:"function"==typeof f?f():f,firstChild:null,schemas:v,consts:z,incompleteFirstPass:!1}}function Je(o,s,a,l){const g=Jl(s);null===a?g.push(l):(g.push(a),o.firstCreatePass&&Sh(o).push(l,g.length-1))}function ze(o,s,a){for(let l in o)if(o.hasOwnProperty(l)){const g=o[l];(a=null===a?{}:a).hasOwnProperty(l)?a[l].push(s,g):a[l]=[s,g]}return a}function Vl(o,s){const l=s.directiveEnd,g=o.data,d=s.attrs,f=[];let m=null,v=null;for(let y=s.directiveStart;y<l;y++){const P=g[y],D=P.inputs,I=null===d||vl(s)?null:Fa(D,d);f.push(I),m=ze(D,y,m),v=ze(P.outputs,y,v)}null!==m&&(m.hasOwnProperty("class")&&(s.flags|=16),m.hasOwnProperty("style")&&(s.flags|=32)),s.initialInputs=f,s.inputs=m,s.outputs=v}function mn(o,s,a,l,g,d,f,m){const v=re(s,a);let P,y=s.inputs;!m&&null!=y&&(P=y[l])?(is(o,a,P,l,g),Bs(s)&&Ph(a,s.index)):3&s.type&&(l=function Wv(o){return"class"===o?"className":"for"===o?"htmlFor":"formaction"===o?"formAction":"innerHtml"===o?"innerHTML":"readonly"===o?"readOnly":"tabindex"===o?"tabIndex":o}(l),g=null!=f?f(g,s.value||"",l):g,d.setProperty(v,l,g))}function Ph(o,s){const a=dn(s,o);16&a[2]||(a[2]|=32)}function jl(o,s,a,l){let g=!1;if(Au()){const d=function nC(o,s,a){const l=o.directiveRegistry;let g=null;if(l)for(let d=0;d<l.length;d++){const f=l[d];Lo(a,f.selectors,!1)&&(g||(g=[]),jc(mo(a,s),o,f.type),kn(f)?(Ul(o,a),g.unshift(f)):g.push(f))}return g}(o,s,a),f=null===l?null:{"":-1};if(null!==d){g=!0,Dh(a,o.data.length,d.length);for(let P=0;P<d.length;P++){const D=d[P];D.providersResolver&&D.providersResolver(D)}let m=!1,v=!1,y=jo(o,s,d.length,null);for(let P=0;P<d.length;P++){const D=d[P];a.mergedAttrs=Dr(a.mergedAttrs,D.hostAttrs),kh(o,a,s,y,D),oC(y,D,f),null!==D.contentQueries&&(a.flags|=8),(null!==D.hostBindings||null!==D.hostAttrs||0!==D.hostVars)&&(a.flags|=128);const I=D.type.prototype;!m&&(I.ngOnChanges||I.ngOnInit||I.ngDoCheck)&&((o.preOrderHooks||(o.preOrderHooks=[])).push(a.index),m=!0),!v&&(I.ngOnChanges||I.ngDoCheck)&&((o.preOrderCheckHooks||(o.preOrderCheckHooks=[])).push(a.index),v=!0),y++}Vl(o,a)}f&&function iC(o,s,a){if(s){const l=o.localNames=[];for(let g=0;g<s.length;g+=2){const d=a[s[g+1]];if(null==d)throw new mt(-301,!1);l.push(s[g],d)}}}(a,l,f)}return a.mergedAttrs=Dr(a.mergedAttrs,a.attrs),g}function li(o,s,a,l,g,d){const f=d.hostBindings;if(f){let m=o.hostBindingOpCodes;null===m&&(m=o.hostBindingOpCodes=[]);const v=~s.index;(function IO(o){let s=o.length;for(;s>0;){const a=o[--s];if("number"==typeof a&&a<0)return a}return 0})(m)!=v&&m.push(v),m.push(l,g,f)}}function wh(o,s){null!==o.hostBindings&&o.hostBindings(1,s)}function Ul(o,s){s.flags|=2,(o.components||(o.components=[])).push(s.index)}function oC(o,s,a){if(a){if(s.exportAs)for(let l=0;l<s.exportAs.length;l++)a[s.exportAs[l]]=o;kn(s)&&(a[""]=o)}}function Dh(o,s,a){o.flags|=1,o.directiveStart=s,o.directiveEnd=s+a,o.providerIndexes=s}function kh(o,s,a,l,g){o.data[l]=g;const d=g.factory||(g.factory=oi(g.type)),f=new xr(d,kn(g),Vo);o.blueprint[l]=f,a[l]=f,li(o,s,0,l,jo(o,a,g.hostVars,jt),g)}function Ah(o,s,a){const l=re(s,o),g=Na(a),d=o[10],f=Ra(o,La(o,g,null,a.onPush?32:16,l,s,d,d.createRenderer(l,a),null,null,null));o[s.index]=f}function Kn(o,s,a,l,g,d){const f=re(o,s);!function Wi(o,s,a,l,g,d,f){if(null==d)o.removeAttribute(s,g,a);else{const m=null==f?ct(d):f(d,l||"",g);o.setAttribute(s,g,m,a)}}(s[11],f,d,o.value,a,l,g)}function rC(o,s,a,l,g,d){const f=d[s];if(null!==f){const m=l.setInput;for(let v=0;v<f.length;){const y=f[v++],P=f[v++],D=f[v++];null!==m?l.setInput(a,D,y,P):a[P]=D}}}function Fa(o,s){let a=null,l=0;for(;l<s.length;){const g=s[l];if(0!==g)if(5!==g){if("number"==typeof g)break;o.hasOwnProperty(g)&&(null===a&&(a=[]),a.push(g,o[g],s[l+1])),l+=2}else l+=2;else l+=4}return a}function Hl(o,s,a,l){return new Array(o,!0,!1,s,null,0,l,a,null,null)}function sC(o,s){const a=dn(s,o);if(Qs(a)){const l=a[1];48&a[2]?Nl(l,a,l.template,a[8]):a[5]>0&&Za(a)}}function Za(o){for(let l=Sd(o);null!==l;l=Id(l))for(let g=10;g<l.length;g++){const d=l[g];if(Qs(d))if(512&d[2]){const f=d[1];Nl(f,d,f.template,d[8])}else d[5]>0&&Za(d)}const a=o[1].components;if(null!==a)for(let l=0;l<a.length;l++){const g=dn(a[l],o);Qs(g)&&g[5]>0&&Za(g)}}function Eh(o,s){const a=dn(s,o),l=a[1];(function aC(o,s){for(let a=s.length;a<o.blueprint.length;a++)s.push(o.blueprint[a])})(l,a),Ch(l,a,a[8])}function Ra(o,s){return o[13]?o[14][4]=s:o[13]=s,o[14]=s,s}function ql(o){for(;o;){o[2]|=32;const s=So(o);if(C1(o)&&!s)return o;o=s}return null}function ns(o,s,a,l=!0){const g=s[10];g.begin&&g.begin();try{Nl(o,s,o.template,a)}catch(f){throw l&&Lh(s,f),f}finally{g.end&&g.end()}}function bn(o,s,a){Lu(0),s(o,a)}function Jl(o){return o[7]||(o[7]=[])}function Sh(o){return o.cleanup||(o.cleanup=[])}function Lh(o,s){const a=o[9],l=a?a.get(Ca,null):null;l&&l.handleError(s)}function is(o,s,a,l,g){for(let d=0;d<a.length;){const f=a[d++],m=a[d++],v=s[f],y=o.data[f];null!==y.setInput?y.setInput(v,g,l,m):v[m]=g}}function gi(o,s,a){const l=Ec(s,o);!function Nd(o,s,a){o.setValue(s,a)}(o[11],l,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vn(o,s,a){let l=a?o.styles:null,g=a?o.classes:null,d=0;if(null!==s)for(let f=0;f<s.length;f++){const m=s[f];"number"==typeof m?d=m:1==d?g=gt(g,m):2==d&&(l=gt(l,m+": "+s[++f]+";"))}a?o.styles=l:o.stylesWithoutHost=l,a?o.classes=g:o.classesWithoutHost=g}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function os(o,s,a,l,g=!1){for(;null!==a;){const d=s[a.index];if(null!==d&&l.push(Pe(d)),Jn(d))for(let m=10;m<d.length;m++){const v=d[m],y=v[1].firstChild;null!==y&&os(v[1],v,y,l)}const f=a.type;if(8&f)os(o,s,a.child,l);else if(32&f){const m=gl(a,s);let v;for(;v=m();)l.push(v)}else if(16&f){const m=qd(s,a);if(Array.isArray(m))l.push(...m);else{const v=So(s[16]);os(v[1],v,m,l,!0)}}a=g?a.projectionNext:a.next}return l}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class De{constructor(s,a){this._lView=s,this._cdRefInjectingView=a,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const s=this._lView,a=s[1];return os(a,s,a.firstChild,[])}get context(){return this._lView[8]}set context(s){this._lView[8]=s}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const s=this._lView[3];if(Jn(s)){const a=s[8],l=a?a.indexOf(this):-1;l>-1&&(dl(s,l),je(a,l))}this._attachedToViewContainer=!1}Vd(this._lView[1],this._lView)}onDestroy(s){Je(this._lView[1],this._lView,null,s)}markForCheck(){ql(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){ns(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new mt(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function hO(o,s){zr(o,s,s[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(s){if(this._attachedToViewContainer)throw new mt(902,!1);this._appRef=s}}class Ei extends De{constructor(s){super(s),this._view=s}detectChanges(){const s=this._view;ns(s[1],s,s[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zl extends _a{constructor(s){super(),this.ngModule=s}resolveComponentFactory(s){const a=oe(s);return new Ho(a,this.ngModule)}}function cC(o){const s=[];for(let a in o)o.hasOwnProperty(a)&&s.push({propName:o[a],templateName:a});return s}class Fh{constructor(s,a){this.injector=s,this.parentInjector=a}get(s,a,l){const g=this.injector.get(s,_d,l);return g!==_d||a===_d?g:this.parentInjector.get(s,a,l)}}class Ho extends X_{constructor(s,a){super(),this.componentDef=s,this.ngModule=a,this.componentType=s.type,this.selector=function Gd(o){return o.map(ba).join(",")}(s.selectors),this.ngContentSelectors=s.ngContentSelectors?s.ngContentSelectors:[],this.isBoundToModule=!!a}get inputs(){return cC(this.componentDef.inputs)}get outputs(){return cC(this.componentDef.outputs)}create(s,a,l,g){let d=(g=g||this.ngModule)instanceof jr?g:g?.injector;d&&null!==this.componentDef.getStandaloneInjector&&(d=this.componentDef.getStandaloneInjector(d)||d);const f=d?new Fh(s,d):s,m=f.get(ev,null);if(null===m)throw new mt(407,!1);const v=f.get(qb,null),y=m.createRenderer(null,this.componentDef),P=this.componentDef.selectors[0][0]||"div",D=l?function Kv(o,s,a){return o.selectRootElement(s,a===vn.ShadowDom)}(y,l,this.componentDef.encapsulation):Fd(m.createRenderer(null,this.componentDef),P,function Nh(o){const s=o.toLowerCase();return"svg"===s?"svg":"math"===s?"math":null}(P)),I=this.componentDef.onPush?288:272,z=Zl(0,null,null,1,0,null,null,null,null,null),et=La(null,z,null,I,null,null,m,y,v,f,null);let dt,pt;Fc(et);try{const Ct=function Vh(o,s,a,l,g,d){const f=a[1];a[22]=o;const v=we(f,22,2,"#host",null),y=v.mergedAttrs=s.hostAttrs;null!==y&&(Vn(v,y,!0),null!==o&&(ea(g,o,y),null!==v.classes&&_l(g,o,v.classes),null!==v.styles&&Dv(g,o,v.styles)));const P=l.createRenderer(o,s),D=La(a,Na(s),null,s.onPush?32:16,a[22],v,l,P,d||null,null,null);return f.firstCreatePass&&(jc(mo(v,a),f,s.type),Ul(f,v),Dh(v,a.length,1)),Ra(a,D),a[22]=D}(D,this.componentDef,et,m,y);if(D)if(l)ea(y,D,["ng-version",Jb.full]);else{const{attrs:Dt,classes:lt}=function Ev(o){const s=[],a=[];let l=1,g=2;for(;l<o.length;){let d=o[l];if("string"==typeof d)2===g?""!==d&&s.push(d,o[++l]):8===g&&a.push(d);else{if(!Zn(g))break;g=d}l++}return{attrs:s,classes:a}}(this.componentDef.selectors[0]);Dt&&ea(y,D,Dt),lt&&lt.length>0&&_l(y,D,lt.join(" "))}if(pt=vr(z,22),void 0!==a){const Dt=pt.projection=[];for(let lt=0;lt<this.ngContentSelectors.length;lt++){const Lt=a[lt];Dt.push(null!=Lt?Array.from(Lt):null)}}dt=function Va(o,s,a,l){const g=a[1],d=function Xv(o,s,a){const l=Ze();o.firstCreatePass&&(a.providersResolver&&a.providersResolver(a),kh(o,l,s,jo(o,s,1,null),a),Vl(o,l));const g=ra(s,o,l.directiveStart,l);qe(g,s);const d=re(l,s);return d&&qe(d,s),g}(g,a,s);if(o[8]=a[8]=d,null!==l)for(const m of l)m(d,s);if(s.contentQueries){const m=Ze();s.contentQueries(1,d,m.directiveStart)}const f=Ze();return!g.firstCreatePass||null===s.hostBindings&&null===s.hostAttrs||(yi(f.index),li(a[1],f,0,f.directiveStart,f.directiveEnd,s),wh(s,d)),d}(Ct,this.componentDef,et,[jh]),Ch(z,et,null)}finally{Zc()}return new Rh(this.componentType,dt,Hr(pt,et),et,pt)}}class Rh extends class Zb{}{constructor(s,a,l,g,d){super(),this.location=l,this._rootLView=g,this._tNode=d,this.instance=a,this.hostView=this.changeDetectorRef=new Ei(g),this.componentType=s}setInput(s,a){const l=this._tNode.inputs;let g;if(null!==l&&(g=l[s])){const d=this._rootLView;is(d[1],d,g,s,a),Ph(d,this._tNode.index)}}get injector(){return new _o(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(s){this.hostView.onDestroy(s)}}function jh(){const o=Ze();ho(ut()[1],o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ja(o){let s=function Ql(o){return Object.getPrototypeOf(o.prototype).constructor}(o.type),a=!0;const l=[o];for(;s;){let g;if(kn(o))g=s.\u0275cmp||s.\u0275dir;else{if(s.\u0275cmp)throw new mt(903,!1);g=s.\u0275dir}if(g){if(a){l.push(g);const f=o;f.inputs=Gl(o.inputs),f.declaredInputs=Gl(o.declaredInputs),f.outputs=Gl(o.outputs);const m=g.hostBindings;m&&Yl(o,m);const v=g.viewQuery,y=g.contentQueries;if(v&&Hh(o,v),y&&Bh(o,y),N(o.inputs,g.inputs),N(o.declaredInputs,g.declaredInputs),N(o.outputs,g.outputs),kn(g)&&g.data.animation){const P=o.data;P.animation=(P.animation||[]).concat(g.data.animation)}}const d=g.features;if(d)for(let f=0;f<d.length;f++){const m=d[f];m&&m.ngInherit&&m(o),m===ja&&(a=!1)}}s=Object.getPrototypeOf(s)}!function Uh(o){let s=0,a=null;for(let l=o.length-1;l>=0;l--){const g=o[l];g.hostVars=s+=g.hostVars,g.hostAttrs=Dr(g.hostAttrs,a=Dr(a,g.hostAttrs))}}(l)}function Gl(o){return o===oo?{}:o===At?[]:o}function Hh(o,s){const a=o.viewQuery;o.viewQuery=a?(l,g)=>{s(l,g),a(l,g)}:s}function Bh(o,s){const a=o.contentQueries;o.contentQueries=a?(l,g,d)=>{s(l,g,d),a(l,g,d)}:s}function Yl(o,s){const a=o.hostBindings;o.hostBindings=a?(l,g)=>{s(l,g),a(l,g)}:s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let rs=null;function Si(){if(!rs){const o=ie.Symbol;if(o&&o.iterator)rs=o.iterator;else{const s=Object.getOwnPropertyNames(Map.prototype);for(let a=0;a<s.length;++a){const l=s[a];"entries"!==l&&"size"!==l&&Map.prototype[l]===Map.prototype.entries&&(rs=l)}}}return rs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ii(o){return!!Ua(o)&&(Array.isArray(o)||!(o instanceof Map)&&Si()in o)}function Ua(o){return null!==o&&("function"==typeof o||"object"==typeof o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ue(o,s,a){return o[s]=a}function Bo(o,s){return o[s]}function on(o,s,a){return!Object.is(o[s],a)&&(o[s]=a,!0)}function qo(o,s,a,l){const g=on(o,s,a);return on(o,s+1,l)||g}function On(o,s,a,l,g,d){const f=qo(o,s,a,l);return qo(o,s+2,g,d)||f}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ss(o,s,a,l){const g=ut();return on(g,yr(),s)&&(Xt(),Kn(Ce(),g,o,s,a,l)),ss}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jo(o,s,a,l){return on(o,yr(),a)?s+ct(a)+l:jt}function Li(o,s,a,l,g,d){const m=qo(o,function Ci(){return Ht.lFrame.bindingIndex}(),a,g);return Mi(2),m?s+ct(a)+l+ct(g)+d:jt}function Yo(o,s,a,l,g,d,f,m){const v=ut(),y=Xt(),P=o+22,D=y.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Go(o,s,a,l,g,d,f,m,v){const y=s.consts,P=we(s,o,4,f||null,qi(y,m));jl(s,a,P,qi(y,v)),ho(s,P);const D=P.tViews=Zl(2,P,l,g,d,s.directiveRegistry,s.pipeRegistry,null,s.schemas,y);return null!==s.queries&&(s.queries.template(s,P),D.queries=s.queries.embeddedTView(P)),P}(P,y,v,s,a,l,g,d,f):y.data[P];Qn(D,!1);const I=v[11].createComment("");qr(y,v,I,D),qe(I,v),Ra(v,v[P]=Hl(I,v,I,D)),qs(D)&&Fl(y,v,D),null!=f&&bh(v,D,m)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xl(o){return Cr(function Eu(){return Ht.lFrame.contextLView}(),22+o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ds(o,s,a){const l=ut();return on(l,yr(),s)&&mn(Xt(),Ce(),l,o,s,l[11],a,!1),ds}function Ja(o,s,a,l,g){const f=g?"class":"style";is(o,a,s.inputs[f],f,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hs(o,s,a,l){const g=ut(),d=Xt(),f=22+o,m=g[11],v=g[f]=Fd(m,s,function Or(){return Ht.lFrame.currentNamespace}()),y=d.firstCreatePass?function za(o,s,a,l,g,d,f){const m=s.consts,y=we(s,o,2,g,qi(m,d));return jl(s,a,y,qi(m,f)),null!==y.attrs&&Vn(y,y.attrs,!1),null!==y.mergedAttrs&&Vn(y,y.mergedAttrs,!0),null!==s.queries&&s.queries.elementStart(s,y),y}(f,d,g,0,s,a,l):d.data[f];Qn(y,!0);const P=y.mergedAttrs;null!==P&&ea(m,v,P);const D=y.classes;null!==D&&_l(m,v,D);const I=y.styles;return null!==I&&Dv(m,v,I),64!=(64&y.flags)&&qr(d,g,v,y),0===function qm(){return Ht.lFrame.elementDepthCount}()&&qe(v,g),function Jm(){Ht.lFrame.elementDepthCount++}(),qs(y)&&(Fl(d,g,y),yh(d,y,g)),null!==l&&bh(g,y),hs}function fs(){let o=Ze();Lc()?Mr():(o=o.parent,Qn(o,!1));const s=o;!function q1(){Ht.lFrame.elementDepthCount--}();const a=Xt();return a.firstCreatePass&&(ho(a,o),Hs(o)&&a.queries.elementEnd(o)),null!=s.classesWithoutHost&&function Rc(o){return 0!=(16&o.flags)}(s)&&Ja(a,s,ut(),s.classesWithoutHost,!0),null!=s.stylesWithoutHost&&function i_(o){return 0!=(32&o.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)&&Ja(a,s,ut(),s.stylesWithoutHost,!1),fs}function Qa(o,s,a,l){return hs(o,s,a,l),fs(),Qa
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function eg(o,s,a){const l=ut(),g=Xt(),d=o+22,f=g.firstCreatePass?function tg(o,s,a,l,g){const d=s.consts,f=qi(d,l),m=we(s,o,8,"ng-container",f);return null!==f&&Vn(m,f,!0),jl(s,a,m,qi(d,g)),null!==s.queries&&s.queries.elementStart(s,m),m}(d,g,l,s,a):g.data[d];Qn(f,!0);const m=l[d]=l[11].createComment("");return qr(g,l,m,f),qe(m,l),qs(f)&&(Fl(g,l,f),yh(g,f,l)),null!=a&&bh(l,f),eg}function ng(){let o=Ze();const s=Xt();return Lc()?Mr():(o=o.parent,Qn(o,!1)),s.firstCreatePass&&(ho(s,o),Hs(o)&&s.queries.elementEnd(o)),ng}function hC(){return ut()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $o(o){return!!o&&"function"==typeof o.then}function Ko(o){return!!o&&"function"==typeof o.subscribe}const ps=Ko;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wo(o,s,a,l){const g=ut(),d=Xt(),f=Ze();return function ms(o,s,a,l,g,d,f,m){const v=qs(l),P=o.firstCreatePass&&Sh(o),D=s[8],I=Jl(s);let z=!0;if(3&l.type||m){const pt=re(l,s),Ct=m?m(pt):pt,Dt=I.length,lt=m?ne=>m(Pe(ne[l.index])):l.index;let Lt=null;if(!m&&v&&(Lt=function ig(o,s,a,l){const g=o.cleanup;if(null!=g)for(let d=0;d<g.length-1;d+=2){const f=g[d];if(f===a&&g[d+1]===l){const m=s[7],v=g[d+2];return m.length>v?m[v]:null}"string"==typeof f&&(d+=2)}return null}(o,s,g,l.index)),null!==Lt)(Lt.__ngLastListenerFn__||Lt).__ngNextListenerFn__=d,Lt.__ngLastListenerFn__=d,z=!1;else{d=nf(l,s,D,d,!1);const ne=a.listen(Ct,g,d);I.push(d,ne),P&&P.push(g,lt,Dt,Dt+1)}}else d=nf(l,s,D,d,!1);const et=l.outputs;let dt;if(z&&null!==et&&(dt=et[g])){const pt=dt.length;if(pt)for(let Ct=0;Ct<pt;Ct+=2){const he=s[dt[Ct]][dt[Ct+1]].subscribe(d),no=I.length;I.push(d,he),P&&P.push(g,l.index,no,-(no+1))}}}(d,g,g[11],f,o,s,0,l),Wo}function ef(o,s,a,l){try{return!1!==a(l)}catch(g){return Lh(o,g),!1}}function nf(o,s,a,l,g){return function d(f){if(f===Function)return l;ql(2&o.flags?dn(o.index,s):s);let v=ef(s,0,l,f),y=d.__ngNextListenerFn__;for(;y;)v=ef(s,0,y,f)&&v,y=y.__ngNextListenerFn__;return g&&!1===v&&(f.preventDefault(),f.returnValue=!1),v}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function og(o=1){return function Fu(o){return(Ht.lFrame.contextLView=function e_(o,s){for(;o>0;)s=s[15],o--;return s}(o,Ht.lFrame.contextLView))[8]}(o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function sf(o,s,a){return Ga(o,"",s,"",a),sf}function Ga(o,s,a,l,g){const d=ut(),f=Jo(d,s,a,l);return f!==jt&&mn(Xt(),Ce(),d,o,f,d[11],g,!1),Ga}function cg(o,s,a,l,g){const d=o[a+1],f=null===s;let m=l?Rn(d):Ai(d),v=!1;for(;0!==m&&(!1===v||f);){const P=o[m+1];lf(o[m],s)&&(v=!0,o[m+1]=l?gh(P):ch(P)),m=l?Rn(P):Ai(P)}v&&(o[a+1]=l?ch(d):gh(d))}function lf(o,s){return null===o||null==s||(Array.isArray(o)?o[1]:o)===s||!(!Array.isArray(o)||"string"!=typeof s)&&Co(o,s)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ke={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function vC(o){return o.substring(ke.key,ke.keyEnd)}function MC(o,s){const a=ke.textEnd;return a===s?-1:(s=ke.keyEnd=function uf(o,s,a){for(;s<a&&o.charCodeAt(s)>32;)s++;return s}(o,ke.key=s,a),Xo(o,s,a))}function Xo(o,s,a){for(;s<a&&o.charCodeAt(s)<=32;)s++;return s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ka(o,s,a){return Un(o,s,a,!1),Ka}function gg(o,s){return Un(o,s,null,!0),gg}function pf(o){Pn(We,jn,o,!0)}function jn(o,s){for(let a=function gf(o){return function bC(o){ke.key=0,ke.keyEnd=0,ke.value=0,ke.valueEnd=0,ke.textEnd=o.length}(o),MC(o,Xo(o,0,ke.textEnd))}(s);a>=0;a=MC(s,a))We(o,vC(s),!0)}function Un(o,s,a,l){const g=ut(),d=Xt(),f=Mi(2);d.firstUpdatePass&&mf(d,o,f,l),s!==jt&&on(g,f,s)&&pg(d,d.data[Ke()],g,g[11],o,g[f+1]=function DC(o,s){return null==o||("string"==typeof s?o+=s:"object"==typeof o&&(o=V(Nn(o)))),o}(s,a),l,f)}function Pn(o,s,a,l){const g=Xt(),d=Mi(2);g.firstUpdatePass&&mf(g,null,d,l);const f=ut();if(a!==jt&&on(f,d,a)){const m=g.data[Ke()];if(Wa(m,l)&&!ug(g,d)){let v=l?m.classesWithoutHost:m.stylesWithoutHost;null!==v&&(a=gt(v,a||"")),Ja(g,m,f,a,l)}else!function wC(o,s,a,l,g,d,f,m){g===jt&&(g=At);let v=0,y=0,P=0<g.length?g[0]:null,D=0<d.length?d[0]:null;for(;null!==P||null!==D;){const I=v<g.length?g[v+1]:void 0,z=y<d.length?d[y+1]:void 0;let dt,et=null;P===D?(v+=2,y+=2,I!==z&&(et=D,dt=z)):null===D||null!==P&&P<D?(v+=2,et=P):(y+=2,et=D,dt=z),null!==et&&pg(o,s,a,l,et,dt,f,m),P=v<g.length?g[v]:null,D=y<d.length?d[y]:null}}(g,m,f,f[11],f[d+1],f[d+1]=function hg(o,s,a){if(null==a||""===a)return At;const l=[],g=Nn(a);if(Array.isArray(g))for(let d=0;d<g.length;d++)o(l,g[d],!0);else if("object"==typeof g)for(const d in g)g.hasOwnProperty(d)&&o(l,d,g[d]);else"string"==typeof g&&s(l,g);return l}(o,s,a),l,d)}}function ug(o,s){return s>=o.expandoStartIndex}function mf(o,s,a,l){const g=o.data;if(null===g[a+1]){const d=g[Ke()],f=ug(o,a);Wa(d,l)&&null===s&&!f&&(s=!1),s=function _f(o,s,a,l){const g=function Iu(o){const s=Ht.lFrame.currentDirectiveIndex;return-1===s?null:o[s]}(o);let d=l?s.residualClasses:s.residualStyles;if(null===g)0===(l?s.classBindings:s.styleBindings)&&(a=Cs(a=vs(null,o,s,a,l),s.attrs,l),d=null);else{const f=s.directiveStylingLast;if(-1===f||o[f]!==g)if(a=vs(g,o,s,a,l),null===d){let v=function PC(o,s,a){const l=a?s.classBindings:s.styleBindings;if(0!==Ai(l))return o[Rn(l)]}(o,s,l);void 0!==v&&Array.isArray(v)&&(v=vs(null,o,s,v[1],l),v=Cs(v,s.attrs,l),function dg(o,s,a,l){o[Rn(a?s.classBindings:s.styleBindings)]=l}(o,s,l,v))}else d=function xC(o,s,a){let l;const g=s.directiveEnd;for(let d=1+s.directiveStylingLast;d<g;d++)l=Cs(l,o[d].hostAttrs,a);return Cs(l,s.attrs,a)}(o,s,l)}return void 0!==d&&(l?s.residualClasses=d:s.residualStyles=d),a}(g,d,s,l),function _s(o,s,a,l,g,d){let f=d?s.classBindings:s.styleBindings,m=Rn(f),v=Ai(f);o[l]=a;let P,y=!1;if(Array.isArray(a)){const D=a;P=D[1],(null===P||Co(D,P)>0)&&(y=!0)}else P=a;if(g)if(0!==v){const I=Rn(o[m+1]);o[l+1]=kl(I,m),0!==I&&(o[I+1]=lh(o[I+1],l)),o[m+1]=function Bv(o,s){return 131071&o|s<<17}(o[m+1],l)}else o[l+1]=kl(m,0),0!==m&&(o[m+1]=lh(o[m+1],l)),m=l;else o[l+1]=kl(v,0),0===m?m=l:o[v+1]=lh(o[v+1],l),v=l;y&&(o[l+1]=ch(o[l+1])),cg(o,P,l,!0),cg(o,P,l,!1),function ag(o,s,a,l,g){const d=g?o.residualClasses:o.residualStyles;null!=d&&"string"==typeof s&&Co(d,s)>=0&&(a[l+1]=gh(a[l+1]))}(s,P,o,l,d),f=kl(m,v),d?s.classBindings=f:s.styleBindings=f}(g,d,s,a,f,l)}}function vs(o,s,a,l,g){let d=null;const f=a.directiveEnd;let m=a.directiveStylingLast;for(-1===m?m=a.directiveStart:m++;m<f&&(d=s[m],l=Cs(l,d.hostAttrs,g),d!==o);)m++;return null!==o&&(a.directiveStylingLast=m),l}function Cs(o,s,a){const l=a?1:2;let g=-1;if(null!==s)for(let d=0;d<s.length;d++){const f=s[d];"number"==typeof f?g=f:g===l&&(Array.isArray(o)||(o=void 0===o?[]:["",o]),We(o,f,!!a||s[++d]))}return void 0===o?null:o}function pg(o,s,a,l,g,d,f,m){if(!(3&s.type))return;const v=o.data,y=v[m+1];Ms(function qv(o){return 1==(1&o)}(y)?vf(v,s,a,g,Ai(y),f):void 0)||(Ms(d)||function Wr(o){return 2==(2&o)}(y)&&(d=vf(v,null,a,g,m,f)),function MO(o,s,a,l,g){if(s)g?o.addClass(a,l):o.removeClass(a,l);else{let d=-1===l.indexOf("-")?void 0:Fn.DashCase;null==g?o.removeStyle(a,l,d):("string"==typeof g&&g.endsWith("!important")&&(g=g.slice(0,-10),d|=Fn.Important),o.setStyle(a,l,g,d))}}(l,f,Ec(Ke(),a),g,d))}function vf(o,s,a,l,g,d){const f=null===s;let m;for(;g>0;){const v=o[g],y=Array.isArray(v),P=y?v[1]:v,D=null===P;let I=a[g+1];I===jt&&(I=D?At:void 0);let z=D?zc(I,l):P===l?I:void 0;if(y&&!Ms(z)&&(z=zc(v,l)),Ms(z)&&(m=z,f))return m;const et=o[g+1];g=f?Rn(et):Ai(et)}if(null!==s){let v=d?s.residualClasses:s.residualStyles;null!=v&&(m=zc(v,l))}return m}function Ms(o){return void 0!==o}function Wa(o,s){return 0!=(o.flags&(s?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xa(o,s=""){const a=ut(),l=Xt(),g=o+22,d=l.firstCreatePass?we(l,g,1,s,null):l.data[g],f=a[g]=function Ld(o,s){return o.createText(s)}(a[11],s);qr(l,a,f,d),Qn(d,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mg(o){return ys("",o,""),mg}function ys(o,s,a){const l=ut(),g=Jo(l,o,s,a);return g!==jt&&gi(l,Ke(),g),ys}function _g(o,s,a,l,g){const d=ut(),f=Li(d,o,s,a,l,g);return f!==jt&&gi(d,Ke(),f),_g}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Mg(o,s,a){Pn(We,jn,Jo(ut(),o,s,a),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _=void 0;var Af=["en",[["a","p"],["AM","PM"],_],[["AM","PM"],_,_],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],_,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],_,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",_,"{1} 'at' {0}",_],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function U(o){const a=Math.floor(Math.abs(o)),l=o.toString().replace(/^[^.]*\.?/,"").length;return 1===a&&0===l?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let wt={};function ye(o){const s=function qC(o){return o.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o);let a=Ef(s);if(a)return a;const l=s.split("-")[0];if(a=Ef(l),a)return a;if("en"===l)return Af;throw new mt(701,!1)}function Tf(o){return ye(o)[Pt.PluralCase]}function Ef(o){return o in wt||(wt[o]=ie.ng&&ie.ng.common&&ie.ng.common.locales&&ie.ng.common.locales[o]),wt[o]}var Pt=(()=>((Pt=Pt||{})[Pt.LocaleId=0]="LocaleId",Pt[Pt.DayPeriodsFormat=1]="DayPeriodsFormat",Pt[Pt.DayPeriodsStandalone=2]="DayPeriodsStandalone",Pt[Pt.DaysFormat=3]="DaysFormat",Pt[Pt.DaysStandalone=4]="DaysStandalone",Pt[Pt.MonthsFormat=5]="MonthsFormat",Pt[Pt.MonthsStandalone=6]="MonthsStandalone",Pt[Pt.Eras=7]="Eras",Pt[Pt.FirstDayOfWeek=8]="FirstDayOfWeek",Pt[Pt.WeekendRange=9]="WeekendRange",Pt[Pt.DateFormat=10]="DateFormat",Pt[Pt.TimeFormat=11]="TimeFormat",Pt[Pt.DateTimeFormat=12]="DateTimeFormat",Pt[Pt.NumberSymbols=13]="NumberSymbols",Pt[Pt.NumberFormats=14]="NumberFormats",Pt[Pt.CurrencyCode=15]="CurrencyCode",Pt[Pt.CurrencySymbol=16]="CurrencySymbol",Pt[Pt.CurrencyName=17]="CurrencyName",Pt[Pt.Currencies=18]="Currencies",Pt[Pt.Directionality=19]="Directionality",Pt[Pt.PluralCase=20]="PluralCase",Pt[Pt.ExtraData=21]="ExtraData",Pt))();const ae="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ic=ae;function wg(o,s,a,l,g){if(o=Q(o),Array.isArray(o))for(let d=0;d<o.length;d++)wg(o[d],s,a,l,g);else{const d=Xt(),f=ut();let m=ko(o)?o:Q(o.provide),v=W_(o);const y=Ze(),P=1048575&y.providerIndexes,D=y.directiveStart,I=y.providerIndexes>>20;if(ko(o)||!o.multi){const z=new xr(v,g,Vo),et=kg(m,s,g?P:P+I,D);-1===et?(jc(mo(y,f),d,m),Dg(d,o,s.length),s.push(m),y.directiveStart++,y.directiveEnd++,g&&(y.providerIndexes+=1048576),a.push(z),f.push(z)):(a[et]=z,f[et]=z)}else{const z=kg(m,s,P+I,D),et=kg(m,s,P,P+I),dt=z>=0&&a[z],pt=et>=0&&a[et];if(g&&!pt||!g&&!dt){jc(mo(y,f),d,m);const Ct=function EM(o,s,a,l,g){const d=new xr(o,a,Vo);return d.multi=[],d.index=s,d.componentProviders=0,Xf(d,g,l&&!a),d}(g?TM:AM,a.length,g,l,v);!g&&pt&&(a[et].providerFactory=Ct),Dg(d,o,s.length,0),s.push(m),y.directiveStart++,y.directiveEnd++,g&&(y.providerIndexes+=1048576),a.push(Ct),f.push(Ct)}else Dg(d,o,z>-1?z:et,Xf(a[g?et:z],v,!g&&l));!g&&l&&pt&&a[et].componentProviders++}}}function Dg(o,s,a,l){const g=ko(s),d=function Ab(o){return!!o.useClass}(s);if(g||d){const v=(d?Q(s.useClass):s).prototype.ngOnDestroy;if(v){const y=o.destroyHooks||(o.destroyHooks=[]);if(!g&&s.multi){const P=y.indexOf(a);-1===P?y.push(a,[l,v]):y[P+1].push(l,v)}else y.push(a,v)}}}function Xf(o,s,a){return a&&o.componentProviders++,o.multi.push(s)-1}function kg(o,s,a,l){for(let g=a;g<l;g++)if(s[g]===o)return g;return-1}function AM(o,s,a,l){return Ag(this.multi,[])}function TM(o,s,a,l){const g=this.multi;let d;if(this.providerFactory){const f=this.providerFactory.componentProviders,m=ra(a,a[1],this.providerFactory.index,l);d=m.slice(0,f),Ag(g,d);for(let v=f;v<m.length;v++)d.push(m[v])}else d=[],Ag(g,d);return d}function Ag(o,s){for(let a=0;a<o.length;a++)s.push((0,o[a])());return s}function tp(o,s=[]){return a=>{a.providersResolver=(l,g)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kM(o,s,a){const l=Xt();if(l.firstCreatePass){const g=kn(o);wg(a,l.data,l.blueprint,g,!0),wg(s,l.data,l.blueprint,g,!1)}}(l,g?g(o):o,s)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class er{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nr(o,s){return new ip(o,s??null)}class ip extends er{constructor(s,a){super(),this._parent=a,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new zl(this);const l=function un(o,s){const a=o[ur]||null;if(!a&&!0===s)throw new Error(`Type ${V(o)} does not have '\u0275mod' property.`);return a}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s);this._bootstrapComponents=function $n(o){return o instanceof Function?o():o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(l.bootstrap),this._r3Injector=eh(s,a,[{provide:er,useValue:this},{provide:_a,useValue:this.componentFactoryResolver}],V(s),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(s)}get injector(){return this._r3Injector}destroy(){const s=this._r3Injector;!s.destroyed&&s.destroy(),this.destroyCbs.forEach(a=>a()),this.destroyCbs=null}onDestroy(s){this.destroyCbs.push(s)}}class Tg extends class ep{}{constructor(s){super(),this.moduleType=s}create(s){return new ip(this.moduleType,s)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function up(o,s,a){const l=an()+o,g=ut();return g[l]===jt?Ue(g,l,a?s.call(a):s()):Bo(g,l)}function dp(o,s,a,l){return vp(ut(),an(),o,s,a,l)}function hp(o,s,a,l,g){return Cp(ut(),an(),o,s,a,l,g)}function fp(o,s,a,l,g,d){return Mp(ut(),an(),o,s,a,l,g,d)}function pp(o,s,a,l,g,d,f){return function yp(o,s,a,l,g,d,f,m,v){const y=s+a;return On(o,y,g,d,f,m)?Ue(o,y+4,v?l.call(v,g,d,f,m):l(g,d,f,m)):Ds(o,y+4)}(ut(),an(),o,s,a,l,g,d,f)}function mp(o,s,a,l,g,d,f,m){const v=an()+o,y=ut(),P=On(y,v,a,l,g,d);return on(y,v+4,f)||P?Ue(y,v+5,m?s.call(m,a,l,g,d,f):s(a,l,g,d,f)):Bo(y,v+5)}function _p(o,s,a,l,g,d,f,m,v){const y=an()+o,P=ut(),D=On(P,y,a,l,g,d);return qo(P,y+4,f,m)||D?Ue(P,y+6,v?s.call(v,a,l,g,d,f,m):s(a,l,g,d,f,m)):Bo(P,y+6)}function Ds(o,s){const a=o[s];return a===jt?void 0:a}function vp(o,s,a,l,g,d){const f=s+a;return on(o,f,g)?Ue(o,f+1,d?l.call(d,g):l(g)):Ds(o,f+1)}function Cp(o,s,a,l,g,d,f){const m=s+a;return qo(o,m,g,d)?Ue(o,m+2,f?l.call(f,g,d):l(g,d)):Ds(o,m+2)}function Mp(o,s,a,l,g,d,f,m){const v=s+a;return function Ha(o,s,a,l,g){const d=qo(o,s,a,l);return on(o,s+2,g)||d}(o,v,g,d,f)?Ue(o,v+3,m?l.call(m,g,d,f):l(g,d,f)):Ds(o,v+3)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Op(o,s){const a=Xt();let l;const g=o+22;a.firstCreatePass?(l=function zM(o,s){if(s)for(let a=s.length-1;a>=0;a--){const l=s[a];if(o===l.name)return l}}(s,a.pipeRegistry),a.data[g]=l,l.onDestroy&&(a.destroyHooks||(a.destroyHooks=[])).push(g,l.onDestroy)):l=a.data[g];const d=l.factory||(l.factory=oi(l.type)),f=_n(Vo);try{const m=Ar(!1),v=d();return Ar(m),function Wl(o,s,a,l){a>=o.data.length&&(o.data[a]=null,o.blueprint[a]=null),s[a]=l}(a,ut(),g,v),v}finally{_n(f)}}function Pp(o,s,a){const l=o+22,g=ut(),d=Cr(g,l);return ks(g,l)?vp(g,an(),s,d.transform,a,d):d.transform(a)}function xp(o,s,a,l){const g=o+22,d=ut(),f=Cr(d,g);return ks(d,g)?Cp(d,an(),s,f.transform,a,l,f):f.transform(a,l)}function wp(o,s,a,l,g){const d=o+22,f=ut(),m=Cr(f,d);return ks(f,d)?Mp(f,an(),s,m.transform,a,l,g,m):m.transform(a,l,g)}function ks(o,s){return o[1].data[s].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sg(o){return s=>{setTimeout(o,void 0,s)}}const Wn=class Ri extends t.x{constructor(s=!1){super(),this.__isAsync=s}emit(s){super.next(s)}subscribe(s,a,l){let g=s,d=a||(()=>null),f=l;if(s&&"object"==typeof s){const v=s;g=v.next?.bind(v),d=v.error?.bind(v),f=v.complete?.bind(v)}this.__isAsync&&(d=Sg(d),g&&(g=Sg(g)),f&&(f=Sg(f)));const m=super.subscribe({next:g,error:d,complete:f});return s instanceof R.w0&&s.add(m),m}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function YM(){return this._results[Si()]()}class As{constructor(s=!1){this._emitDistinctChangesOnly=s,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const a=Si(),l=As.prototype;l[a]||(l[a]=YM)}get changes(){return this._changes||(this._changes=new Wn)}get(s){return this._results[s]}map(s){return this._results.map(s)}filter(s){return this._results.filter(s)}find(s){return this._results.find(s)}reduce(s,a){return this._results.reduce(s,a)}forEach(s){this._results.forEach(s)}some(s){return this._results.some(s)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(s,a){const l=this;l.dirty=!1;const g=Re(s);(this._changesDetected=!function $t(o,s,a){if(o.length!==s.length)return!1;for(let l=0;l<o.length;l++){let g=o[l],d=s[l];if(a&&(g=a(g),d=a(d)),d!==g)return!1}return!0}(l._results,g,a))&&(l._results=g,l.length=g.length,l.last=g[this.length-1],l.first=g[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ts=(()=>{class o{}return o.__NG_ELEMENT_ID__=WM,o})();const $M=Ts,KM=class extends $M{constructor(s,a,l){super(),this._declarationLView=s,this._declarationTContainer=a,this.elementRef=l}createEmbeddedView(s,a){const l=this._declarationTContainer.tViews,g=La(this._declarationLView,l,s,16,null,l.declTNode,null,null,null,null,a||null);g[17]=this._declarationLView[this._declarationTContainer.index];const f=this._declarationLView[19];return null!==f&&(g[19]=f.createEmbeddedView(l)),Ch(l,g,s),new De(g)}};function WM(){return lc(Ze(),ut())}function lc(o,s){return 4&o.type?new KM(s,o,Hr(o,s)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let gc=(()=>{class o{}return o.__NG_ELEMENT_ID__=Ig,o})();function Ig(){return Ap(Ze(),ut())}const XM=gc,Dp=class extends XM{constructor(s,a,l){super(),this._lContainer=s,this._hostTNode=a,this._hostLView=l}get element(){return Hr(this._hostTNode,this._hostLView)}get injector(){return new _o(this._hostTNode,this._hostLView)}get parentInjector(){const s=oa(this._hostTNode,this._hostLView);if(Ju(s)){const a=kr(s,this._hostLView),l=po(s);return new _o(a[1].data[l+8],a)}return new _o(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(s){const a=kp(this._lContainer);return null!==a&&a[s]||null}get length(){return this._lContainer.length-10}createEmbeddedView(s,a,l){let g,d;"number"==typeof l?g=l:null!=l&&(g=l.index,d=l.injector);const f=s.createEmbeddedView(a||{},d);return this.insert(f,g),f}createComponent(s,a,l,g,d){const f=s&&!function be(o){return"function"==typeof o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s);let m;if(f)m=a;else{const D=a||{};m=D.index,l=D.injector,g=D.projectableNodes,d=D.environmentInjector||D.ngModuleRef}const v=f?s:new Ho(oe(s)),y=l||this.parentInjector;if(!d&&null==v.ngModule){const I=(f?y:this.parentInjector).get(jr,null);I&&(d=I)}const P=v.create(y,g,void 0,d);return this.insert(P.hostView,m),P}insert(s,a){const l=s._lView,g=l[1];if(function B1(o){return Jn(o[3])}(l)){const P=this.indexOf(s);if(-1!==P)this.detach(P);else{const D=l[3],I=new Dp(D,D[6],D[3]);I.detach(I.indexOf(s))}}const d=this._adjustIndex(a),f=this._lContainer;!function pO(o,s,a,l){const g=10+l,d=a.length;l>0&&(a[g-1][4]=s),l<d-10?(s[4]=a[g],Ji(a,10+l,s)):(a.push(s),s[4]=null),s[3]=a;const f=s[17];null!==f&&a!==f&&function Zd(o,s){const a=o[9];s[16]!==s[3][3][16]&&(o[2]=!0),null===a?o[9]=[s]:a.push(s)}(f,s);const m=s[19];null!==m&&m.insertView(o),s[2]|=64}(g,l,f,d);const m=pl(d,f),v=l[11],y=ya(v,f[7]);return null!==y&&function dO(o,s,a,l,g,d){l[0]=g,l[6]=s,zr(o,l,a,1,g,d)}(g,f[6],v,l,y,m),s.attachToViewContainerRef(),Ji(Lg(f),d,s),s}move(s,a){return this.insert(s,a)}indexOf(s){const a=kp(this._lContainer);return null!==a?a.indexOf(s):-1}remove(s){const a=this._adjustIndex(s,-1),l=dl(this._lContainer,a);l&&(je(Lg(this._lContainer),a),Vd(l[1],l))}detach(s){const a=this._adjustIndex(s,-1),l=dl(this._lContainer,a);return l&&null!=je(Lg(this._lContainer),a)?new De(l):null}_adjustIndex(s,a=0){return s??this.length+a}};function kp(o){return o[8]}function Lg(o){return o[8]||(o[8]=[])}function Ap(o,s){let a;const l=s[o.index];if(Jn(l))a=l;else{let g;if(8&o.type)g=Pe(l);else{const d=s[11];g=d.createComment("");const f=re(o,s);Di(d,ya(d,f),g,function _O(o,s){return o.nextSibling(s)}(d,f),!1)}s[o.index]=a=Hl(l,s,g,o),Ra(s,a)}return new Dp(a,o,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ng{constructor(s){this.queryList=s,this.matches=null}clone(){return new Ng(this.queryList)}setDirty(){this.queryList.setDirty()}}class Fg{constructor(s=[]){this.queries=s}createEmbeddedView(s){const a=s.queries;if(null!==a){const l=null!==s.contentQueries?s.contentQueries[0]:a.length,g=[];for(let d=0;d<l;d++){const f=a.getByIndex(d);g.push(this.queries[f.indexInDeclarationView].clone())}return new Fg(g)}return null}insertView(s){this.dirtyQueriesWithMatches(s)}detachView(s){this.dirtyQueriesWithMatches(s)}dirtyQueriesWithMatches(s){for(let a=0;a<this.queries.length;a++)null!==Rp(s,a).matches&&this.queries[a].setDirty()}}class Tp{constructor(s,a,l=null){this.predicate=s,this.flags=a,this.read=l}}class Zg{constructor(s=[]){this.queries=s}elementStart(s,a){for(let l=0;l<this.queries.length;l++)this.queries[l].elementStart(s,a)}elementEnd(s){for(let a=0;a<this.queries.length;a++)this.queries[a].elementEnd(s)}embeddedTView(s){let a=null;for(let l=0;l<this.length;l++){const g=null!==a?a.length:0,d=this.getByIndex(l).embeddedTView(s,g);d&&(d.indexInDeclarationView=l,null!==a?a.push(d):a=[d])}return null!==a?new Zg(a):null}template(s,a){for(let l=0;l<this.queries.length;l++)this.queries[l].template(s,a)}getByIndex(s){return this.queries[s]}get length(){return this.queries.length}track(s){this.queries.push(s)}}class Rg{constructor(s,a=-1){this.metadata=s,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=a}elementStart(s,a){this.isApplyingToNode(a)&&this.matchTNode(s,a)}elementEnd(s){this._declarationNodeIndex===s.index&&(this._appliesToNextNode=!1)}template(s,a){this.elementStart(s,a)}embeddedTView(s,a){return this.isApplyingToNode(s)?(this.crossesNgTemplate=!0,this.addMatch(-s.index,a),new Rg(this.metadata)):null}isApplyingToNode(s){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const a=this._declarationNodeIndex;let l=s.parent;for(;null!==l&&8&l.type&&l.index!==a;)l=l.parent;return a===(null!==l?l.index:-1)}return this._appliesToNextNode}matchTNode(s,a){const l=this.metadata.predicate;if(Array.isArray(l))for(let g=0;g<l.length;g++){const d=l[g];this.matchTNodeWithReadOption(s,a,ey(a,d)),this.matchTNodeWithReadOption(s,a,Uc(a,s,d,!1,!1))}else l===Ts?4&a.type&&this.matchTNodeWithReadOption(s,a,-1):this.matchTNodeWithReadOption(s,a,Uc(a,s,l,!1,!1))}matchTNodeWithReadOption(s,a,l){if(null!==l){const g=this.metadata.read;if(null!==g)if(g===va||g===gc||g===Ts&&4&a.type)this.addMatch(a.index,-2);else{const d=Uc(a,s,g,!1,!1);null!==d&&this.addMatch(a.index,d)}else this.addMatch(a.index,l)}}addMatch(s,a){null===this.matches?this.matches=[s,a]:this.matches.push(s,a)}}function ey(o,s){const a=o.localNames;if(null!==a)for(let l=0;l<a.length;l+=2)if(a[l]===s)return a[l+1];return null}function iy(o,s,a,l){return-1===a?function ny(o,s){return 11&o.type?Hr(o,s):4&o.type?lc(o,s):null}(s,o):-2===a?function oy(o,s,a){return a===va?Hr(s,o):a===Ts?lc(s,o):a===gc?Ap(s,o):void 0}(o,s,l):ra(o,o[1],a,s)}function Ep(o,s,a,l){const g=s[19].queries[l];if(null===g.matches){const d=o.data,f=a.matches,m=[];for(let v=0;v<f.length;v+=2){const y=f[v];m.push(y<0?null:iy(s,d[y],f[v+1],a.metadata.read))}g.matches=m}return g.matches}function Vg(o,s,a,l){const g=o.queries.getByIndex(a),d=g.matches;if(null!==d){const f=Ep(o,s,g,a);for(let m=0;m<d.length;m+=2){const v=d[m];if(v>0)l.push(f[m/2]);else{const y=d[m+1],P=s[-v];for(let D=10;D<P.length;D++){const I=P[D];I[17]===I[3]&&Vg(I[1],I,y,l)}if(null!==P[9]){const D=P[9];for(let I=0;I<D.length;I++){const z=D[I];Vg(z[1],z,y,l)}}}}}return l}function Sp(o){const s=ut(),a=Xt(),l=Xm();Lu(l+1);const g=Rp(a,l);if(o.dirty&&function Hm(o){return 4==(4&o[2])}(s)===(2==(2&g.metadata.flags))){if(null===g.matches)o.reset([]);else{const d=g.crossesNgTemplate?Vg(a,s,l,[]):Ep(a,s,g,l);o.reset(d,Ub),o.notifyOnChanges()}return!0}return!1}function Ip(o,s,a){const l=Xt();l.firstCreatePass&&(Zp(l,new Tp(o,s,a),-1),2==(2&s)&&(l.staticViewQueries=!0)),Fp(l,ut(),s)}function Lp(o,s,a,l){const g=Xt();if(g.firstCreatePass){const d=Ze();Zp(g,new Tp(s,a,l),d.index),function sy(o,s){const a=o.contentQueries||(o.contentQueries=[]);s!==(a.length?a[a.length-1]:-1)&&a.push(o.queries.length-1,s)}(g,o),2==(2&a)&&(g.staticContentQueries=!0)}Fp(g,ut(),a)}function Np(){return function ry(o,s){return o[19].queries[s].queryList}(ut(),Xm())}function Fp(o,s,a){const l=new As(4==(4&a));Je(o,s,l,l.destroy),null===s[19]&&(s[19]=new Fg),s[19].queries.push(new Ng(l))}function Zp(o,s,a){null===o.queries&&(o.queries=new Zg),o.queries.track(new Rg(s,a))}function Rp(o,s){return o.queries.getByIndex(s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uc(...o){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nm=new le("Application Initializer");let dc=(()=>{class o{constructor(a){this.appInits=a,this.resolve=uc,this.reject=uc,this.initialized=!1,this.done=!1,this.donePromise=new Promise((l,g)=>{this.resolve=l,this.reject=g})}runInitializers(){if(this.initialized)return;const a=[],l=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let g=0;g<this.appInits.length;g++){const d=this.appInits[g]();if($o(d))a.push(d);else if(ps(d)){const f=new Promise((m,v)=>{d.subscribe({complete:m,error:v})});a.push(f)}}Promise.all(a).then(()=>{l()}).catch(g=>{this.reject(g)}),0===a.length&&l(),this.initialized=!0}}return o.\u0275fac=function(a){return new(a||o)(_e(nm,8))},o.\u0275prov=Qe({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const im=new le("AppId",{providedIn:"root",factory:function om(){return`${Jg()}${Jg()}${Jg()}`}});function Jg(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const ge=new le("Platform Initializer"),zg=new le("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),wy=new le("appBootstrapListener"),Dy=new le("AnimationModuleType"),hc=new le("LocaleId",{providedIn:"root",factory:()=>od(hc,Rt.Optional|Rt.SkipSelf)||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ky(){return typeof $localize<"u"&&$localize.locale||ae}()}),Ay=new le("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"}),Iy=(()=>Promise.resolve(0))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qg(o){typeof Zone>"u"?Iy.then(()=>{o&&o.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class xn{constructor({enableLongStackTrace:s=!1,shouldCoalesceEventChangeDetection:a=!1,shouldCoalesceRunChangeDetection:l=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Wn(!1),this.onMicrotaskEmpty=new Wn(!1),this.onStable=new Wn(!1),this.onError=new Wn(!1),typeof Zone>"u")throw new mt(908,!1);Zone.assertZonePatched();const g=this;if(g._nesting=0,g._outer=g._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const d=Zone.AsyncStackTaggingZoneSpec;g._inner=g._inner.fork(new d("Angular"))}Zone.TaskTrackingZoneSpec&&(g._inner=g._inner.fork(new Zone.TaskTrackingZoneSpec)),s&&Zone.longStackTraceZoneSpec&&(g._inner=g._inner.fork(Zone.longStackTraceZoneSpec)),g.shouldCoalesceEventChangeDetection=!l&&a,g.shouldCoalesceRunChangeDetection=l,g.lastRequestAnimationFrameId=-1,g.nativeRequestAnimationFrame=function Ly(){let o=ie.requestAnimationFrame,s=ie.cancelAnimationFrame;if(typeof Zone<"u"&&o&&s){const a=o[Zone.__symbol__("OriginalDelegate")];a&&(o=a);const l=s[Zone.__symbol__("OriginalDelegate")];l&&(s=l)}return{nativeRequestAnimationFrame:o,nativeCancelAnimationFrame:s}}().nativeRequestAnimationFrame,function Zy(o){const s=()=>{!function Fy(o){o.isCheckStableRunning||-1!==o.lastRequestAnimationFrameId||(o.lastRequestAnimationFrameId=o.nativeRequestAnimationFrame.call(ie,()=>{o.fakeTopEventTask||(o.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{o.lastRequestAnimationFrameId=-1,Yg(o),o.isCheckStableRunning=!0,Gg(o),o.isCheckStableRunning=!1},void 0,()=>{},()=>{})),o.fakeTopEventTask.invoke()}),Yg(o))}(o)};o._inner=o._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(a,l,g,d,f,m)=>{try{return am(o),a.invokeTask(g,d,f,m)}finally{(o.shouldCoalesceEventChangeDetection&&"eventTask"===d.type||o.shouldCoalesceRunChangeDetection)&&s(),cm(o)}},onInvoke:(a,l,g,d,f,m,v)=>{try{return am(o),a.invoke(g,d,f,m,v)}finally{o.shouldCoalesceRunChangeDetection&&s(),cm(o)}},onHasTask:(a,l,g,d)=>{a.hasTask(g,d),l===g&&("microTask"==d.change?(o._hasPendingMicrotasks=d.microTask,Yg(o),Gg(o)):"macroTask"==d.change&&(o.hasPendingMacrotasks=d.macroTask))},onHandleError:(a,l,g,d)=>(a.handleError(g,d),o.runOutsideAngular(()=>o.onError.emit(d)),!1)})}(g)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!xn.isInAngularZone())throw new mt(909,!1)}static assertNotInAngularZone(){if(xn.isInAngularZone())throw new mt(909,!1)}run(s,a,l){return this._inner.run(s,a,l)}runTask(s,a,l,g){const d=this._inner,f=d.scheduleEventTask("NgZoneEvent: "+g,s,Ny,uc,uc);try{return d.runTask(f,a,l)}finally{d.cancelTask(f)}}runGuarded(s,a,l){return this._inner.runGuarded(s,a,l)}runOutsideAngular(s){return this._outer.run(s)}}const Ny={};function Gg(o){if(0==o._nesting&&!o.hasPendingMicrotasks&&!o.isStable)try{o._nesting++,o.onMicrotaskEmpty.emit(null)}finally{if(o._nesting--,!o.hasPendingMicrotasks)try{o.runOutsideAngular(()=>o.onStable.emit(null))}finally{o.isStable=!0}}}function Yg(o){o.hasPendingMicrotasks=!!(o._hasPendingMicrotasks||(o.shouldCoalesceEventChangeDetection||o.shouldCoalesceRunChangeDetection)&&-1!==o.lastRequestAnimationFrameId)}function am(o){o._nesting++,o.isStable&&(o.isStable=!1,o.onUnstable.emit(null))}function cm(o){o._nesting--,Gg(o)}class Ry{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Wn,this.onMicrotaskEmpty=new Wn,this.onStable=new Wn,this.onError=new Wn}run(s,a,l){return s.apply(a,l)}runGuarded(s,a,l){return s.apply(a,l)}runOutsideAngular(s){return s()}runTask(s,a,l,g){return s.apply(a,l)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lm=new le(""),gm=new le("");let $g,Vy=(()=>{class o{constructor(a,l,g){this._ngZone=a,this.registry=l,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,$g||(function jy(o){$g=o}(g),g.addToWindow(l)),this._watchAngularEvents(),a.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{xn.assertNotInAngularZone(),Qg(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Qg(()=>{for(;0!==this._callbacks.length;){let a=this._callbacks.pop();clearTimeout(a.timeoutId),a.doneCb(this._didWork)}this._didWork=!1});else{let a=this.getPendingTasks();this._callbacks=this._callbacks.filter(l=>!l.updateCb||!l.updateCb(a)||(clearTimeout(l.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(a=>({source:a.source,creationLocation:a.creationLocation,data:a.data})):[]}addCallback(a,l,g){let d=-1;l&&l>0&&(d=setTimeout(()=>{this._callbacks=this._callbacks.filter(f=>f.timeoutId!==d),a(this._didWork,this.getPendingTasks())},l)),this._callbacks.push({doneCb:a,timeoutId:d,updateCb:g})}whenStable(a,l,g){if(g&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(a,l,g),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(a){this.registry.registerApplication(a,this)}unregisterApplication(a){this.registry.unregisterApplication(a)}findProviders(a,l,g){return[]}}return o.\u0275fac=function(a){return new(a||o)(_e(xn),_e(um),_e(gm))},o.\u0275prov=Qe({token:o,factory:o.\u0275fac}),o})(),um=(()=>{class o{constructor(){this._applications=new Map}registerApplication(a,l){this._applications.set(a,l)}unregisterApplication(a){this._applications.delete(a)}unregisterAllApplications(){this._applications.clear()}getTestability(a){return this._applications.get(a)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(a,l=!0){return $g?.findTestabilityInTree(this,a,l)??null}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=Qe({token:o,factory:o.\u0275fac,providedIn:"platform"}),o})(),Vi=null;const dm=new le("AllowMultipleToken"),Kg=new le("PlatformDestroyListeners");function fm(o,s,a=[]){const l=`Platform: ${s}`,g=new le(l);return(d=[])=>{let f=Et();if(!f||f.injector.get(dm,!1)){const m=[...a,...d,{provide:g,useValue:!0}];o?o(m):function By(o){if(Vi&&!Vi.get(dm,!1))throw new mt(400,!1);Vi=o;const s=o.get(Ae);(function hm(o){const s=o.get(ge,null);s&&s.forEach(a=>a())})(o)}(function Le(o=[],s){return ai.create({name:s,providers:[{provide:fd,useValue:"platform"},{provide:Kg,useValue:new Set([()=>Vi=null])},...o]})}(m,l))}return function Jy(o){const s=Et();if(!s)throw new mt(401,!1);return s}()}}function Et(){return Vi?.get(Ae)??null}let Ae=(()=>{class o{constructor(a){this._injector=a,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(a,l){const g=function Ls(o,s){let a;return a="noop"===o?new Ry:("zone.js"===o?void 0:o)||new xn(s),a}(l?.ngZone,function ar(o){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!o||!o.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!o||!o.ngZoneRunCoalescing)||!1}}(l)),d=[{provide:xn,useValue:g}];return g.run(()=>{const f=ai.create({providers:d,parent:this.injector,name:a.moduleType.name}),m=a.create(f),v=m.injector.get(Ca,null);if(!v)throw new mt(402,!1);return g.runOutsideAngular(()=>{const y=g.onError.subscribe({next:P=>{v.handleError(P)}});m.onDestroy(()=>{fc(this._modules,m),y.unsubscribe()})}),function ln(o,s,a){try{const l=a();return $o(l)?l.catch(g=>{throw s.runOutsideAngular(()=>o.handleError(g)),g}):l}catch(l){throw s.runOutsideAngular(()=>o.handleError(l)),l}}(v,g,()=>{const y=m.injector.get(dc);return y.runInitializers(),y.donePromise.then(()=>(function Fi(o){bt(o,"Expected localeId to be defined"),"string"==typeof o&&(ic=o.toLowerCase().replace(/_/g,"-"))}(m.injector.get(hc,ae)||ae),this._moduleDoBootstrap(m),m))})})}bootstrapModule(a,l=[]){const g=te({},l);return function Uy(o,s,a){const l=new Tg(a);return Promise.resolve(l)}(0,0,a).then(d=>this.bootstrapModuleFactory(d,g))}_moduleDoBootstrap(a){const l=a.injector.get(pi);if(a._bootstrapComponents.length>0)a._bootstrapComponents.forEach(g=>l.bootstrap(g));else{if(!a.instance.ngDoBootstrap)throw new mt(403,!1);a.instance.ngDoBootstrap(l)}this._modules.push(a)}onDestroy(a){this._destroyListeners.push(a)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new mt(404,!1);this._modules.slice().forEach(l=>l.destroy()),this._destroyListeners.forEach(l=>l());const a=this._injector.get(Kg,null);a&&(a.forEach(l=>l()),a.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return o.\u0275fac=function(a){return new(a||o)(_e(ai))},o.\u0275prov=Qe({token:o,factory:o.\u0275fac,providedIn:"platform"}),o})();function te(o,s){return Array.isArray(s)?s.reduce(te,o):{...o,...s}}let pi=(()=>{class o{constructor(a,l,g){this._zone=a,this._injector=l,this._exceptionHandler=g,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const d=new J.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),f=new J.y(m=>{let v;this._zone.runOutsideAngular(()=>{v=this._zone.onStable.subscribe(()=>{xn.assertNotInAngularZone(),Qg(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const y=this._zone.onUnstable.subscribe(()=>{xn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{v.unsubscribe(),y.unsubscribe()}});this.isStable=(0,$.T)(d,f.pipe(function E(o={}){const{connector:s=(()=>new t.x),resetOnError:a=!0,resetOnComplete:l=!0,resetOnRefCountZero:g=!0}=o;return d=>{let f,m,v,y=0,P=!1,D=!1;const I=()=>{m?.unsubscribe(),m=void 0},z=()=>{I(),f=v=void 0,P=D=!1},et=()=>{const dt=f;z(),dt?.unsubscribe()};return(0,x.e)((dt,pt)=>{y++,!D&&!P&&I();const Ct=v=v??s();pt.add(()=>{y--,0===y&&!D&&!P&&(m=F(et,g))}),Ct.subscribe(pt),!f&&y>0&&(f=new rt.Hp({next:Dt=>Ct.next(Dt),error:Dt=>{D=!0,I(),m=F(z,a,Dt),Ct.error(Dt)},complete:()=>{P=!0,I(),m=F(z,l),Ct.complete()}}),(0,H.Xf)(dt).subscribe(f))})(d)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(a,l){const g=a instanceof X_;if(!this._injector.get(dc).done)throw!g&&function ni(o){const s=oe(o)||Be(o)||Ne(o);return null!==s&&s.standalone}(a),new mt(405,false);let f;f=g?a:this._injector.get(_a).resolveComponentFactory(a),this.componentTypes.push(f.componentType);const m=function Hy(o){return o.isBoundToModule}(f)?void 0:this._injector.get(er),y=f.create(ai.NULL,[],l||f.selector,m),P=y.location.nativeElement,D=y.injector.get(lm,null);return D?.registerApplication(P),y.onDestroy(()=>{this.detachView(y.hostView),fc(this.components,y),D?.unregisterApplication(P)}),this._loadComponent(y),y}tick(){if(this._runningTick)throw new mt(101,!1);try{this._runningTick=!0;for(let a of this._views)a.detectChanges()}catch(a){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(a))}finally{this._runningTick=!1}}attachView(a){const l=a;this._views.push(l),l.attachToAppRef(this)}detachView(a){const l=a;fc(this._views,l),l.detachFromAppRef()}_loadComponent(a){this.attachView(a.hostView),this.tick(),this.components.push(a),this._injector.get(wy,[]).concat(this._bootstrapListeners).forEach(g=>g(a))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(a=>a()),this._views.slice().forEach(a=>a.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(a){return this._destroyListeners.push(a),()=>fc(this._destroyListeners,a)}destroy(){if(this._destroyed)throw new mt(406,!1);const a=this._injector;a.destroy&&!a.destroyed&&a.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return o.\u0275fac=function(a){return new(a||o)(_e(xn),_e(jr),_e(Ca))},o.\u0275prov=Qe({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function fc(o,s){const a=o.indexOf(s);a>-1&&o.splice(a,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let pm=!0;function Qy(){pm=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Gy=(()=>{class o{}return o.__NG_ELEMENT_ID__=Yy,o})();function Yy(o){return function $y(o,s,a){if(Bs(o)&&!a){const l=dn(o.index,s);return new De(l,l)}return 47&o.type?new De(s[16],s):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ze(),ut(),16==(16&o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fs{constructor(){}supports(s){return Ii(s)}create(s){return new r1(s)}}const o1=(o,s)=>s;class r1{constructor(s){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=s||o1}forEachItem(s){let a;for(a=this._itHead;null!==a;a=a._next)s(a)}forEachOperation(s){let a=this._itHead,l=this._removalsHead,g=0,d=null;for(;a||l;){const f=!l||a&&a.currentIndex<Om(l,g,d)?a:l,m=Om(f,g,d),v=f.currentIndex;if(f===l)g--,l=l._nextRemoved;else if(a=a._next,null==f.previousIndex)g++;else{d||(d=[]);const y=m-g,P=v-g;if(y!=P){for(let I=0;I<y;I++){const z=I<d.length?d[I]:d[I]=0,et=z+I;P<=et&&et<y&&(d[I]=z+1)}d[f.previousIndex]=P-y}}m!==v&&s(f,m,v)}}forEachPreviousItem(s){let a;for(a=this._previousItHead;null!==a;a=a._nextPrevious)s(a)}forEachAddedItem(s){let a;for(a=this._additionsHead;null!==a;a=a._nextAdded)s(a)}forEachMovedItem(s){let a;for(a=this._movesHead;null!==a;a=a._nextMoved)s(a)}forEachRemovedItem(s){let a;for(a=this._removalsHead;null!==a;a=a._nextRemoved)s(a)}forEachIdentityChange(s){let a;for(a=this._identityChangesHead;null!==a;a=a._nextIdentityChange)s(a)}diff(s){if(null==s&&(s=[]),!Ii(s))throw new mt(900,!1);return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let g,d,f,a=this._itHead,l=!1;if(Array.isArray(s)){this.length=s.length;for(let m=0;m<this.length;m++)d=s[m],f=this._trackByFn(m,d),null!==a&&Object.is(a.trackById,f)?(l&&(a=this._verifyReinsertion(a,d,f,m)),Object.is(a.item,d)||this._addIdentityChange(a,d)):(a=this._mismatch(a,d,f,m),l=!0),a=a._next}else g=0,function Gh(o,s){if(Array.isArray(o))for(let a=0;a<o.length;a++)s(o[a]);else{const a=o[Si()]();let l;for(;!(l=a.next()).done;)s(l.value)}}(s,m=>{f=this._trackByFn(g,m),null!==a&&Object.is(a.trackById,f)?(l&&(a=this._verifyReinsertion(a,m,f,g)),Object.is(a.item,m)||this._addIdentityChange(a,m)):(a=this._mismatch(a,m,f,g),l=!0),a=a._next,g++}),this.length=g;return this._truncate(a),this.collection=s,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let s;for(s=this._previousItHead=this._itHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._additionsHead;null!==s;s=s._nextAdded)s.previousIndex=s.currentIndex;for(this._additionsHead=this._additionsTail=null,s=this._movesHead;null!==s;s=s._nextMoved)s.previousIndex=s.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(s,a,l,g){let d;return null===s?d=this._itTail:(d=s._prev,this._remove(s)),null!==(s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(l,null))?(Object.is(s.item,a)||this._addIdentityChange(s,a),this._reinsertAfter(s,d,g)):null!==(s=null===this._linkedRecords?null:this._linkedRecords.get(l,g))?(Object.is(s.item,a)||this._addIdentityChange(s,a),this._moveAfter(s,d,g)):s=this._addAfter(new s1(a,l),d,g),s}_verifyReinsertion(s,a,l,g){let d=null===this._unlinkedRecords?null:this._unlinkedRecords.get(l,null);return null!==d?s=this._reinsertAfter(d,s._prev,g):s.currentIndex!=g&&(s.currentIndex=g,this._addToMoves(s,g)),s}_truncate(s){for(;null!==s;){const a=s._next;this._addToRemovals(this._unlink(s)),s=a}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(s,a,l){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(s);const g=s._prevRemoved,d=s._nextRemoved;return null===g?this._removalsHead=d:g._nextRemoved=d,null===d?this._removalsTail=g:d._prevRemoved=g,this._insertAfter(s,a,l),this._addToMoves(s,l),s}_moveAfter(s,a,l){return this._unlink(s),this._insertAfter(s,a,l),this._addToMoves(s,l),s}_addAfter(s,a,l){return this._insertAfter(s,a,l),this._additionsTail=null===this._additionsTail?this._additionsHead=s:this._additionsTail._nextAdded=s,s}_insertAfter(s,a,l){const g=null===a?this._itHead:a._next;return s._next=g,s._prev=a,null===g?this._itTail=s:g._prev=s,null===a?this._itHead=s:a._next=s,null===this._linkedRecords&&(this._linkedRecords=new bm),this._linkedRecords.put(s),s.currentIndex=l,s}_remove(s){return this._addToRemovals(this._unlink(s))}_unlink(s){null!==this._linkedRecords&&this._linkedRecords.remove(s);const a=s._prev,l=s._next;return null===a?this._itHead=l:a._next=l,null===l?this._itTail=a:l._prev=a,s}_addToMoves(s,a){return s.previousIndex===a||(this._movesTail=null===this._movesTail?this._movesHead=s:this._movesTail._nextMoved=s),s}_addToRemovals(s){return null===this._unlinkedRecords&&(this._unlinkedRecords=new bm),this._unlinkedRecords.put(s),s.currentIndex=null,s._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=s,s._prevRemoved=null):(s._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=s),s}_addIdentityChange(s,a){return s.item=a,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=s:this._identityChangesTail._nextIdentityChange=s,s}}class s1{constructor(s,a){this.item=s,this.trackById=a,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class ym{constructor(){this._head=null,this._tail=null}add(s){null===this._head?(this._head=this._tail=s,s._nextDup=null,s._prevDup=null):(this._tail._nextDup=s,s._prevDup=this._tail,s._nextDup=null,this._tail=s)}get(s,a){let l;for(l=this._head;null!==l;l=l._nextDup)if((null===a||a<=l.currentIndex)&&Object.is(l.trackById,s))return l;return null}remove(s){const a=s._prevDup,l=s._nextDup;return null===a?this._head=l:a._nextDup=l,null===l?this._tail=a:l._prevDup=a,null===this._head}}class bm{constructor(){this.map=new Map}put(s){const a=s.trackById;let l=this.map.get(a);l||(l=new ym,this.map.set(a,l)),l.add(s)}get(s,a){const g=this.map.get(s);return g?g.get(s,a):null}remove(s){const a=s.trackById;return this.map.get(a).remove(s)&&this.map.delete(a),s}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Om(o,s,a){const l=o.previousIndex;if(null===l)return l;let g=0;return a&&l<a.length&&(g=a[l]),l+s+g
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Pm{constructor(){}supports(s){return s instanceof Map||Ua(s)}create(){return new a1}}class a1{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(s){let a;for(a=this._mapHead;null!==a;a=a._next)s(a)}forEachPreviousItem(s){let a;for(a=this._previousMapHead;null!==a;a=a._nextPrevious)s(a)}forEachChangedItem(s){let a;for(a=this._changesHead;null!==a;a=a._nextChanged)s(a)}forEachAddedItem(s){let a;for(a=this._additionsHead;null!==a;a=a._nextAdded)s(a)}forEachRemovedItem(s){let a;for(a=this._removalsHead;null!==a;a=a._nextRemoved)s(a)}diff(s){if(s){if(!(s instanceof Map||Ua(s)))throw new mt(900,!1)}else s=new Map;return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let a=this._mapHead;if(this._appendAfter=null,this._forEach(s,(l,g)=>{if(a&&a.key===g)this._maybeAddToChanges(a,l),this._appendAfter=a,a=a._next;else{const d=this._getOrCreateRecordForKey(g,l);a=this._insertBeforeOrAppend(a,d)}}),a){a._prev&&(a._prev._next=null),this._removalsHead=a;for(let l=a;null!==l;l=l._nextRemoved)l===this._mapHead&&(this._mapHead=null),this._records.delete(l.key),l._nextRemoved=l._next,l.previousValue=l.currentValue,l.currentValue=null,l._prev=null,l._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(s,a){if(s){const l=s._prev;return a._next=s,a._prev=l,s._prev=a,l&&(l._next=a),s===this._mapHead&&(this._mapHead=a),this._appendAfter=s,s}return this._appendAfter?(this._appendAfter._next=a,a._prev=this._appendAfter):this._mapHead=a,this._appendAfter=a,null}_getOrCreateRecordForKey(s,a){if(this._records.has(s)){const g=this._records.get(s);this._maybeAddToChanges(g,a);const d=g._prev,f=g._next;return d&&(d._next=f),f&&(f._prev=d),g._next=null,g._prev=null,g}const l=new c1(s);return this._records.set(s,l),l.currentValue=a,this._addToAdditions(l),l}_reset(){if(this.isDirty){let s;for(this._previousMapHead=this._mapHead,s=this._previousMapHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._changesHead;null!==s;s=s._nextChanged)s.previousValue=s.currentValue;for(s=this._additionsHead;null!=s;s=s._nextAdded)s.previousValue=s.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(s,a){Object.is(a,s.currentValue)||(s.previousValue=s.currentValue,s.currentValue=a,this._addToChanges(s))}_addToAdditions(s){null===this._additionsHead?this._additionsHead=this._additionsTail=s:(this._additionsTail._nextAdded=s,this._additionsTail=s)}_addToChanges(s){null===this._changesHead?this._changesHead=this._changesTail=s:(this._changesTail._nextChanged=s,this._changesTail=s)}_forEach(s,a){s instanceof Map?s.forEach(a):Object.keys(s).forEach(l=>a(s[l],l))}}class c1{constructor(s){this.key=s,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xm(){return new nu([new Fs])}let nu=(()=>{class o{constructor(a){this.factories=a}static create(a,l){if(null!=l){const g=l.factories.slice();a=a.concat(g)}return new o(a)}static extend(a){return{provide:o,useFactory:l=>o.create(a,l||xm()),deps:[[o,new Oi,new la]]}}find(a){const l=this.factories.find(g=>g.supports(a));if(null!=l)return l;throw new mt(901,!1)}}return o.\u0275prov=Qe({token:o,providedIn:"root",factory:xm}),o})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wm(){return new iu([new Pm])}let iu=(()=>{class o{constructor(a){this.factories=a}static create(a,l){if(l){const g=l.factories.slice();a=a.concat(g)}return new o(a)}static extend(a){return{provide:o,useFactory:l=>o.create(a,l||wm()),deps:[[o,new Oi,new la]]}}find(a){const l=this.factories.find(g=>g.supports(a));if(l)return l;throw new mt(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return o.\u0275prov=Qe({token:o,providedIn:"root",factory:wm}),o})();const _c=fm(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let u1=(()=>{class o{constructor(a){}}return o.\u0275fac=function(a){return new(a||o)(_e(pi))},o.\u0275mod=Dc({type:o}),o.\u0275inj=Mc({}),o})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dm(o){return"boolean"==typeof o?o:null!=o&&"false"!==o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,5861:(yt,it,w)=>{function t(J,$,H,rt,x,E,F){try{var k=J[E](F),N=k.value}catch(V){return void H(V)}k.done?$(N):Promise.resolve(N).then(rt,x)}function R(J){return function(){var $=this,H=arguments;return new Promise(function(rt,x){var E=J.apply($,H);function F(N){t(E,rt,x,F,k,"next",N)}function k(N){t(E,rt,x,F,k,"throw",N)}F(void 0)})}}w.d(it,{Z:()=>R})}},yt=>{yt(yt.s=8817)}]);