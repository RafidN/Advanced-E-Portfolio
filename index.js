// template_fdjfzqb
// service_zkzyvx3
// vlZDIOpeHu4hdidY4


let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1/20;


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i=0; i<shapes.length; i++) {
        const isOdd = i%2 !== 0;
        const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px)`
    }
}


function toggleContrast() {
    if(contrastToggle) {
        document.body.classList.remove("dark-theme")
        contrastToggle = false;
    }
    else {
        document.body.classList  += " dark-theme"
        contrastToggle = true;
    }
}

function contact() {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_zkzyvx3',
            'template_fdjfzqb',
            event.target,
            'vlZDIOpeHu4hdidY4'
        ).then(() =>{
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
            console.log('it worked 1')
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at rafidn@outlook.com"
            )
        })
    }

    function toggleModal() {
        // toggle Modal 
        if(isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open")
        }
        else {
            isModalOpen = true;
            document.body.classList += " modal--open";
        }
    }