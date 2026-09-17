import { FormControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
  static notOnlyWhiteSpace(control: FormControl): ValidationErrors | null {
    if (control.value != null && control.value.trim().length === 0) {
      return { notOnlyWhiteSpace: true };
    } else {
      return null;
    }
  }

  static forbiddenWord(words: string[]) {
    return (control: FormControl): ValidationErrors | null => {
      let result = null;
      words.forEach(word => {
        const regExp = new RegExp(word, 'i');
        const forbidden = regExp.test(control.value);
        if (forbidden) result = { forbiddenWord: { value: control.value } };
      });
      return result;
    };
  }
}
