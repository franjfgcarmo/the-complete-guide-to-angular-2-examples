import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SendEventDataComponent } from './send-event-data/send-event-data.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { NgForIndexComponent } from './ng-for-index/ng-for-index.component';
import { CustomPropertyBindingComponent } from './custom-property-binding/custom-property-binding.component';
import { CustomPropertyBindingDetailComponent } from './custom-property-binding-detail/custom-property-binding-detail.component';
import { CustomEventBindingComponent } from './custom-event-binding/custom-event-binding.component';
import { CustomEventBindingDetailComponent } from './custom-event-binding-detail/custom-event-binding-detail.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { ViewChildAndDomComponent } from './view-child-and-dom/view-child-and-dom.component';
import { NgContentProjectionComponent } from './ng-content-projection/ng-content-projection.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { ComponentLifecycleDetailComponent } from './component-lifecycle-detail/component-lifecycle-detail.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    EventBindingComponent,
    SendEventDataComponent,
    TwoWayBindingComponent,
    AssignmentTwoComponent,
    NgIfComponent,
    NgIfElseComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    AssignmentThreeComponent,
    NgForIndexComponent,
    CustomPropertyBindingComponent,
    CustomPropertyBindingDetailComponent,
    CustomEventBindingComponent,
    CustomEventBindingDetailComponent,
    LocalReferenceComponent,
    ViewChildAndDomComponent,
    NgContentProjectionComponent,
    ComponentLifecycleComponent,
    ComponentLifecycleDetailComponent,
    AssignmentFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
