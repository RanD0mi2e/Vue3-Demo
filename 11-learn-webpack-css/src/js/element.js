import '../css/style.css'
import '../css/bg.less'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.classList.add('bg')
divEl.innerHTML = '你好呀~很高兴遇到你'

document.body.append(divEl)
