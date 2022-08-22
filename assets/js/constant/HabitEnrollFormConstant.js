export const CLASSNAME = {
  ENROLL_FORM: 'habit-enroll-form',
  ENROLL_BUTTON: 'habit-enroll-button',
  ENROLL_INPUT: 'habit-enroll-input',
};

export const ENROLL_FORM = {
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
      idName: 'habit-option-location',
      label: '장소',
      isRequired: false,
    },
  },
};
