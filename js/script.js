/*# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.*/

//  Creazione array oggetti post
const postsArray = 
[
{
    id : 1 ,
    authorName : 'Phil Mangione' ,
    authorPicture : 'https://unsplash.it/300/300?image=15',
    date : '07/20/2021',
    postText : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postImage : 'https://unsplash.it/300/200?image=17' ,
    likesNumber : 80 ,
},
{
    id : 2 ,
    authorName : 'Ralph Arnold' ,
    authorPicture : 'https://unsplash.it/300/300?image=13',
    date : '08/20/2021',
    postText : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postImage : 'https://unsplash.it/300/200?image=12' ,
    likesNumber : 58 ,
},
]


// recupero il mio container dei post 

const container = document.getElementById('container');
console.log(container)


// ciclo for per girare l'array
let posts = ''
for(let i=0 ; i<postsArray.length ; i++){
    const {id, authorName, authorPicture, date, postText, postImage, likesNumber} = postsArray[i];
    currentPost = postsArray[i];
    posts += `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${authorPicture}" alt="${authorName}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${authorName}</div>
          <div class="post-meta__time">${date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${postText}
    </div>
    <div class="post__image">
      <img src="${postImage}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${id}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${id}" class="js-likes-counter">${likesNumber}</b> persone</div>
      </div>
    </div>
  </div>`
}


container.innerHTML = posts;


//# MILESTONE-3

// prendo il bottone dal dom
const button = document.querySelectorAll('.like-button');
console.log(button);
for (i=0 ; i< button.length ; i++){
    let currentButtonNode = button[i];
    currentPost = postsArray[i];
    console.log(currentPost);
    currentButtonNode.addEventListener('click' , function(){
        currentButtonNode.classList.add('like-button--liked');
        currentPost.likesNumber += 1  ;
        console.log(currentPost.likesNumber);
    })
}

