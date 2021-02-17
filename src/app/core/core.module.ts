import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CardComponent } from '../components/voting/card/card.component';
import { ArticleContentComponent } from '../components/header-article/article-content/article-content.component';
import { HeaderArticleComponent } from '../components/header-article/header-article.component';
import { NavigationComponent } from '../components/header-article/navigation/navigation.component';
import { VotingComponent } from '../components/voting/voting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoreComponent,
    HeaderArticleComponent,
    VotingComponent,
    NavigationComponent,
    ArticleContentComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CoreComponent,
    HeaderArticleComponent,
    VotingComponent,
    NavigationComponent,
    ArticleContentComponent,
    CardComponent
  ]
})
export class CoreModule { }
