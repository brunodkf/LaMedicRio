
const imgObserver = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio > 0) {
        entries[0].target.classList.add('move')
    } else {
        entries[0].target.classList.remove('move')
    }
}, {
    threshold: 0
})

const imgAnimate = document.querySelectorAll('[data-target-img]');

imgAnimate.forEach(e => {
    imgObserver.observe(e);
});