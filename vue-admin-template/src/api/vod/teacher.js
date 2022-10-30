import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
    pageList(current, limit, searchObj) {
        return request({
            url: `${api_name}/page/${current}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    removeTeacherById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
        })
    },
    // 添加讲师
    addTeacher(teacher) {
        return request({
            url: `${api_name}/saveTeacher`,
            method: 'post',
            data: teacher
        })
    },
    // 根据 ID 查询讲师
    getTeacherById(id) {
        return request({
            url: `${api_name}/findTeacher/${id}`,
            method: 'get'
        })
    },
    // 修改讲师
    updateTeacher(teacher) {
        return request({
            url: `${api_name}/updateTeacher`,
            method: 'post',
            data: teacher
        })
    },
    // 批量删除
    removeBatch(idList) {
        return request({
            url: `${api_name}/deleteBatch`,
            method: 'delete',
            data: idList
        })
    },
    //所有讲师
    list() {
        return request({
            url: `${api_name}/findAll`,
            method: `get`
        })
    }
}
