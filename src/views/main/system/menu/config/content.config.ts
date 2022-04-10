export const contentFormConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '180' },
    { prop: 'type', label: '类型', minWidth: '50' },
    { prop: 'url', label: '菜单url' },
    { prop: 'icon', label: '类型' },
    { prop: 'permission', label: '按钮权限' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '180', slotName: 'handler' }
  ],
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
