const cards = document.querySelectorAll(".card")
const observernigga = new IntersectionObserver(shits => {
    shits.forEach(shit => {
        shit.target.classList.toggle("show", shit.isIntersecting)
    })
}, {
    threshold:0.6,
    rootMargin:"-100px"
})
//the toggle removes show class if not intersecting
cards.forEach(card =>{
    observernigga.observe(card)
})
//TRANSITION WHEN SCROLLING IN VIEW FOR TEXT 
