 export default class CharacterModel{
    constructor() {
        this.url = 'https://anapioficeandfire.com/api';
    }

     connectResource(url){
        return fetch(this.url +  url)
            .then(response => {
                if(!response.ok) {throw new Error('Error connect');}
                return  response.json();
            })
    }
    getAllCharacters(){
        return this.connectResource('/characters')
    }
    async getCharacter(id) {
        const res = await this.connectResource("/characters/" + id);
        return this._transformCharacter(res)
    }

    _transformCharacter(char){
             return  {
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture,
                }
    }
}

const characterModel = new CharacterModel();
// characterModel.getAllCharacters()
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
characterModel.getCharacter(50)
    .then(res => console.log(res))
    .catch(error => console.log(error))