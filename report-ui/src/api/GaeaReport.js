import request from '@/utils/request'

// 设计报表
export function design(data) {
  return request({
    url: 'business/report/design',
    method: 'post',
    data,
  })
}

// 预览报表，渲染数据
export function preview(data) {
  return request({
    url: 'business/reportExcel/preview',
    method: 'post',
    data,
  })
}

// 导出报表
export function exportExcel(data) {
  return request({
    url: 'business/reportExcel/exportExcel',
    method: 'post',
    data,
  })
}

// 导出报表
export function exportPdf(data) {
  return request({
    url: 'business/reportExcel/exportPdf',
    method: 'post',
    data,
  })
}

//  获取所有数据集
export function queryAllDataSet() {
  return request({
    url: 'business/dataSet/queryAllDataSet',
    method: 'get',
  })
}

//  获取对应数据集的列集合
export function detail(data) {
  return request({
    url: 'business/dataSet/detailBysetId/' + data,
    method: 'get',
  })
}

//  获取对应数据集的列集合
export function detailBysetCode(data) {
  return request({
    url: 'business/dataSet/detailBysetCode/' + data,
    method: 'get',
  })
}

//  根据reportCode获取报表表格详情
export function detailByReportCode(data) {
  return request({
    url: 'business/reportExcel/detailByReportCode/' + data,
    method: 'get',
  })
}