// setting background image width and height
const setBackgroundImageSize = () => {
    let elements = document.querySelectorAll('.background-loop');

    if (elements.length < 1) return; 

    Array.from(elements).forEach((element, index) => {

        let imageSrc = element
        .style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];

        // I just broke it up on newlines for readability

        let image = new Image();
        image.src = imageSrc;

        image.addEventListener('load', () => {
            
                let width = image.width,
                height = image.height;
    
                element.dataset.width = width;
                element.dataset.height = height;
            
        })
    });
}


const animateBackgrounds = () => {
    // const loop_elements = document.querySelectorAll('.background-loop');

    // if (loop_elements.length > 0) {
    //     Array.from(loop_elements).forEach((element, index) => {
    //         // let tl = new TimelineMax({repeat: -1})
    //         // tl.to(element, 20, {backgroundPosition: `-${element.dataset.width}px center`,  ease: Linear.easeNone})
            
    //     })
    // }

    gsap.to(
        '.background-loop',
        {
            backgroundPosition: `-1850px center`,
            repeat: -1,
            duration: 20,
            ease: Linear.easeNone
        }
    );
}

// pricing slider
const pricing_slider = new Swiper('.pricing-slider .swiper-container', {
    resizeObserver: true,
    breakpoints: {
        0: {
            enabled: true,
            centeredSlides: true,
            slidesPerView: 1.2,
            spaceBetween: 30,
            initialSlide: 1
        },
        400: {
            enabled: true,
            centeredSlides: true,
            slidesPerView: 1.4,
            spaceBetween: 30,
            initialSlide: 1
        },
        576: {
            enabled: true,
            centeredSlides: true,
            slidesPerView: 1.5,
            spaceBetween: 30,
            initialSlide: 1
        },
        768: {
            enabled: true,
            centeredSlides: true,
            slidesPerView: 1.8,
            spaceBetween: 30,
            initialSlide: 1
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            enabled: false,
            centeredSlides: false,
        }
    }
});

// testimonial slider
const testimonial_slider = new Swiper('.testimonial-slider .swiper-container', {
    resizeObserver: true,
    spaceBetween: 0,
    initialSlide: 1,
    init: false,
    speed: 250,
    slideToClickedSlide: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            slidesPerView: 1.7,
        },
        992: {
            direction: 'vertical',
            centeredSlides: true,
            loop: true,
            slidesPerView: 1.7,
        }
    }
});

// const testimonial_height = () => {
//     const parent = document.querySelector('.testimonial-slider .swiper-container');

//     if (window.innerWidth <= 992) {
//         parent.style.height = 'initial';
//         return;
//     }
    
//     const heights = [];
    
//     Array.from(parent.querySelectorAll('.swiper-slide')).forEach((element) => {
//         heights.push(element.offsetHeight);
//         console.log('slide height', element.offsetHeight);
//     })
    

//     if (parent.style.height !== 'initial')
//         parent.style.height = Math.max(...heights) + 'px';
//     else 
//         parent.style.height = Math.max(...heights) + 'px';

//     console.log('parent height', parent.style.height)

//     // testimonial_slider.updateSize();

// }

//testimonial_slider.on('beforeInit', testimonial_height);
//testimonial_slider.on('beforeResize', testimonial_height);

// screen slider
const screen_slider = new Swiper('.screen-slider .swiper-container', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.screen-slider-navigation-prev',
        prevEl: '.screen-slider-navigation-next'
    },
    breakpoints: {
        0: {
            centeredSlides: true,
            loop: true,
            slidesPerView: 1.8,
        },
        576: {
            centeredSlides: true,
            loop: true,
            slidesPerView: 2.4,
        },
        768: {
            centeredSlides: true,
            loop: true,
            slidesPerView: 2.8,
        },
        992: {
            centeredSlides: true,
            loop: true,
            slidesPerView: 4.8,
        }
    }
});

// team slider
const team_slider = new Swiper('.team-slider .swiper-container', {
    navigation: {
        nextEl: '.team-slider-navigation-next',
        prevEl: '.team-slider-navigation-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            loop: true,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            initialSlide: 1,
            loop: true,
        }
    }
});

