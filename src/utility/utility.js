// 🔖 Bookmark Utilities

// Get bookmark list from localStorage
const getItemFromLs = () => {
  const bookmarkList = localStorage.getItem('bookmark');
  return bookmarkList ? JSON.parse(bookmarkList) : [];
};

// Save updated bookmark list to localStorage
const saveLocalStorage = (bookmarkList) => {
  localStorage.setItem('bookmark', JSON.stringify(bookmarkList));
};

// Add a bookmark ID to localStorage
const addItemInLs = (id) => {
  const bookmarks = getItemFromLs();
  if (!bookmarks.includes(id)) {
    saveLocalStorage([...bookmarks, id]);
  }
};

// Remove a bookmark ID from localStorage
const removeItemFromLS = (id) => {
  const bookmarks = getItemFromLs();
  const updatedBookmarks = bookmarks.filter(item => item !== id);
  saveLocalStorage(updatedBookmarks);
};



// ⏱️ Read Time Utilities

// Get total read time from localStorage
const getReadTimeFromLs = () => {
  const readTime = localStorage.getItem('readTime');
  return readTime ? JSON.parse(readTime) : 0;
};

// Save total read time to localStorage
const saveTimeInLs = (totalTime) => {
  localStorage.setItem('readTime', JSON.stringify(totalTime));
};

// Add new reading time to existing total in localStorage
const addTimeInLs = (time) => {
  const currentTime = getReadTimeFromLs();
  const updatedTime = parseInt(currentTime) + parseInt(time);
  saveTimeInLs(updatedTime);
};

// ✅ Export all utilities
export {
  addItemInLs,
  getItemFromLs,
  removeItemFromLS,
  addTimeInLs,
  getReadTimeFromLs
};