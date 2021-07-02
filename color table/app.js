const table = document.querySelector('#table')
const SQUARES_COUNT = 703
const colors = ['#ff5454', '#ff793f', '#7e46fd', '#ff57d0', '#ba60fa','#4ea4ff','#b133ff']

for (let i = 1; i < SQUARES_COUNT; i++) {
  let square = document.createElement('div')
  table.append(square)
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    addColor(square)
  })
  square.addEventListener('mouseleave', () => {
    square.style.backgroundColor = '#333'
    square.style.boxShadow = 'none'
  })
}

function addColor (element) {
  let color = colors[Math.floor(Math.random() * colors.length)]
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 5px ${color}, 0 0 5px ${color}`
}
