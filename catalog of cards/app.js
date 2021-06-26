const slides = document.querySelectorAll('.slide')

slides[1].classList.add('active')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  for (const slide of slides) {
    slide.classList.remove('active')
  }
}
