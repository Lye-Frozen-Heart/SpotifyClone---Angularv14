import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockRawDataUser from '@data/user.json';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser:any = (mockRawDataUser as any).default;
  let cookieServiceMock: jasmine.SpyObj<CookieService>;
  let clientSpy:{post:jasmine.Spy};


  beforeEach(() => {
    cookieServiceMock = jasmine.createSpyObj<CookieService>('CookieService', ['check', 'set', 'delete']);
    cookieServiceMock.check.and.returnValue(true);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CookieService]
    });
    clientSpy = jasmine.createSpyObj('HttpClient',['post']);
    service = new AuthService(clientSpy as any,cookieServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It shall return an object with "data" and "tokenSession"', (done:DoneFn) => {
    //Arrange
    const user:any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }
    //Act
    clientSpy.post.and.returnValue(
      of(mockResponse)
    );
    service.sendCredentials(user.email, user.password) 
    .subscribe(response => {
      //Assert
      const getProperties = Object.keys(response)
      expect(getProperties).toContain('data'),
      expect(getProperties).toContain('tokenSession')
      done();
    })
  })
});
