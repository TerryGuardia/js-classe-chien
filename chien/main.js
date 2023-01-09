class Chien {

    qut_journa;
    qut_total = 0;

    /**Créer et initialise les objets de la classe horloge.
     * @param {string} nom
     * @param {number} age
     * @param {string} race
     */
    constructor(nom, age, race) {
        this.nom = nom;
        this.age = age;
        this.race = race;
    }
    /**Fonction son aboiment.
     * @param {string} params
     */
    aboie(params) {
        console.log(params);
    }
    /**Fonction quantité manger par jour.
     * @param {number} x
     */
    mange(x) {
        this.qut_journa = x;
    }
    //Fonction pour ajouté la quantité manger journalier au total.
    mange_total() {
        this.qut_total += this.qut_journa;
    }
}
//Création des objets.
let chienA = new Chien('jade', '7 ans', 'Epagneul breton');
let chienB = new Chien('julie', '11 ans', 'braque');
console.log(chienA, chienB);

function nourrir(params) {
    chienA.mange(params);
    console.log(chienA.qut_journa);
    chienA.mange_total();
}
function nourrir_total() {
    chienA.mange_total();
    console.log(chienA.qut_total);
}
nourrir(500);
nourrir(600);
nourrir_total();
chienA.aboie('woof woof');

// class Chien {
//     qut = 0;

//     constructor(nom, age, race) {
//         this.nom = nom;
//         this.age = age;
//         this.race = race;
//     }

//     aboie(aboie) {
//         return aboie;
//     }
//     mange(params) {
//         this.qut += params;
//     }
//     mange_total() {
//         return this.qut;
//     }
// }

// let chienA = new Chien('jade', 8, 'braque');
// console.log(chienA);
// console.log(chienA.aboie('wouaf'));
// chienA.mange(2);
// chienA.mange(2);
// chienA.mange(2);
// console.log(chienA.mange_total());