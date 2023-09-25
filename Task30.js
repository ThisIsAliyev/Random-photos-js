function backgroundİmg() {
    const divElements = document.querySelectorAll('div');

    divElements.forEach((element) => {
        let randomNumber = Math.floor(Math.random() * 1000);
        let randomImage = `url(https://picsum.photos/300?random=${randomNumber})`;
        element.style.backgroundImage = randomImage;
    });
};
backgroundİmg();

function addNewImg() {
    for(let i = 0;i<10;i++) {
        let newDiv = document.createElement('div');
        let section = document.querySelector('section');

        section.appendChild(newDiv);

        randomNumber = Math.floor(Math.random() * 1000);
        randomImage = `url(https://picsum.photos/300?random=${randomNumber})`;
        newDiv.style.backgroundImage = randomImage;
        document.querySelector('section').style.gridTemplateColumns = '250px 250px 250px 250px'
    }
}