// instagram slider
const instagram_slider = new Swiper('.instagram-slider .swiper-container', {
    autoplay: {
        delay: 1500
    },
    breakpoints: {
        0: {
            speed: 1500,
            slidesPerView: 2.2,
            spaceBetween: 4,
            centeredSlides: true,
            loop: true,
        },
        768: {
            speed: 1500,
            slidesPerView: 3.2,
            spaceBetween: 4,
            centeredSlides: true,
            loop: true,
        },
        992: {
            speed: 1500,
            slidesPerView: 6,
            spaceBetween: 4,
            centeredSlides: true,
            loop: true,
        }
    }
});

// related posts slider
const related_posts_slider = new Swiper('.related-posts-slider .swiper-container', {
    
    navigation: {
        nextEl: '.related-posts-slider-navigation-next',
        prevEl: '.related-posts-slider-navigation-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            loop: true
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            loop: true
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            loop: true
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            loop: true
        }
    }
});

// related posts slider
const tab_button_slider = new Swiper('.tab-button-slider .swiper-container', {
    breakpoints: {
        0: {
            slidesPerView: 1.8,
            spaceBetween: 30,
            enabled: true
        }, 
        992: {
            enabled: false,
        }
    }
});

const animateValue = (element, start, end, duration) => {
    start = parseFloat(start);
    end = parseFloat(end);

    if (start === end) return;

    var range = end - start;
    var current = start;
    var increment = end > start? .01 : -.01;
    var stepTime = Math.abs(Math.floor(duration / range));

    var timer = setInterval(function() {
        current += increment;
        element.innerHTML = parseFloat((current).toFixed(2));;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const price_number_height = () => {
    const prices = document.querySelectorAll('.price');

    if (prices.length < 1) return;

    Array.from(prices).forEach((price) => {
        const month = price.querySelector('.month');
        const year = price.querySelector('.year');

        price.style.height = Math.max(month.offsetHeight, year.offsetHeight) - 2 + 'px';
        price.style.width = Math.max(month.offsetWidth, year.offsetWidth) + 'px';
    });
}

const pricing_switch = () => {
    const switch_parent = document.querySelector('.pricing .switch');
    const prices = document.querySelectorAll('.price');

    if (typeof(switch_parent) === 'undefined' || switch_parent === null) return;
    if (prices.length < 1) return;

    switch_parent.addEventListener('click', (e) => {
        if (e.target.tagName === 'LABEL')
            e.preventDefault();
        
        
        const input = switch_parent.querySelector('input');

        if (input.hasAttribute('checked')) {

            input.removeAttribute('checked');
            Array.from(prices).forEach((price) => {
                price.classList.remove('price-month');
            });
        } else {
            input.setAttribute('checked', true);
            Array.from(prices).forEach((price) => {
                price.classList.add('price-month');
            });
        }

    });
}

// set heights for the tab section
const tabPaneHeight = () => {
    const elements = document.querySelectorAll('.tab-pane')

    elements.forEach((element) => {
        element.style.height = element.offsetHeight + 'px';

        if (element.classList.contains('active')) {

            document.querySelector('.tab-content').style.height = element.offsetHeight + 'px';

            // gsap.to(`#${element.id} > *`, {
            //     y: 0,
            //     opacity: 1,
            //     visibility: 'visible',
            //     zIndex: 1
            // })
            gsap.to(`#${element.id} .tab-pane-wrapper > *`, {
                y: 0,
                opacity: 1,
                visibility: 'visible',
              
            })
        } else {
            gsap.to(`#${element.id} .tab-pane-wrapper > *`, {
                y: 100,
                opacity: 0,
                visibility: 'hidden',
               
            })
        }

    })

}


// const tabFunc = () => {
//     const tab_el = document.querySelectorAll('button[data-bs-toggle="pill"]');

//     if (tab_el.length < 1) return;

//     tab_el.forEach((element) => {
//         element.addEventListener('hide.bs.tab', (e) => {
//             const active_id = e.target.dataset.bsTarget;

//             const target_id = e.relatedTarget.dataset.bsTarget;
//             const target_parent = document.querySelector(target_id);

//             document.querySelector('.tab-content').style.height = target_parent.style.height;

//             const tl = gsap.timeline({ defaults: {duration: .5 } });

//             tl.to(`${active_id} .tab-pane-wrapper > *`, {
//                 y: 100,
//                 stagger: 0.1
//             })
            
//             tl.to(`${active_id} .tab-pane-wrapper > *`, {
//                 opacity: 0,
//                 visibility: 'hidden',
//                 stagger: 0.1,
//             }, .25)


//             tl.to(`${target_id} .tab-pane-wrapper > *`, {
//                 y: 0,
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} .tab-pane-wrapper > *`, {
//                 opacity: 1,
//                 visibility: 'visible',
//                 stagger: 0.1,
                
//             }, .25)

//         })
//     })
// }

const tabFunc = () => {
    const tab_el = document.querySelectorAll('button[data-bs-toggle="pill"]');

    if (tab_el.length < 1) return;

    tab_el.forEach((element) => {
        element.addEventListener('hide.bs.tab', (e) => {
            const active_id = e.target.dataset.bsTarget;

            const target_id = e.relatedTarget.dataset.bsTarget;
            const target_parent = document.querySelector(target_id);

            document.querySelector('.tab-content').style.height = target_parent.style.height;

            const tl = gsap.timeline({ defaults: {duration: .5 } });

            tl.to(`${active_id} > .tab-pane-wrapper > *`, {
                y: 100,
                stagger: 0.1
            })
            
            tl.to(`${active_id} > .tab-pane-wrapper > *`, {
                opacity: 0,
                visibility: 'hidden',
                stagger: 0.1,
            }, .25)


            tl.to(`${target_id} > .tab-pane-wrapper > *`, {
                y: 0,
                stagger: 0.1,
            }, .25)

            tl.to(`${target_id} > .tab-pane-wrapper > *`, {
                opacity: 1,
                visibility: 'visible',
                stagger: 0.1,
                
            }, .25)

        })
    })
}

// const tabFunc = () => {
//     const tab_el = document.querySelectorAll('button[data-bs-toggle="pill"]');

//     if (tab_el.length < 1) return;

//     tab_el.forEach((element) => {
//         element.addEventListener('hide.bs.tab', (e) => {
//             const active_id = e.target.dataset.bsTarget;

//             const target_id = e.relatedTarget.dataset.bsTarget;
//             const target_parent = document.querySelector(target_id);

//             document.querySelector('.tab-content').style.height = target_parent.style.height;

//             const tl = gsap.timeline({ defaults: { duration: .5 } });

//             tl.to(`${active_id} > .tab-pane-wrapper-1 > *`, {
//                 y: 100,
//                 stagger: 0.1
//             })

//             tl.to(`${active_id} > .tab-pane-wrapper-1 > *`, {
//                 opacity: 0,
//                 visibility: 'hidden',
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-1 > *`, {
//                 y: 0,
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-1 > *`, {
//                 opacity: 1,
//                 visibility: 'visible',
//                 stagger: 0.1,

//             }, .25)

//         })
//     })

//     tab_el.forEach((element) => {
//         element.addEventListener('hide.bs.tab', (e) => {
//             const active_id = e.target.dataset.bsTarget;

//             const target_id = e.relatedTarget.dataset.bsTarget;
//             const target_parent = document.querySelector(target_id);

//             document.querySelector('.tab-content').style.height = target_parent.style.height;

//             const tl = gsap.timeline({ defaults: { duration: .5 } });

//             tl.to(`${active_id} > .tab-pane-wrapper-2 > *`, {
//                 y: 100,
//                 stagger: 0.1
//             })

//             tl.to(`${active_id} > .tab-pane-wrapper-2 > *`, {
//                 opacity: 0,
//                 visibility: 'hidden',
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-2 > *`, {
//                 y: 0,
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-2 > *`, {
//                 opacity: 1,
//                 visibility: 'visible',
//                 stagger: 0.1,

//             }, .25)

//         })
//     })

//     tab_el.forEach((element) => {
//         element.addEventListener('hide.bs.tab', (e) => {
//             const active_id = e.target.dataset.bsTarget;

//             const target_id = e.relatedTarget.dataset.bsTarget;
//             const target_parent = document.querySelector(target_id);

//             document.querySelector('.tab-content').style.height = target_parent.style.height;

//             const tl = gsap.timeline({ defaults: { duration: .5 } });

//             tl.to(`${active_id} > .tab-pane-wrapper-3 > *`, {
//                 y: 100,
//                 stagger: 0.1
//             })

//             tl.to(`${active_id} > .tab-pane-wrapper-3 > *`, {
//                 opacity: 0,
//                 visibility: 'hidden',
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-3 > *`, {
//                 y: 0,
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-3 > *`, {
//                 opacity: 1,
//                 visibility: 'visible',
//                 stagger: 0.1,

//             }, .25)

//         })
//     })

//     tab_el.forEach((element) => {
//         element.addEventListener('hide.bs.tab', (e) => {
//             const active_id = e.target.dataset.bsTarget;

//             const target_id = e.relatedTarget.dataset.bsTarget;
//             const target_parent = document.querySelector(target_id);

//             document.querySelector('.tab-content').style.height = target_parent.style.height;

//             const tl = gsap.timeline({ defaults: { duration: .5 } });

//             tl.to(`${active_id} > .tab-pane-wrapper-4 > *`, {
//                 y: 100,
//                 stagger: 0.1
//             })

//             tl.to(`${active_id} > .tab-pane-wrapper-4 > *`, {
//                 opacity: 0,
//                 visibility: 'hidden',
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-4 > *`, {
//                 y: 0,
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-4 > *`, {
//                 opacity: 1,
//                 visibility: 'visible',
//                 stagger: 0.1,

//             }, .25)

//         })
//     })

//     tab_el.forEach((element) => {
//         element.addEventListener('hide.bs.tab', (e) => {
//             const active_id = e.target.dataset.bsTarget;

//             const target_id = e.relatedTarget.dataset.bsTarget;
//             const target_parent = document.querySelector(target_id);

//             document.querySelector('.tab-content').style.height = target_parent.style.height;

//             const tl = gsap.timeline({ defaults: { duration: .5 } });

//             tl.to(`${active_id} > .tab-pane-wrapper-5 > *`, {
//                 y: 100,
//                 stagger: 0.1
//             })

//             tl.to(`${active_id} > .tab-pane-wrapper-5 > *`, {
//                 opacity: 0,
//                 visibility: 'hidden',
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-5 > *`, {
//                 y: 0,
//                 stagger: 0.1,
//             }, .25)

//             tl.to(`${target_id} > .tab-pane-wrapper-5 > *`, {
//                 opacity: 1,
//                 visibility: 'visible',
//                 stagger: 0.1,

//             }, .25)

//         })
//     })
// }


/****************************************
app feature hover
****************************************/
const app_features = document.querySelectorAll('.app-feature-single');

if (app_features.length > 0) {
    Array.from(app_features).forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                e.currentTarget.querySelector('.circle').classList.add('hover');
            }
        })

        element.addEventListener('mouseout', (e) => {
            e.currentTarget.querySelector('.circle').classList.remove('hover');
        })
    })
}




/****************************************
blog hover
****************************************/
const blog_list = document.querySelectorAll('.blog-single');

if (blog_list.length > 0) {
    Array.from(blog_list).forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                e.currentTarget.querySelector('.circle').classList.add('hover');
                const figure = e.currentTarget.querySelector('.figure');

                if (typeof(figure) !== undefined || figure !== null) {
                    figure.classList.add('hover');
                }
            }
        })

        element.addEventListener('mouseout', (e) => {
            e.currentTarget.querySelector('.circle').classList.remove('hover');
            const figure = e.currentTarget.querySelector('.figure');

            if (typeof(figure) !== undefined || figure !== null) {
                figure.classList.remove('hover');
            }
        })
    })
}


