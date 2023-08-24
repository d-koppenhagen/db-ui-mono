import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
	DBButtonModule,
	DBCardModule,
	DBDividerModule,
	DBIconModule,
	DBInputModule,
	DBPageModule,
	DBHeaderModule,
	DBBrandModule,
	DBLinkModule,
	DBCheckboxModule,
	DBRadioModule,
	DBCodeDocsModule,
	DBAlertModule,
	DBSectionModule,
	DBInfotextModule,
	DBSelectModule,
	DBDrawerModule,
	DBTagModule,
	DBNavigationItemModule,
	DBAccordionModule,
	DBAccordionItemModule,
	DBMainNavigationModule,
	DBBadgeModule
} from '../../../../output/angular/src';
import { ActionBarDirective } from '../../../../output/angular/src/components/header/ActionBar.directive';
import { NavigationDirective } from '../../../../output/angular/src/components/header/Navigation.directive';
import { MetaNavigationDirective } from '../../../../output/angular/src/components/header/MetaNavigation.directive';
import { NavigationContentDirective } from '../../../../output/angular/src/components/navigation-item/NavigationContent.directive';
import { BadgeComponent } from './components/badge/badge.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { InputComponent } from './components/input/input.component';
import { AlertComponent } from './components/alert/alert.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InfotextComponent } from './components/infotext/infotext.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { DefaultComponent } from './components/default.component';
import { TagComponent } from './components/tag/tag.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SelectComponent } from './components/select/select.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

@NgModule({
	declarations: [
		AccordionItemComponent,
		AccordionComponent,
		MainNavigationComponent,
		BadgeComponent,
		NavigationItemComponent,
		SelectComponent,
		TagComponent,
		AppComponent,
		DefaultComponent,
		FormComponent,
		ButtonComponent,
		InputComponent,
		LinkComponent,
		AlertComponent,
		RadioComponent,
		CheckboxComponent,
		InfotextComponent,
		SectionComponent,
		CardComponent,
		DividerComponent,
		DrawerComponent,
		ActionBarDirective,
		NavigationDirective,
		MetaNavigationDirective,
		NavItemComponent,
		NavigationContentDirective
	],
	imports: [
		DBAccordionItemModule,
		DBAccordionModule,
		DBBadgeModule,
		DBMainNavigationModule,
		DBNavigationItemModule,
		DBTagModule,
		DBSelectModule,
		AppRoutingModule,
		BrowserModule,
		DBButtonModule,
		DBIconModule,
		DBDividerModule,
		DBCardModule,
		DBInputModule,
		DBPageModule,
		DBHeaderModule,
		DBBrandModule,
		DBLinkModule,
		DBCodeDocsModule,
		DBAlertModule,
		DBSectionModule,
		DBInfotextModule,
		FormsModule,
		ReactiveFormsModule,
		DBCheckboxModule,
		DBRadioModule,
		DBDrawerModule
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
