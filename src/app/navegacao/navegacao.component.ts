import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { AutenticacaoFirebaseService } from './../servicosinterface/autenticacao-firebase.service';
import { NavegacaoService } from './../servicosinterface/navegacao.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  //Observable
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  //Itens menu principal
  logoMenu='../../assets/imagens/logoBS4.png';
  //Itens de icones e imagens de navegação
  iconeGeral = '../../assets/imagens/ShelfBook.png';
  lIcone = 80;
  aIcone = 80;
  //Controle das rotas do menu
  itensMenu$: Observable<MenuNavegador[]>
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private teleLogin: MatDialog,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegadorService: NavegacaoService,
  ) {
    this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
  }

  abrirLogin(erroMsg: string) {
    this.teleLogin.open(AppLoginComponent, {
      data: erroMsg
    })
  }
  sairUsuario() {
    this.autenticacaoFirebaseService.sairLogin().subscribe(() => {
      this.rotas.navigate([''])
    })
  }
}
