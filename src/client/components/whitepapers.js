const cardData = [
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6631873ffd226d60746f93a0_White%20Paper%202024%20April.png",
        heading:"AI Post-ChatGPT: A Progress Report and Future Forecast ",
        body:"Much like the moment humanity first breached Earth's atmosphere into the vast expanse of space, the advent of ChatGPT and other AI technologies presents a pivotal leap. This white paper analyzes the lessons learned and the insights gained that can guide us toward a future where we mitigate the risks while maximizing the opportunities for innovation, equity, and shared understanding.",
        authors:["Di Le", "Adir Mancebo Jr., Ph.D.", "Hayley Mortin", "Fanny Rancourt"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64481b18e0b2c2aae63ae028_thumbnail_democratizationofai.png",
        heading:"Breaking the Technological Fourth Wall: The Democratization of AI",
        body:"Much like the moment humanity first breached Earth's atmosphere into the vast expanse of space, the advent of ChatGPT and other AI technologies presents a pivotal leap. This white paper analyzes the lessons learned and the insights gained that can guide us toward a future where we mitigate the risks while maximizing the opportunities for innovation, equity, and shared understanding.",
        authors:["Di Le", "Adir Mancebo Jr., Ph.D."]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/638686ec170db7e564c98316_thumbnail_RDS%20White%20Paper.png",
        heading:"Guiding Principles Of Responsible Data Science: How to Build a World Where Data Helps Without Harm",
        body:"Much like the moment humanity first breached Earth's atmosphere into the vast expanse of space, the advent of ChatGPT and other AI technologies presents a pivotal leap. This white paper analyzes the lessons learned and the insights gained that can guide us toward a future where we mitigate the risks while maximizing the opportunities for innovation, equity, and shared understanding.",
        authors:["Adir Mancebo Jr., Ph.D.", "Bradley Voytek, Ph.D.", "Ilkay Altintas, Ph.D.", "Di Le"]
    },

    
];


const cardContainer = document.querySelector('.whitePaperContainer');
const postCards = () => {
    cardData.map((postData)=>{
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const authorsList = postData.authors.map(author => `<div class="list">${author}</div>`).join('');

        cardElement.innerHTML = 
        `
        <a src="">
        <img src=${postData.image} id="card-img"/>
        <div class="boldedText" id="subheader">White Paper</div>
        <div id="card-header">${postData.heading}</div>
        <p id="card-body">${postData.body}</p>
        <div id="author">Authors</div>
        <div class="boldedText">${authorsList}</div>
        </a>`

        cardContainer.appendChild(cardElement);

    })

}
postCards();