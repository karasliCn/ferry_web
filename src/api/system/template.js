import request from '@/utils/request'

export function getTemplateFields(tplId) {
  return request({
    url: `/api/v1/tpl/details?template_id=${tplId}`,
    method: 'get'
  })
}
