import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderArticleComponent } from './components/header-article/header-article.component';
import { VotingComponent } from './components/voting/voting.component';
import { NavigationComponent } from './components/header-article/navigation/navigation.component';
import { ArticleContentComponent } from './components/header-article/article-content/article-content.component';
import { CardComponent } from './components/voting/card/card.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderArticleComponent,
    VotingComponent,
    NavigationComponent,
    ArticleContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
