// Activité 1 : Remettre les mots en ordre
const wordsContainer = document.getElementById('words');
const checkOrderButton = document.getElementById('checkOrder');
const feedback1 = document.getElementById('feedback1');

// Ordre correct des mots (de droite à gauche)
const correctOrder = ['الْعَالَمِينَ', 'رَبِّ', 'لِلَّهِ', 'الْحَمْدُ'];

// Afficher les mots mélangés
const words = ['الْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'الْعَالَمِينَ'];
words.sort(() => Math.random() - 0.5);
words.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.className = 'word';
    wordElement.textContent = word;
    wordElement.draggable = true; // Permet de glisser-déposer
    wordsContainer.appendChild(wordElement);
});

// Gestion du glisser-déposer
let draggedWord = null;

wordsContainer.addEventListener('dragstart', (e) => {
    draggedWord = e.target;
    e.target.style.opacity = '0.4'; // Rendre le mot transparent pendant le glissement
});

wordsContainer.addEventListener('dragover', (e) => {
    e.preventDefault(); // Permet de déposer
    const targetWord = e.target;
    if (targetWord.className === 'word' && targetWord !== draggedWord) {
        const wordsArray = Array.from(wordsContainer.children);
        const draggedIndex = wordsArray.indexOf(draggedWord);
        const targetIndex = wordsArray.indexOf(targetWord);

        if (draggedIndex < targetIndex) {
            wordsContainer.insertBefore(draggedWord, targetWord.nextSibling);
        } else {
            wordsContainer.insertBefore(draggedWord, targetWord);
        }
    }
});

wordsContainer.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1'; // Rétablir l'opacité après le dépôt
});

// Vérifier l'ordre
checkOrderButton.addEventListener('click', () => {
    const userOrder = Array.from(wordsContainer.children).map(el => el.textContent.trim()); // Supprimer les espaces inutiles

    // Afficher les mots actuels et l'ordre correct dans la console
    console.log("Mots actuels :", userOrder);
    console.log("Ordre correct :", correctOrder);

    // Comparer les mots un par un (de droite à gauche)
    let isCorrect = true;
    for (let i = 0; i < correctOrder.length; i++) {
        if (userOrder[i] !== correctOrder[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        feedback1.textContent = 'Bravo ! Tu as bien réussi.';
    } else {
        feedback1.textContent = 'Essaie encore ! Le premier mot est "الْعَالَمِينَ".';
    }
});

// Activité 2 : Compléter le verset
const checkWordButton = document.getElementById('checkWord');
const feedback2 = document.getElementById('feedback2');

checkWordButton.addEventListener('click', () => {
    const selectedWord = document.getElementById('wordChoice').value;
    if (selectedWord === 'رَبِّ') {
        feedback2.textContent = 'Félicitations ! Tu as trouvé le bon mot.';
    } else {
        feedback2.textContent = 'Le mot signifie "Seigneur". Essaie encore !';
    }
});