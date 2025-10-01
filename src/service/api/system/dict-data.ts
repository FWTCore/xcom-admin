import { request } from '@/service/request';

/** 获取字典数据列表 */
export function fetchGetDictDataList(data?: Api.System.DictDataSearchParams) {
  return request<Api.System.DictDataList>({
    url: '/infra/system-dict-item/page',
    method: 'post',
    data
  });
}

/** 新增字典数据 */
export function fetchCreateDictData(data: Api.System.DictDataOperateParams) {
  return request<boolean>({
    url: '/infra/system-dict-item/upsetData',
    method: 'post',
    data
  });
}

/** 修改字典数据 */
export function fetchUpdateDictData(data: Api.System.DictDataOperateParams) {
  return request<boolean>({
    url: '/infra/system-dict-item/upsetData',
    method: 'post',
    data
  });
}

/** 批量删除字典数据 */
export function fetchBatchDeleteDictData(ids: CommonType.IdType[]) {
  return request<boolean>({
    url: `/infra/system-dict-item/delete`,
    method: 'post',
    data: { ids: ids }
  });
}