/****************************************
lightbox
****************************************/
const lightbox = GLightbox();

/****************************************
navigation
****************************************/

const navigation_responsive = () => {
    const width = window.innerWidth;
    const navigation = document.querySelector('.navigation');

    if (typeof(navigation) === 'undefined' || navigation === null) return;

    if (width < 992) {
        navigation.classList.add('responsive');
    } else {
        navigation.classList.remove('responsive');
    }
};

window.addEventListener('resize', navigation_responsive);
window.addEventListener('load', navigation_responsive);

// display navigation on mobile
const navigation = document.querySelector('.navigation-bar');

if (typeof(navigation) !== 'undefined' && navigation !== null) {
    document.querySelector('.navigation-bar').addEventListener('click', (e) => {
        document.querySelector('.navigation').classList.add('shown');
    });
}

const getHeight = (el) => {
    var el_style      = window.getComputedStyle(el),
        el_display    = el_style.display,
        el_position   = el_style.position,
        el_visibility = el_style.visibility,
        el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

        wanted_height = 0;


    // if its not hidden we just return normal height
    if(el_display !== 'none' && el_max_height !== '0') {
        return el.offsetHeight;
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position   = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display    = 'block';

    wanted_height     = el.offsetHeight;

    // reverting to the original values
    el.style.display    = el_display;
    el.style.position   = el_position;
    el.style.visibility = el_visibility;

    return wanted_height;
},


toggleSlide = (el, display = 'block') => {
    var el_max_height = 0;

    if(el.getAttribute('data-max-height')) {
        // we've already used this before, so everything is setup
        if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
            el.style.maxHeight = el.getAttribute('data-max-height');
        } else {
            el.style.maxHeight = '0';
        }
    } else {
        el_max_height                  = getHeight(el) + 'px';
        el.style['transition']         = 'max-height 0.5s ease-in-out';
        el.style.overflowY             = 'hidden';
        el.style.maxHeight             = '0';
        el.setAttribute('data-max-height', el_max_height);
        el.style.display               = display;

        // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
        setTimeout(function() {
            el.style.maxHeight = el_max_height;
        }, 10);
    }
};

