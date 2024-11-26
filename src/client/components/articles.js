const cardData = [
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/66905ce7200e9e366e8137b0_MC%20Cover%20(1).png",
        heading:"Harbor Hangout: Dropping Anchor at Our New Location",
        body:"This momentous celebration brought together DSA’s team, volunteers, community partners, and supporters as we showed them our headquarters inside Quarters D at Liberty Station—a historic area formerly used as a Naval training center. Liberty Station is referred to as the “anchor” of San Diego, a concept we are tapping into as we further establish ourselves as the local hub for data enthusiasts.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6644eb174c59e796cc031ee2_MC%20Cover%20(1).png",
        heading:"Changing the World with Data: Our Data for Societal Good Event",
        body:"In today’s rapidly changing world of data science and technology, companies and organizations leverage data in various ways. Data can enhance efficiency, operations, product development, communication, and more. However, one of the most impactful uses of data is to drive positive change on a global scale.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6632a0eeedfd45afe9407a98_MC%20Cover.png",
        heading:"Navigating the Data Science Industry: A Bright Future Ahead",
        body:"It was an inspiring evening of insightful conversations and memorable networking at “Navigating the Data Science Industry” on April 18.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65fc875a941f94ab537a5398_WiT%20Article%20Main%20Photo.png",
        heading:"Empowerment & Inspiration: Women in Tech 2024",
        body:"DSA’s second annual Women in Tech event on March 7 was an outstanding success, leaving a lasting impact on all attendees.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/638686ec170db7e564c98316_thumbnail_RDS%20White%20Paper.png",
        heading:"Guiding Principles Of Responsible Data Science: How to Build a World Where Data Helps Without Harm",
        body:"Much like the moment humanity first breached Earth's atmosphere into the vast expanse of space, the advent of ChatGPT and other AI technologies presents a pivotal leap. This white paper analyzes the lessons learned and the insights gained that can guide us toward a future where we mitigate the risks while maximizing the opportunities for innovation, equity, and shared understanding.",
        authors: ["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65f0a2410d3f078a604b54b8_thumbnail_feb2024_wg_article.png",
        heading:"Sharing New Initiatives & Success from 2023",
        body:"On February 22, the Data Science Alliance (DSA) brought together our Responsible Data Working Group and volunteers to celebrate last year’s achievements and share what 2024 has to offer.",
        authors:["Mehri Sadri"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/655bc08f926b34e76917ae6b_thumbnail_sports_article.png",
        heading:"A Month of Gratitude: Celebrating Support at a Spectacular Event",
        body:"As we head into the end of 2023, we are overwhelmed by the support the Data Science Alliance received this past year—especially at our recent Data Science in Sports event.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/65381db99a82da65902fd908_thumbnail_rdsvsrai_article.png",
        heading:"Responsible Data Science vs. Responsible AI",
        body:"What is responsible data science? Is it different from responsible AI? To understand these domains, we must first define data science and AI and explore how they intersect.",
        authors:["Dr. Adir Mancebo Jr., Ph.D."]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/650b1f2ccdb8ac34f4882267_thumbnail_%20innovation.png",
        heading:"Broadening our reach: A week of networking and collaboration",
        body:"The start of September brought on prominent opportunities for DSA to grow our network and further establish a strong presence in the data science community. As exhibitors for Connect’s Innovation Day 2023—a day all about bringing together San Diego’s tech and life science companies—we had the chance to host an Innovation Week Community Event.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64efbba447382a95e0b3992c_thumbnail_%20openvsclosedarticle.png",
        heading:"With Arms Wide Open (or Not): Navigating Open vs. Closed Development of Powerful AI Models",
        body:"As Generative AI rapidly transitions from a technological novelty to an essential tool for many, a pressing debate emerges: Should its development follow an open-source or a closed-source model? This article delves into this critical discussion, weighing the pros and cons of each method, exploring how to responsibly harness the power of AI for the greater good while minimizing risks.",
        authors:["Dr. Adir Mancebo Jr., Ph.D."]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64dbee718747dd074764fcd4_thumbnail_%20hackathonarticle.png",
        heading:"Expanding Our Reach: A Recap of KDD 2023",
        body:"DSA’s efforts to promote Responsible Data Science (RDS) practices are fueled by passionate data scientists and enthusiasts, so what better way to expand our reach than by attending the Knowledge Discovery and Data Mining (KDD) Conference in Long Beach?",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64c2c1d742cbfd5e3681346e_thumbnail_summermixerarticle.png",
        heading:"Ready Player One: Gaming with Responsible Data Science",
        body:"From Minecraft and Overwatch to Roblox and Among Us, data enthusiasts came together to explore how these interactive games and Responsible Data Science can intersect to shape the future of the entertainment industry at DSA’s “Level Up with Responsible Data Science” Summer Mixer.",
        authors:["Kallyn Hobmann"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64bb10a3fd2a4cab9f43b0fb_thumbnail_%20hackathonarticle.png",
        heading:"A Weekend All About AI: Attending the SDxAI Hackathon",
        body:"San Diego, the world of AI is here! The SDxAI Hackathon held at UC San Diego took place over the weekend of July 15, and two DSA members attended as mentors for the event. Joined by several DSA interns, the team learned more about what a hackathon is, what resources the event provides, the types of projects participants create, and what sets SDxAI apart from the rest.",
        authors:["Leslie Joe"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/64921d9761717060a25d6016_thumbnail_%20dsstudentarticle.png",
        heading:"Embracing the Unexpected: The Expectations & Realities of a Student Data Scientist",
        body:"For many of us, a major in data science didn’t exist when we started our careers. So what’s it like for the next generation of data scientists enrolled in one of these college programs? We get perspective from one of our very own Data Science Alliance interns (and Responsible Data Science ambassadors!), Gurman Dhaliwal.",
        authors:["Gurman Dhaliwal"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/646511627b6cc3ee89dfcafc_thumbnail_%20bradarticle.png",
        heading:"ICYMI: A Rebel Data Scientist ",
        body:'Slackers can be achievers. Rebels can have causes. And there is no definitive template to becoming a data scientist. Case in point: our very own Data Science Alliance Board Member, Dr. Bradley Voytek. Originally published in 2020, his data science "Origin Story" is both extraordinary and relatable.',
        authors:["Data Science Alliance"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63e58e2da3366019f02cb91b_thumbnail_tanerarticle.png",
        heading:"ICYMI: Stories from an Accidental Data Scientist",
        body:"As we all gear up for the challenges of 2023, it's imperative that we reflect on where we’ve been so we can appreciate where we want to go. So it’s the perfect time to share a story you may have missed when it was first published in 2020—the “data scientist” origin story of our very own Data Science Alliance Founder, Taner Halıcıoğlu.",
        authors:["Taner Halıcıoğlu"]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63aba9c4b966f533278041c8_thumbnail_infinityfestival.png",
        heading:"Lights, Camera, Data Science!",
        body:"A new stage. A new audience. A new occasion to champion Responsible Data Science in the Media & Entertainment industry. For two days in November, in a converted soundstage at Goya Studios, DSA took on a unique challenge as a first time exhibitor at Infinity Festival Hollywood 2022.",
        authors:["Michael Limbo","Dr. Adir Mancebo Jr., Ph.D."]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/63e6795e97b39df0c8ffdda6_thumbnail_gdprarticle.png",
        heading:"Data Privacy After GDPR",
        body:"GDPR, the world’s first comprehensive data privacy legislation, went into effect in all member states of the European Union (EU) on May 25, 2018. The regulation, which aims to enhance individuals' control and rights over their personal data, demanded substantial changes to how many businesses operate. After more than four years, it is important to evaluate the effectiveness of such broad legislation on the way companies handle sensitive data and its impact on data privacy awareness around the world.",
        authors:["Dr. Adir Mancebo Jr., Ph.D."]
    },
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/638689302c73141dfd11d3a1_thumbnail_forgingdiversity.png",
        heading:"Forging a Path for Diversity",
        body:"Building a community for diverse data scientists at UCSD — Arely Vasquez is a first-generation college student from Long Beach, California. She is a 4th-year student studying Data Science at UC San Diego graduating in spring of 2021.",
        authors:["Arely Vasquez","Data Science Alliance"]
    },    
    {   
        image: "https://cdn.prod.website-files.com/6347409ef6f0d93ccbc4b0f7/6386893008e9b8acb000fc86_thumbnail_Intersection_of_DataScience.png",
        heading:"The Intersection of Data Science and Public Health in the COVID-19 Pandemic",
        body:'"All science is data science: one of the foundational principles of science is that it is data driven."',
        authors:["Jennifer Lane Bustance"]
    }   
];


const cardContainer = document.querySelector('.articleContainer');
const postCards = () => {
    cardData.map((postData)=>{
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const authorsList = postData.authors.map(author => `<div class="list">${author}</div>`).join('');

        cardElement.innerHTML = 
        `
        <a src="">
        <img src=${postData.image} id="card-img"/>
        <div class="boldedText" id="subheader">Article</div>
        <div id="card-header">${postData.heading}</div>
        <p id="card-body">${postData.body}</p>
        <div id="author">Authors</div>
        <div class="boldedText">${authorsList}</div>
        </a>`
        cardContainer.appendChild(cardElement);

    })

}
postCards();