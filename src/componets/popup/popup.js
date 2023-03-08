const Popup = ({
  submitForm,
  setBody,
  body,
  resetInp,
  title,
  setTtitle,
  setPopup,
  popup,
}) => {
    
  return (
    <>
      {popup && (
        <div className="popup_container">
          <div className="popup_inner">
            <h5>popup content</h5>
            <form onSubmit={(e) => submitForm(e)}>
              <button className="close_btn" onClick={() => setPopup(false)}>
                X
              </button>
              <div className="todo_inp">
                <input
                  value={title}
                  onChange={(e) => setTtitle(e.target.value)}
                  type="text"
                  placeholder="Title"
                />
                <input
                  placeholder="Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
              <div>
                <button onClick={(e) => resetInp(e)}>Resset</button>
                <button>Edit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
