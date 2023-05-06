import request from '@/utils/request'
import { downLoadZip } from '@/utils/zipdownload'

// 流程结构
export function processStructure(params) {
  return request({
    url: '/api/v1/work-order/process-structure',
    method: 'get',
    params
  })
}

// 新建工单
export function createWorkOrder(data) {
  return request({
    url: '/api/v1/work-order/create',
    method: 'post',
    data
  })
}

// 工单列表
export function workOrderList(params) {
  return request({
    url: '/api/v1/work-order/list',
    method: 'get',
    params
  })
}

export function circulationList(params) {
  let baseUrl = '/api/v1/work-order/circulation-list'
  const keys = Object.keys(params)
  for (let index = 0; index < keys.length; index++) {
    if (index === 0) {
      baseUrl = baseUrl + '?'
    }
    if (index > 0) {
      baseUrl = baseUrl + '&'
    }
    baseUrl = baseUrl + keys[index] + '=' + params[keys[index]]
  }
  downLoadZip(baseUrl, '工单时间明细.xlsx')
}

export function downloadCirculationList(params) {
  window.open()
}

// 处理工单
export function handleWorkOrder(data) {
  return request({
    url: '/api/v1/work-order/handle',
    method: 'post',
    data
  })
}

export function suspendWorkOrder(data) {
  return request({
    url: '/api/v1/work-order/suspend',
    method: 'post',
    data
  })
}

// 结束工单
export function unityWorkOrder(params) {
  return request({
    url: '/api/v1/work-order/unity',
    method: 'get',
    params
  })
}

// 转交工单
export function inversionWorkOrder(data) {
  return request({
    url: '/api/v1/work-order/inversion',
    method: 'post',
    data
  })
}

// 催办工单
export function urgeWorkOrder(params) {
  return request({
    url: '/api/v1/work-order/urge',
    method: 'get',
    params
  })
}

// 主动接单
export function activeOrder(data, workOrderId) {
  return request({
    url: `/api/v1/work-order/active-order/${workOrderId}`,
    method: 'put',
    data
  })
}

// 删除工单
export function deleteWorkOrder(workOrderId) {
  return request({
    url: `/api/v1/work-order/delete/${workOrderId}`,
    method: 'delete'
  })
}

// 删除工单
export function reopenWorkOrder(id) {
  return request({
    url: `/api/v1/work-order/reopen/${id}`,
    method: 'post'
  })
}
