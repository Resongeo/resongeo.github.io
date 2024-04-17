const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.0,
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('transition-reset')
      observer.unobserve(entry.target)
    }
  })
}, options)

Array.from(['.transition-float-up', '.transition-float-left', '.transition-float-right']).forEach((className) => {
  document.querySelectorAll(className).forEach((element) => {
    observer.observe(element)
  })
})
