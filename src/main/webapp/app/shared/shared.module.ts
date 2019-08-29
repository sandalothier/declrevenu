import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DeclrevenuSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DeclrevenuSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DeclrevenuSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeclrevenuSharedModule {
  static forRoot() {
    return {
      ngModule: DeclrevenuSharedModule
    };
  }
}
