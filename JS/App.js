gsap.registerPlugin(ScrollTrigger);

//---------------------PageLoadingAnimation---------------------
function PageLoadingAnimation() {
    $('#PageLoadingAnimation').animate({
        'animationPlayState': 'paused',
        "opacity": "0",
    }, 800);
    $('#PageLoadingAnimation').css({
        "pointerEvents": "none",
    });
    //---------------------Enablescrolling---------------------
    $("body").css("overflow", "scroll");
    //---------------------LandingPageSCrollSnap---------------------
    $('html, body').animate({
        scrollTop: $("#LandingPageWrapper").offset().top
    }, 400);
}
//---------------------/PageLoadingAnimation---------------------

//---------------------LandingPage---------------------
function LandingPageScrollTrigger() {

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#LandingPageWrapper",
            toggleActions: "restart restart restart restart",
            start: "0% 100%",
            end: "89% 0%",
            // markers: "true",
        }
    })
    LandingPageScrollTrigger
        .from('#LandingPageWrapper nav #logo a', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 2.2,
        }, 3.5)
        .from('#LandingPageWrapper nav #listitems li a', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 2.2, stagger: 0.5,
        }, 3.5)
        .from('#LandingPageWrapper #intro h2 div span', {
            opacity: 0, y: "100%", ease: "power3.out", duration: 3.1, stagger: 0.5,
        }, 0.5)
        .from('#LandingPageWrapper #intro h5 div span', {
            opacity: 0, y: "100%", ease: "power4.out", duration: 2.2, stagger: 0.5,
        }, 1.5)
        .from('#LandingPageWrapper #social a span', {
            opacity: 0, y: "115%", ease: 'power3.out', duration: 1.3, stagger: 0.5,
        }, 4)
        .from('#LandingPageWrapper #codeby p', {
            opacity: 0, y: "100%", ease: "power3.out", duration: 2.2, stagger: 0.5,
        }, 5.5)
        .from('#LandingPageWrapper #scrolldown span p', {
            opacity: 0, y: "100%", ease: 'power2.out', duration: 1.3,
        }, 6.5);
};

//---------------------/LandingPage---------------------

//---------------------My Works---------------------
var WebPageAh4 = $('#MyWorksWrap section #WebPageA h4 span');
var WebPageAh2 = $('#MyWorksWrap section #WebPageA h2 span');
var WebPageBh4 = $('#MyWorksWrap section #WebPageB h4 span');
var WebPageBh2 = $('#MyWorksWrap section #WebPageB h2 span');
var WebPageCh4 = $('#MyWorksWrap section #WebPageC h4 span');
var WebPageCh2 = $('#MyWorksWrap section #WebPageC h2 span');
var WebPageDh4 = $('#MyWorksWrap section #WebPageD h4 span');
var WebPageDh2 = $('#MyWorksWrap section #WebPageD h2 span');
var WebPageEh4 = $('#MyWorksWrap section #WebPageE h4 span');
var WebPageEh2 = $('#MyWorksWrap section #WebPageE h2 span');
var WebPageSlideA = $('#MyWorksWrap #WepPageContainer #WebPageA');
var WebPageSlideB = $('#MyWorksWrap #WepPageContainer #WebPageB');
var WebPageSlideC = $('#MyWorksWrap #WepPageContainer #WebPageC');
var WebPageSlideD = $('#MyWorksWrap #WepPageContainer #WebPageD');
var WebPageSlideE = $('#MyWorksWrap #WepPageContainer #WebPageE');
var WebPageNavA = $('#MyWorksWrap nav .WebPageNavA');
var WebPageNavB = $('#MyWorksWrap nav .WebPageNavB');
var WebPageNavC = $('#MyWorksWrap nav .WebPageNavC');
var WebPageNavD = $('#MyWorksWrap nav .WebPageNavD');
var WebPageNavE = $('#MyWorksWrap nav .WebPageNavE');