Array.from(document.querySelectorAll('.has-child')).forEach((element, index) => {
    element.addEventListener('click', (e) => {

        if (window.innerWidth > 992) return;

        if (e.target.parentElement.parentElement.classList.contains('has-child') || e.target.parentElement.parentElement.classList.contains('parent')) {
            e.preventDefault();
        }

        console.log(e.target.parentElement.parentElement)

        if (e.currentTarget.classList.contains('dropped')) {
            toggleSlide(e.currentTarget.querySelector('.child'));
            e.currentTarget.classList.remove('dropped');
            return;
        }

        // hide dropdown for other list items
        Array.from(e.currentTarget.parentElement.querySelectorAll('.has-child.dropped')).forEach((e, i) => {
            e.classList.remove('dropped');
            toggleSlide(e.querySelector('.child'));

        });

        e.currentTarget.classList.add('dropped');

        toggleSlide(e.currentTarget.querySelector('.child'))
    
    });
});

// hide navigation on mobile
const close_button = document.querySelector('.close-button');

if (typeof(close_button) != 'undefined' && close_button != null) {
    close_button.addEventListener('click', (e) => {
        const dropped = document.querySelector('.dropped');
    
        if (typeof(dropped) == 'undefined' && dropped == null) {
            toggleSlide(dropped.querySelector('.child'));
            dropped.classList.remove('dropped');
        }
    
        document.querySelector('.navigation').classList.remove('shown');
    });
}

