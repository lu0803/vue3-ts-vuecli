export const rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-zA-Z]{6,10}$/,
      message: '用户名长度为6~10位数字或字母~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-zA-Z]{3,}$/,
      message: '密码长度不能小于3位',
      trigger: 'blur'
    }
  ]
}
