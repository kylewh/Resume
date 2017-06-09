(function () {
  const menu = document.getElementsByClassName('menu')[0]
  const footer = document.getElementsByTagName('footer')[0]
  const aside = document.getElementsByTagName('aside')[0]
  const nav = document.getElementsByClassName('nav')[0]
  const oA = document.getElementsByClassName('nav-item')
  const oContent = document.getElementsByClassName('content')
  const contentSize = oContent.length

  menu.addEventListener('click', () => {
    aside.classList.toggle('active')
  })

  footer.addEventListener('click', () => {
    aside.classList.contains('active') && aside.classList.toggle('active')
  })

  nav.addEventListener('click', e => {
    let target

    e.preventDefault()

    if (e.target.classList.contains('nav-item')) {
      target = e.target
    } else if (e.target.parentNode.classList.contains('nav-item')) {
      target = e.target.parentNode
    }

    const idx = Array.prototype.indexOf.call(nav.children, target.parentNode)

    if (idx + 1 > contentSize) {
      return
    }

    Array.prototype.forEach.call(oA, node => {
      node.classList.remove('selected')
    })

    Array.prototype.forEach.call(oContent, (node, index) => {
      if (idx !== index) {
        node.classList.remove('visible')
      } else {
        oContent[index].classList.add('visible')
      }
    })

    target.classList.add('selected')
  })
})()
