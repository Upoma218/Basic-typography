"use strict";
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
// union type
const newDeveloper = {
    name: 'Upoma',
    expertise: 'javascript',
    experience: 1
};
const developer = {
    name: 'next bhai',
    expertise: 'typescript',
    experience: 1,
    leadershipExperience: 1,
    level: Level.junior,
};
