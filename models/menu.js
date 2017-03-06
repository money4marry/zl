var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var menuSchema = new Schema({
    group: {type: String, required: true},//菜单组
    order: {type: Number, required: true},//组内顺序
    name: {type: String, required: true},//中文显示名
    enName: {type: String},//英文名
    url: {type: String, required: true},//路由
    type: {type: Number, required: true},//菜单类型，决定位置
    parentMenu: {type: String},//是否有父级菜单
    subMenu: {type: Schema.Types.Mixed},//是否有子菜单，数组类型
    desc: {type: String}//描述，备注
});
var Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;