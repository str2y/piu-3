import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonAlert,
  setupIonicReact,
  IonContent
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

let output = document.getElementById('output');
function fetchData() {
   fetch('https://api.kanye.rest')
   .then(response => response.json())
   .then(data => {
      output.innerHTML += "Kanye :" + data.quote + "<br/>"; 
   })
}





setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonContent>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <body>
   
    <div class="myDiv">
        <h1>
    Bem-vindo ao meu site
        </h1>
        <p>Este é um parágrafo de exemplo.
        </p>
       
        <IonButton id="present-alert">Clique Aqui</IonButton>
      <IonAlert
        trigger="present-alert"
        message= "Call Kanye?"
        buttons={[
                {
                  text: "yes",
                  handler: () =>{fetchData();}
                }
        ]}
      ></IonAlert>

    </div> 
    <div id = "output"> </div>    
    <div class="myDiv">
        <h2>Seção importante</h2>
        <p>Esta é uma seção com conteúdo relevante.</p>
    </div>
    
    <img src="logo.png"/>
    </body>
    </IonContent>
  </IonApp>
);

export default App;
