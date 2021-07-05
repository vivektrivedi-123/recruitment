import * as React from 'react';
import { List, arrayMove, arrayRemove } from 'react-movable';

const RemovableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x-circle"
  >
    <title>Remove</title>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>

);
const buttonStyles = {
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  cursor: 'pointer',
  background: 'transparent'
};

const Removable=({item}) => {
   const [items, setItems] = React.useState(item)
  return (
   <>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{
              padding: '0em 0em 1em 0em',
              cursor: isDragged ? 'grabbing' : 'inherit'
            }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, index, isDragged, isSelected }) => 
        <div  key={index} className="d-flex">
                    <div className="card w-100 shadow-none">
                      <div className="ps-1 border-start border-4 border-danger">
                      <div className="rounded card-body px-3 py-2 bg-white border users-select position-relative">
                        <h5 className="text-info semi-bold my-0 ">  
                         &nbsp;   <li
                        
            {...props}
            // style={{
            //   ...props.style,
            //   padding: '1.5em',
            //   margin: '0.5em 0em',
            //   listStyleType: 'none',
            //   border: '2px solid #CCC',
            //   boxShadow: '3px 3px #AAA',
            //   color: '#333',
            //   borderRadius: '5px',
            //   cursor: isDragged ? 'grabbing' : 'grab',
            //   fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
            //   backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF'
            // }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>{value}</div>{' '}
              <button
                onClick={() => {
                  setItems(
                    typeof index !== 'undefined'
                      ? arrayRemove(items, index)
                      : items
                  );
                }}
                style={buttonStyles}
              >
                <RemovableIcon />
              </button>
            </div>
          </li>
                         
                         </h5>
                        <div className="action-module position-absolute mt-0 translate-middle-y">
                          <a href="#" className="d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-minus-circle-outline font-20 text-danger d-inline-block align-middle" />
                          </a>
                        </div>
                      </div>
                      {/* <div className="rounded card-body px-3 py-2 bg-white border users-select position-relative">  
                          <li {...props}>{value}</li>
                          </div> */}
                          </div>
                          </div>
                          </div>
        // <div className="d-flex">
        //   <li
        //     {...props}
        //     style={{
        //       ...props.style,
        //       padding: '1.5em',
        //       margin: '0.5em 0em',
        //       listStyleType: 'none',
        //       border: '2px solid #CCC',
        //       boxShadow: '3px 3px #AAA',
        //       color: '#333',
        //       borderRadius: '5px',
        //       cursor: isDragged ? 'grabbing' : 'grab',
        //       fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        //       backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF'
        //     }}
        //   >
        //     <div
        //       style={{
        //         display: 'flex',
        //         alignItems: 'center',
        //         justifyContent: 'space-between'
        //       }}
        //     >
        //       <div>{value}</div>{' '}
        //       <button
        //         onClick={() => {
        //           setItems(
        //             typeof index !== 'undefined'
        //               ? arrayRemove(items, index)
        //               : items
        //           );
        //         }}
        //         style={buttonStyles}
        //       >
        //         <RemovableIcon />
        //       </button>
        //     </div>
        //   </li>
        //   </div>
        }
      />
      {/* <button
        onClick={() =>
          setItems(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'])
        }
      >
        Reset
      </button> */}
</>
  );
};

export default Removable;