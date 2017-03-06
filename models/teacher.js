var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//创建模式，定义数据类型
var teacherSchema = new Schema({
    //教师ID
    teacherID: {type: String, required: true},
    //密码
    password: {type: String, required: true},
    //课程ID
    classID:{type: String},
    //名称
    name:{type: String},
    //详情
    remark:{type: String},
    //学院
    college:{type: String},
    //参与人员
    people:{type: String}
});
//创建模型
var Teacher = mongoose.model('teachers', teacherSchema);
module.exports = Teacher;
