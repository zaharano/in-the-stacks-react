Created as part of [The Odin Project](https://www.theodinproject.com/dashboard) curriculum.

See it [live](https://zaharano.github.io/in-the-stacks-react/).

This is a refactor of my vanilla JS [myLibrary](https://github.com/zaharano/InTheStacks) app into React, as a way to learn some of the basics of React. 

**Todo:**
- [ ] Form validation (simply get require working again, really)
- [ ] Click outside of modal closes modal
- [x] I'm using setTimeout to save to localstorage so that it doesn't happen before setState finishes. Is this hackey or fine? Just save the temp new 'library' before setState? Learn about best practices. (componentDidUpdate()!)
- [ ] I'm using setTimeout to save to localstorage so that it doesn't happen before setState finishes. Is this hackey or fine? Just save the temp new 'library' before setState? Learn about best practices. *componentDidUpdate*
- [ ] Focus title input on form open
- [ ] Learn about the accessibility issues - fix - divs are not buttons
- [ ] Add animations

**Want to take it further?**
* [ ] Implement Firebase instead of localstorage
* [ ] Sort books by various parameters (title, author)
* [ ] addBook sorts book in based on current sort (sortMethod is in state)
* [ ] Learning about not having all of the library in state - only pulling what's needed for display from db? Is it better to pull all data in and work on it locally or not?
* [ ] Pagination
* [ ] Search
* [ ] Filter books by read (is full lib still in state - displayLib in addition or .map in place?)
* [ ] Reading 'playlist' - stack of what's next - reorderable - third choice with unread/read?
* [ ] Genre tag(s) - filters based on them
* [ ] Star rating - filter/sort based on it
* [ ] Provide counts of various things (books by genre, avg page count, etc etc)
* [ ] Make page count not required cause that's a silly thing to record (handle omission)
* [ ] Make it responsive


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
