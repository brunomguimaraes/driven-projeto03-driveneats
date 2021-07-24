function checkIconMain(active) {
    if (active === 'icon1') {
        document.getElementById(active).style.display = 'initial';
        document.getElementById('icon2').style.display = 'none';
        document.getElementById('icon3').style.display = 'none';
    }

    else if (active === 'icon2') {
        document.getElementById('icon1').style.display = 'none';
        document.getElementById(active).style.display = 'initial';
        document.getElementById('icon3').style.display = 'none';
    }

    else {
        document.getElementById('icon1').style.display = 'none';
        document.getElementById('icon2').style.display = 'none';
        document.getElementById(active).style.display = 'initial';
    }
}

function checkIconDrinks(active) {
    if (active === 'icon4') {
        document.getElementById(active).style.display = 'initial';
        document.getElementById('icon5').style.display = 'none';
        document.getElementById('icon6').style.display = 'none';
    }

    else if (active === 'icon5') {
        document.getElementById('icon4').style.display = 'none';
        document.getElementById(active).style.display = 'initial';
        document.getElementById('icon6').style.display = 'none';
    }

    else {
        document.getElementById('icon4').style.display = 'none';
        document.getElementById('icon5').style.display = 'none';
        document.getElementById(active).style.display = 'initial';
    }    
}

function checkIconDesserts(active) {
    if (active === 'icon7') {
        document.getElementById(active).style.display = 'initial';
        document.getElementById('icon8').style.display = 'none';
        document.getElementById('icon9').style.display = 'none';
    }

    else if (active === 'icon8') {
        document.getElementById('icon7').style.display = 'none';
        document.getElementById(active).style.display = 'initial';
        document.getElementById('icon9').style.display = 'none';
    }

    else {
        document.getElementById('icon7').style.display = 'none';
        document.getElementById('icon8').style.display = 'none';
        document.getElementById(active).style.display = 'initial';
    }    
}

function mainelection (mainSelected) {
    const selectedItem = document.querySelector('.main-course .option-border'); 

    if (selectedItem !== null) {
        selectedItem.classList.remove('option-border');
    } 
    
    mainSelected.classList.add('option-border');      
}

function drinkSelection (drinkSelected) {
    const selectedItem = document.querySelector('.drinks .option-border');

    if (selectedItem !== null) {
        selectedItem.classList.remove('option-border');
    }

    drinkSelected.classList.add('option-border');
}

function dessertSelection (dessertSelected) {
    const selectedItem = document.querySelector('.desserts .option-border');

    if (selectedItem !== null) {
        selectedItem.classList.remove('option-border');
    }

    dessertSelected.classList.add('option-border');    
}

function finishOrder () {

    const selectedMain = document.querySelector('.main-course .option-border');
    const selectedDrink = document.querySelector('.drinks .option-border');
    const selectedDessert = document.querySelector('.desserts .option-border');

    const activeButton = document.querySelector('.active-button');
    const inactiveButton = document.querySelector('.inactive-button');


    if ((selectedMain!== null) && (selectedDrink !== null) && (selectedDessert !== null)) {
        activeButton.classList.remove('hide-class');
        inactiveButton.classList.add('hide-class');
    }  
}

