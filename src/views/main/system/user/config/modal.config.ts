export const modalConfig = {
  formItems: [
    {
      field: 'name',
      prop: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      prop: 'realname',
      label: '真是姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      prop: 'password',
      label: '用户密码',
      type: 'input',
      placeholder: '请输入用户密码',
      isHidden: true
    },
    {
      field: 'cellphone',
      prop: 'cellphone',
      label: '手机号码',
      type: 'input',
      placeholder: '请输入手机号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: {
    sm: 24
  },
  itemLayout: {}
}
