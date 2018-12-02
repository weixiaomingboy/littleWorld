// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        level:1,
        //生命值
        healthPoint:0,
        //精力
        spirit:0,
        //饱食度
        feedAgree:0,
        //移动速度
        speed:0,
        //攻击力
        attack:0,
        //佩戴武器类型
        weapon:0,
        //回避率
        restore:0,
        //防御力
        defense:0,
        //掌握的秘籍数量
        abilitiesCount:0
    },
});
