const options = [

  sectionAbout = document.querySelector('.about-us'),
  navigation = document.querySelector('.second-nav'),
  bars = document.querySelector('.fa-bars'),
  allCloseModalBars = document.querySelectorAll('.fa-times'),
  btnMore = document.querySelector('.about-us .wrapper-about-one .button'),
  btnLess = document.querySelector('.about-us .wrapper-about-two .button'),
  allBtn = document.querySelectorAll('p.button'),
  allModals = document.querySelectorAll('.wrapper-PopUp'),
  showMoreAboutWrappers = document.querySelector('.about-us .wrapper-about-two'),
  activeNavigationClass = "second-nav active showMenu",

]

const moreLessAboutMeColumn = function () {

  btnMore.addEventListener('click', function () {

    showMoreAboutWrappers.classList.add('active')
    btnMore.classList.add('btn-nonActive');

  });

  btnLess.addEventListener('click', function () {

    showMoreAboutWrappers.classList.remove('active');
    btnMore.classList.remove('btn-nonActive');

  });
}

const changeMenu = function () {

  window.addEventListener('scroll', function () {

    const topPos = window.scrollY;
    const topAbout = sectionAbout.offsetTop;

    if (topAbout <= topPos) {
      navigation.classList.add('active')
      bars.classList.add('active');
    } else {

      navigation.classList.remove('active')
      bars.classList.remove('active');
      bars.classList.remove('pastShowMenu');
      navigation.classList.remove('showMenu');

    }
  })
}
const showMenu = function () {

  bars.addEventListener('click', function () {

    bars.classList.toggle('pastShowMenu');
    navigation.classList.toggle('showMenu');
    navigation.classList.toggle('hideMenu');

  });
}

const showModal = function () {

  for (let btn_ of allBtn) {
    document.querySelector('p.button')

    btn_.addEventListener('click', function () {

      const btnId = btn_.getAttribute('id').replace('#', '')

      for (let modal of allModals) {
        document.querySelector('wrapper-PopUp');

        const modalId = modal.getAttribute('id')

        if (btnId == modalId) {
          modal.classList.add('active')
        }

        for (let CloseModalBars of allCloseModalBars) {
          document.querySelector('.fa-times')

          CloseModalBars.addEventListener('click', function () {
            modal.classList.remove('active')
          })
        }
      }
    });
  }
}

const initFunction = [

  moreLessAboutMeColumn(),
  changeMenu(),
  showMenu(),
  showModal(),

]