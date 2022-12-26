export default class Resource{
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
     * @param url - api по которуму выполняется http запрос
     * @return {Promise<any>} - ответ от сервера
     */
     connectResource(url){
        return fetch(this.url +  url)
            .then(response => {
                if(!response.ok) {throw new Error('Error connect');}
                return  response.json();
            })
    }
}
