import React from 'react'

function Skills() {
    return (
       <>
       <div className="modal-dialog" style={{maxWidth: '600px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Summary</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body mb-sm-5">
          <select className="select2 form-control select2-multiple" data-toggle="select2" multiple="multiple" data-placeholder="Choose ...">
            <option>AJAX</option>
            <option>API</option>
            <option>APPLICATION SOFTWARE</option>
            <option>BOOTSTRAP</option>
            <option>C#</option>
            <option>CSS</option>
            <option>EAGER TO LEARN</option>
            <option>ENTITY FRAMEWORK</option>
            <option>FRAMEWORK</option>
            <option>HTML</option>
            <option>HTML 5</option>
            <option>JAVASCRIPT</option>
            <option>JQUERY</option>
            <option>JSON</option>
            <option>MVC</option>
            <option>MYSQL</option>
            <option>oops</option>
            <option>PHP</option>
            <option>RESTFUL</option>
            <option>SQL</option>
            <option>VISUAL STUDIO</option>
            <option>Wordpress</option>
            <option>LINQ</option>
          </select>
        </div>
        {/* /.modal-content */}
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-info">Save</button>
        </div>
      </div>
    </div>
       </>
    )
}

export default Skills
