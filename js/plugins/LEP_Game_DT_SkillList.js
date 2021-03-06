/*
 * @Description:
 * @Version: 1.0
 * @Autor: Lansiny
 * @LastEditors: Lansiny
 * @Date: 2021-01-24 16:56:00
 * @LastEditTime: 2021-03-05 21:02:14
 */
//=============================================================================
// Lansiny Engine Plugins - Game DemonTower - SkillList
// LEP_Game_DT_SkillList.js
//=============================================================================

/*:
 * @target MV
 * @plugindesc LEP游戏系列 魔塔 技能列表
 * @author lansiny
 *
 */

window.$skill = {
  // a 是 发起者
  beforeBattle: {
    史莱姆冲击: function (a, b) {
      return {
        a,
        b,
        damageReceivedByA: 0,
        damageReceivedByB: a.atk * 10
      }
    }
  },

  // a 是 攻击者
  attack: {
    普通攻击: function (a, b) {
      let damage = a.atk - b.def <= 0 ? 0 : a.atk - b.def
      return damage
    },
    魔法攻击: function (a, b) {
      let damage = a.atk
      return damage
    }
  },
  // a 是 攻击者， b是被攻击者, damage为a对b即将造成的伤害，处理后返回
  defense: {
    无防御: function (a, b, damage) {
      return {
        a,
        b,
        damage
      }
    }
  },
  // a 是 发起者, damage必定是b受到的伤害
  afterBattle: {
    '': function (a, b) {
      return {
        a,
        b,
        damage: 0
      }
    }
  }
}
