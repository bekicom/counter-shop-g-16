

let mevalar = [
    {
        id: 0,
        name: "shaftoli",
        narxi: 15,
        count: 1,
        img: "./img/1.png",
        like: true,
        chegirma: 15
    },
    {
        id: 1,
        name: "shaftoli 1",
        narxi: 15,
        count: 1,
        img: "./img/2.png",
        like: true,
        chegirma: 15
    },
    {
        id: 2,
        name: "shaftoli 2",
        narxi: 15,
        count: 1,
        img: "./img/3.png",
        like: true,
        chegirma: 15
    },
    {
        id: 3,
        name: "shaftoli 3",
        narxi: 15,
        count: 1,
        img: "./img/4.png",
        like: true,
        chegirma: 15
    },
    {
        id: 4,
        name: "shaftoli 5",
        narxi: 25,
        count: 1,
        img: "./img/5.png",
        like: true,
        chegirma: 15
    },
    {
        id: 5,
        name: "shaftoli 5",
        narxi: 25,
        count: 1,
        img: "./img/5.png",
        like: true,
        chegirma: 15
    }
];

let cards = document.querySelector(".cards");
function mevalarBaza() {
    cards.innerHTML = ""
    mevalar.forEach((meva, i) => {
        cards.innerHTML += `
        <div class="card">
        <div class="card-header">
            <p>15%Off</p>
            <button><img src="img/like.svg" alt=""></button>
        </div>
        <div class="card-body">
            <img src="${meva.img}" alt="">
            <h2>${meva.name}</h2>
               <p>$${parseInt(meva.narxi - (meva.narxi / 100 * meva.chegirma))} <s>$${meva.narxi}</s></p>
        </div>
        <div class="card-footer">
            <div class="count">
                <button class="btn btn-minus" onclick="minus(${i})">-</button>
                <p>${meva.count}</p>
                <button class="btn btn-plus" onclick="plus(${i})">+</button>
            </div>
            <div>
                <img src="img/savat.svg" alt="">
            </div>
        </div>
    </div>
        `
    })
}
mevalarBaza()
const minus = (i) => {
    console.log();
    if (mevalar[i].count > 0) {
        mevalar[i].count = mevalar[i].count - 1
    }
    mevalarBaza()
}
const plus = (i) => {
    console.log();
    mevalar[i].count = mevalar[i].count + 1
    mevalarBaza()
}