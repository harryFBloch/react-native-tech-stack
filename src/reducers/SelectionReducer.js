export default (state = undefined, action) => {
  if (action === "select_library"){
    return action.payload
  }
}
