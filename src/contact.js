const createContactPage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    pageContent.appendChild(heading);

    const number = document.createElement('h3');
    number.textContent = '9886729445';
    pageContent.appendChild(number);

}

export default createContactPage;