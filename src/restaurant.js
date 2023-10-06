const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);

    const image = document.createElement('img');
    image.src = 'https://tse3.mm.bing.net/th?id=OIP.gq6OnKKYKwfPZN6pJ4Z56QHaFi&pid=Api&P=0&h=180';
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Venky's";
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "At Venky's we prepare the best non-veg and also veg dishes from all over India.Come and give it a try!!";
    pageContent.appendChild(copy);
}

export default createRestaurantHomePage;