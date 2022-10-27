import request from '@/utils/request'

const api_name = '/admin/vod/subject'

export default {
    getChildList(id) {
        return request({
            url: `${api_name}/childSubject/${id}`,
            method: 'get'
        })
    }
}