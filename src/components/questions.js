// basic
// import React from "react"

// function HoroScope() {
//   const starSign = "pieces"

//   const timeBorn = "8:35am"
//   return (
//     <div>
//       <p>
//         Welcome back {starSign}, just to double check; you were born at{" "}
//         {timeBorn} ?
//       </p>
//     </div>
//   )
// }

// export default HoroScope

// Advanced

// import React from "react"

// const buttonStyle = {
//   backgroundColor: "black",
//   color: "white",
//   borderRadius: 4
// }

// const buttonStyleAlt = {
//   backgroundColor: "pink",
//   color: "yellow",
//   borderRadius: 4
// }

// function Hover() {
//   return (
//     <button
//       style={buttonStyle}
//       onMouseLeave={console.log("out")}
//       onMouseEnter={console.log("in")}
//     >
//       {" "}
//       click me
//     </button>
//   )
// }

// class Board extends React.Component {
//   constructor() {
//     super()
//     this.state = { hover: false }
//     this.Speed = 30
//     this.Car = {
//       name: "Tesla",
//       range: 100,
//       colour: "coral"
//     }
//   }
//   render() {
//     return (
//       <>
//         <h1>driving speed:{this.Speed}</h1>
//         <p>
//           Tim is driving a {this.Car.name}, which is {this.Car.colour} and has a
//           range of <b>{this.Car.range}</b>mi per full charge.{" "}
//         </p>
//         <button type="button" state={this.state} style={buttonStyle}>
//           Click me{" "}
//         </button>
//       </>
//     )
//   }
// }

// export default Board

// {
//   MethodologyData.map(({ title, standfirst, icon, background }) => {
//     return (
//       <div
//         onMouseOver={() => setCurrentCard(background)}
//         onMouseLeave={() => setCurrentCard(defaultBackground)}
//       >
//         <MethodologyCard icon={icon} title={title} standfirst={standfirst} />
//       </div>
//     )
//   })
// }