/****************************************
custom scrollbar
****************************************/
// var scrollbar = OverlayScrollbars(document.querySelector('body'), {
//     overflowBehavior : {
//         x : "hidden",
//         y : "scroll"
//     },
//     callbacks: {
//         onScroll: () => {
//             const scroll_position = scrollbar.scroll().position.y;
//             const navigation = document.querySelector('.navigation');

//             if (typeof(navigation) === 'undefined' || navigation === null) return;

//             if (window.innerHeight > 991 && scroll_position > 0)  {
//                 navigation.classList.add('scrolled');
//             } else if (window.innerHeight < 991 && scroll_position > 0)  {
//                 navigation.classList.add('scrolled');
//             }
//             else {
//                 navigation.classList.remove('scrolled');
//             }
//         }
//     }
// })
var scrollbar = OverlayScrollbars(document.querySelector('body'), {
  overflowBehavior: {
      x: "hidden",
      y: "scroll"
  },
  callbacks: {
      onScroll: () => {
          const scroll_position = scrollbar.scroll().position.y;
          const navigation = document.querySelector('.navigation');
          const logoElements1 = document.querySelectorAll('.navigation-logo img');
          const logoElements2 = document.querySelectorAll('.navigation-logo2 img');
          const bars = document.querySelectorAll('.navigation-bar div');

          if (!navigation) return; // Излез ако елементот не постои

          // Логика за промена според големината на прозорецот и скрола
          if (scroll_position > 0) {
              navigation.classList.add('scrolled');
              const isLargeScreen = window.innerWidth > 991;

              // Промени за првиот сет логоа
              logoElements1.forEach(logo => {
                  logo.src = isLargeScreen
                      ? 'assets/images/logo-ainsi-pbse-blue.png'
                      : 'assets/images/logo-ainsi-pbse-blue.png';
              });

              // Промени за вториот сет логоа
              logoElements2.forEach(logo => {
                  logo.src = isLargeScreen
                      ? 'assets/images/partner-logos/microsoft.png'
                      : 'assets/images/partner-logos/microsoft.png';
              });

              // Промени за баровите
              bars.forEach(bar => {
                  bar.style.backgroundColor = '#0f4efe';
              });
          } else {
              navigation.classList.remove('scrolled');

              // Врати ги логата во нивната почетна состојба
              logoElements1.forEach(logo => {
                  logo.src = 'assets/images/logo-ainsi-pbse-white.png';
              });
              logoElements2.forEach(logo => {
                  logo.src = 'assets/images/partner-logos/microsoft-white.png';
              });

              // Врати ја бојата на баровите
              bars.forEach(bar => {
                  bar.style.backgroundColor = 'white';
              });
          }
      }
  }
});





