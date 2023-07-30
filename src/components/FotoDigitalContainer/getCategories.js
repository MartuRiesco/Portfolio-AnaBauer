import data from "../../Data/categories.json";

const getCategories = () => {
    return new Promise ((resolve) => {
        resolve(data)
    })
}

export default getCategories;