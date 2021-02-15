//=============================================================================
// Lansiny Engine Plugins - Game DemonTower - Enemy Manual
// LEP_Game_DT_EnemyManual.js
//=============================================================================

/*:
 * @target MV
 * @plugindesc LEP游戏系列 魔塔 怪物图鉴
 * @author lansiny
 *
 */
;(function () {
  let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'EnemyManual') {
      switch (args[0]) {
        case 'open':
          SceneManager.push(Scene_EnemyManual)
          break
      }
    }
  }

  function Scene_EnemyManual() {
    this.initialize.apply(this, arguments)
  }

  Scene_EnemyManual.prototype = Object.create(Scene_MenuBase.prototype)
  Scene_EnemyManual.prototype.constructor = Scene_EnemyManual

  Scene_EnemyManual.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this)
  }

  Scene_EnemyManual.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this)
    this._ManualWindow = new Window_EnemyManual(0, 0)
    this._ManualWindow.setHandler('cancel', this.popScene.bind(this))
    this.addWindow(this._ManualWindow)
  }

  function Window_EnemyManual() {
    this.initialize.apply(this, arguments)
  }

  Window_EnemyManual.prototype = Object.create(Window_MenuStatus.prototype)
  Window_EnemyManual.prototype.constructor = Window_EnemyManual

  Window_EnemyManual.prototype.initialize = function (x, y) {
    let width = this.windowWidth()
    let height = this.windowHeight()
    Window_Selectable.prototype.initialize.call(this, x, y, width, height)
    this._formationMode = false
    this._pendingIndex = -1
    this.refresh()
  }

  Window_EnemyManual.prototype.maxItems = function () {
    return this._list ? this._list.length : 0
  }

  Window_MenuStatus.prototype.numVisibleRows = function () {
    return 3
  }
  Window_EnemyManual.prototype.itemHeight = function () {
    return this.lineHeight() * 2 + 10
  }

  Window_EnemyManual.prototype.refresh = function () {
    this._list = []
    let list = []
    let eventList = {}
    for (let i = 1; i < $gameMap._events.length; i++) {
      if ($gameMap._events[i]) {
        let eventStatus = $gameMap._events[i]
        let eventData = $dataMap.events[eventStatus._eventId]
        if (eventData.meta.enemy && eventStatus._pageIndex === 0) {
          eventList[eventData.name] = {
            data: eventData,
            status: eventStatus
          }
          list.push(eventData.name)
        }
      } else continue
    }
    let enemyList = Array.from(new Set(list))
    for (let i = 0; i < enemyList.length; i++) {
      let enemy = {
        param: $enemies[enemyList[i]],
        event: eventList[enemyList[i]],
        damage: battleSimulation($enemies[enemyList[i]].name)
      }
      this._list.push(enemy)
    }
    this._list.sort(compare())
    this.createContents()
    this.drawAllItems()
  }

  function compare() {
    return function (a, b) {
      var value1 = a['damage']
      var value2 = b['damage']
      if (value1 === '???' && value2 !== '???') return value1 - value2
      else if (value1 !== '???' && value2 === '???') return value1 - value2
      else if (value1 === '???' && value2 === '???') {
        var value1 = a['param']['hp']
        var value2 = b['param']['hp']
        return value1 - value2
      }
      return value1 - value2
    }
  }

  Window_EnemyManual.prototype.drawItem = function (index) {
    if (this._list[index] !== null) {
      let enemy = this._list[index]
      let rect = this.itemRectForText(index)
      let lineHeight = this.lineHeight()
      let y = rect.y
      let x = rect.x

      let imageInfo = enemy.event.data.pages[0].image
      let bitmap = ImageManager.loadCharacter(imageInfo.characterName)
      let pw = 48
      let ph = 48

      let sx = imageInfo.characterIndex * 144 + 48
      let sy = (imageInfo.direction / 2) * 48 - 48
      this.contents.blt(bitmap, sx, sy, pw, ph, (x + 140) / 2 - 24, y + 30)

      this.contents.fontSize = 18
      this.changeTextColor(this.normalColor())
      this.drawText(enemy.param.name, x, y, 140, 'center')
      this.contents.fontSize = 20

      let fontWidth = 28

      this.changeTextColor(this.systemColor())
      this.drawText('生命值', x + 140 + 10, y, fontWidth * 3)
      this.drawText('攻击', x + 140 + fontWidth * 7 + 20, y, fontWidth * 2)
      this.drawText('防御', x + 140 + fontWidth * 12 + 30, y, fontWidth * 2)
      this.drawText('经验', x + 140 + fontWidth * 17 + 40, y, fontWidth * 2)
      this.drawText('金币', x + 140 + fontWidth * 21 + 50, y, fontWidth * 2)
      this.drawText('伤害值', x + 140 + 10, y + lineHeight, fontWidth * 3)
      this.drawText(
        '特征',
        x + 140 + fontWidth * 7 + 20,
        y + lineHeight,
        fontWidth * 2
      )
      this.changeTextColor(this.normalColor())
      this.drawText(enemy.param.hp, 140 + fontWidth * 3 + 10, y, fontWidth * 4)
      this.drawText(enemy.param.atk, 140 + fontWidth * 9 + 20, y, fontWidth * 3)
      this.drawText(
        enemy.param.def,
        140 + fontWidth * 14 + 30,
        y,
        fontWidth * 3
      )
      this.drawText(
        enemy.param.exp,
        140 + fontWidth * 19 + 40,
        y,
        fontWidth * 3
      )
      this.drawText(
        enemy.param.gold,
        140 + fontWidth * 23 + 50,
        y,
        fontWidth * 3
      )
      this.drawText(
        enemy.damage,
        140 + fontWidth * 3 + 10,
        y + lineHeight,
        fontWidth * 4
      )
      this.drawText(
        `${enemy.param.type}系 ${enemy.param.ability}`,
        x + 140 + fontWidth * 9 + 12,
        y + lineHeight,
        this.width - (x + 140 + fontWidth * 9 + 20)
      )
    }
  }

  Scene_Menu.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this)
    this.createCommandWindow()
    this.createGoldWindow()
    this.createStatusWindow()

    this._ManualWindow = new Window_EnemyManual(this._commandWindow.width, 0)
    this.addWindow(this._ManualWindow)
  }

  Scene_Menu.prototype.start = function () {
    Scene_MenuBase.prototype.start.call(this)
    this._ManualWindow.refresh()
  }

  //创建命令窗口
  Scene_Menu.prototype.createCommandWindow = function () {
    this._commandWindow = new Window_MenuCommand(0, 0)
    this._commandWindow.setHandler('item', this.commandItem.bind(this))
    this._commandWindow.setHandler('skill', this.commandSkill.bind(this))
    this._commandWindow.setHandler('equip', this.commandEquip.bind(this))
    this._commandWindow.setHandler('status', this.commandStatus.bind(this))
    this._commandWindow.setHandler(
      'formation',
      this.commandFormation.bind(this)
    )
    this._commandWindow.setHandler('options', this.commandOptions.bind(this))
    this._commandWindow.setHandler('save', this.commandSave.bind(this))
    this._commandWindow.setHandler('gameEnd', this.commandGameEnd.bind(this))
    this._commandWindow.setHandler('cancel', this.popScene.bind(this))
    this.addWindow(this._commandWindow)
  }

  Scene_Menu.prototype.commandSkill = function () {
    SceneManager.push(Scene_Skill)
  }
  Scene_Menu.prototype.commandEquip = function () {
    SceneManager.push(Scene_Equip)
  }
  Scene_Menu.prototype.commandStatus = function () {
    SceneManager.push(Scene_Status)
  }
})()