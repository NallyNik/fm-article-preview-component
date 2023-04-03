const btn = document.getElementById('share-button');
const share = document.getElementById('share');

btn.addEventListener('click', () => {
    const isVisible = share.classList.contains('share-visible');

    if (isVisible) {
        share.classList.remove('share-visible');
        share.setAttribute("aria-hidden", true);
        btn.classList.remove("button-change");
    } else {
        share.classList.add("share-visible");
        share.setAttribute("aria-hidden", false);
        btn.classList.add("button-change");
    }
})