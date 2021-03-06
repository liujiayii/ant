export {formatDate, ruleValidate}

function formatDate(date, fmt) {// 时间格式化
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

let validUser = (rule, value, callback) => {
  const valid = /^[a-zA-Z0-9_-]{6,12}$/
  if (!valid.test(value)) {
    callback(new Error('请输入6到12位正确的用户名'));
  } else {
    callback();
  }
}

let validPhone = (rule, value, callback) => {
  const valid = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (!valid.test(value)) {
    callback(new Error('请输入正确的手机号'));
  } else {
    callback();
  }
}

let validPass = (rule, value, callback) => {
  const valid = /^[a-zA-Z0-9_-]{6,12}$/
  if (value && value.length != 0) {
    if (!valid.test(value)) {
      callback(new Error('请输入正确的密码'));
    } else if (value.length < 6 || value.length > 12) {
      callback(new Error('长度在 6 到 12 个字符'));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

const ruleValidate = {
  name: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  post: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  phone: [
    {required: true, message: '必填项不能为空', trigger: 'blur'},
    {validator: validPhone, trigger: 'blur'}
  ],
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {validator: validUser, trigger: 'blur'},
    {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
  ],
  passWord: [{validator: validPass, trigger: 'blur'}],
  brand: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  productName: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  number: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  describion: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  price: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  money: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  prices: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  freight: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  order_shouhuo_id: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  classificationId: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
}
