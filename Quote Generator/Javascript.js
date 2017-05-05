var randomNumber = Math.floor(Math.random() * 20);
var quotes = []
01. Only I can change my life. No one can do it for me. Carol Burnett
21. Before I got married I had six theories about bringing up children; now I have six children and no theories.
—John Wilmot
22. What the world needs is more geniuses with humility, there are so few of us left.
—Oscar Levant
23. Always forgive your enemies; nothing annoys them so much.
—Oscar Wilde
24. I’ve gone into hundreds of [fortune-teller’s parlors], and have been told thousands of things, but nobody ever told me I was a policewoman getting ready to arrest her.
—New York City detective
25. When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.
—Norm Crosby
26. Those who believe in telekinetics, raise my hand.
—Kurt Vonnegut
27. Just the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.
—Carl Sagan
28. My pessimism extends to the point of even suspecting the sincerity of the pessimists.
—Jean Rostand
29. Sometimes I worry about being a success in a mediocre world.
—Lily Tomlin
30. I quit therapy because my analyst was trying to help me behind my back.
—Richard Lewis
31. We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.
—Robert Wilensky
32. If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?
—Scott Adams
33. If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.
—Anon
34. When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.
—Clarence Darrow
35. Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.
—Cullen Hightower
36. There are many who dare not kill themselves for fear of what the neighbors will say.
—Cyril Connolly
37. There’s so much comedy on television. Does that cause comedy in the streets?
—Dick Cavett
38. All men are frauds. The only difference between them is that some admit it. I myself deny it.
—H. L. Mencken
39. I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.
—Victor Hugo
40. I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.
—Woody Allen.


function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
}

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
