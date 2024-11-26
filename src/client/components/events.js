const upcomingEventsData = [
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/67058d38292b7cc5cf63c78e_Fall%20Event%2011-20-p-800.png",
        header:"Responsible Data Science Bingo Night",
        date:"Wednesday, November 20, from  4:30 pm - 7:30pm",
        location:"DSA Headquarters (2675 Rosecrans St.)",
        link:"https://lu.ma/afxfddfu",
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/67058d5e8ab17101cc4186d4_WinterEvent-1080W-p-800.png",
        header:"A Holiday with DSA",
        date:"Thursday, December 5, from  4:30 pm - 7:30pm",
        location:"DSA Headquarters (2675 Rosecrans St.)",
        link:"https://lu.ma/l8o76mjy",
    }
];


const newEventsContainer = document.querySelector('.subContainer');
const postUpcoming = () => {
    upcomingEventsData.map((postData)=>{

        const cardElement = document.createElement('div');
        cardElement.classList.add('upcomingEventCard');

        cardElement.innerHTML = 
        `
        <img src=${postData.image} class="mainImg"/>
        <div class="textBody" id="upcoming-body">
            <div class="eventHeader">${postData.header} </div>
            <p id="event-date">Date</p>
            <p id="date-body">${postData.date}</p>
            <p id="event-location">Location</p>
            <p id="location-body">${postData.location}</p>
            <button class="buttons" id="event-button" type="button" onclick="location.href='${postData.link}'">get tickets here</button>
        </div>`

        newEventsContainer.appendChild(cardElement);

    });

}
postUpcoming();