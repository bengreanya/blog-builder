import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSubtitle, setFont, setText }) {
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleSubtitleChange(e) {
    setSubtitle(e.target.value);
  }
  function handleSetFont(e) {
    setFont(e.target.value);
  }
  function handleSetText(e) {
    setText(e.target.value);
  }
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" onChange={handleTitleChange} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input name="subtitle" type="text" onChange={handleSubtitleChange} />
        <label htmlFor="subtitle">Subtitle</label>
      </div>
      <div className="form-control">
        <select name="font" onChange={handleSetFont}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} onChange={handleSetText} />
        <label>Text</label>
      </div>
    </div>
  );
}
