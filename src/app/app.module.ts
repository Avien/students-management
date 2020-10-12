import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { FormsModule } from '@angular/forms';
import { StudentFilterPipe } from './shared/pipes/student-filter.pipe';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, StudentsComponent, StudentFilterPipe, StudentCardComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, AngularEditorModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
