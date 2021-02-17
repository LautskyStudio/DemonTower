// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"LEP_Game_DT_ExpList","status":true,"description":"LEP游戏系列 魔塔 升级所需经验列表","parameters":{}},
{"name":"LEP_Game_DT_ItemList","status":true,"description":"LEP游戏系列 魔塔 道具属性列表","parameters":{}},
{"name":"LEP_Game_DT_SkillList","status":true,"description":"LEP游戏系列 魔塔 技能列表","parameters":{}},
{"name":"LEP_Game_DT_Enemies","status":true,"description":"LEP游戏系列 魔塔 敌人参数列表","parameters":{}},
{"name":"--------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1200","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"999999999999","Gold Font Size":"20","Gold Icon":"330","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99999999","Actor MaxHP":"999999999999999","Actor MaxMP":"9999","Actor Parameter":"999999999999","Enemy MaxHP":"999999999999999","Enemy MaxMP":"9999","Enemy Parameter":"999999999999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"720","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"24","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 1","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_X_ExtMesPack1","status":true,"description":"v1.12 (Requires YEP_MessageCore.js) Letter Sounds, NameBox\nBackground Types, Choice Control, and more!","parameters":{"---Letter Sounds---":"","Enable Sound":"true","Sound Name":"Cursor1","Sound Volume":"50","Sound Pitch":"100","Pitch Variance":"10","Sound Pan":"0","Pan Variance":"10","Sound Interval":"2","Reset Sounds":"false","---Message Anchor---":"","Default X":"center","Default Y":"bottom","Auto Row Full Face":"false","---Message Choices---":"","Max Rows":"6","Choice 1 Show Switch":"0","Choice 2 Show Switch":"0","Choice 3 Show Switch":"0","Choice 4 Show Switch":"0","Choice 5 Show Switch":"0","Choice 6 Show Switch":"0","Choice 7 Show Switch":"0","Choice 8 Show Switch":"0","Choice 9 Show Switch":"0","Choice 10 Show Switch":"0","Choice 11 Show Switch":"0","Choice 12 Show Switch":"0","Choice 13 Show Switch":"0","Choice 14 Show Switch":"0","Choice 15 Show Switch":"0","Choice 16 Show Switch":"0","Choice 17 Show Switch":"0","Choice 18 Show Switch":"0","Choice 19 Show Switch":"0","Choice 20 Show Switch":"0","Choice 1 On Switch":"0","Choice 2 On Switch":"0","Choice 3 On Switch":"0","Choice 4 On Switch":"0","Choice 5 On Switch":"0","Choice 6 On Switch":"0","Choice 7 On Switch":"0","Choice 8 On Switch":"0","Choice 9 On Switch":"0","Choice 10 On Switch":"0","Choice 11 On Switch":"0","Choice 12 On Switch":"0","Choice 13 On Switch":"0","Choice 14 On Switch":"0","Choice 15 On Switch":"0","Choice 16 On Switch":"0","Choice 17 On Switch":"0","Choice 18 On Switch":"0","Choice 19 On Switch":"0","Choice 20 On Switch":"0"}},
{"name":"YEP_X_ExtMesPack2","status":true,"description":"v1.00 (Requires YEP_MessageCore.js) Adds text codes to display\nvarious game data information for messages.","parameters":{"---Quantity Text Codes---":"","TextCode QI":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar item = $dataItems[x];\\nif (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {\\n  var quantity = $gameParty.numIndependentItems(item);\\n} else {\\n  var quantity = $gameParty.numItems(item);\\n}\\ntext = this.groupDigits(quantity);\"","TextCode QW":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar weapon = $dataWeapons[x];\\nif (Imported.YEP_ItemCore && DataManager.isIndependent(weapon)) {\\n  var quantity = $gameParty.numIndependentItems(weapon);\\n} else {\\n  var quantity = $gameParty.numItems(weapon);\\n}\\ntext = this.groupDigits(quantity);\"","TextCode QA":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar armor = $dataArmors[x];\\nif (Imported.YEP_ItemCore && DataManager.isIndependent(armor)) {\\n  var quantity = $gameParty.numIndependentItems(armor);\\n} else {\\n  var quantity = $gameParty.numItems(armor);\\n}\\ntext = this.groupDigits(quantity);\"","---Compare Text Codes---":"","TextCode Compare":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 24;\\n} else if (x < y) {\\n  var colorId = 25;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare1":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 2;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare2":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 14;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare3":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 3;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare4":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 4;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare5":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 7;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare6":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 25;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare7":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 13;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare8":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 9;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare9":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nvar colorId = 0\\n\\nif (x === '???' || x >= y) {\\n  colorId = 18\\n} else if (x < y && x >= y * 2 / 3 ) {\\n  colorId = 2\\n} else if (x >= y / 3 && x < y * 2 / 3 ) {\\n  colorId = 14\\n} else if (x >= y / 5 && x < y / 3 ) {\\n  colorId = 6\\n} else if (x >= 0 && x < y / 5 ) {\\n  colorId = 3\\n}\\n\\ntext = '\\\\x1bc[' + colorId + ']';\"","---Case Text Codes---":"","TextCode CaseSwitch":"\"// Variables:\\n//   s - The switch ID (number) to be checked.\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\ntext = (s) ? x : y;\"","TextCode CaseEval":"\"// Variables:\\n//   e - The eval code to be checked.\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\ntext = (e) ? x : y;\"","---Actor Param Codes---":"","---Actor Params---":"","TextCode ALvl":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.level;\\ntext = this.groupDigits(value);\"","TextCode AMhp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mhp;\\ntext = this.groupDigits(value);\"","TextCode AHp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hp;\\ntext = this.groupDigits(value);\"","TextCode AHp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMmp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mmp;\\ntext = this.groupDigits(value);\"","TextCode AMp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mp;\\ntext = this.groupDigits(value);\"","TextCode AMp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMtp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.maxTp();\\ntext = this.groupDigits(value);\"","TextCode ATp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tp;\\ntext = this.groupDigits(value);\"","TextCode ATp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode AAtk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.atk;\\ntext = this.groupDigits(value);\"","TextCode ADef":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.def;\\ntext = this.groupDigits(value);\"","TextCode AMat":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mat;\\ntext = this.groupDigits(value);\"","TextCode AMdf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mdf;\\ntext = this.groupDigits(value);\"","TextCode AAgi":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.agi;\\ntext = this.groupDigits(value);\"","TextCode ALuk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.luk;\\ntext = this.groupDigits(value);\"","---Actor XParams---":"","TextCode AHit":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hit;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AEva":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.eva;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ACri":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.cri;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ACev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.cev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMrf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mrf;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ACnt":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.cnt;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AHrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ATrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.trg;\\ntext = Math.floor(value * 100) + '%';\"","---Actor SParams---":"","TextCode ATgr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tgr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AGrd":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.grd;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ARec":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.rec;\\ntext = Math.floor(value * 100) + '%';\"","TextCode APha":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.pha;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ATcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode APdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.pdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AFdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.fdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AExr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.exr;\\ntext = Math.floor(value * 100) + '%';\"","---Enemy Param Codes---":"","---Enemy Params---":"","TextCode ELvl":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nif (Imported.YEP_EnemyLevels) {\\n  var enemy = $gameTroop.members()[x];\\n  var value = enemy.level;\\n  text = this.groupDigits(value);\\n} else {\\n  text = $gameParty.highestLevel();\\n}\"","TextCode EMhp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mhp;\\ntext = this.groupDigits(value);\"","TextCode EHp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hp;\\ntext = this.groupDigits(value);\"","TextCode EHp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMmp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mmp;\\ntext = this.groupDigits(value);\"","TextCode EMp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mp;\\ntext = this.groupDigits(value);\"","TextCode EMp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMtp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.maxTp();\\ntext = this.groupDigits(value);\"","TextCode ETp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tp;\\ntext = this.groupDigits(value);\"","TextCode ETp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode EAtk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.atk;\\ntext = this.groupDigits(value);\"","TextCode EDef":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.def;\\ntext = this.groupDigits(value);\"","TextCode EMat":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mat;\\ntext = this.groupDigits(value);\"","TextCode EMdf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mdf;\\ntext = this.groupDigits(value);\"","TextCode EAgi":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.agi;\\ntext = this.groupDigits(value);\"","TextCode ELuk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.luk;\\ntext = this.groupDigits(value);\"","TextCode EExp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.exp();\\ntext = this.groupDigits(value);\"","TextCode EGold":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.gold();\\ntext = this.groupDigits(value);\"","---Enemy XParams---":"","TextCode EHit":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hit;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EEva":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.eva;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ECri":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.cri;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ECev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.cev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMrf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mrf;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ECnt":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.cnt;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EHrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ETrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.trg;\\ntext = Math.floor(value * 100) + '%';\"","---Enemy SParams---":"","TextCode ETgr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tgr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EGrd":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.grd;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ERec":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.rec;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EPha":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.pha;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ETcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EPdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.pdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EFdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.fdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EExr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.exr;\\ntext = Math.floor(value * 100) + '%';\""}},
{"name":"YEP_X_MessageEvalText","status":true,"description":"v1.00 (Req YEP_MessageCore.js) Adds \\evalText<<code>> to the text\ncode list so that you can run JavaScript code and display it as text.","parameters":{}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"16","X Buffer":"0","Y Buffer":"86","Battle Transition":"false"}},
{"name":"YEP_ButtonCommonEvents","status":true,"description":"v1.02 On the field map, call common events when certain\nbuttons are pressed on the keyboard.","parameters":{"---Top Row---":"","Key ~":"0","Key 1":"0","Key 2":"0","Key 3":"0","Key 4":"0","Key 5":"0","Key 6":"0","Key 7":"0","Key 8":"0","Key 9":"0","Key 0":"0","Key -":"0","Key =":"0","---2nd Row---":"","Key Q (PageUp)":"0","Key W (PageDown)":"0","Key E":"0","Key R":"0","Key T":"0","Key Y":"0","Key U":"0","Key I":"0","Key O":"3","Key P":"1","Key [":"0","Key ]":"0","Key \\":"0","---3rd Row---":"","Key A":"0","Key S":"0","Key D":"0","Key F":"0","Key G":"0","Key H":"0","Key J":"0","Key K":"0","Key L":"0","Key ;":"0","Key \"":"0","Key Enter (OK)":"0","---4th Row---":"","Key Shift (Dash)":"0","Key Z (OK)":"0","Key X (Cancel)":"0","Key C":"0","Key V":"0","Key B":"0","Key N":"0","Key M":"0","Key ,":"0","Key .":"0","Key /":"0","---Misc---":"","Key Space (OK)":"0","Key Left (Left)":"0","Key Up (Up)":"0","Key Right (Right)":"0","Key Down (Down)":"0","Key Insert (Cancel)":"0","Key Delete":"0","Key Home":"0","Key End":"0","Key Page Up (PageUp)":"0","Key Page Down (PageDown)":"0","---NumPad---":"","Key NumPad 0 (Cancel)":"0","Key NumPad 1":"0","Key NumPad 2 (Down)":"0","Key NumPad 3":"0","Key NumPad 4 (Left)":"0","Key NumPad 5":"0","Key NumPad 6 (Right)":"0","Key NumPad 7":"0","Key NumPad 8 (Up)":"0","Key NumPad 9":"0","Key NumPad .":"0","Key NumPad +":"0","Key NumPad -":"0","Key NumPad *":"0","Key NumPad /":"0"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"64","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"读档","Save Command":"存档","Delete Command":"删除","---Help Window---":"","Select Help":"请选择一个档案。","Load Help":"从存档加载数据。","Save Help":"保存当前游戏进度。","Delete Help":"删除该存档","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"创建新的存档。","Empty Game Text":"空","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"playtime, save count, location, gold count","Data Column 2":"variable 5, variable 3, variable 4, variable 6","Data Column 3":"item 2, item 3, item 4, item 5","Data Column 4":"","---Vocabulary---":"","Map Location":"当前位置:","Playtime":"游戏时间:","Save Count":"总存档数:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"是否要加载此存档？","Save Confirmation":"true","Save Text":"是否要覆盖此存档？","Delete Confirmation":"true","Delete Text":"是否要删除此存档？","Confirm Yes":"是","Confirm No":"否"}},
{"name":"--------------------","status":false,"description":"","parameters":{}},
{"name":"LEP_Game_DT_Main","status":true,"description":"LEP系列游戏 魔塔 主要逻辑函数","parameters":{}},
{"name":"LEP_Game_DT_MapWindow","status":true,"description":"LEP游戏系列 魔塔 地图显示角色信息","parameters":{}},
{"name":"LEP_Game_DT_EnemyManual","status":true,"description":"LEP游戏系列 魔塔 怪物图鉴","parameters":{}}
];
