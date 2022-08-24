export const ENROLL_FORM_CLASSNAME = {
  ENROLL_FORM: 'habit-enroll-form',
  ENROLL_BUTTON: 'habit-enroll-button',
  ENROLL_INPUT_BOX: 'habit-enroll-input-box',
  ENROLL_INPUT: 'enroll-input',
};

export const ENROLL_FORM = {
  title: {
    idName: 'enroll-input-title',
    label: '습관',
    isRequired: true,
  },
  options: {
    time: {
      idName: 'enroll-input-time',
      label: '시간',
      isRequired: false,
    },
    location: {
      idName: 'enroll-input-location',
      label: '장소',
      isRequired: false,
    },
  },
};
