const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Mark Zuckerberg',
        position: 'Facebook CEO',
        photo: '../images/project44Image/mark.jpeg',
        text: "What I appreciate most about working with you is the commitment to moving fast. In a world that’s changing this quickly, the biggest risk is not taking any. You don’t just talk about ideas; you build them. You understand that 'done is better than perfect' and have a real gift for creating tools that actually bring people closer together. Keep shipping",
        backgroundcolor: '#0668E1'
    },
    {
        name: 'Elon Musk',
        position: 'X CEO',
        photo: '../images/project44Image/elon.jpeg',
        text: "You’ve shown a rare ability to think from first principles rather than just following the trend. Most people are afraid of failure, but you realize that if things aren't failing, you aren't innovating enough. Your work ethic is 'ultra-hardcore,' and you have the kind of engineering mind that can actually help us become a multi-planetary civilization. Good job.",
        backgroundcolor: '#1C1C1C'
    },
    {
        name: 'Larry Page',
        position: 'Google CEO',
        photo: '../images/project44Image/larry.jpeg',
        text: "Most people are satisfied with incremental change, but you’re actually willing to tackle the moonshots. I love that you have a 'healthy disregard for the impossible.' You’ve taken a messy problem and organized it into something intuitive and useful—like a toothbrush, something people use twice a day. The world needs more people who are uncomfortably excited about the future.",
        backgroundcolor: '#850909'
    },
    {
        name: 'Jeff Bezos',
        position: 'Amazon CEO',
        photo: '../images/project44Image/jeff.jpeg',
        text: "It’s rare to find someone so obsessively focused on the customer rather than the competition. You’re willing to be misunderstood for long periods of time to get the right results, and you treat every project like it’s still 'Day 1.' You don’t manage to proxies; you look at the actual outcomes. You’re building something that’s going to be a sturdy oak tree one day.",
        backgroundcolor: '#232F3E'
    },
    {
        name: 'Eimmiit OTM',
        position: 'Unknown CEO',
        photo: '../images/project44Image/Eimmiit.png',
        text: "Watching you work is a masterclass in authenticity and grit. You have this unique ability to balance high-level strategy with the hands-on details that actually make a project successful. Beyond the results, it's the way you elevate the people around you that stands out. I’m betting on your vision, and I can't wait to see what you conquer next.",
        backgroundcolor: '#0D9488'
    },
]

let idx = 1

function updateTestimonial(){
    const { name, position, photo, text, backgroundcolor} = testimonials[idx]
    
    testimonialsContainer.style.backgroundColor = backgroundcolor
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)