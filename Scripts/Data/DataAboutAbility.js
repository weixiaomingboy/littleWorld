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
    properties: {},
    getAllAbilities:function () {
        return cc.wxm.baseData.ability;
    },

    getAbilityByName:function (abilityName) {
        var abilities = this.getAllAbilities();
        for (var i = 0; i < abilities.length; i++){
            var ability = abilities[i];
            if (ability.name == abilityName){
                return ability;
            }
        }
        return false;
    },

    getAbilityByRare:function (Rare) {
        var abilities = this.getAllAbilities();
        for (var i = 0; i < abilities.length; i++){
            var ability = abilities[i];
            if (ability.rare == Rare){
                return ability;
            }
        }
        return false;
    },
    
    getAbilityByWeapon:function (Weapon) {
        var abilities = this.getAllAbilities();
        for (var i = 0; i < abilities.length; i++){
            var ability = abilities[i];
            if (ability.weapon == Weapon){
                return ability;
            }
        }
        return false;
    },



});
