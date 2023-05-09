type NoobDeveloper={
    name: string
}
// intersection type
type JuniorDeveloper = NoobDeveloper & {
    name: string,
    expertise: string,
    experience: number
}
enum Level{
    junior="junior",
    mid="mid",
    senior="senior",
}
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: Level
}



// union type
const newDeveloper: NoobDeveloper | JuniorDeveloper ={
    name: 'Upoma',
    expertise: 'javascript',
    experience: 1
}

const developer: NextLevelDeveloper = {
    name: 'next bhai',
    expertise: 'typescript',
    experience: 1,
    leadershipExperience : 1,
    level: Level.junior,
}