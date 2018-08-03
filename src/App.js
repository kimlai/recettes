import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='app'>
            <nav>
                <ul>
                    <li>
                        <a href='#schwoertemeu'>Schwoertemeu</a>
                    </li>
                    <li>
                        <a href='#hurzelsknepfle'>Hurzelsknepfle</a>
                    </li>
                </ul>
            </nav>
            <div className='recipes'>
                <div className='recipe'>
                    <h1 id='schwoertemeu'>Schwoertemeu</h1>
                    <p>
                        Le <i>Schwoertemeu</i> (ou <i>Presskopf</i>, ou encore <i>Schwardenmage</i>) est une sorte
                        de fromage de tête Alsacien. On fait cuire les abats du cochon (cervelle, pieds, cœur,
                        bas-joues), dont on farcit l'estomac. On refait cuire le tout, puis on le passe au
                        fumoir.
                    </p>
                    <h2>Ingrédients</h2>
                    <ul>
                        <li>Un cochon
                            <ul>
                                <li>Tête</li>
                                <li>Coeur</li>
                                <li>Pieds</li>
                                <li>Estomac</li>
                            </ul>
                        </li>
                        <li>Épices
                            <ul>
                                <li>Poivre</li>
                                <li>Muscade</li>
                                <li>Clou de girofle</li>
                            </ul>
                        </li>
                        <li>Aromates
                            <ul>
                                <li>Bouquet garni (thym, laurier...)</li>
                                <li>Échalotte / Oignon</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>Recette</h2>
                    <ol>
                        <li>
                            Nettoyer et raser les pattes, débarrassées des onglons.
                        </li>
                        <li>
                            <p>
                                Rincer la tête dans plusieurs eaux (la laisser tremper une heure dans
                                de l'eau claire, puis rincer de nouveau). On peut ajouter du vinaigre
                                dans l'eau.
                            </p>
                            <p>
                                On retire la cervelle pour la manger fraiche, et on peut garder les
                                bas-joues pour faire du petit salé.
                            </p>
                            <p>
                                Pour nettoyer les oreilles, on incise à la base du lobe pour pouvoir faire
                                ressortir l'intérieur de l'oreille pour la nettoyer.
                            </p>
                            <p>
                                Trancher le groin pour pouvoir bien nettoyer l'intérieur de la gueule.
                            </p>
                            <p>
                                Couper le coeur en deux et bien le nettoyer.
                            </p>
                        </li>
                        <li>
                            La mettre dans une grande casserole d'eau froide avec un
                            bouquet garni (oignon, clou de girofle, laurier) avec les pattes, bien lavées
                            et rasées.
                        </li>
                        <li>
                            Faire bouillir et écumer.
                        </li>
                        <li>
                            Ajouter le coeur une heure avant la fin (il doit cuire moins longtemps que le reste.
                        </li>
                        <li>
                            Quand tout est bien cuit, séparer les os du reste.
                        </li>
                        <li>
                            Mettre la viande dans un grand plat, laisser refroidir.
                        </li>
                        <li>
                            Quand c'est bien froid, tailler des morceaux, et couper des lamelles fines.
                        </li>
                        <li>
                            Peuler la langue, et la couper en morceaux.
                        </li>
                        <li>
                            Ajouter un bol d'échalottes grises hachées.
                        </li>
                        <li>
                            Ajouter un du jus du cuisson, jusqu'à ce que la consistance soit bonne (le jus
                            va devenir de la gélatine).
                        </li>
                        <li>
                            Saler, poivrer, ajouter un peu de gingembre, et un peu de vinaigre (pas trop,
                            car le vinaigre empêche de prendre).
                        </li>
                        <li>
                            Refaire cuire pour deux bouillons la viande afin de mélanger les épices. Puis
                            laisser refroidir.
                        </li>
                        <li>
                            Note : une tête fait trop de viande pour un estomac.
                        </li>
                        <li>
                            <p>
                                Retirer la première peau de l'estomac à cru (on garde la plus belle, la plus
                                blanche).
                            </p>
                            <p>
                                Attention, si on le fait mal, l'estomac risque de se percer à la cuisson.
                            </p>
                        </li>
                        <li>
                            Placer un entonnoir à l'entrée de l'estomac, et le remplir avec la viande cuite.
                        </li>
                        <li>
                            Ficeler les extrémités de l'estomac une fois rempli.
                        </li>
                        <li>
                            Mettre l'estomac dans une cocotte. Mettre à niveau avec de l'eau froide.
                        </li>
                        <li>
                            Poser une planche à découper sur l'estomac avec un poids dessus (environ 600g en 
                            tout, répartis sur tout la surface de la planche).
                        </li>
                        <li>
                            Faire chauffer jusqu'à faire frémir, environ une heure (pas sûr).
                        </li>
                        <li>
                            Si l'eau est claire, c'est que c'est réussi, sinon il ne reste plus qu'à pleurer.
                        </li>
                        <li>
                            Retirer doucement l'eau avec une louche, sans bouger l'estomac. Attendre le
                            lendemain que ça soit froid.
                        </li>
                        <li>
                            Pour le fumer, prendre une ficelle, et faire une résille tout autour de l'estomac
                            (attention il reste fragile), pour pouvoir le pendre sans qu'il ne s'abime.
                        </li>
                    </ol>
                </div>
                <div className='recipe'>
                    <h1 id='hurzelsknepfle'>Hurzelsknepfle</h1>
                    <p>
                        Les Hurzelsknepfle sont un dessert Alsacien. Ce sont de petits pains briochés
                        cuits à la vapeur dans un fond de caramel.
                    </p>
                    <h2>Ingrédients</h2>
                    <ul>
                        <li>Pains (pâte à brioche)
                            <ul>
                                <li>Farine</li>
                                <li>Oeufs</li>
                                <li>Crème (optionnel)</li>
                                <li>Levure de boulanger</li>
                                <li>Lait</li>
                                <li>Sucre</li>
                            </ul>
                        </li>
                        <li>Caramel
                            <ul>
                                <li>Sucre (15 morceaux pour une dizaine de hurzelsknepfle)</li>
                                <li>Eau</li>
                                <li>Saindou (ou de l'huile d'olive)</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>Recette</h2>
                    <ol>
                        <li>
                            Faire une pâte à brioche, puis en faire des boules de la taille
                            d'un gros oeuf.
                        </li>
                        <li>
                            Mettre le sucre dans d'huile chaude, faire carmaméliser, et ajouter un
                            bol d'eau.
                        </li>
                        <li>
                            Prendre les boules de pâte levée, et les déposer dans le caramel, et couvrir.
                        </li>
                        <li>
                            Surtout, ne plus soulever le couvercle.
                        </li>
                        <li>
                            Lorsqu'on entend crépiter, c'est que c'est cuit. Alors on retirer le couvercle
                            d'un coup sec, pour éviter de faire tomber de l'eau dans la casserole.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
