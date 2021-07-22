/*MAIN COURSE'S FUNCTIONS*/

function selectionMain(clicked) {
    if (clicked === '1') {
        document.getElementById(clicked).style.border = '5px solid #32B72F';
        document.getElementById('2').style.border = '0';
        document.getElementById('3').style.border = '0';     
    }
    else if (clicked === "2") {
        document.getElementById('1').style.border = '0';
        document.getElementById(clicked).style.border = '5px solid #32B72F';
        document.getElementById('3').style.border = '0';
    }
    else {
        document.getElementById('1').style.border = '0';
        document.getElementById('2').style.border = '0';
        document.getElementById(clicked).style.border = '5px solid #32B72F';
    }      
}

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

/*DRINKS' FUNCTIONS*/

function selectionDrinks(clicked) {
    if (clicked === '4') {
        document.getElementById(clicked).style.border = '5px solid #32B72F';
        document.getElementById('5').style.border = '0';
        document.getElementById('6').style.border = '0';     
    }
    else if (clicked === "5") {
        document.getElementById('4').style.border = '0';
        document.getElementById(clicked).style.border = '5px solid #32B72F';
        document.getElementById('6').style.border = '0';
    }
    else {
        document.getElementById('4').style.border = '0';
        document.getElementById('5').style.border = '0';
        document.getElementById(clicked).style.border = '5px solid #32B72F';
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

/*DESSERTS' FUNCTIONS*/

function selectionDesserts(clicked) {
    if (clicked === '7') {
        document.getElementById(clicked).style.border = '5px solid #32B72F';
        document.getElementById('8').style.border = '0';
        document.getElementById('9').style.border = '0';     
    }
    else if (clicked === "8") {
        document.getElementById('7').style.border = '0';
        document.getElementById(clicked).style.border = '5px solid #32B72F';
        document.getElementById('9').style.border = '0';
    }
    else {
        document.getElementById('7').style.border = '0';
        document.getElementById('8').style.border = '0';
        document.getElementById(clicked).style.border = '5px solid #32B72F';
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


