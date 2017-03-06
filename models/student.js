var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//创建模式，定义数据类型
var studentSchema = new Schema({
    // 学号
    studentId: {type: String, required: true, unique: true},
    //密码
    password: {type: String, required: true},
    //姓名
    name: {type: String},
    //学院  假设计算机学院是12
    academy:{type:Number},
    //班级
    classId:{type: Number},
    // 性别
    gender: {type: Number},
    // 身份证
    // idcard: {type: String},
    // 民族
    // nation: {type: String},
    // 政治面貌
    // political: {type: String},
    // 籍贯
    // nap: {type: String},
    // 邮箱
    email: {type: String, required: true},
    // 联系方式
    phone: {type: Number},
    // 地址
    // address: {type: String},
    // 邮编
    // postcode: {type: Number},
    // 工作单位
    // works: {type: String},
    // 学习类型  2是专科
    learningType: {type: Number},
    // 备注
    remark: {type: String},
    // 课题ID
    projectId: {type: String},
    //专业方向
    major:{type: String},
    // 角色
    role:{type:Number,default:1}
});
//创建模型
var Student = mongoose.model('students', studentSchema);
module.exports = Student;


// db.students.insert({
//     studentId: 1430630609,
//     password: 123456,
//     name: "张莉",
//     academy:12,
//     classId:14306306,
//     gender: 0,
//     email: "976200507@qq.com",
//     phone: 18010552617,
//     learningType: 2,
//     remark: "备注就备注",
//     projectId: 2017122002,
//     major:"信管",
//     role:1
// })