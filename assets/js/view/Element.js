export const Title = title => {
  return `<h1>${title}</h1>`;
};

export const Text = (text, className) => {
  return `<div class="${className}">${text}</div>`;
};

export const Button = text => {
  return `<button>${text}</button>`;
};

export const Input = (
  idName,
  className,
  label,
  placeholder,
  isRequired = false,
) => {
  const requiredAttribute = isRequired ? 'required' : '';
  return `<label for="${idName}">${label}</label>
    <input id="${idName}" class="${className}" type="text" placeholder="${placeholder}" ${requiredAttribute}></input>`;
};
