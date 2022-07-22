import React from "react";


class Character {
    constructor(chacterApi){
        this.hairColor = characterApi.hair_color
        this.name = characterApi.name
    }
    get firstName(){
        return this.name.split(" ")[0]
    }
};

const luke = new Character({hair_color: "brown", name: "Luke Skywalker"})

console.log(luke.firstName);