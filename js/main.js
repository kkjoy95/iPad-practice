// 장바구니 드롭 다운 메뉴
const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', function (event) {
    event.stopPropagation()
    if (basketEl.classList.contains('show')) {
        hideBasket()
    } else {
        showBasket()
    }
})
basketEl.addEventListener('click', function (event) {
    event.stopPropagation()
})

window.addEventListener('click', function () {
    hideBasket()
})

function showBasket() {
    basketEl.classList.add('show')
}
function hideBasket() {
    basketEl.classList.remove('show')
}


// 검색창
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]


searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)


function showSearch() {
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed')
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    setTimeout(function () {
        searchInputEl.focus()
    }, 600)
}
function hideSearch() {
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed')
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    searchDelayEls.reverse()
    searchInputEl.value = ''
}


const io = new IntersectionObserver(entries => {
    // entries는 `io.observe(el)`로 등록된 모든 관찰 대상 배열.
    entries.forEach(entry => {
      // 사라질 때.
      if (!entry.isIntersecting) {
        return
      }
      entry.target.classList.add('show')
    })
  })
  // 관찰할 요소들 검색
  const infoEls = document.querySelectorAll('.info')
  // 관찰 시작!
  infoEls.forEach(el => io.observe(el))


  // 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

// Google 자동 재생 정책 확인! - https://developer.chrome.com/blog/autoplay/#audiovideo-elements
// video.play()
//   .then(played)
//   .catch(paused)

playBtn.addEventListener('click', () => {
    video.play()
    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
  })
  pauseBtn.addEventListener('click', () => {
    video.pause()
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
  })