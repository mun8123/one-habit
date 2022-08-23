export const Title = title => {
  return `<h1>${title}</h1>`;
};

export const Text = (text, className) => {
  return `<div class="${className}">${text}</div>`;
};

export const Button = (text, className) => {
  return `<button class="${className}">${text}</button>`;
};

export const Input = (
  idName,
  label,
  placeholder,
  isRequired = false,
) => {
  const requiredAttribute = isRequired ? 'required' : '';
  return `<label for="${idName}">${label}</label>
    <input id="${idName}" type="text" placeholder="${placeholder}" ${requiredAttribute}></input>`;
};
