import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app.component';
import { CONTACT_GATEWAY } from './core/interfaces/contact-gateway.interface';
import { ContactApiService } from './core/services/contact-api.service';
import { HomePageComponent } from './features/home-page/home-page.component';

describe('App & HomePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HomePageComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CONTACT_GATEWAY, useExisting: ContactApiService },
      ],
    }).compileComponents();
  });

  it('should create the root app shell', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Bigezo corporate hero headline and Our Products section', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Advanced Custom Software Solutions'
    );
    expect(compiled.querySelector('#products')?.textContent).toContain('Our Products');
    expect(compiled.querySelector('#products')?.textContent).toContain('Somero');
    expect(compiled.querySelector('#products')?.textContent).not.toContain('Ecopharm Pharmacy CRM');
    expect(compiled.querySelector('#products')?.textContent).not.toContain('RichieArt');
    expect(compiled.querySelector('#experience')?.textContent).toContain(
      'Advanced Apps / Digital Products'
    );
    expect(compiled.querySelector('#experience')?.textContent).not.toContain(
      'Selected Websites Designed'
    );
  });
});
