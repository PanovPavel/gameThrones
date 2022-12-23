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
    async getAllCharacters() {
        const res = await this.connectResource('/characters')
        return res.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const res = await this.connectResource("/characters/" + id);
        return this._transformCharacter(res)
    }

    _transformCharacter(char){
             return  {
                    name: char.name || 'Error',
                    gender: char.gender || 'нет данных',
                    born: char.born || 'нет данных',
                    died: char.died || 'нет данных',
                    culture: char.culture || 'нет данных',
                }
    }
}

const characterModel = new CharacterModel();
characterModel.getAllCharacters()
    .then(res => console.log(res))
    .catch(error => console.log(error))
characterModel.getCharacter(50)
    .then(res => console.log(res))
    .catch(error => console.log(error))