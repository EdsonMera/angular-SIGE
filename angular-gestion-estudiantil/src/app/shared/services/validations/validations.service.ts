import { Injectable } from '@angular/core';
import { ERROS_VALIDATIONS } from '@data/constants/errors/errors-validations.const'; //se agregar para para el error WARNING IN CIRCULAR DEPENDENCY DETECTED
import { ENUM_VALIDATION_OPTIONS } from '@data/enum';
import { IResponseValidation } from '@data/interfaces';



@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  /**
   * 
   * @param value any
   * @param type ENUM_VALIDATION_OPTIONS
   * @returns 
   */

  validateField(value: any, type:  ENUM_VALIDATION_OPTIONS){
    switch(type){
      case ENUM_VALIDATION_OPTIONS.EMAIL:
        return this.validateEmail(value);

      case ENUM_VALIDATION_OPTIONS.PASSWORD:
        return this.validatePassword(value);
        
    }
  }

  private validateEmail(v: any): IResponseValidation {
    const r: IResponseValidation= {msg: '', isValid: true };
    const pattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\])|(([a-zA-Z\.]+\.)+[a-zA-Z]{2,}))$/;
          r.isValid= pattern.test(v);
          r.msg= (v === '') ? ERROS_VALIDATIONS.EMAIL_REQUIRED_FIELD : ERROS_VALIDATIONS.EMAIL_INVALID;
         
          return r;
        
  }

  validatePassword(v: any): IResponseValidation {
    const r: IResponseValidation= {msg: '', isValid: true};
    const pattern= /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/;
    r.isValid= pattern.test(v);
    r.msg=(v === '') ? ERROS_VALIDATIONS.PASSWORD_REQUIRED_FIELD : ERROS_VALIDATIONS.PASSWORD_REQUIRED_PATTERN;
    return r;
  }

  // constructor() { }
}
