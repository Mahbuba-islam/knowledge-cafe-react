
//get item from localStorage
const getItemFromLs = () => {
    const bookmarkList = localStorage.getItem('bookmark')
   if(bookmarkList){
    return JSON.parse(bookmarkList)
   }
   else{
     return []
   }
    // return bookmarkList ? JSON.parse(bookmarkList) : []
}



const saveLocalStorage = (newBookMarkList) => {
    const bookMarkListString = JSON.stringify(newBookMarkList)
    localStorage.setItem('bookmark', bookMarkListString)

}
// add item in LS
const addItemInLs = (id) => {
    const bookMarks = getItemFromLs()
    const bookMarkArray = [...bookMarks, id]
    saveLocalStorage(bookMarkArray)
    

}

export {addItemInLs, getItemFromLs}