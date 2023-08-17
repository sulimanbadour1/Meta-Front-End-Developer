(function(){
    "use strict";



    const detailsForm = document.querySelector('#destinations_details_form');

    detailsForm.addEventListener('submit' , handleFormSubmit);

    function handleFormSubmit(event){
    event.preventDefault();

    //1- First step ( get the values from the form fields ).
    const desName = event.target.elements['name'].value;
    const desLocation = event.target.elements['location'].value;
    const desPhoto = event.target.elements['photo'].value;
    const desDesc = event.target.elements['description'].value;


    // 2- Clear out the fields
    for( let i = 0 ; i < detailsForm.length ; i ++){
        detailsForm.elements[i].value ='';
    };


    // 3- Create the card here
    let desCard = createDestinationCard(desName,desLocation,desPhoto,desDesc);

    // 4- Change the text of the header 
    var wishListContainer = document.querySelector('#destination_container');
    if (wishListContainer.children.length === 0){
        //
        document.getElementById('title').innerHTML = 'My wish list.'
    }

    // 5- Add the card.
    document.querySelector('#destination_container').appendChild(desCard);
}



function createDestinationCard(name,location,photoURL,description){
    const card = document.createElement("div");
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt', name);

    const constantPhotoUrl = "images/signpost.jpg"
    if(photoURL.length === 0){
        img.setAttribute('src',constantPhotoUrl);
    }else{
        img.setAttribute('src', photoURL);
    }
    card.appendChild(img);
   
    const cardBody = document.createElement("div");
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);


    const cardLocation = document.createElement('h4');
    cardLocation.innerText = location;
    cardBody.appendChild(cardLocation);

    if(description.lenght !==0){
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    var cardDeleteButton = document.createElement('button');
    cardDeleteButton.innerText = "Remove";
    cardDeleteButton.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteButton);
    card.appendChild(cardBody);


    return card;

};


function removeDestination(event){
const card = event.target.parentElement.parentElement;
card.remove();

};



})();



