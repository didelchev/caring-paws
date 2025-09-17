import Dog from "../models/Dog.js";


const dogService = { 
    getAll(){
        return Dog.find().lean()
    },
    getOne(dogId){
        return Dog.findById(dogId)
    },
    create(dogData, userId){
        return Dog.create({...dogData, _ownerId: userId})
    },
    delete(dogId){
        return Dog.findByIdAndDelete(dogId)
    },
    update(dogId, dogData){
        return Dog.findByIdAndUpdate(dogId, dogData)
    }

}

export default dogService