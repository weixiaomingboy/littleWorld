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

        //招式列表单项
        moveDetailMessagePrefab:{
            default:null,
            type:cc.Prefab
        },

        //招式详细介绍
        fragmentPrefab:{
            default:null,
            type:cc.Prefab
        },
        //当前招式收集情况，概况
        collegeMessageByCheats:{
            default:null,
            type:cc.Prefab
        },

        //秘籍详细介绍
        cheatsPrefab:{
            default:null,
            type:cc.Prefab
        },

        //单秘籍招式列表
        abilityMessageOfCollege:{
            default:null,
            type:cc.Prefab
        },

        //当前所有秘籍收集情况列表
        allFragmentMessage:{
            default:null,
            type:cc.Prefab
        }



    },


});
