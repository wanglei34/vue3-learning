let timeformat = function () {
  let dt = new Date()

  //获取 年 月 日
  let y = dt.getFullYear()
  let m = (dt.getMonth() + 1).toString().padStart(2, '0')
  let d = dt.getDate().toString().padStart(2, '0')

  //时分秒
  let hh = dt.getHours().toString().padStart(2, '0')
  let mm = dt.getMinutes().toString().padStart(2, '0')
  let ss = dt.getSeconds().toString().padStart(2, '0')

  let formatStr = `${y}-${m}-${d} ${hh}:${mm}:${ss} `
  console.log(formatStr)
}
