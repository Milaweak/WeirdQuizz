let questions = [

    [
        "Pourquoi les flamants roses sont-ils roses ?",
        ["Parce qu’ils sont roses, c’est comme ça. Est-ce qu’on demande à Eric Zemmour pourquoi il est blanc?", "Parce qu’ils bouffent trop de crevettes.", "Parce que le plumage, blanc d’origine, absorbe les rayons du soleil mais ne restitue que la couleur rose.", "Parce qu’ils sont hyper girly."],

    ],

    [
        "Laquelle de ces propositions dont on est persuadés qu'elles n'existent pas, existe ?",
        ["La planète Pandora, du film Avatar.", "Le Mordor, du Seigneur des anneaux.", "La planète Tatooine, de Star Wars.", "L’amie noire de Nadine Morano."],

    ],


    [
        "Laquelle de ces informations concernant les réseaux sociaux est vraie ?",
        ["Snapchat conserve toutes vos photos et vidéos et peut vous extorquer comme bon lui semble.", "Facebook peut enregistrer des sons et des vidéos à partir de votre téléphone sans votre consentement.", "Chaque tweet posté aux États-Unis est vérifié par le FBI.", "Personne n’a jamais trouvé de boulot grâce à Linkedin."],

    ],


    ["Parmi ces 4 voitures, laquelle a vraiment existé ?",
        ["La Skoda « Tapina ».", "La Nissan « Gigolo ».", "La Mazda « Laputa ».", "La Fiat « 500 l’amour et 200 la pipe"],

    ],



    ["Comment l'hippopotame fait-il popo ?",
        ["Il disperse ses crottes avec sa queue pour marquer son territoire.", "Il doit arrêter toute activité pour ne faire que ça, tellement c’est long et pénible.", "Il expulse un gros rondin d’un coup et c’est assez spectaculaire.", "Il ne fait jamais caca, d’où sa taille."],

    ],

]

let score = 0;
let goodanswer = [questions[0][1][1], questions[1][1][3], questions[2][1][1], questions[3][1][2], questions[4][1][0]];
let random = 0;



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Quizz() {
    if (questions.length == 0) {
        Win()
        console.log("fjhfjjuc");
    } else {

        random = randomNumber(0, questions.length - 1)
        displayQuestion()
        displayAnswer()
        
    }
}





function displayQuestion() {
    console.log(questions);

    document.querySelector("#quizz").innerHTML = questions[random][0];
    displayAnswer()

}

function displayAnswer() {
    let testbutton = document.querySelectorAll(".button")
    for (let i = 0; i < testbutton.length; i++) {

        testbutton[i].innerText = questions[random][1][i]

    }
}




function splicedStuff() {
    questions.splice(random, 1)
    goodanswer.splice(random, 1)


}

function displayGoodAnswer(element) {
    console.log(goodanswer[random]);
    console.log(element.innerText.toLowerCase());


    if (element.innerText.toLowerCase() == goodanswer[random].toLowerCase()) {
        score++
        document.querySelector("#score").innerHTML = score

        console.log(score);
        splicedStuff();

        Quizz()

    } else {
        console.log("pas gg");
        splicedStuff();

        Quizz()

    }

}



function Win() {
    if (score == 5) {
        document.querySelector("#quizz").innerHTML = "Bravo ! "
        testbutton = document.querySelectorAll(".button")
        for (let i = 0; i < testbutton.length; i++) {
            testbutton[i].style.display = "none";
        }

}else if (score == 4) {
    document.querySelector("#quizz").innerHTML = "C'était un presque parfait !  "
    testbutton = document.querySelectorAll(".button")
    for (let i = 0; i < testbutton.length; i++) {
        testbutton[i].style.display = "none";
    }
}else if (score == 3) {
    document.querySelector("#quizz").innerHTML = "On a vu mieux frérot... "
    testbutton = document.querySelectorAll(".button")
    for (let i = 0; i < testbutton.length; i++) {
        testbutton[i].style.display = "none";
    }


}else if (score == 2) {
    document.querySelector("#quizz").innerHTML = "On dira rien à tes potes... "
    testbutton = document.querySelectorAll(".button")
    for (let i = 0; i < testbutton.length; i++) {
        testbutton[i].style.display = "none";
    }

}else if (score == 1 || score == 0) {
    document.querySelector("#quizz").innerHTML = "L'important c'est de participer (je crois). "
    testbutton = document.querySelectorAll(".button")
    for (let i = 0; i < testbutton.length; i++) {
        testbutton[i].style.display = "none";
    }
}
}
Quizz();