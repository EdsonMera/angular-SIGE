import { ERROS_VALIDATIONS } from "@data/constants/errors/errors-validations.const";
import { ENUM_VALIDATION_OPTIONS } from "@data/enum";
import { IField } from "@data/interfaces"
import { ValidationsService } from "@shared/services/validations/validations.service";
// import { ValidationsService } from "@shared/services/validations/validations.service";

export const CONST_LOGIN_PAGE: {
    FORM: {
        email: IField;
        password: IField;
    }
    
} = {
    FORM: {
        email: {
            val: '',
            error: ERROS_VALIDATIONS.EMAIL_REQUIRED_FIELD,
            isValid(){
                const validationsService= new ValidationsService();
                const validateEmail= validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.EMAIL);
                this.error= validateEmail.msg;
                return validateEmail.isValid;
            }
        },
        password: {
            val: '',
            error: ERROS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid(){
                const validationsService = new ValidationsService();
                const validatePassword= validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.PASSWORD);
                this.error= validatePassword.msg;
                return validatePassword.isValid;

            }
            
        }
    }
}