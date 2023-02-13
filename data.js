// WRITE YOUR CODE BELOW THIS LINE
const favMovies = [
	{
		title: "Forrest Gump",
		year: 1994,
		rating: 8.8,
		description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
		directors: ["Robert Zemeckis"],
		writers: ["Winston Groom", "Eric Roth"],
		stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
		genres: ["Drama", "Comedy", "Romance"]
	},
	{
		title: "The Silence of the Lambs",
		year: 1991,
		rating: 8.6,
		description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
		directors: ["Jonathan Demme"],
		writers: ["Thomas Harris", "Ted Tally"],
		stars: ["Jodie Foster", "Anthony Hopkins", "Lawrence Bonney"],
		genres: ["Thriller", "Horror", "Mystery"]
	},
	{
		title: "Se7en",
		year: 1995,
		rating: 8.6,
		description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
		directors: ["David Fincher"],
		writers: ["Andrew Kevin Walker"],
		stars: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
		genres: ["Thriller", "Mystery", "Crime"]
	},
	{
		title: "The Usual Suspects",
		year: 1995,
		rating: 8.5,
		description: "The authorities in New York arrest five guys with one of the most dubious reputations, suspected of having participated in the robbery of a truck. The police investigations will trigger a carousel of violence that will end in a carnage with 27 dead bodies and a quantity of cocaine worth 91 million dollars missing.",
		directors: ["Bryan Singer"],
		writers: ["Christopher McQuarrie"],
		stars: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
		genres: ["Mystery", "Crime", "Drama"]
	}
];

console.log( "The title of the first movie is: ", favMovies[0].title);
console.log("The release year of the second movie is: ", favMovies[1].year);
console.log("The IMDB rating of the third movie is: ", favMovies[2].rating);
console.log("The short description of the fourth movie is: ", favMovies[3].description);

console.log("The lead director of the first movie is: ", favMovies[0].directors[0]);
console.log("The lead writer of the second movie is: ", favMovies[1].writers[0]);
console.log("The lead star of the third movie is: ", favMovies[2].stars[0]);
console.log("The main genre of the fourth movie is: ", favMovies[3].genres[0]);


let averageRating = (favMovies[0]["rating"] + favMovies[1].rating + favMovies[2]["rating"] + favMovies[3].rating) / 4;
console.log("The average rating is: ", averageRating);

let age1 = 2023 - favMovies[0]["year"];
let age2 = 2023 - favMovies[1].year;
let age3 = 2023 - favMovies[2]["year"];
let age4 = 2023 - favMovies[3].year;

let averageAge = (age1 + age2 + age3 + age4) / 4;
console.log("The average age is: ", averageAge);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
