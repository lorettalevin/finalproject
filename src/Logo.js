body {
    margin: 0;
    /*     border: 3px red solid; */
}

/* ----------------------Logo------------------- */

.logo-container {
    /*         border: 2px blue solid; */
    display: flex;
    justify-content: center;
}

#logo {
    height: 60px;
    width: 250px;
    z-index: 100;
    /* border: 2px red solid; */
}

/* ----------------------Nav Bar------------------- */

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
}

nav li {
    float: left;
}

nav li a {
    display: block;
    color: white;
    /*     text-align: center; */
    padding: 15px 65px;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    font-size: 15px;
    line-height: 25px;
}

nav li a:hover {
    background-color: #b34bc3;
    transition: background-color 0.5s ease;
}

/* --------------------Home------------------------ */

#scissors {
    height: 50px;
    width: 50px;
    margin-top: 3%;
    margin-left: 3%;
    transform: rotate(-32deg);
}

#logo-container {
/*     border: 5px pink solid; */
    background-color: black;
    border-bottom: 5px #00b8ff dashed;
    height: 130px;
    border-image: 2px dashed antiquewhite;
}


#home-container {
/*     border: 2px blue solid; */
    display: flex;
    justify-content:space-evenly
}

/* ------------Registration------------------------ */

#registration-form {
    border: 2px red solid;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.field {
    background-color: #eaeaea;
    color: white;
    height: 30px;
    width: 200px;
    margin: 4%;
}

#registration-button, #login-button {
    border: 2px #12bbee solid;
    font-size: 15px;
    background-color: black;
    color: white;
    height: 35px;
    width: 200px;
}

/* ------------AddScrapbook------------------------ */

.addscrapbook-form-container {
    border: 2px yellow solid;
    padding: 2%;
}

input {
    border-radius: 4px;
}

#theme {
    margin: 3%;
}

.addscrapbook-button {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    background-color: white;
    padding: 5px;
    border: 3px #dddddd double;
    margin: 3%;
}

/* ------------Edit Scrapbook------------------------ */

#chosen-and-edit-form-container {
    border: 5px yellow solid;
    display: flex;
    justify-content: center;

}
#chosen {
    border: 3px red solid;
    order: 1;
}

#edit-form-container {
    border: 3px green solid;
    display: flex;
    width: 200px;




}
#edit-scrapbook-form {
    border: 3px blue solid;
    display: flex;
    flex-direction: column;




}

.edit-field {
    margin: 4%;
}

#addnewpage-button {
    display: flex;
    order: 2;
    height: 40px;
      border: 3px #dddddd double;
}
