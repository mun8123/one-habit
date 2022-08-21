import { Input } from './Element.js';
import { PLACEHOLDER } from '../constant.js';

const ENROLL_FORM = {
  title: {
    idName: 'habit-title',
    label: '습관',
    isRequired: true,
  },
  options: {
    time: {
      idName: 'habit-option-time',
      label: '시간',
      isRequired: false,
    },
    location: {
      idName: 'habit-option-lacation',
      label: '장소',
      isRequired: false,
    },
  },
};

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

    return `<form class="habit-enroll-form">
    ${this.inputTemplate(title)}
    ${optionsToArray.reduce(
      (optionsTemplate, option) =>
        (optionsTemplate += this.inputTemplate(option)),
      '',
    )}
    <input class="habit-enroll-button" type="submit" value="등록">
  </form>`;
  };

  submit = () => {};
}
