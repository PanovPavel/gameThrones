import Resource from "./Resource";

export default class CharacterModel extends Resource{
    constructor() {
        super();
    }
    /**
     * Получить всех персонажей
     * @return {Promise<*>}
     */
    async getAllCharacters() {
        const res = await this.connectResource('/characters?page=10')
        return res.map(this.#transformCharacter)
    }

    /**
     * Получить одного персона
     * @param id - id получаймого character
     * @return {Promise<{gender: (string), culture: (string), born: (string), name: string, died: (string)}>}
     */
    async getCharacter(id) {
        const res = await this.connectResource("/characters/" + id);
        return this.#transformCharacter(res)
    }

    /**
     * Трансофрмация объекта character к необходимой структуре
     * @param char - транфсформируемый объыект
     * @return {{gender: (string), culture: (string), born: (string), name: string, died: (string)}}
     * @private
     */
    #transformCharacter(char){
             return  {
                    url: char.url || '',
                    id: char.url.match(/(?<=\/)(.\d)(.*)/g).join(""),
                    name: char.name || 'нет данных',
                    gender: char.gender || 'нет данных',
                    born: char.born || 'нет данных',
                    died: char.died || 'нет данных',
                    culture: char.culture || 'нет данных',
                }
    }


}

// const characterModel = new CharacterModel();
// characterModel.getAllCharacters()
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
// characterModel.getCharacter(50)
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
