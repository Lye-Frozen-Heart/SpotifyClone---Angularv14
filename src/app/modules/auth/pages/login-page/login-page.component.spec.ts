import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It must ensure that the authorization login form it's not valid when wrong data is introduced
  //Patern: AAA

  it('Must return invalid from the data introduced❌', () =>{
    //Arrange
    const mockCredentials = {
      email:'0x0x0',
      password:'12341111111111111111111111111111111'
    }

    const emailForm:any = component.formLogin.get('email');

    const passwordForm:any = component.formLogin.get('password');

    //Act

    emailForm?.setValue(mockCredentials.email);

    passwordForm?.setValue(mockCredentials.password);

    //Assert

    expect(component.formLogin.invalid).toBeTruthy();
  });

  it('Must return valid from the data introduced ✅', () =>{
    //Arrange
    const mockCredentials = {
      email:'test@test.com',
      password:'12345678'
    }

    const emailForm:any = component.formLogin.get('email');

    const passwordForm:any = component.formLogin.get('password');

    //Act

    emailForm?.setValue(mockCredentials.email);

    passwordForm?.setValue(mockCredentials.password);

    //Assert
    
    expect(component.formLogin.valid).toBeTruthy();
  });
  
  it('The button must contain "Iniciar Sesión"', () =>{
    // === document.querySelector("button.login.social-btn") ⤵️
    const elementRef = fixture.debugElement.query(By.css('.form-action button.login.social-btn')); 
    const getInnerText = elementRef.nativeElement.innerText;
    expect(getInnerText).toEqual('Iniciar sesión');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
