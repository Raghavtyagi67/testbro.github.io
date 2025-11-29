// Array of over 175 books including fiction and educational textbooks
const books = [
    // FICTION & CLASSICS (100+ books from original code)
    { id: 84, title: 'Frankenstein; Or, The Modern Prometheus', author: 'Mary Wollstonecraft Shelley', genre: 'sci-fi', description: 'A scientist creates a living being from assembled body parts and faces the consequences of his actions as the creature seeks revenge and companionship.' },
    { id: 2701, title: 'Moby Dick; Or, The Whale', author: 'Herman Melville', genre: 'classics', description: 'A whaling captain becomes obsessed with hunting a giant white whale, leading to a tale of adventure, madness, and maritime life.' },
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'The story follows the Bennet sisters as they navigate romance, societal expectations, and misunderstandings in Regency-era England.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'A collection of short stories involving a mysterious play that drives readers to madness and explores themes of the supernatural.' },
    { id: 11, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', genre: 'fantasy', description: 'A young girl falls down a rabbit hole into a world of bizarre creatures and logic-defying adventures.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Two young lovers from feuding families meet a tragic end due to fate and family enmity in Verona.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'mystery', description: 'A scientist\'s experiment with duality leads to the emergence of a violent alter ego, exploring themes of good and evil.' },
    { id: 100, title: 'The Complete Works of William Shakespeare', author: 'William Shakespeare', genre: 'classics', description: 'A compilation of plays and sonnets by the renowned playwright, covering tragedies, comedies, and histories.' },
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'A young Englishwoman experiences love and self-discovery during a trip to Italy, challenging societal norms.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Interwoven stories of ambition, marriage, and politics in a provincial English town during the 19th century.' },
    { id: 37106, title: 'Little Women; Or, Meg, Jo, Beth, and Amy', author: 'Louisa May Alcott', genre: 'classics', description: 'The lives and adventures of the four March sisters as they grow up during the American Civil War.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'A young man\'s moral and psychological turmoil after committing a murder in St. Petersburg.' },
    { id: 46, title: 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', author: 'Charles Dickens', genre: 'fantasy', description: 'A miserly old man is visited by ghosts who teach him the error of his ways on Christmas Eve.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Two Englishwomen rent a villa in Italy, leading to unexpected transformations in their lives and relationships.' },
    { id: 1260, title: 'Jane Eyre: An Autobiography', author: 'Charlotte Brontë', genre: 'classics', description: 'An orphaned governess falls in love with her employer while grappling with issues of class, morality, and independence.' },
    { id: 67979, title: 'The Blue Castle: a novel', author: 'L. M. Montgomery', genre: 'fiction', description: 'A shy woman rebels against her controlling family and discovers love and adventure in a whimsical tale.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'fantasy', description: 'A lawyer investigates a mysterious count suspected of being a vampire, leading to a battle against supernatural forces.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'A humorous epistolary novel following a family\'s travels around Britain, filled with eccentric characters and satire.' },
    { id: 2542, title: 'A Doll\'s House : a play', author: 'Henrik Ibsen', genre: 'classics', description: 'A wife confronts the truths of her marriage and societal expectations, leading to a dramatic upheaval.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Cleghorn Gaskell', genre: 'fiction', description: 'A series of stories depicting life in a small English village, focusing on the lives of spinsters and social changes.' },
    { id: 77331, title: 'The way of all earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'A narrative exploring themes of mortality and human existence through personal stories.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas and Auguste Maquet', genre: 'classics', description: 'A falsely imprisoned man escapes and seeks vengeance against those who wronged him, using wit and wealth.' },
    { id: 1259, title: 'Twenty years after', author: 'Alexandre Dumas and Auguste Maquet', genre: 'fiction', description: 'The sequel to The Three Musketeers, following the heroes in new political intrigues.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'classics', description: 'A young man\'s portrait ages while he remains youthful, reflecting his moral decay and hedonistic pursuits.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom — Complete', author: 'T. Smollett', genre: 'fiction', description: 'A cunning adventurer navigates Europe through deception and intrigue in this picaresque novel.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'classics', description: 'A woman in Puritan New England faces shame and ostracism after bearing a child out of wedlock.' },
    { id: 6593, title: 'History of Tom Jones, a Foundling', author: 'Henry Fielding', genre: 'fiction', description: 'The adventures of a foundling as he seeks his place in society, filled with romance and comedy.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'An autobiographical account of the composer\'s early life and development as a musician.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'A young man\'s misadventures at sea and on land, marked by humor and social critique.' },
    { id: 16328, title: 'Beowulf: An Anglo-Saxon Epic Poem', author: 'Anonymous', genre: 'classics', description: 'An epic tale of a hero who battles monsters and dragons to protect his kingdom.' },
    { id: 844, title: 'The Importance of Being Earnest: A Trivial Comedy for Serious People', author: 'Oscar Wilde', genre: 'classics', description: 'A satirical play about identity, marriage, and deception in Victorian society.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'A tale of passionate, destructive love between Heathcliff and Catherine on the Yorkshire moors.' },
    { id: 25851, title: 'The Life of Charles Dickens, Vol. I-III, Complete', author: 'John Forster', genre: 'non-fiction', description: 'A detailed biography of the famous author, covering his personal and professional life.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'classics', description: 'Set during the French Revolution, it explores themes of sacrifice and resurrection amid chaos.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'An early Christian doctrine text in Tagalog and Spanish for missionary purposes.' },
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'A collection of detective stories featuring the brilliant Sherlock Holmes solving intricate cases.' },
    { id: 64317, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics', description: 'A story of wealth, love, and the American Dream in the 1920s, told from multiple perspectives.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'A girl is transported to a magical land where she embarks on a quest to find her way home.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'A satirical essay suggesting a shocking solution to poverty in Ireland.' },
    { id: 1727, title: 'The Odyssey', author: 'Homer', genre: 'classics', description: 'The epic journey of Odysseus returning home after the Trojan War, facing mythical challenges.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'A murder mystery intertwined with philosophical discussions on faith, family, and morality.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'A day in the life of Leopold Bloom in Dublin, exploring stream-of-consciousness narrative.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'The wrath of Achilles during the Trojan War, focusing on heroism and conflict.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'classics', description: 'A young orphan\'s rise in society and his encounters with kindness and cruelty.' },
    { id: 76, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'classics', description: 'A boy and a runaway slave raft down the Mississippi, seeking freedom and adventure.' },
    { id: 1998, title: 'Thus Spake Zarathustra: A Book for All and None', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'A philosophical novel where a prophet proclaims ideas on the Übermensch and eternal recurrence.' },
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'A foundational text in political philosophy arguing for a strong central authority to avoid societal chaos.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'An epic depiction of Russian society during the Napoleonic Wars, blending history and fiction.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'A pragmatic guide to political power and governance, emphasizing effectiveness over morality.' },
    { id: 77328, title: 'The best short stories of 1925', author: 'Various', genre: 'fiction', description: 'A collection of notable short stories from 1925, showcasing diverse themes and styles.' },
    { id: 24950, title: 'Bradford\'s History of \'Plimoth Plantation\'', author: 'William Bradford', genre: 'history', description: 'A firsthand account of the Pilgrims\' journey and settlement in America.' },
    { id: 205, title: 'Walden, and On The Duty Of Civil Disobedience', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Reflections on simple living in nature and the moral imperative to resist unjust laws.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Jacob Grimm and Wilhelm Grimm', genre: 'fantasy', description: 'A classic collection of German folk tales filled with magic, morals, and adventure.' },
    { id: 74, title: 'The Adventures of Tom Sawyer, Complete', author: 'Mark Twain', genre: 'fiction', description: 'The mischievous adventures of a young boy growing up along the Mississippi River.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'A seminal work on natural rights, government by consent, and the right to revolution.' },
    { id: 45, title: 'Anne of Green Gables', author: 'L. M. Montgomery', genre: 'fiction', description: 'The story of an imaginative orphan girl who brings joy and change to her adoptive family.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Short stories exploring loneliness, dreams, and human connections in 19th-century Russia.' },
    { id: 1952, title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', genre: 'fiction', description: 'A woman\'s descent into madness as she is confined for "rest cure" treatment.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Bishop of Hippo Saint Augustine', genre: 'non-fiction', description: 'A spiritual autobiography detailing Augustine\'s journey to Christianity and reflections on sin.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'A salesman awakens transformed into a giant insect, exploring alienation and family dynamics.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'A concise exploration of logic, language, and the limits of philosophy.' },
    { id: 16, title: 'Peter Pan', author: 'J. M. Barrie', genre: 'fantasy', description: 'The adventures of a boy who never grows up in the magical world of Neverland.' },
    { id: 120, title: 'Treasure Island', author: 'Robert Louis Stevenson', genre: 'fiction', description: 'A young boy joins pirates in search of buried treasure, filled with adventure and betrayal.' },
    { id: 8800, title: 'The divine comedy', author: 'Dante Alighieri', genre: 'classics', description: 'A poetic journey through Hell, Purgatory, and Heaven, exploring sin, redemption, and divine love.' },
    { id: 1023, title: 'Bleak House', author: 'Charles Dickens', genre: 'fiction', description: 'A complex tale of legal intrigue, family secrets, and social criticism in Victorian England.' },
    { id: 17199, title: 'Golden Days for Boys and Girls, Vol. XII, Jan. 3, 1891', author: 'Various', genre: 'fiction', description: 'A children\'s magazine with stories, poems, and activities from the late 19th century.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'non-fiction', description: 'Essays on race, sociology, and African American experiences in the early 20th century.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Sherlock Holmes investigates a family curse involving a supernatural hound on the moors.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'fiction', description: 'A journey up the Congo River reveals the horrors of colonialism and human nature.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'A schoolmaster encounters a headless horseman in a haunted valley.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'A defense of individual freedom and the limits of societal authority over personal actions.' },
    { id: 829, title: 'Gulliver\'s Travels into Several Remote Nations of the World', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical travels to lands of tiny people, giants, and intelligent horses.' },
    { id: 10007, title: 'Carmilla', author: 'Joseph Sheridan Le Fanu', genre: 'fantasy', description: 'A young woman becomes the victim of a female vampire in a Gothic tale.' },
    { id: 35, title: 'The Time Machine', author: 'H. G. Wells', genre: 'sci-fi', description: 'An inventor travels to the distant future, witnessing the evolution and decline of humanity.' },
    { id: 36, title: 'The War of the Worlds', author: 'H. G. Wells', genre: 'sci-fi', description: 'Martians invade Earth, causing chaos and testing human resilience.' },
    { id: 5230, title: 'The Invisible Man', author: 'H. G. Wells', genre: 'sci-fi', description: 'A scientist turns himself invisible but struggles with the consequences of his experiment.' },
    { id: 62, title: 'A Princess of Mars', author: 'Edgar Rice Burroughs', genre: 'sci-fi', description: 'A Civil War veteran is transported to Mars, where he battles for a princess.' },
    { id: 215, title: 'The Call of the Wild', author: 'Jack London', genre: 'fiction', description: 'A domesticated dog reverts to primal instincts in the Alaskan wilderness.' },
    { id: 140, title: 'The Jungle', author: 'Upton Sinclair', genre: 'non-fiction', description: 'An exposé of the meatpacking industry and immigrant life in Chicago.' },
    { id: 61, title: 'The Communist Manifesto', author: 'Karl Marx and Friedrich Engels', genre: 'philosophy', description: 'A political pamphlet outlining communist theory and calling for worker revolution.' },
    { id: 2130, title: 'Utopia', author: 'Thomas More', genre: 'philosophy', description: 'A description of an ideal society on a fictional island, critiquing European politics.' },
    { id: 147, title: 'Common Sense', author: 'Thomas Paine', genre: 'history', description: 'A pamphlet advocating for American independence from Britain.' },
    { id: 18, title: 'The Federalist Papers', author: 'Alexander Hamilton, John Jay, James Madison', genre: 'history', description: 'Essays promoting the ratification of the U.S. Constitution.' },
    { id: 730, title: 'Oliver Twist', author: 'Charles Dickens', genre: 'fiction', description: 'An orphan\'s harsh life in Victorian London, from workhouse to criminal underworld.' },
    { id: 1399, title: 'Anna Karenina', author: 'Leo Tolstoy', genre: 'fiction', description: 'A tragic story of adultery, family, and society in imperial Russia.' },
    { id: 514, title: 'Little Women', author: 'Louisa May Alcott', genre: 'fiction', description: 'The March sisters\' experiences of love, loss, and growth during the Civil War.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Tales of horror, mystery, and the macabre by the master storyteller.' },
    { id: 27827, title: 'The Kama Sutra of Vatsyayana', author: 'Vatsyayana', genre: 'non-fiction', description: 'An ancient Indian text on sexuality, eroticism, and emotional fulfillment.' },
    { id: 23, title: 'Narrative of the Life of Frederick Douglass, an American Slave', author: 'Frederick Douglass', genre: 'history', description: 'An autobiography detailing enslavement, escape, and advocacy for abolition.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'A critique of traditional morality, philosophy, and the will to power.' },
    { id: 72679, title: 'The lesser Key of Solomon, Goetia, the book of evil spirits', author: 'Anonymous', genre: 'non-fiction', description: 'A grimoire listing demons and instructions for summoning them.' },
    { id: 15399, title: 'The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African', author: 'Olaudah Equiano', genre: 'history', description: 'A memoir of an enslaved African\'s experiences and path to freedom.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'An allegorical journey through the afterlife, representing the soul\'s path to God.' },
    { id: 20203, title: 'Autobiography of Benjamin Franklin', author: 'Benjamin Franklin', genre: 'history', description: 'The life story of one of America\'s founding fathers, full of wisdom and anecdotes.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'A story set against the backdrop of the French Revolution, exploring love and sacrifice.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'fiction', description: 'The coming-of-age story of an orphan named Pip and his unexpected fortunes.' },
    { id: 16328, title: 'Beowulf', author: 'Anonymous', genre: 'classics', description: 'An ancient epic poem about a hero\'s battles against monsters.' },
    { id: 844, title: 'The Importance of Being Earnest', author: 'Oscar Wilde', genre: 'fiction', description: 'A comedic play satirizing Victorian social mores.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'A picaresque novel following the exploits of a young Scottish man.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'The autobiography of the famous composer.' },
    { id: 6593, title: 'History of Tom Jones, a Foundling', author: 'Henry Fielding', genre: 'fiction', description: 'A comic novel about the life of a foundling.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom', author: 'T. Smollett', genre: 'fiction', description: 'The story of a rogue\'s adventures across Europe.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'fiction', description: 'A tale of revenge and justice after wrongful imprisonment.' },
    { id: 1259, title: 'Twenty Years After', author: 'Alexandre Dumas', genre: 'fiction', description: 'Sequel to The Three Musketeers, set during the Fronde.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'Early Christian doctrine in the Philippines.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Four women find renewal in an Italian villa.' },
    { id: 1727, title: 'The Odyssey', author: 'Homer', genre: 'classics', description: 'Odysseus\' long journey home after the Trojan War.' },
    { id: 1998, title: 'Thus Spake Zarathustra', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Philosophical ideas on the overman and eternal return.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Collection of Poe\'s dark tales and poems.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'Epistolary novel of a family\'s travels.' },
    { id: 22789, title: 'On the Duties of the Clergy', author: 'Saint Ambrose', genre: 'non-fiction', description: 'Guidance for Christian clergy on their responsibilities.' },
    { id: 24950, title: 'Bradford\'s History of Plimoth Plantation', author: 'William Bradford', genre: 'history', description: 'Account of the Pilgrims\' settlement.' },
    { id: 2542, title: 'A Doll\'s House', author: 'Henrik Ibsen', genre: 'fiction', description: 'A woman\'s rebellion against societal norms.' },
    { id: 25851, title: 'The Life of Charles Dickens', author: 'John Forster', genre: 'non-fiction', description: 'Biography of the Victorian novelist.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Brothers Grimm', genre: 'fantasy', description: 'Collection of classic fairy tales.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'Office of Strategic Services', genre: 'non-fiction', description: 'WWII guide to disrupting enemy operations.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'Handbook for writers and speakers.' },
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'Theory of social contract and state authority.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Saint Augustine', genre: 'non-fiction', description: 'Spiritual autobiography.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Tales of love and isolation.' },
    { id: 37106, title: 'Little Women (Illustrated)', author: 'Louisa May Alcott', genre: 'fiction', description: 'Sisters\' stories during Civil War.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Gaskell', genre: 'fiction', description: 'Life in a small English town.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'history', description: 'Essays on African American life.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'A day in Dublin\'s life.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Critique of morality.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Logic and philosophy treatise.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'Epic of the Trojan War.' },
    { id: 64317, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics', description: 'Jazz Age tale of love and wealth.' },
    { id: 67979, title: 'The Blue Castle', author: 'L. M. Montgomery', genre: 'fiction', description: 'Woman\'s journey to freedom.' },
    { id: 72679, title: 'The Lesser Key of Solomon', author: 'Anonymous', genre: 'non-fiction', description: 'Grimoire on demonology.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Political theory on rights.' },
    { id: 77328, title: 'The Best Short Stories of 1925', author: 'Various', genre: 'fiction', description: 'Anthology of 1925 stories.' },
    { id: 77331, title: 'The Way of All Earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'Reflections on life and death.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'Horror stories linked by a play.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'Journey through the afterlife.' },
    { id: 10007, title: 'Carmilla', author: 'J. Sheridan Le Fanu', genre: 'fantasy', description: 'Vampire tale with Gothic elements.' },
    { id: 1023, title: 'Bleak House', author: 'Charles Dickens', genre: 'fiction', description: 'Satire on the English legal system.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'Satirical essay on poverty.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'fiction', description: 'Epic revenge story.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'Guide to ruling.' },
    { id: 1259, title: 'Twenty Years After', author: 'Alexandre Dumas', genre: 'fiction', description: 'Musketeers\' later adventures.' },
    { id: 1260, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'classics', description: 'Governess\' romance and trials.' },
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'Romance and social satire.' },
    { id: 140, title: 'The Jungle', author: 'Upton Sinclair', genre: 'non-fiction', description: 'Expose of meatpacking industry.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'fiction', description: 'Orphan\'s rise in society.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Provincial life and ambitions.' },
    { id: 147, title: 'Common Sense', author: 'Thomas Paine', genre: 'history', description: 'Call for American independence.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Tragic love story.' },
    { id: 15399, title: 'The Interesting Narrative of Olaudah Equiano', author: 'Olaudah Equiano', genre: 'history', description: 'Slave narrative.' },
    { id: 16328, title: 'Beowulf', author: 'Anonymous', genre: 'classics', description: 'Heroic epic poem.' },
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Detective stories.' },
    { id: 17199, title: 'Golden Days for Boys and Girls', author: 'Various', genre: 'fiction', description: 'Children\'s magazine.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'classics', description: 'Portrait of moral decay.' },
    { id: 18, title: 'The Federalist Papers', author: 'Hamilton, Jay, Madison', genre: 'history', description: 'Essays on U.S. Constitution.' },
    { id: 1952, title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', genre: 'fiction', description: 'Descent into madness.' },
    { id: 205, title: 'Walden', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Simple living in nature.' },
    { id: 2130, title: 'Utopia', author: 'Thomas More', genre: 'philosophy', description: 'Ideal society description.' },
    { id: 215, title: 'The Call of the Wild', author: 'Jack London', genre: 'fiction', description: 'Dog\'s return to wild.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'fiction', description: 'Journey into colonialism.' },
    { id: 23, title: 'Narrative of Frederick Douglass', author: 'Frederick Douglass', genre: 'history', description: 'Slave autobiography.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'classics', description: 'Puritan shame and sin.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'Murder and guilt.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Brothers Grimm', genre: 'fantasy', description: 'Folk tales collection.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'Napoleonic era Russia.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'OSS', genre: 'non-fiction', description: 'WWII sabotage guide.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'Phrase handbook.' },
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'Self-discovery in Italy.' },
    { id: 2701, title: 'Moby Dick', author: 'Herman Melville', genre: 'classics', description: 'Whaling obsession.' },
    { id: 27827, title: 'The Kama Sutra', author: 'Vatsyayana', genre: 'non-fiction', description: 'Ancient love treatise.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'Family drama and philosophy.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Supernatural hound mystery.' },
    { id: 35, title: 'The Time Machine', author: 'H. G. Wells', genre: 'sci-fi', description: 'Time travel to future.' },
    { id: 36, title: 'The War of the Worlds', author: 'H. G. Wells', genre: 'sci-fi', description: 'Martian invasion.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'fantasy', description: 'Vampire hunt.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'Individual freedom defense.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Emotional short stories.' },
    { id: 37106, title: 'Little Women (Illustrated)', author: 'Louisa May Alcott', genre: 'fiction', description: 'Sisters\' growth.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Gaskell', genre: 'fiction', description: 'Village life stories.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'non-fiction', description: 'Race essays.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'Naval adventures.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'Headless horseman tale.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'mystery', description: 'Dual personality horror.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'Stream-of-consciousness day.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Morality critique.' },
    { id: 45, title: 'Anne of Green Gables', author: 'L. M. Montgomery', genre: 'fiction', description: 'Orphan\'s adventures.' },
    { id: 46, title: 'A Christmas Carol', author: 'Charles Dickens', genre: 'fantasy', description: 'Ghostly redemption.' },
    { id: 514, title: 'Little Women', author: 'Louisa May Alcott', genre: 'fiction', description: 'Family bonds.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'Composer\'s memoir.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'Insect transformation.' },
    { id: 5230, title: 'The Invisible Man', author: 'H. G. Wells', genre: 'sci-fi', description: 'Invisibility madness.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'Magical quest.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Logic treatise.' },
    { id: 61, title: 'The Communist Manifesto', author: 'Marx and Engels', genre: 'philosophy', description: 'Revolutionary pamphlet.' },
    { id: 62, title: 'A Princess of Mars', author: 'Edgar Rice Burroughs', genre: 'sci-fi', description: 'Martian adventure.' },
    { id: 6593, title: 'History of Tom Jones', author: 'Henry Fielding', genre: 'fiction', description: 'Foundling\'s tale.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom', author: 'T. Smollett', genre: 'fiction', description: 'Rogue\'s exploits.' },
    { id: 67979, title: 'The Blue Castle', author: 'L. M. Montgomery', genre: 'fiction', description: 'Rebellious romance.' },
    { id: 72679, title: 'The Lesser Key of Solomon', author: 'Anonymous', genre: 'non-fiction', description: 'Demon summoning.' },
    { id: 730, title: 'Oliver Twist', author: 'Charles Dickens', genre: 'fiction', description: 'Orphan\'s struggles.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Rights theory.' },
    { id: 74, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', genre: 'fiction', description: 'Boyhood mischief.' },
    { id: 76, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'fiction', description: 'River journey.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'Passionate revenge.' },
    { id: 77328, title: 'The Best Short Stories of 1925', author: 'Various', genre: 'fiction', description: 'Yearly anthology.' },
    { id: 77331, title: 'The Way of All Earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'Mortality reflections.' },
    { id: 829, title: 'Gulliver\'s Travels', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical voyages.' },
    { id: 84, title: 'Frankenstein', author: 'Mary Shelley', genre: 'sci-fi', description: 'Creation\'s revenge.' },
    { id: 844, title: 'The Importance of Being Earnest', author: 'Oscar Wilde', genre: 'fiction', description: 'Identity comedy.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'Madness-inducing play.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'Afterlife journey.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'Revolution story.' },

    // MATH BOOKS (15+ high school level)
    { 
        id: 'big-ideas-math-11',
        title: 'Big Ideas Math Algebra 1', 
        author: 'Big Ideas Learning', 
        genre: 'math', 
        description: 'Comprehensive Algebra 1 textbook covering linear equations, inequalities, functions, and more. Grade 11 level.',
        downloadUrl: 'https://bim.easyaccessmaterials.com/index.php?level=11.00',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Algebra+1'
    },
    { 
        id: 'big-ideas-math-12',
        title: 'Big Ideas Math Geometry', 
        author: 'Big Ideas Learning', 
        genre: 'math', 
        description: 'Geometry textbook covering proofs, triangles, circles, and spatial reasoning. Grade 12 level.',
        downloadUrl: 'https://bim.easyaccessmaterials.com/index.php?level=12.00',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Geometry'
    },
    { 
        id: 'big-ideas-math-13',
        title: 'Big Ideas Math Algebra 2', 
        author: 'Big Ideas Learning', 
        genre: 'math', 
        description: 'Advanced Algebra 2 textbook covering polynomials, rational expressions, and trigonometry. Advanced level.',
        downloadUrl: 'https://bim.easyaccessmaterials.com/index.php?level=13.00',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Algebra+2'
    },
    { 
        id: 'algebra-1',
        title: 'Algebra 1 Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Complete Algebra 1 course with exercises and examples for high school students.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-algebra-i/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Algebra+1'
    },
    { 
        id: 'algebra-2',
        title: 'Algebra 2 Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Advanced algebra concepts including matrices, complex numbers, and advanced functions.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-algebra-ii/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Algebra+2'
    },
    { 
        id: 'geometry',
        title: 'Geometry Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Complete geometry course covering proofs, theorems, and spatial mathematics.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-geometry/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Geometry'
    },
    { 
        id: 'pre-calculus',
        title: 'Pre-Calculus Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Preparation for calculus covering advanced algebra, trigonometry, and analytical geometry.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-precalculus/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Pre-Calculus'
    },
    { 
        id: 'calculus',
        title: 'Calculus Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Introduction to differential and integral calculus with practical applications.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-calculus/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Calculus'
    },
    { 
        id: 'statistics',
        title: 'Statistics Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Probability and statistics for high school students with real-world applications.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-probability-and-statistics/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Statistics'
    },
    { 
        id: 'trigonometry',
        title: 'Trigonometry Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Comprehensive trigonometry course with applications in science and engineering.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-trigonometry/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Trigonometry'
    },
    { 
        id: 'discrete-math',
        title: 'Discrete Mathematics', 
        author: 'OpenStax', 
        genre: 'math', 
        description: 'Introduction to discrete mathematics including logic, sets, and graph theory.',
        downloadUrl: 'https://openstax.org/details/books/discrete-mathematics',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Discrete+Math'
    },
    { 
        id: 'math-analysis',
        title: 'Mathematical Analysis', 
        author: 'OpenStax', 
        genre: 'math', 
        description: 'Advanced mathematical analysis for high school students preparing for college.',
        downloadUrl: 'https://openstax.org/details/books/advanced-mathematics',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Math+Analysis'
    },
    { 
        id: 'ap-calculus',
        title: 'AP Calculus AB', 
        author: 'College Board', 
        genre: 'math', 
        description: 'Advanced Placement Calculus AB preparation with college-level content.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=AP+Calculus'
    },
    { 
        id: 'ap-statistics',
        title: 'AP Statistics', 
        author: 'College Board', 
        genre: 'math', 
        description: 'Advanced Placement Statistics with data analysis and probability theory.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-statistics',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=AP+Statistics'
    },
    { 
        id: 'financial-math',
        title: 'Financial Mathematics', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Practical mathematics for personal finance, investments, and budgeting.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-financial-mathematics/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Financial+Math'
    },
    { 
        id: 'math-modeling',
        title: 'Mathematical Modeling', 
        author: 'OpenStax', 
        genre: 'math', 
        description: 'Using mathematics to model real-world situations and solve practical problems.',
        downloadUrl: 'https://openstax.org/details/books/mathematical-modeling',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Math+Modeling'
    },

    // PHYSICS BOOKS (15+ high school level)
    { 
        id: 'physics-openstax',
        title: 'University Physics Volume 1', 
        author: 'OpenStax', 
        genre: 'physics', 
        description: 'Comprehensive university-level physics covering mechanics, waves, and thermodynamics.',
        downloadUrl: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/Physics-WEB_Sab7RrQ.pdf',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=University+Physics'
    },
    { 
        id: 'high-school-physics',
        title: 'High School Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Complete high school physics curriculum with experiments and problem sets.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-physics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=High+School+Physics'
    },
    { 
        id: 'physics-bested',
        title: 'Physics Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'High school physics covering mechanics, electricity, magnetism, and modern physics.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-physics-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Physics'
    },
    { 
        id: 'ap-physics-1',
        title: 'AP Physics 1', 
        author: 'College Board', 
        genre: 'physics', 
        description: 'Advanced Placement Physics 1 preparation with college-level content.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-1',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=AP+Physics+1'
    },
    { 
        id: 'ap-physics-2',
        title: 'AP Physics 2', 
        author: 'College Board', 
        genre: 'physics', 
        description: 'Advanced Placement Physics 2 covering fluids, thermodynamics, and modern physics.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-2',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=AP+Physics+2'
    },
    { 
        id: 'ap-physics-c',
        title: 'AP Physics C', 
        author: 'College Board', 
        genre: 'physics', 
        description: 'Advanced Placement Physics C with calculus-based mechanics and electricity.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-c',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=AP+Physics+C'
    },
    { 
        id: 'conceptual-physics',
        title: 'Conceptual Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Concept-based physics emphasizing understanding over mathematical complexity.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-conceptual-physics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Conceptual+Physics'
    },
    { 
        id: 'physical-science',
        title: 'Physical Science', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Integrated physical science covering physics and chemistry fundamentals.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-physical-science/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Physical+Science'
    },
    { 
        id: 'modern-physics',
        title: 'Modern Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Introduction to modern physics including relativity and quantum mechanics.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-modern-physics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Modern+Physics'
    },
    { 
        id: 'astronomy',
        title: 'Astronomy', 
        author: 'OpenStax', 
        genre: 'physics', 
        description: 'Comprehensive astronomy textbook covering our solar system and beyond.',
        downloadUrl: 'https://openstax.org/details/books/astronomy',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Astronomy'
    },
    { 
        id: 'engineering-physics',
        title: 'Engineering Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Physics applications in engineering with practical examples and projects.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-engineering-physics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Engineering+Physics'
    },
    { 
        id: 'waves-physics',
        title: 'Waves and Optics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Detailed study of wave phenomena, sound, light, and optical systems.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-waves-and-optics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Waves+Optics'
    },
    { 
        id: 'electricity-magnetism',
        title: 'Electricity and Magnetism', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Comprehensive coverage of electrical circuits and magnetic fields.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-electricity-and-magnetism/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Electricity+Magnetism'
    },
    { 
        id: 'thermodynamics',
        title: 'Thermodynamics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Study of heat, temperature, and energy transfer in physical systems.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-thermodynamics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Thermodynamics'
    },
    { 
        id: 'nuclear-physics',
        title: 'Nuclear Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Introduction to nuclear physics, radioactivity, and nuclear energy.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-nuclear-physics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Nuclear+Physics'
    },
    { 
        id: 'quantum-physics',
        title: 'Quantum Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Basic principles of quantum mechanics for advanced high school students.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-quantum-physics/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=Quantum+Physics'
    },

    // CHEMISTRY BOOKS (15+ high school level)
    { 
        id: 'chemistry-2e',
        title: 'Chemistry 2e', 
        author: 'OpenStax', 
        genre: 'chemistry', 
        description: 'Comprehensive chemistry textbook covering atoms, molecules, reactions, and organic chemistry.',
        downloadUrl: 'https://assets.openstax.org/oscms-prodcms/media/documents/Chemistry2e-WEB.pdf',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Chemistry+2e'
    },
    { 
        id: 'chemistry-bested',
        title: 'Chemistry Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'High school chemistry with labs, periodic table, and chemical reactions.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Chemistry'
    },
    { 
        id: 'ap-chemistry',
        title: 'AP Chemistry', 
        author: 'College Board', 
        genre: 'chemistry', 
        description: 'Advanced Placement Chemistry with college-level laboratory experiments.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-chemistry',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=AP+Chemistry'
    },
    { 
        id: 'organic-chemistry',
        title: 'Organic Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Introduction to organic chemistry including hydrocarbons and functional groups.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-organic-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Organic+Chemistry'
    },
    { 
        id: 'biochemistry',
        title: 'Biochemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemistry of living organisms including proteins, enzymes, and metabolism.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-biochemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Biochemistry'
    },
    { 
        id: 'analytical-chemistry',
        title: 'Analytical Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemical analysis techniques including spectroscopy and chromatography.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-analytical-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Analytical+Chemistry'
    },
    { 
        id: 'physical-chemistry',
        title: 'Physical Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Relationship between chemical properties and physical principles.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-physical-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Physical+Chemistry'
    },
    { 
        id: 'environmental-chemistry',
        title: 'Environmental Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemical processes in the environment and pollution control.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-environmental-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Environmental+Chem'
    },
    { 
        id: 'inorganic-chemistry',
        title: 'Inorganic Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Study of inorganic compounds, coordination chemistry, and transition metals.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-inorganic-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Inorganic+Chemistry'
    },
    { 
        id: 'forensic-chemistry',
        title: 'Forensic Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Application of chemistry in criminal investigations and evidence analysis.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-forensic-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Forensic+Chemistry'
    },
    { 
        id: 'polymer-chemistry',
        title: 'Polymer Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemistry of polymers, plastics, and macromolecules.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-polymer-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Polymer+Chemistry'
    },
    { 
        id: 'nuclear-chemistry',
        title: 'Nuclear Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemical aspects of nuclear reactions and radioactivity.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-nuclear-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Nuclear+Chemistry'
    },
    { 
        id: 'electrochemistry',
        title: 'Electrochemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Study of chemical reactions that produce electricity and electrolysis.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-electrochemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Electrochemistry'
    },
    { 
        id: 'industrial-chemistry',
        title: 'Industrial Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemical processes in industrial manufacturing and production.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-industrial-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Industrial+Chemistry'
    },
    { 
        id: 'food-chemistry',
        title: 'Food Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemical composition of food and chemical changes during cooking.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-food-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Food+Chemistry'
    },
    { 
        id: 'medicinal-chemistry',
        title: 'Medicinal Chemistry', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'Chemistry of drugs and pharmaceutical development.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-medicinal-chemistry/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Medicinal+Chemistry'
    },

    // BIOLOGY BOOKS (15+ high school level)
    { 
        id: 'biology-2e',
        title: 'Biology 2e', 
        author: 'OpenStax', 
        genre: 'biology', 
        description: 'Comprehensive biology textbook covering cells, genetics, evolution, and ecology.',
        downloadUrl: 'https://assets.openstax.org/oscms-prodcms/media/documents/Biology2e-WEB.pdf',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Biology+2e'
    },
    { 
        id: 'biology-bested',
        title: 'Biology Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'High school biology covering cells, DNA, evolution, and human anatomy.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-biology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Biology'
    },
    { 
        id: 'ap-biology',
        title: 'AP Biology', 
        author: 'College Board', 
        genre: 'biology', 
        description: 'Advanced Placement Biology with college-level laboratory investigations.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-biology',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=AP+Biology'
    },
    { 
        id: 'anatomy-physiology',
        title: 'Anatomy and Physiology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Human anatomy and physiology with detailed systems overview.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-anatomy-and-physiology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Anatomy+Physiology'
    },
    { 
        id: 'microbiology',
        title: 'Microbiology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Study of microorganisms including bacteria, viruses, and fungi.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-microbiology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Microbiology'
    },
    { 
        id: 'genetics',
        title: 'Genetics', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Principles of heredity, DNA, genetic engineering, and biotechnology.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-genetics/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Genetics'
    },
    { 
        id: 'ecology',
        title: 'Ecology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Study of ecosystems, populations, and environmental interactions.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-ecology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Ecology'
    },
    { 
        id: 'evolution',
        title: 'Evolution', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Theory of evolution, natural selection, and evolutionary biology.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-evolution/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Evolution'
    },
    { 
        id: 'botany',
        title: 'Botany', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Study of plants, plant physiology, and plant classification.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-botany/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Botany'
    },
    { 
        id: 'zoology',
        title: 'Zoology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Study of animals, animal behavior, and animal classification.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-zoology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Zoology'
    },
    { 
        id: 'marine-biology',
        title: 'Marine Biology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Biology of marine organisms and ocean ecosystems.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-marine-biology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Marine+Biology'
    },
    { 
        id: 'environmental-biology',
        title: 'Environmental Biology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Biological aspects of environmental science and conservation.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-environmental-biology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Environmental+Biology'
    },
    { 
        id: 'cell-biology',
        title: 'Cell Biology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Detailed study of cell structure, function, and cellular processes.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-cell-biology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Cell+Biology'
    },
    { 
        id: 'molecular-biology',
        title: 'Molecular Biology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Study of biological molecules and molecular genetics.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-molecular-biology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Molecular+Biology'
    },
    { 
        id: 'biotechnology',
        title: 'Biotechnology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Applications of biological processes in technology and industry.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-biotechnology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Biotechnology'
    },
    { 
        id: 'human-biology',
        title: 'Human Biology', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'Comprehensive study of human body systems and health.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-human-biology/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Human+Biology'
    },

    // HISTORY BOOKS (15+ high school level)
    { 
        id: 'world-history',
        title: 'World History', 
        author: 'OpenStax', 
        genre: 'history', 
        description: 'Comprehensive world history from ancient civilizations to modern times.',
        downloadUrl: 'https://openstax.org/details/books/world-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=World+History'
    },
    { 
        id: 'us-history',
        title: 'US History', 
        author: 'OpenStax', 
        genre: 'history', 
        description: 'Complete United States history from colonization to present day.',
        downloadUrl: 'https://openstax.org/details/books/us-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=US+History'
    },
    { 
        id: 'european-history',
        title: 'European History', 
        author: 'OpenStax', 
        genre: 'history', 
        description: 'European history from Renaissance to modern European Union.',
        downloadUrl: 'https://openstax.org/details/books/european-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=European+History'
    },
    { 
        id: 'ap-world-history',
        title: 'AP World History', 
        author: 'College Board', 
        genre: 'history', 
        description: 'Advanced Placement World History: Modern course material.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-world-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=AP+World+History'
    },
    { 
        id: 'ap-us-history',
        title: 'AP US History', 
        author: 'College Board', 
        genre: 'history', 
        description: 'Advanced Placement United States History comprehensive course.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-us-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=AP+US+History'
    },
    { 
        id: 'ap-european-history',
        title: 'AP European History', 
        author: 'College Board', 
        genre: 'history', 
        description: 'Advanced Placement European History from Renaissance to present.',
        downloadUrl: 'https://apcentral.collegeboard.org/courses/ap-european-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=AP+European+History'
    },
    { 
        id: 'ancient-history',
        title: 'Ancient History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'Study of ancient civilizations including Egypt, Greece, and Rome.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-ancient-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Ancient+History'
    },
    { 
        id: 'medieval-history',
        title: 'Medieval History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'European history from fall of Rome to the Renaissance.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-medieval-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Medieval+History'
    },
    { 
        id: 'modern-history',
        title: 'Modern History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'World history from 1500 to present including major global events.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-modern-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Modern+History'
    },
    { 
        id: 'military-history',
        title: 'Military History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'Study of warfare, military strategy, and historical conflicts.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-military-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Military+History'
    },
    { 
        id: 'economic-history',
        title: 'Economic History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'Historical development of economic systems and trade.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-economic-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Economic+History'
    },
    { 
        id: 'cultural-history',
        title: 'Cultural History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'History of art, literature, and cultural developments.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-cultural-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Cultural+History'
    },
    { 
        id: 'african-history',
        title: 'African History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'Comprehensive history of Africa from ancient kingdoms to modern nations.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-african-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=African+History'
    },
    { 
        id: 'asian-history',
        title: 'Asian History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'History of Asian civilizations including China, Japan, and India.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-asian-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Asian+History'
    },
    { 
        id: 'latin-american-history',
        title: 'Latin American History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'History of Central and South America from pre-Columbian to modern times.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-latin-american-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Latin+American+History'
    },
    { 
        id: 'middle-eastern-history',
        title: 'Middle Eastern History', 
        author: 'CK-12 Foundation', 
        genre: 'history', 
        description: 'History of the Middle East from ancient civilizations to modern conflicts.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-middle-eastern-history/',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=Middle+Eastern+History'
    }
];

// Group books by genre - updated to include all subjects
const genres = ['fiction', 'non-fiction', 'mystery', 'sci-fi', 'fantasy', 'classics', 'history', 'philosophy', 'math', 'physics', 'chemistry', 'biology'];
const groupedBooks = genres.reduce((acc, genre) => {
    acc[genre] = books.filter(book => book.genre === genre);
    return acc;
}, {});

// DOM Content Loaded event to ensure proper rendering
document.addEventListener('DOMContentLoaded', function() {
    // Render book sections
    const main = document.getElementById('book-sections');
    
    genres.forEach(genre => {
        if (groupedBooks[genre].length > 0) {
            const section = document.createElement('section');
            section.id = genre;
            section.className = 'section';
            section.innerHTML = `<h2>${genre.charAt(0).toUpperCase() + genre.slice(1).replace('-', ' ')}</h2><div class="book-grid"></div>`;
            const grid = section.querySelector('.book-grid');
            
            groupedBooks[genre].forEach(book => {
                const card = document.createElement('div');
                card.className = 'book-card';
                card.setAttribute('data-title', book.title.toLowerCase());
                card.setAttribute('data-author', book.author.toLowerCase());
                card.setAttribute('data-description', book.description.toLowerCase());
                
                // Determine cover image source
                let coverSrc = book.coverUrl;
                if (!coverSrc && book.id && typeof book.id === 'number') {
                    coverSrc = `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`;
                }
                if (!coverSrc) {
                    // Subject-based placeholder colors
                    const colors = {
                        'math': '4CAF50',
                        'physics': '2196F3', 
                        'chemistry': 'FF9800',
                        'biology': '4CAF50',
                        'history': '795548'
                    };
                    const color = colors[genre] || '007bff';
                    coverSrc = `https://via.placeholder.com/250x350/${color}/ffffff?text=${encodeURIComponent(book.title)}`;
                }
                
                // Determine download URL
                let downloadUrl = book.downloadUrl;
                if (!downloadUrl && book.id && typeof book.id === 'number') {
                    downloadUrl = `https://www.gutenberg.org/ebooks/${book.id}`;
                }
                
                card.innerHTML = `
                    <img src="${coverSrc}" 
                         alt="${book.title} Cover" 
                         onerror="this.src='https://via.placeholder.com/250x350/007bff/ffffff?text=Cover+Not+Available'">
                    <h3>${book.title}</h3>
                    <p class="author">By ${book.author}</p>
                    <p class="description">${book.description}</p>
                    <a href="${downloadUrl}" target="_blank" rel="noopener">Download PDF</a>
                `;
                grid.appendChild(card);
            });
            main.appendChild(section);
        }
    });

    // Search functionality with debouncing for better performance
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = searchInput.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.book-card');
            
            if (query.length === 0) {
                cards.forEach(card => card.classList.remove('hidden'));
                return;
            }
            
            cards.forEach(card => {
                const title = card.getAttribute('data-title');
                const author = card.getAttribute('data-author');
                const description = card.getAttribute('data-description');
                
                if (title.includes(query) || author.includes(query) || description.includes(query)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }, 300);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Function to add new books dynamically
function addBook(bookData) {
    // Validate book data
    if (!bookData.id || !bookData.title || !bookData.author || !bookData.genre || !bookData.description) {
        console.error('Invalid book data: Missing required fields');
        return false;
    }
    
    // Add to books array
    books.push(bookData);
    
    // Update the specific genre section
    const genreSection = document.getElementById(bookData.genre);
    if (genreSection) {
        const grid = genreSection.querySelector('.book-grid');
        const card = document.createElement('div');
        card.className = 'book-card';
        card.setAttribute('data-title', bookData.title.toLowerCase());
        card.setAttribute('data-author', bookData.author.toLowerCase());
        card.setAttribute('data-description', bookData.description.toLowerCase());
        
        let coverSrc = bookData.coverUrl;
        if (!coverSrc && bookData.id && typeof bookData.id === 'number') {
            coverSrc = `https://www.gutenberg.org/cache/epub/${bookData.id}/pg${bookData.id}.cover.medium.jpg`;
        }
        if (!coverSrc) {
            coverSrc = 'https://via.placeholder.com/250x350/007bff/ffffff?text=Cover+Not+Available';
        }
        
        let downloadUrl = bookData.downloadUrl;
        if (!downloadUrl && bookData.id && typeof bookData.id === 'number') {
            downloadUrl = `https://www.gutenberg.org/ebooks/${bookData.id}`;
        }
        
        card.innerHTML = `
            <img src="${coverSrc}" 
                 alt="${bookData.title} Cover" 
                 onerror="this.src='https://via.placeholder.com/250x350/007bff/ffffff?text=Cover+Not+Available'">
            <h3>${bookData.title}</h3>
            <p class="author">By ${bookData.author}</p>
            <p class="description">${bookData.description}</p>
            <a href="${downloadUrl}" target="_blank" rel="noopener">Download PDF</a>
        `;
        grid.appendChild(card);
    }
    
    return true;
}