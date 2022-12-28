import Resource from "./Resource";

export default class HousesModel extends Resource{
    async getAllHouses(){
        return await this.connectResource('/houses')
            .then(res=>{
                return res.map(this.#transformHouses)
            })
    }
    async getHouse(id) {
        return await this.connectResource(`/houses/${id}`)
            .then(res => {
                return  this.#transformHouses(res)
            })
    }
    #transformHouses(house){
        return{
            name: house.name,
            url: house.url || '',
            id: house.url.match(/(?<=\/)(.\d)(.*)|(?<=\/)(\d)/g).join(""),
            region: house.region,
            coatOfArms: house.coatOfArms,
        }
    }
}