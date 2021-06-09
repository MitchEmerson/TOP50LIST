const { now } = require("mongoose");
const db = require("../models");

const movies = [ {
  
    title: "Apocalypse Now",
    director: "Francis Ford Copolla",
    writer: "Francis Ford Copolla ",
    actors: ["Michael Sheen", "Marlon Brando", "Robert Duvall"],
    imgUrl: [{imgUrl: "https://picfiles.alphacoders.com/376/thumb-376906.jpg"}],  
},
{
  title: "Goodfellas",
  director: "Martin Scorcese",
  writer: "Nicholas Pileggi & Martin Scorcese", 
  actors: "Ray Liotta, Robert DeNiro, Joe Pesci",
  imgUrl: "https://www.themoviedb.org/t/p/original/f8rOfzX9UuY4Zc39rljrRbjsWK3.jpg",
},
{
  title: "Mannequin",
  director: "Michael Gotlieb", 
  writer: "Michael Gotlieb",
  actors: "Andrew McCarthy, Kim Catrall, Estelle Getty",
  imgUrl: "https://www.themoviedb.org/t/p/original/wcePrstOFQjXZSQJcSGgF7svXSs.jpg",
},
{
  title: "Shawshank Redemption",
  director: "Frank Darabont",
  writer: "Frank Darabont, Stephen King",
  actors: "Tim Robbins, Morgan Freeman",
  imgUrl: "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
},
{
  title: "The Godfather",
  director: "Francis Ford Copolla",
  writer: "Francis Ford Copolla, Mario Puzo, Robert Towne",
  actors: "Marlon Brando, Al Pacino, Diane Keaton",
  imgUrl: "https://imgc.allpostersimages.com/img/posters/the-godfather-1972-directed-by-francis-ford-coppola_u-L-Q1E4ONW0.jpg",
},
{
  title: "The Goonies",
  director: "Richard Donner",
  writer: "Chris Colombus",
  actors: "Josh Brolin, Sean Astin, Corey Feldman, Martha Plimpton, Keri Green",
  imgUrl: "https://cultureposters.com/wp-content/uploads/2019/09/the-goonies.jpg",
},
{
  title: "The Matrix",
  director: "The Wachowski Sisters",
  writer: "The Wachowski Sisters",
  actors: "Keanu Reeves, Carrie-Anne Moss, Laurence Fishburne",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",

},
{
  title: "The Wizard of Oz",
  director: "Victor Fleming",
  writer: "Noel Langley",
  actors: "Judy Garland, Frank Morgan, Ray Bolger",
  imgUrl: "https://a.1stdibscdn.com/archivesE/upload/9891/29_14/org_wizard_of_oz/ORG_ORG_WIZARD_OF_OZ.jpeg?width=520"

},
{
  title: "Weird Science",
  director: "John Hughes",
  writer: "John Hughes",
  actors: "Anthony Michael Hall, Kelly LeBrock, Ilan Mitchell",
  imgUrl: "https://www.themoviedb.org/t/p/original/AsFxOHwUlK7mTOkC5p6SySsdEjz.jpg",
},
{
  title: "While You Were Sleeping",
  director: "John Turtletaub",
  writer: "Frederic Lebow",
  actors: "Bill Pullman, Sandra Bullock, Peter Gallagher",
  imgUrl: "https://lh3.googleusercontent.com/proxy/oykJEhb1CAUZBc0cHV-tbm2Ap9_hm_7MlmsXk-t1syHpkwQRMeivJnzdARU-mbMgb9fLmO_EllJARyUqLMV9oRD7Sa-HkX-1gBNeaaTEqnk0_s9KUHTWFEAtnLySdjOdiG4",
},
];










/*const run = async () => {
  try {
    await db.Author.deleteMany({}); // remove all authors
    await db.Article.deleteMany({});
    const createdAuthors = await db.Author.insertMany(authors);

    for (article of articles) {
      const foundAuthor = await db.Author.findOne({ name: article.author });
      article.author = foundAuthor;
      const createdArticle = await db.Article.create(article);
      foundAuthor.articles.push(createdArticle);
      foundAuthor.save();
    }
    console.log("Seed Finished.");
    process.exit(); // this will exit the file when this line is hit
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
*/
run();

        
        
        
        
        
        
        
       // title: {type: String},
       // director: {type: String},
       // writer: {type: String},
       // actors: [{type: String}],
       // imgUrl: [{type: String}],
       // challenged: {type: Boolean, default: false},
        
        
       