const createMenuPage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    // content.appendChild(pageContent);

    const heading = document.createElement('h1');
    heading.textContent = "Menu";


    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Gobi Manchurian';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Chicken Biryani';
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;