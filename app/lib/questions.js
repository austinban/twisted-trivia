export function getQuestionSet(category: string) {
    const popQuestions = [
      {question: 'What was the one-hit wonder band Aqua’s notorious song?', answer: 'Barbie Girl', time: 30},
      {question: 'What is the name of the actress who played Cher in Clueless (movie not show)?', answer: 'Alicia Silverstone', time: 30},
      {question: 'What is the name of the necklace that Jack gives Rose onboard the Titanic?', answer: 'Heart of the Ocean', time: 30},
      {question: 'What Latina pop star was murdered by her own manager?', answer: 'SELENA (rip)', time: 30},
      {question: 'Name the five Spice Girls', answer: 'Posh, Baby, Ginger, Scary, Sporty', time: 30},
      {question: 'In the reality show Newlyweds, which meats do Jessica Simpson infamously confuse for each other?', answer: 'Chicken and Tuna', time: 30},
      {question: 'What is the name of Eminem’s daughter?', answer: 'Hailie', time: 30},
      {question: 'Name the four actors who starred in I Know What You Did Last Summer', answer: 'Jennifer Love Hewitt, Freddie Prinze Jr., Sarah Michelle Gellar, Ryan Phillipe (point per actor)', time: 30},
      {question: 'Who was the frontman of the band 98 degrees?', answer: 'Nick Lachey', time: 30},
      {question: 'Final Points Question: Name as many artists as you can who had a #1 single during the 90s.', answer: '', time: 60},
    ];

    const currentQuestions = [
      {question: 'What is the name of the senator who got particularly heated in defense of Kavanaugh?', answer: 'Lindsey Graham', time: 30},
      {question: 'In which Mexican city did hundreds of migrants protest how slowly the asylum process was going?', answer: 'Tijuana', time: 30},
      {question: 'What did Trump say was the cause of the recent California forest fires?', answer: 'Poor forest control', time: 30},
      {question: 'Who is the prime minister of the UK?', answer: 'Theresa May', time: 30},
      {question: 'Who in the political sphere is currently in hot water for using their personal email?', answer: 'Ivanka Trump', time: 30},
      {question: 'What produce was recently recalled for E. coli?', answer: 'Romaine lettuce', time: 30},
      {question: 'Which country was accused of having a reporter privately assassinated?', answer: 'Saudi Arabia', time: 30},
      {question: 'A ______ is a tax or duty to be paid on a particular class of imports or exports that is currently causing tensions between the US and China?', answer: 'Tariff', time: 30},
      {question: 'Which female reporter got fired for her remarks on whether or not blackface is okay?', answer: 'Megyn Kelly', time: 30},
      {question: 'Name as many US senators as you can', answer: 'https://en.wikipedia.org/wiki/List_of_current_members_of_the_United_States_Senate', time: 60},
    ];

    const filmQuestions = [
      {question: 'Which war movie won the Academy Award for Best Picture in 2009?', answer: 'The Hurt Locker', time: 30},
      {question: 'Spell the name of the director of "Sixth Sense."', answer: 'M. Night Shyamalan', time: 30},
      {question: 'Which 1952 musical comedy tells the story of three performers making the transition from silent movies to "talkies"?', answer: 'Singin\' in the Rain', time: 30},
      {question: 'Which English director was responsible for the epic movie Gladiator in 2000?', answer: 'Ridley Scott', time: 30},
      {question: 'In the Hunger Games films, which two actors portray Haymitch Abernathy and Effie Trinket?', answer: 'Woody Harrison and Elizabeth Banks', time: 30},
      {question: 'What was the name of the whale in the 1993 movie, "Free Willy"?', answer: 'Keiko', time: 30},
      {question: 'What year was Forrest Gump released?', answer: '1994', time: 30},
      {question: 'Who said this and in what movie: “You can’t handle the truth!”', answer: 'Colonel Nathan R. Jessup (Jack Nicholson) in A Few Good Men', time: 30},
      {question: 'Which movie of Christian\'s Bale involved him taking up crash dieting, smoking, and losing 63 pounds to look the part of a emaciated, depressed, and sickened mechanic?', answer: 'The Machinist (2004)', time: 30},
      {question: 'Name as many movies with Nicolas Cage as you can.', answer: 'https://en.wikipedia.org/wiki/Nicolas_Cage_filmography', time: 60},
    ];

    const nashvilleQuestions = [
      {question: 'What is the current estimated metropolitan population? (closest gets the point?)', answer: '1,903,045', time: 30},
      {question: 'Which country singer is accredited with saving the Ryman?', answer: 'Emmylou Harris', time: 30},
      {question: 'What is the name of the river that runs through downtown Nashville?', answer: 'The Cumberland', time: 30},
      {question: 'How many lights are used for "A Country Christmas" at the Opryland Hotel?', answer: '3 million lights', time: 30},
      {question: 'An average of _______ people move to Nashville a day between 2016-2017', answer: '94', time: 30},
      {question: 'Big Loud Records, a Nashville independent record label, recently signed which internet sensation?', answer: 'Mason Ramsey, AKA Walmart Kid', time: 30},
      {question: 'What is Vanderbilt\'s mascot name?', answer: 'Mr. Commodore', time: 30},
      {question: 'The tallest indoor sculpture of the western world is located inside of what Nashville building? Bonus: What is the sculpture of?', answer: '', time: 30},
      {question: 'Googoos, an iconic candy beloved by Nashvillians in particular, are composed of what four ingredients', answer: 'Peanuts, caramel, marshmallow, and milk chocolate', time: 30},
      {question: 'Name as many of the ten Zagat rated best restaurants', answer: 'Hattie B’s Hot Chicken, City House, Rolf and Daughters, Arnold’s Country Kitchen (da fuq?), Mas Tacos, Kayne Prime, Edley’s BBQ, Josephine, Adele’s, Acme Feed & Seed', time: 60},
    ];

    const conspiracyQuestions = [
      {question: 'What is the name of the movement that would impose a totalitarian government thought to be the projected aim of the Illuminati?', answer: 'New World Order', time: 30},
      {question: 'What type of birth is said to be required if you are a Scientologist?', answer: 'A Silent Birth', time: 30},
      {question: 'What book turned movie was made based on the theory that Jesus married Mary Magdalene, had one or more children, and that those children or their descendants emigrated to southern France.', answer: 'The Da Vinci Code', time: 30},
      {question: 'Which pop star do some theorists claim is a grown-up, alive JonBenét Ramsey?', answer: 'Katy Perry', time: 30},
      {question: 'Which two presidents have a shocking amount of eerily mirrored information?', answer: 'Abraham Lincoln and John F. Kennedy', time: 30},
      {question: 'Which infamous city in New Mexico was said to be the sight of a flying saucer crashed from outer space in 1947?', answer: 'Roswell', time: 30},
      {question: 'What reptile do 12 million americans believe are shape-shifting *said reptile* aliens at the top echelon of our government who have been lording power over humans to make them into mindless slaves?', answer: 'Lizards', time: 30},
      {question: 'What 1971 song is said to say “here’s to my sweet Satan” when played backwards?', answer: 'Led Zeppelin’s Stairway to Heaven', time: 30},
      {question: 'Where do some people claim Barack Obama was born?', answer: 'Kenya', time: 30},
      {question: 'What is not seen in photographs that makes people doubt the moon landing?', answer: 'Stars', time: 30},
    ];

    const tickleQuestions = [
      {question: 'Tickle time?', answer: 'Always', time: 30},
    ];

    if(category === 'pop')return( popQuestions );
    if(category === 'current')return( currentQuestions );
    if(category === 'film')return( filmQuestions );
    if(category === 'nashville')return( nashvilleQuestions );
    if(category === 'conspiracy')return( conspiracyQuestions );
    if(category === 'tickle')return( tickleQuestions );
    return null;
}