window.addEventListener('load', () => {

    price_number_height();

    // setBackgroundImageSize();

    setTimeout(() => {
        animateBackgrounds();
    })
    
    testimonial_slider.init();

    pricing_switch();

    tabPaneHeight();

    tabFunc()

    document.querySelector('.preloader').classList.add('loaded');

});

window.addEventListener('resize', () => {
    price_number_height();

    tabPaneHeight();

    // testimonial_height();
});



/**
* Template Name: Presento - v3.10.0
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 16
      }
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
    /**
     * Clients Slider
     */
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
  
        let portfolioFilters = select('#portfolio-flters li', true);
  
        on('click', '#portfolio-flters li', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
      /**
     * Job Positions isotope and filter
     */
  
    window.addEventListener('load', () => {
      let jobpositionsContainer = select('.job-positions-container');
      if (jobpositionsContainer) {
        let jobpositionsIsotope = new Isotope(jobpositionsContainer, {
          itemSelector: '.job-position-item',
          layoutMode: 'fitRows'
        });
  
        let jobpositionsFilters = select('#job-positions-filters li', true);
  
        on('click', '#job-positions-filters li', function(e) {
          e.preventDefault();
          jobpositionsFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          jobpositionsIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          jobpositionsIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
  
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
    /**
     * Initiate Pure Counter 
     */
    new PureCounter();
  
  })()

  document.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.querySelector(".table-responsive");

    let isDown = false;
    let startX;
    let scrollLeft;

    // Овозможи drag to scroll
    tableContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - tableContainer.offsetLeft;
        scrollLeft = tableContainer.scrollLeft;
        tableContainer.classList.add("active");
    });

    tableContainer.addEventListener("mouseleave", () => {
        isDown = false;
        tableContainer.classList.remove("active");
    });

    tableContainer.addEventListener("mouseup", () => {
        isDown = false;
        tableContainer.classList.remove("active");
    });

    tableContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tableContainer.offsetLeft;
        const walk = (x - startX) * 3; // Брзина на скрол
        tableContainer.scrollLeft = scrollLeft - walk;
    });

    // Поддршка за маус тркалце
    tableContainer.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return; // Превени вертикално скролирање
        e.preventDefault();
        tableContainer.scrollLeft += e.deltaY * 2; // Брзина на скрол
    });
});


  
function startCountdown(targetDate) {
  function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
          document.querySelector('.countdown').innerHTML = "Countdown Ended!";
          clearInterval(interval);
          return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  }
  
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

const targetDate = new Date("2025-04-08T10:00:00").getTime();
startCountdown(targetDate);

if ($('.theme_carousel').length) {
			$(".theme_carousel").each(function (index) {
			var $owlAttr = {},
			$extraAttr = $(this).data("options");
			$.extend($owlAttr, $extraAttr);
			$(this).owlCarousel($owlAttr);
		});
	}
  
