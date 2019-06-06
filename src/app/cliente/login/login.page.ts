import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string = null;
  private pws: string = null;

  constructor(private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onSubmit(from){
    this.Login()
  }

Login(){
  this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pws)
  .then(
    res => {
      console.log(res);
    }
    ,
    err => {
      console.log("Usuario não localizado!" + err);
    }
  ).catch(
    err => {
      console.log("erro ao conectar");
    }
  )

    }
    loginGoogle() {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout() {
      this.afAuth.auth.signOut();
    }
}