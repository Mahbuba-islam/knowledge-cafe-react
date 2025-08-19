
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

// remove item from LS
const removeItemFromLS = (id) => {
  const bookMarkList = getItemFromLs()
  const remaining = bookMarkList.filter(i => i !== id)
  saveLocalStorage(remaining)
}

const saveLocalStorage = (newBookMarkList) => {
    const bookMarkListString = JSON.stringify(newBookMarkList)
    localStorage.setItem('bookmark', bookMarkListString)
    
}
// add item in LS
const addItemInLs = (id) => {
    const bookMarks = getItemFromLs()
    if(!bookMarks.includes(id)){
     const bookMarkArray = [...bookMarks, id]
    saveLocalStorage(bookMarkArray)
    }
    
    

}

export {addItemInLs, getItemFromLs, removeItemFromLS}