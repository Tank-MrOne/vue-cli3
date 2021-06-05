import request from '@/utils/request'
//提交信息
export const createSubmit = (processKey, businessGroupId, data) => {
    return request({
        url: `/processHandler/createSubmit/${processKey}/${businessGroupId}`,
        method: 'post',
        data,
    })
}
// 创建流程
export const getProcessDataForCreate = (processKey, businessGroupId) => {
    return request({
        url: `/processHandler/getProcessDataForCreate/${processKey}/${businessGroupId}`,
        method: 'get',
    })
}
// 上传附件（留言）
export const uploadCommentAttachment = (params) => {
    return request({
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'post',
        url: `/processHandler/uploadAttachment`,
        data: params,
    })
}