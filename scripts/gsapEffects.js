export function gsapEffects() {




    gsap.registerPlugin(ScrollTrigger);


    let tlAbout = gsap.timeline({
        scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: '#about h2',
            start: "top center",
            toggleActions: "restart reset restart pause",
        }
    })

    tlAbout
        .from('#about h2', 0.5, {x: -200, opacity: 0 })
        .from('#about p', {y: 200, opacity: 0, stagger: '0.2'})
        .from('#about h3', {x: 200, opacity: 0}, '0.5')
        .from('#about li', {x: 200, opacity: 0,stagger: '0.15'});



    let tlSkills = gsap.timeline({
        scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: '#skills',
            start: "top center",
            toggleActions: "restart reset restart pause",
        }
    })

    tlSkills
        .from('#skills h2', 0.5, {x: -200, opacity: 0 })
        .from('#skills p', {y: 200, opacity: 0, stagger: '0.2'});


    let tlWork = gsap.timeline({
        scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: '#work',
            start: "top center",
            toggleActions: "restart reset restart pause",
        }
    })

    tlWork
        .from('#work h2', 0.5, {x: -200, opacity: 0 })
        .from('#work a', {y: -200, opacity: 0, stagger: '0.2'});

    let tlContact = gsap.timeline({
        scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: '#contact',
            start: "top center",
            toggleActions: "restart reset restart pause",
        }
    })

    tlContact
        .from('#contact h2', 0.5, {x: -200, opacity: 0 })
        .from(['input', 'textarea', '#contact button'], 0.5, {y: 200, opacity: 0, stagger: '0.2' });

}