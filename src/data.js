


export const fetchData = async () => 
{ return fetch("https://cnodejs.org/api/v1/topics").then((res) => { return res.json() }) }
//const fetchRandomData2= async () => { return fetch("https://cnodejs.org/api/v1/topic").then((res) => { return res.json() }) }
// class Data extends Component {

//   state = {
//     listData: [],
//   };
//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
    
//     fetchRandomData()
//       .then((res) => {
//         console.log(res)
//         const listData = res.data.map((item) => { 
//           return {

//             title: item.title,
//             details:item.id
//           };
//         })

//         this.setState({
//           listData,
//         });
    
//       })


//   }

//   render() {
//     console.log(this.state.listData)
//     return (
//       <div className="App">
//       <ListBox  totalData={this.state.listData} />
//           <button onClick={this.fetchData}>刷新</button>
      
//       </div>
//     );
//   }

// }
 
export const getDetail = (detail = 1) => fetch(`https://cnodejs.org/api/v1/topic/${detail}`).then((res) => res.json()); 
