const cardData = [
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/667c90f469444742b256f869_Q2-2024-large.png",
        heading:"Q2 2024 Data Points",
        body:"We officially opened our headquarters at Liberty Station in Point Loma this quarter—a major turning point in our organization’s growth. DSA also formed new partnerships, published a new white paper and case study, and hosted memorable events!"
    },
    {
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6605dbe26a104304d696dadb_q1-2024-newsletter-mailchimp-banner.png",
        heading:"Q1 2024 Data Points",
        body:"The first three months of 2024 were all about laying the foundation for a year filled with potential, impact, and the power of data science. Milestones were reached, and new relationships were formed—and we’re just getting started!"
    },
    {
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65bbfbad83eec2117755c409_thumbnail_annual_impact_report_2024.png",
        heading:"DSA Annual Impact Report 2023",
        body:"As we reflect on 2023, we want to truly thank you for all of your support. Whether you donated, attended an event, or volunteered your time, it is your generosity that allowed us to reach major milestones as we continue to foster a Responsible Data Science ecosystem."
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/658476efeb7ee36c816bc9a3_thumbnail_q423newsletter.png",
        heading:"Q4 2023 Data Points",
        body:"From hosting multiple events and exhibiting at conferences to making great strides in our various projects, we’re proud to share with you everything we’ve accomplished in recent months."
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65146274bc4fece49c0ec9eb_thumbnail_q323newsletter.png",
        heading:"Q3 2023 Data Points",
        body:"The past three months have been marked by unwavering dedication and growth in our mission to promote responsible data science practices. From hosting events to exhibiting at conferences, our presence in the community continues to strengthen."
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/649db26bdff645154baed678_thumbnail_q223newsletter.png",
        heading:"Q2 2023 Data Points",
        body:"It was a successful Q2, from announcing our new partnership with the Joan & Irwin Jacobs Center for Health Innovation at UCSD Health to taking major steps forward in our Food Bank project and RDS game. Learn more about some exciting events you can attend and everything else we have planned in the coming months!"
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6419ff532e4016133ca734b0_thumbnail_q123newsletter.png",
        heading:"Q1 2023 Data Points",
        body:'The Data Science Alliance (DSA) had a phenomenal start to 2023! Let’s reflect on all the amazing things we accomplished together in Q1, from the publication of our first draft of the Responsible Data Science Framework to the extraordinary experience of "The Way Forward for Women in Tech."'
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/640276a9a0693e0e8a6d5028_thumbnail_annualimpactreport2022.png",
        heading:"DSA Annual Impact Report 2022",
        body:"We are thrilled to share with you our 2022 Annual Impact Report. Thank you for your support, generosity, and commitment to Responsible Data Science (RDS). We hope that as you reflect on the important work we’ve done together, you see the limitless potential for what we can do in 2023."
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63a5521ed46c17110b348340_thumbnail_q422newsletter.png",
        heading:"Q4 2022 Data Points",
        body:"The Q4 edition of Data Points has arrived! We invite you to give it a read and reflect on some of our best moments of the quarter. It has been a truly rewarding experience advocating for Responsible Data Science through our events and projects; and your support has made all the difference."
    },
    {
        image:"https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63af812fea6dbc325ad33bf3_thumbnail_oct22newsletter.png",
        heading:"Q3 2022 Data Points",
        body:"It’s finally here—our first newsletter of 2022!"
    }
    
];


const cardContainer = document.querySelector('.cardContainer');
const postCards = () => {
    cardData.map((postData)=>{
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = 
        `
        <a src="">
        <img src=${postData.image} id="card-img"/>
        <div id="card-header">${postData.heading}</div>
        <p id="card-body">${postData.body}</p>
        </a>`

        cardContainer.appendChild(cardElement);

    })

}
postCards();