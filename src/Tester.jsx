// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function Tester() {

//     const [apiproduct, setApiProduct] = useState()

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:9090/api/products/#659d0c1c61e4c5934bb4592a');
//                 setApiProduct(response.data);
//                 console.log(response.data);
//                 console.log("okkkkkkk");
//                 console.log(response.data[0]._id);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [])

//     return (
//         <div>Tester</div>
//     )
// }

// export default Tester