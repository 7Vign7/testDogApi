const linkImgDog = "https://dog.ceo/api/breeds/image/random"
const buttonDog = document.createElement('button');
let imgDog = document.querySelector("img");
buttonDog.classList.add('renderButton');
buttonDog.textContent = "CОБАКА!"
document.body.append(buttonDog);

//генерация фоток собак
async function getData(){
    const meta = await fetch(linkImgDog);
    const data = await meta.json();
    renderHappyDogs(data.message);
}

//отрисовка фото собак в браузере
function renderHappyDogs(dataDog){
    const imgDog = document.createElement("img");
    imgDog.src = dataDog;
    buttonDog.append(imgDog);

}

//изменение картинок при нажатии
buttonDog.addEventListener("click", ()=>{
    buttonDog.classList.remove("renderButton");
    buttonDog.textContent = null
     if(imgDog !== null){
        imgDog.remove();
     }
     getData();
});