"use strict";
const btnUp = {
    element: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.element?.classList.contains('btn-up__hide') && !this.element.classList.contains('btn-up__hiding')) {
            this.element.classList.remove('btn-up__hide');
            this.element.classList.add('btn-up__hiding');
            window.setTimeout(() => {
                this.element?.classList.remove('btn-up__hiding');
            }, 300);
        }
    },
    hide() {
        if (this.element?.classList.contains('btn-up__hide') && !this.element.classList.contains('btn-up__hiding')) {
            this.element.classList.add('btn-up__hiding');
            window.setTimeout(() => {
                this.element?.classList.add('btn-up__hide');
                this.element?.classList.remove('btn-up__hiding');
            }, 300);
        }
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            if (scrollY > 400) {
                this.show();
            }
            else {
                this.hide();
            }
        });
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        };
    }
};
btnUp.addEventListener();
