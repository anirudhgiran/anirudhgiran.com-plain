emailjs.init({
    publicKey: "G8gBWZBi-S__zmyJe"
})

console.log(window.innerWidth);

const serviceId = 'service_r1fvkmk';
const templateId = 'template_tekd8v9';


const contactForm = document.querySelector('#contact-form');
const formAlert = document.querySelector('#form-alert');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let fromName = contactForm['name'];
    let fromEmail = contactForm['email'];
    let fromMsg = contactForm['message'];

    let templateParams = {
        title: `New message recieved from ${fromName.value}`,
        name: fromName.value,
        email: fromEmail.value,
        message: fromMsg.value,
        time: Date()
    }

    emailjs.send(serviceId, templateId, templateParams).then(
        (response) => {
            if (response.status === 200) {
                formAlert.classList.add('success');
                formAlert.innerText = 'Message sent. Thank you!'

                fromEmail.value = '';
                fromMsg.value = '';
                fromName.value = ''
            }
        },
        (error) => {
            formAlert.classList.add('failed');
            formAlert.innerText = 'Failed to send message. Try again!'
        },
    );
})

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const mobileNav = document.querySelector('#mobile-nav');

document.querySelector('#hamburger-menu').addEventListener('click', () => {
    line1.classList.toggle('line1-tfm')
    line2.classList.toggle('line2-tfm')
    line3.classList.toggle('line3-tfm')
    mobileNav.classList.toggle('slide-in')
})

document.querySelectorAll('.mobile-nav-items').forEach(item => {
    item.addEventListener('click', () => {
        line1.classList.toggle('line1-tfm')
        line2.classList.toggle('line2-tfm')
        line3.classList.toggle('line3-tfm')
        mobileNav.classList.toggle('slide-in')
    })
})