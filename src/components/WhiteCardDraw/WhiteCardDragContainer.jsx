// import React from 'react';
// import WhiteCardSourceBox from './WhiteCardSourceBox';
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firebaseConnect } from "react-redux-firebase";

// import "../../assets/styles/cardhand/cardhand.css";
// import "../../assets/styles/dealWhiteCardButton.css";

// const WhiteCardDragContainer = () => {
//   return (
//       <div>
//         <div className='cards'>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='1'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='2'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='3'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='4'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='5'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='6'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='7'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='8'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='9'
//                 name='white card text here'
//               />
//               </div>
//           </div>
//           <div className='card'>
//               <div className='card-face'>
//               <WhiteCardSourceBox
//                 id='10'
//                 name='white card text here'
//               />
//               </div>
//           </div> */}
//         </div>
//       </div>
//   );
// }

// const enhance = compose(
//   connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
// );

// export default firebaseConnect()(enhance(WhiteCardDragContainer));
