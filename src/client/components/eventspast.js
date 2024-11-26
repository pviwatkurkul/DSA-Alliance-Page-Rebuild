const pastEventsData = [
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/66905cc9ca1233916f1e45fb_mira-costa-event-photo%20(1)-p-500.png",
        header:"Harbor Hangout Summer Mixer",
        date:"June 21, 2024",
        location:"DSA Headquarters",
        body:"Our Harbor Hangout event on June 21 was unlike any other in our history. It was our first time welcoming our community into DSA’s new headquarters at Liberty Station!"
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/667b01335ef5a74c7d5f2891_MC%20Main-p-500.png",
        header:"Changing the World with Data: Our Data for Societal Good",
        date:"May 16, 2024",
        location:"USD Nexus Theatre",
        body:"We brought together students and working professionals who were eager to explore data-driven approaches to addressing societal issues."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6630332efb1dbfd3a7df0ed7_mira-costa-event-photo%20(1)-p-500.png",
        header:"April Working Group Meeting",
        date:"April 25, 2024",
        location:"TOAST Cafe",
        body:"Our April working group meeting was a blast–it was filled with the latest updates on DSA's projects and events, and we had insightful conversations about the latest tech trends!"
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6626ee761c21a90b1c26d9ea_mira-costa-event-photo-p-500.png",
        header:"Navigating the Data Science Industry",
        date:"April 18, 2024",
        location:"MiraCosta College",
        body:"Students and working professionals came together for an insightful evening all about breaking into and succeeding in the data science industry!"
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65ef4afc4fced505dbb7789c_event-wit-2024-p-500.png",
        header:"Women in Tech: Impactful Climate & Environmental Sustainability Solutions",
        date:"March 7, 2024",
        location:"UCSD Rady",
        body:"It was an inspiring and empowering evening celebrating the pivotal role women play in the field of environmental and climate technology. In honor of International Women's Day, we partnered with UC San Diego's Rady School of Management to host this event that highlighted the remarkable contributions of women leaders, innovators, and advocates."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65ef4a4e2d4431b3e5e3c985_event-wg-feb22-meeting-2024-p-500.png",
        header:"February Working Group Meeting",
        date:"February 22, 2024",
        location:"TOAST Cafe",
        body:"We loved seeing our working group members and volunteers during the first meeting of 2024! We celebrated last year’s achievements and shared what 2024 has to offer."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65b45294bec3fc1760bbe029_event-holiday-mixer-2023-p-500.png",
        header:"A Holiday with DSA",
        date:"December 7, 2023",
        location:"THE LOT, La Jolla",
        body:"‘Tis the season! There’s nothing like the most wonderful time of the year with our favorite people! We brought together our volunteers, members, donors, interns and core team for an evening of merriment!"
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6578f635753a17ea237b9fa0_event-wg-nov15-meeting-2023-p-500.png",
        header:"November Responsible Data Working Group (RDWG) Meeting",
        date:"November 15, 2023",
        location:"TOAST Cafe (Conference Room)",
        body:"We had an excellent evening during our Q4 RDWG meeting! A new member joined the group and we discussed the final steps in preparing the next version of our framework for publication. We’re ready for another amazing year with everyone!"
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65527963b264a4d9e8fec19a_event-ds-sports-2023-p-500.png",
        header:"Data Science in Sports",
        date:"November 9, 2023",
        location:"Snapdragon Stadium",
        body:"Our Data Science in Sports was a huge success! Data enthusiasts and sports fans alike came together to discuss the interesting ways athletics and analytics collide."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6540330d5deb1beb3e9de5c8_event-ds-nightmares-2023-p-500.png",
        header:"Data Science Nightmares",
        date:"October 26, 2023",
        location:"HDSI Patio at UC San Diego",
        body:"It was a spooktacular evening full of insightful conversations with industry leaders and data enthusiasts at our second annual Data Science Nightmares event."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6504c15ac53c26b60374a251_event-taco-tuesday-2023-p-500.png",
        header:"Taco Tuesday w/ DSA",
        date:"September 12, 2023",
        location:"HDSI Patio at UC San Diego",
        body:"Taco Tuesday with DSA brought together a range of data enthusiasts for an evening full of energetic and insightful conversations about our latest projects and efforts in promoting responsible data science."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64c7ec022abd22a123411ece_event-summermixer-july20-2023%20-p-500.png",
        header:"Summer Mixer: Level Up with Responsible Data Science",
        date:"July 20, 2023",
        location:"THE LOT, La Jolla",
        body:"Our Level Up with Responsible Data Science Summer Mixer was a blast! A panel of gaming industry leaders gave insight on how data collection and machine learning is used to enhance the player experience and innovate game development."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6494e1070393d8d5bf220c95_event-wg-jun21-meeting-2023-p-500.png",
        header:"June Responsible Data Working Group (RDWG) Meeting",
        date:"June 21, 2023",
        location:"TOAST Cafe (Conference Room)",
        body:"We thoroughly enjoyed bringing together our RDWG members for our second meeting of the year! We discussed recent feedback on the Responsible Data Science Framework and we look forward to incorporating the community’s comments in V2."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/645a7ae69ba443044077d6ea_event-wg-apr27-meeting-2023-p-500.png",
        header:"April Responsible Data Working Group (RDWG) Meeting",
        date:"April 27, 2023",
        location:"TOAST Cafe (Conference Room)",
        body:"Our mission to foster an ecosystem of Responsible Data Science (RDS) continues! We were thrilled to host the RDWG for a brainstorming session to discuss the next evolution of the RDS framework and to help us explore new frontiers for RDS advocacy."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6408fbc7e0e5f45ad53f941b_event-women-in-tech-2023-p-500.png",
        header:"The Way Forward for Women in Tech",
        date:"March 02, 2023",
        location:"THE LOT, La Jolla",
        body:"An amazing turnout for a magical evening! Headlined by a phenomenal all-women panel, “The Way Forward for Women in Tech” embraced the spirit of International Women’s Day 2023."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63fe9687a2c7ec69fd96d9d3_event-happy-hour-2023-p-500.png",
        header:"Happy Hour with DSA",
        date:"February 16, 2023",
        location:"TOAST Cafe",
        body:"We had a blast celebrating the product of our collaboration with the Responsible Data Working Group—the first draft of our Responsible Data Science Framework!"
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63a537fc67095220aa552baa_event-dsa-holiday-mixer-2022-p-500.png",
        header:"A Holiday with DSA",
        date:"December 08, 2022",
        location:"Casa de Bandini",
        body:"At our Winter mixer, “A Holiday with DSA'', meaningful connections were made over great food and conversation about Responsible Data Science."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63a537fdd46c1749af335f09_event-dsa-nightmares-2022-p-500.png",
        header:"Data Science Nightmares",
        date:"October 13, 2022",
        location:"Emjaye Inspired",
        body:"Sparking insightful conversations around Responsible Data Science, DSA gathered a spooky crowd of data enthusiasts eager to share an evening of data science nightmares."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63a52e51ee230457c8500cdf_event-dsa-launch-p-500.png",
        header:"DSA Launch Event",
        date:"August 04,2022",
        location:"Farmer & the Seahorse",
        body:"The Data Science Alliance hosted its milestone launch event, An Evening with Mr. Bill Nye. The speaking engagement was attended by more than 150 of the best and brightest in the San Diego data science community."
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63a53aa3c97e6a3ad52a24d4_event-may-meetup-2022-p-500.png",
        header:"May Meetup",
        date:"May 11, 2022",
        location:"Emjaye Inspired",
        body:"We shared our updated Vision and Mission, as well as unveiled our new Membership plan!"
    },
];


const pastEventsContainer = document.querySelector('.grid');
const postPast = () => {
    pastEventsData.map((postData)=>{
        const cardElement = document.createElement('div');
        cardElement.classList.add('pastEventCard');

        cardElement.innerHTML = 
        `
        <img src=${postData.image} class="mainImg" id="event-img"/>
        <div class="pastTextBody">
            <div class="eventHeader" id="past-header">${postData.header} </div>
            <p id="past-event-date">Date</p>
            <p id="past-date-body">${postData.date}</p>
            <p id="past-event-location">Location</p>
            <p id="past-location-body">${postData.location}</p>
            <p id="past-event-body">${postData.body}</p>
        </div>`
        pastEventsContainer.appendChild(cardElement);

    })

}
postPast();