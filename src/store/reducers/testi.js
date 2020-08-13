const initialState = {
    cards: [
        {
            id:1,
            name: "Tito Satrio",
            picture: "https://media-exp1.licdn.com/dms/image/C5603AQFQaQcLKfrZMw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=Ai7G3BL3NIP9SNyOkZONhknjtQhnztQ8bCt6FbJMM9k",
            testi: "One of only two people in our class that graduated cum laude. A well-researched person eversince college days which translates well into the field that he is currently in. His memory skill is second to none, his communication outstanding. A proven leader having led a film-focused student organization for years, a self access learning center, and other projects during his time at the university. His adaptation skill is another plus.",
            link: "https://www.linkedin.com/in/tito-satrio-hrgeneralist/"
        },
        {
        id: 2,
        name: "Wei Jie",
        picture: "https://media-exp1.licdn.com/dms/image/C5603AQETuOlTsRhagw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=uDC-6pAimKVuxikJeTtX4kuQrPHQyfHCh9CzbaMJXII",
        testi: "Yogie Arifin is a responsible employee I worked with. He often goes beyond his job scope to ensure that everything went smoothly without any further delay. Will be a great asset to any company in the Service Desk or any available position that suits him within his own strength.",
        link: "https://www.linkedin.com/in/wei-jie-21b18b194/"
        },
        {
            id:3,
            name:"Chlaudya Margareta Mamuaya",
            picture:"https://media-exp1.licdn.com/dms/image/C5603AQGNAcOmlVVOng/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=9Hu2gU05Grg6gqJnkGqe9jC5QEv1uUJnTueShDWwWFo",
            testi:"Yogie is an excellent team leader (scrum master). He is dynamic, focused, committed and enthusiastic. He is always prepared to go that extra mile to help the team be successful. Yogie is great to share ideas with and he will often infuse the team with humor, games and a sense of positive team play. He's a great team player and excellent communicator not just to the teams he has worked with but all those around him as well. It's been a pleasure working with him for the past 1 month.",
            link: "https://www.linkedin.com/in/chlaudya-margareta-mamuaya-a50434118/"
        },
        {
            id:4,
            name:"Galih Depri Lenggana",
            picture:"https://media-exp1.licdn.com/dms/image/C5635AQH07kQE4h970g/profile-framedphoto-shrink_200_200/0?e=1597420800&v=beta&t=MrZDzfglJbKliwvN4q4zwCnd0zpjw_qax4zHe7vaLiI",
            testi:"Yogie's desire to learn is inspiring. He didn't have any IT background and yet was able to learn materials from the classes, and applied it very well to the project we worked together. As a scrum master, he also delivered his job very well. He understood the role and was able to manage the team, keep track of everyone's progress, solve problems. He lead the team to perform well. He's the perfect person to work with if you're looking for a fun, creative, committed, and highly-skilled person.",
            link:"https://www.linkedin.com/in/galih-depri-lenggana/"
        },
        {
            id:5,
            name:"Prada Ayu Nurani",
            picture:"https://media-exp1.licdn.com/dms/image/C5603AQFAnxzJo8LKDw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=UWP19j8RgZ9k0cYjBxsClkzRlkhjojAo8Bb8YHau5mA",
            testi:"Yogie and I attended Glints Academy together. We were in the same team in one of the projects where he was voted as the scrum master. What I can tell you about Yogie is that he is a great team leader and his enthusiastic and positive attitude always brings great atmosphere to the team. He is a driven individual and is willing to go extra miles to achieve set goals. He is someone you would really like to work with in a team.",
            link: "https://www.linkedin.com/in/prada-ayu-nurani-ani-3a7830121/"
        }
    ]
}

const testi = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        default:
            return {
                ...state
            }
    }
}
export default testi;