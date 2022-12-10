// 引入ANGLE_instanced_arrays
var Mock = require("mockjs")
// 请求地址，请求方法（post/get）,require(请求数据地址)
Mock.mock("/test/project-microservice/project/random", "get", require("./data/random.json"))
Mock.mock("/test/project-microservice/project?page=1", "get", require("./data/projects_page1.json"))
Mock.mock("/test/project-microservice/project?id=id_11", "get", require("./data/project.json"))
Mock.mock("/test/follow-microservice/notice/SB?subjectId=id_11", "get" , require("./data/announcements.json"))
Mock.mock("/processmanagement-microservice/processmanagement/feedback/all", "get" , require("./data/feedbacks.json"))