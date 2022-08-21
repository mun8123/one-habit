export const Input = defaultValue => {
  return `<input type="text" class="title-edit" value="${defaultValue}"/>`;
};

export const Title = title => {
  return `<h1>${title}</h1>`;
};

export const Text = (text, className) => {
  return `<div class="${className}">${text}</div>`;
};

export const Button = text => {
  return `<button>${text}</button>`;
};
