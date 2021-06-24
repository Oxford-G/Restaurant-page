const createTitle = () => {
  const title = document.createElement('h3');
  title.classList.add('title-header', 'text-center', 'py-5');
  title.textContent = 'Contact';
  return title;
};