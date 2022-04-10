const contentFormConfig = {
  propList: [
    { prop: 'id', label: 'ID', minWidth: '120' },
    { prop: 'name', label: '用户名', minWidth: '150' },
    { prop: 'realname', label: '姓名', minWidth: '150' },
    { prop: 'enable', label: '状态', minWidth: '120', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', slotName: 'handler' }
  ],
  title: '用户列表',
  showColumnIndex: true,
  showSelectColumn: true
}

export { contentFormConfig }
