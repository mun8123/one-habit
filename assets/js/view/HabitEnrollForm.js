import { Input } from './Element.js';
import { PLACEHOLDER } from '../constant/constant.js';
import { CLASSNAME, ENROLL_FORM } from '../constant/HabitEnrollFormConstant.js';

export default class HabitEnrollForm {
  inputTemplate = elementData => {
    const [_, { idName, label, isRequired }] = elementData;
    const placeholder = isRequired
      ? PLACEHOLDER.requiredInput
      : PLACEHOLDER.optionalInput;
    return Input(idName, label, placeholder, isRequired);
  };

  formTemplate = () => {
    const [title, [_, options]] = Object.entries(ENROLL_FORM);
    const optionsToArray = Object.entries(options);

    return `<form class="${CLASSNAME.ENROLL_FORM}">
    ${this.inputTemplate(title)}
    ${optionsToArray.reduce(
      (optionsTemplate, option) =>
        (optionsTemplate += this.inputTemplate(option)),
      '',
    )}
    <input class="${CLASSNAME.ENROLL_BUTTON}" type="submit" value="등록">
  </form>`;
  };
}
