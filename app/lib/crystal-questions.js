export function getQuestionSet(category: string) {
    const crystal1 = [
      {question: 'What was the month and year that Crystal launched with an article in the Huffington Post? (bonus point for the correct date)', answer: 'March 25th, 2015', time: 30},
      {question: 'What programming language was the first version of Crystal written in?', answer: 'PHP', time: 30},
      {question: 'What was ALMOST Crystal\'s primary color before Drew was talked into keeping it blue?', answer: 'Purple', time: 30},
      {question: 'What does GDPR stand for?', answer: 'General Data Protection Regulation', time: 30},
      {question: 'Which tech CEO and Crystal supporter recently purchased Time Magazine?', answer: 'Marc Benioff', time: 30},
      {question: 'What adorable cartoon character did Jona dress up as when he came to Nashville for Crystal Meetup during Halloween of 2016?', answer: 'A Care Bear', time: 30},
      {question: 'Chris Cole has been on the front page of Crystal since 2016, sitting on a couch with a girl. What is her first name? ', answer: 'Haley', time: 30},
      {question: 'What famous D personality - a true Shark - sent Crystal its first cease-and-desist letter in 2015?', answer: 'Barbara Corcoran', time: 30},
      {question: 'There are currently 5 companies with more than 1,000 Crystal users. Who are they?', answer: 'Oracle, GE, Randstad, Salesforce, Accenture', time: 60},
      {question: 'Name as many Crystal investors and/or official advisors as you can (both companies and individuals).', answer: 'Drew will approve answers.', time: 60},
    ];

    const crystal2 = [
      {question: 'What type of animal is typically associated with the pscyhological concept of classical conditioning?', answer: 'Dogs', time: 30},
      {question: 'William Marston was famous for creating DISC, the polygraph, and what famous super hero?', answer: 'Wonder Woman', time: 30},
      {question: 'What is at the "top" of Maslow\'s heirarchy of needs?', answer: 'Self-actualization', time: 30},
      {question: 'Someone who suffers from papyrophobia would be afraid of what?', answer: 'Paper', time: 30},
      {question: 'In 1971, an infamous experiment was conducted in a prison to discover the psychological effects of perceived power. Which university ran the experiment?', answer: 'Stanford University', time: 30},
      {question: 'Which psychologist is often synonymous with making an unintentional verbal error that reveals subconscious feelings?', answer: 'Sigmund Freud', time: 30},
      {question: 'What psychological disorder did Russell Crowe\'s character experience in \"A Beautiful Mind\"?', answer: 'Schizophrenia', time: 30},
      {question: 'Which part of the brain is most responsible for fear, arousal, and emotional stimuation?', answer: 'Amygdala (or the lymbic system)', time: 30},
      {question: 'What tasty treat has been famously used in experiments to predict future success in children?', answer: 'Marshmallows', time: 30},
      {question: 'Name as many Enneagram types (with the archetype), Big Five traits, Strengthsfinder strengths, and Meyers-Briggs traits as you can.', answer: 'Drew will approve.', time: 60}
    ];

    const crystal3 = [
      {question: 'While WELD only has one location, the largest coworking company is WeWork. How many worldwide locations does it have?', answer: '502', time: 30},
      {question: 'Which two Crystal employees were previously WELD interns?', answer: 'Austin and Brittney', time: 30},
      {question: 'What is the geographically closest state park to WELD?', answer: 'Bicentennial Mall Capitol State Park', time: 30},
      {question: 'What WELD snack was replaced by Nilla wafers in the summer of 2018?', answer: 'Oreos', time: 30},
      {question: 'Crystal\'s desks are made from materials from which two major retailers?', answer: 'IKEA and Home Depot', time: 30},
      {question: 'Which Oceanside Drive tenant won the \"Female Executive of the Year\" award in 2018?', answer: 'Advance Financial', time: 30},
      {question: 'WELD member company Exile International is a non-profit organization that primarily works in two African countries. What are they?', answer: 'Uganda and Democratic Republic of Congo', time: 30},
      {question: 'WELD Nashville opened in 2014. What was the last thing the building was used for before then?', answer: 'It was used as storage space for United Record Pressing, a vinyl record manufacturer (it was a boot factory after WW2)', time: 30},
      {question: 'What is the most abundantly available metal on (but not necessarily \"in\") Earth?', answer: 'Aluminium. Iron is the most common \"in\" the world, as it makes up the earth\'s core.', time: 30},
      {question: 'Which NFL star\'s famous wife has her picture hanging outside the Crystal office?', answer: 'Jay Cutler', time: 30}
    ];

    const crystal4 = [
      {question: 'Name the European highway where you may see a particular Crystal employee speeding without getting a ticket.', answer: 'Auto-Ban', time: 30},
      {question: 'Name the international fugitive currently staying in the Ecuadorian Embassy in London.', answer: 'Julian Assange', time: 30},
      {question: 'Name the Bible character who really didn\'t want to go to the Ancient Assyrian city of Ninevah.', answer: 'Jona(h)', time: 30},
      {question: 'Where did Dwight get a job after quitting Dunder Mifflin in Season 4 of The Office?', answer: 'Staples', time: 30},
      {question: 'Name the main character of the children\'s mystery books written under the pseudonym Carolyn Keene.', answer: 'Nancy Drew', time: 30},
      {question: 'Name Kid Rock\'s wife from 2006-2007. ', answer: 'Pamela Anderson', time: 30},
      {question: 'Name the famous 1950\'s era actor who\'s first TV appearance was on a Pepsi commercial.', answer: 'James Dean', time: 30},
      {question: 'Name the unit of measurement painted onto the Harvard Bridge between Boston and Cambridge, Massachusetts.', answer: 'Smoots', time: 30},
      {question: 'Name the Canadian electro-funk duo that released the hit song \"Jealous\" in 2014.', answer: 'Chromeo', time: 30},
      {question: 'How did Gustavo Fring make his money?', answer: 'Crystal meth', time: 30}
    ];

    const crystal5 = [
      {question: 'Name this Greek dish... \"The traditional filling comprises chopped spinach, feta cheese, onions or scallions, egg, and seasoning... wrapped or layered in pastry with butter or olive oil.\"', answer: 'Spanakopita', time: 30},
      {question: 'What is the name of the manager at Athens Family Restaurant?', answer: 'LeAnn', time: 30},
      {question: 'Name the traditional white, creamy Greek sauce typically served with pita bread (with the correct spelling).', answer: 'tzatziki sauce', time: 30},
      {question: 'Athens recently appeared on the Food Network show, "Diners, Drive-ins, and Dives" for the second time. In what year was the first time?', answer: '2010', time: 30},
      {question: 'What was the name of the Athens-like restaurant from the movie "My Big Fat Greek Wedding"?', answer: 'Dancing Zorbas', time: 30},
      {question: 'How many types of cheese does the Athens burger have on it?', answer: '4 (American, Swiss, Feta and Cheddar cheese)', time: 30},
      {question: 'How many episodes of Diners, Drive-ins, and Dives have aired since it began in 2007?', answer: '260', time: 30},
      {question: 'How do Greek people pronounce the word "Gyro?" (spell the phonetic and say it out loud)', answer: '"YEE-ros" or "YEE-ro"', time: 30},
      {question: 'How many horizontal stripes does the Greek flag have (not counting the cross)?', answer: '9', time: 30},
      {question: 'List as many Greek gods and goddesses as you can.', answer: 'Drew will approve.', time: 60}
    ];

    if(category === 'crystal1')return( crystal1 );
    if(category === 'crystal2')return( crystal2 );
    if(category === 'crystal3')return( crystal3 );
    if(category === 'crystal4')return( crystal4 );
    if(category === 'crystal5')return( crystal5 );

    return null;
}
