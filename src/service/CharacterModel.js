export default class CharacterModel{
    constructor() {
        /**
         * Строка подключения к серверу
         * @type {string}
         */
        this.url = 'https://anapioficeandfire.com/api';
    }

    /**
     * Запрос к серверу
     * @method
     * @param url - url по которуму выполняется http запрос
     * @return {Promise<any>} - ответ от сервера
     */
     _connectResource(url){
        return fetch(this.url +  url)
            .then(response => {
                if(!response.ok) {throw new Error('Error connect');}
                return  response.json();
            })
    }

    /**
     * Получить всех персонажей
     * @return {Promise<*>}
     */
    async getAllCharacters() {
        const res = await this._connectResource('/characters')
        return res.map(this.#transformCharacter)
    }

    /**
     * Получить персона
     * @param id - id получаймого character
     * @return {Promise<{gender: (string), culture: (string), born: (string), name: string, died: (string)}>}
     */
    async getCharacter(id) {
        const res = await this._connectResource("/characters/" + id);
        return this.#transformCharacter(res)
    }

    /**
     * Трансофрмация объекта к необходимой структуре
     * @param char - транфсформируемый объыект
     * @return {{gender: (string), culture: (string), born: (string), name: string, died: (string)}}
     * @private
     */
    #transformCharacter(char){
             return  {
                    name: char.name || 'Error',
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