function MyWorksScrollTrigger() { // MyWorksScrollTrigger---------------------
    let MyWorksScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#MyWorksWrap",
            toggleActions: "restart restart restart restart",
            start: "20% 100%",
            end: "88% 0%",
            // markers: "true",
        }
    })
    MyWorksScrollTrigger
        .from('#MyWorksWrap section #WebPageA h4 span', {
            opacity: 0, y: "100%", ease: 'power4.out', duration: 3.1,
        }, 0.2)
        .from('#MyWorksWrap section #WebPageA h2 span', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 2.2,
        }, 0.2)
        .add(function () { // My Works WebPageA Title Mouseenter Animation---------------------
            gsap.to([WebPageBh2, WebPageCh2, WebPageDh2, WebPageEh2, WebPageBh4, WebPageCh4, WebPageDh4, WebPageEh4,], {
                opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
            })
        }, 0)
        .from('#MyWorksWrap #WepPageContainer, #MyWorksWrap #WebPageCursorWarp', {
            x: "13%", opacity: 0, ease: 'power4.out', duration: 3.1,
        }, 0.2)
        .add(function () { // My Works WebPageA Slide Mouseenter Animation---------------------
            gsap.to(WebPageSlideA, {
                x: "0%", ease: 'power4.out', duration: 1.3,
            })
            gsap.to([WebPageSlideB, WebPageSlideC, WebPageSlideD, WebPageSlideE,], {
                x: "100%", ease: 'power4.out', duration: 1.3,
            })
        }, 0)
        .from('#MyWorksWrap nav div', {
            opacity: 0, y: "100%", ease: 'power4.out', duration: 1.3, stagger: "0.4",
        }, 0.8)
        .add(function () { // My Works WebPageA Nav background Mouseenter Animation---------------------
            gsap.to(WebPageNavA, {
                background: '#FFFFFF', ease: 'power2.out', duration: 1.3,
            })
            gsap.to([WebPageNavB, WebPageNavC, WebPageNavD, WebPageNavE,], {
                background: '#808080', ease: 'power4.out', duration: 1.3,
            })
        }, 0)
        .from('#MyWorksWrap #PageLinks a', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 2.2, stagger: "0.5",
        }, 1.3)
        .add(function () { // My Works WebPageA PageLinks---------------------
            $("#MyWorksWrap #PageLinks a:nth-child(1)").attr("href", "https://codepen.io/icodeayush/pen/bGgWmyL");
            $("#MyWorksWrap #PageLinks a:nth-child(2)").attr("href", "https://icodeayush.github.io/Dora");
        }, 0);
}

