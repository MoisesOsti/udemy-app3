import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'udemy-app3';

  ngOnInit(): void{

    const config = {
      apiKey: 'AIzaSyBQD6TeNFvkU5FpyX_4gv1jRMMpI1QEAkI',
      authDomain: 'jta-instagram-clone-742d6.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-742d6.firebaseio.com',
      projectId: 'jta-instagram-clone-742d6',
      storageBucket: 'jta-instagram-clone-742d6.appspot.com',
      messagingSenderId: '450014882270',
      appId: '1:450014882270:web:aba761ff5b0411a49d954f'
    };

    firebase.initializeApp( config );
  }

}
