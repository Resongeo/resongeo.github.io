const options = {
  root: null,
  rootMargin: '80px',
  threshold: 1.0,
}

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-transition')
      observer.unobserve(entry.target)
    }
  })
}, options)

document.querySelectorAll('.observable').forEach((element) => {
  //observer.observe(element)
})
