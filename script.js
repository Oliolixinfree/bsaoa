const img = ['img/img2.png', '/img/img3.png', '/img/img4.png']
const imgClass = document.querySelectorAll('div.change_bg')
const hiddenBlock = document.querySelectorAll('div.hide')
const mediaQuery = window.matchMedia('(max-width: 600px)')

function handleTabletChange(e) {
    if (e.matches) {
        hiddenBlock.forEach(el => el.style.display = 'none')

        imgClass.forEach((el, i) => {
            el.style.backgroundImage = `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${img[i]}')`
            el.style.backgroundSize = "cover"
        })
    } else {
        hiddenBlock.forEach(el => el.style.display = 'block')

        imgClass.forEach((el, i) => {
            el.style.backgroundImage = `none`
            el.style.backgroundSize = "cover"
        })
    }

}
handleTabletChange(mediaQuery)
mediaQuery.addListener(handleTabletChange)