$('#MyWorksWrap nav .WebPageNavA').mouseenter(function () {
    // My Works WebPageA Title Mouseenter Animation---------------------
    gsap.to(WebPageAh4, {
        opacity:1, y: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to(WebPageAh2, {
        opacity:1, y: "0%", ease: 'power3.out', duration: 1.3,
    })
    gsap.to([WebPageBh2, WebPageCh2, WebPageDh2, WebPageEh2,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageBh4, WebPageCh4, WebPageDh4, WebPageEh4,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageA Slide Mouseenter Animation---------------------
    gsap.to(WebPageSlideA, {
        x: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageSlideB, WebPageSlideC, WebPageSlideD, WebPageSlideE,], {
        x: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageA Nav background Mouseenter Animation---------------------
    gsap.to(WebPageNavA, {
        background: '#FFFFFF', ease: 'power2.out', duration: 1.3,
    })
    gsap.to([WebPageNavB, WebPageNavC, WebPageNavD, WebPageNavE,], {
        background: '#808080', ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageA PageLinks---------------------
    $("#MyWorksWrap #PageLinks a:nth-child(1)").attr("href", "https://codepen.io/icodeayush/pen/bGgWmyL");
    $("#MyWorksWrap #PageLinks a:nth-child(2)").attr("href", "https://icodeayush.github.io/Dora");
});
$('#MyWorksWrap nav .WebPageNavB').mouseenter(function () {
    // My Works WebPageB Title Mouseenter Animation---------------------
    gsap.to(WebPageBh4, {
        opacity:1, y: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to(WebPageBh2, {
        opacity:1, y: "0%", ease: 'power3.out', duration: 1.3,
    })
    gsap.to([WebPageAh2, WebPageCh2, WebPageDh2, WebPageEh2,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageAh4, WebPageCh4, WebPageDh4, WebPageEh4,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageB Slide Mouseenter Animation---------------------
    gsap.to(WebPageSlideB, {
        x: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageSlideA, WebPageSlideC, WebPageSlideD, WebPageSlideE,], {
        x: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageB Nav background Mouseenter Animation---------------------
    gsap.to(WebPageNavB, {
        background: '#FFFFFF', ease: 'power2.out', duration: 1.3,
    })
    gsap.to([WebPageNavA, WebPageNavC, WebPageNavD, WebPageNavE,], {
        background: '#808080', ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageB PageLinks---------------------
    $("#MyWorksWrap #PageLinks a:nth-child(1)").attr("href", "https://codepen.io/icodeayush/pen/QWdgXgB");
    $("#MyWorksWrap #PageLinks a:nth-child(2)").attr("href", "https://icodeayush.github.io/BeeSoft");
});
$('#MyWorksWrap nav .WebPageNavC').mouseenter(function () {
    // My Works WebPageC Title Mouseenter Animation---------------------
    gsap.to(WebPageCh4, {
        opacity:1, y: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to(WebPageCh2, {
        opacity:1, y: "0%", ease: 'power3.out', duration: 1.3,
    })
    gsap.to([WebPageAh2, WebPageBh2, WebPageDh2, WebPageEh2,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageAh4, WebPageBh4, WebPageDh4, WebPageEh4,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageC Slide Mouseenter Animation---------------------
    gsap.to(WebPageSlideC, {
        x: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageSlideA, WebPageSlideB, WebPageSlideD, WebPageSlideE,], {
        x: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageC Nav background Mouseenter Animation---------------------
    gsap.to(WebPageNavC, {
        background: '#FFFFFF', ease: 'power2.out', duration: 1.3,
    })
    gsap.to([WebPageNavA, WebPageNavB, WebPageNavD, WebPageNavE,], {
        background: '#808080', ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageC PageLinks---------------------
    $("#MyWorksWrap #PageLinks a:nth-child(1)").attr("href", "https://codepen.io/icodeayush/pen/PoWjrra");
    $("#MyWorksWrap #PageLinks a:nth-child(2)").attr("href", "https://icodeayush.github.io/TravelNow");
});
$('#MyWorksWrap nav .WebPageNavD').mouseenter(function () {
    // My Works WebPageD Title Mouseenter Animation---------------------
    gsap.to(WebPageDh4, {
        opacity:1, y: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to(WebPageDh2, {
        opacity:1, y: "0%", ease: 'power3.out', duration: 1.3,
    })
    gsap.to([WebPageAh2, WebPageCh2, WebPageBh2, WebPageEh2,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageAh4, WebPageCh4, WebPageBh4, WebPageEh4,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageD Slide Mouseenter Animation---------------------
    gsap.to(WebPageSlideD, {
        x: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageSlideA, WebPageSlideC, WebPageSlideB, WebPageSlideE,], {
        x: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageD Nav background Mouseenter Animation---------------------
    gsap.to(WebPageNavD, {
        background: '#FFFFFF', ease: 'power2.out', duration: 1.3,
    })
    gsap.to([WebPageNavA, WebPageNavC, WebPageNavB, WebPageNavE,], {
        background: '#808080', ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageD PageLinks---------------------
    $("#MyWorksWrap #PageLinks a:nth-child(1)").attr("href", "./Pages/Error404/Error404.html");
    $("#MyWorksWrap #PageLinks a:nth-child(2)").attr("href", "./Pages/Error404/Error404.html");
});
$('#MyWorksWrap nav .WebPageNavE').mouseenter(function () {
    // My Works WebPageE Title Mouseenter Animation---------------------
    gsap.to(WebPageEh4, {
        opacity:1, y: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to(WebPageEh2, {
        opacity:1, y: "0%", ease: 'power3.out', duration: 1.3,
    })
    gsap.to([WebPageAh2, WebPageCh2, WebPageDh2, WebPageBh2,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageAh4, WebPageCh4, WebPageDh4, WebPageBh4,], {
        opacity:0, y: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageE Slide Mouseenter Animation---------------------
    gsap.to(WebPageSlideE, {
        x: "0%", ease: 'power4.out', duration: 1.3,
    })
    gsap.to([WebPageSlideA, WebPageSlideC, WebPageSlideD, WebPageSlideB,], {
        x: "100%", ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageE Nav background Mouseenter Animation---------------------
    gsap.to(WebPageNavE, {
        background: '#FFFFFF', ease: 'power2.out', duration: 1.3,
    })
    gsap.to([WebPageNavA, WebPageNavC, WebPageNavD, WebPageNavB,], {
        background: '#808080', ease: 'power4.out', duration: 1.3,
    })
    // My Works WebPageE PageLinks---------------------
    $("#MyWorksWrap #PageLinks a:nth-child(1)").attr("href", "./Pages/Error404/Error404.html");
    $("#MyWorksWrap #PageLinks a:nth-child(2)").attr("href", "./Pages/Error404/Error404.html");
});
//---------------------/My Works---------------------

//---------------------Contact Me---------------------
function ContactMeScrollTrigger() { // ContactMeScrollTrigger---------------------
    let ContactMeScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ContactMeWrap",
            toggleActions: "restart restart restart restart",
            start: "45% 100%",
            end: "100% 0%",
            // markers: "true",
        }
    })
    ContactMeScrollTrigger
        .from('#ContactMeWrap section h3 span', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 3.1,
        }, 0)
        .from('#ContactMeWrap section h4 span', {
            opacity: 0, y: "100%", ease: 'power4.out', duration: 2.2,
        }, 0.7)
        .from('#ContactMeWrap #logo a span', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 3.1,
        }, 0.8)
        .from('#ContactMeWrap #EmailnPhoneNo #EmailnPhoneNoBorderTop', {
            width: 0, ease: 'power1.out', duration: 3.1,
        }, 1.3)
        .from('#ContactMeWrap #EmailnPhoneNo p a span', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 2.2, stagger: "0.5",
        }, 1.3)
        .from('#ContactMeWrap #social a span', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 1.3, stagger: "0.5",
        }, 2.4)
        .from('#ContactMeWrap #address #AddressBorderTop', {
            width: 0, ease: 'power1.out', duration: 4.4,
        }, 1.3)
        .from('#ContactMeWrap #address p span', {
            opacity: 0, y: "100%", ease: 'power3.out', duration: 2.2, stagger: "0.5",
        }, 2.4)
}
//---------------------/Contact Me---------------------

function OnLoad() {
    PageLoadingAnimation()
    LandingPageScrollTrigger()
    MyWorksScrollTrigger()
    ContactMeScrollTrigger()
}

window.onload = () => {
    OnLoad()
}