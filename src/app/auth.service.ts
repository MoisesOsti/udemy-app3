import * as firebase from 'firebase';

import { Usuario } from './acesso/usuario.model';

export class Autenticacao{
    public cadastrarUsuario(usuario: Usuario): Promise<any>{
        // console.log('Chegamos até ao serviço');

        return firebase.auth()
            .createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                // Deleta senha do objeto usuario
                delete usuario.senha;

                // Registrando dados complementares
                firebase.database().ref(`usuario_detalhe/${btoa( usuario.email) }`)
                        .set( usuario );
            })
            .catch((error: Error) => console.log(error));
    }

    public autenticar(email: string, senha: string): void{
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => console.log(resposta))
            .catch((error: Error) => console.log(error));
    }
}
