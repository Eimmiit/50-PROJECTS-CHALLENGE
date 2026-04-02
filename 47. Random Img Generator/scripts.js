const container = document.querySelector('.container')
const unsplashURL = 'https://i.pravatar.cc/'
const rows = 10
// 'https://source.unsplash.com/random/'
for (let i = 0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}


function getRandomSize(){
    return `${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 100
}