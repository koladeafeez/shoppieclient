// import React, { Component } from "react";
// import { Button } from "@material-ui/core";
// // import ScrollMenu from "react-horizontal-scrolling-menu";
// import "./app.css";
// import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";

// // list of items
// const list = [
//   { name: "item1" },
//   { name: "item2" },
//   { name: "item3" },
//   { name: "item4" },
//   { name: "item5" },
//   { name: "item6" },
//   { name: "item7" },
//   { name: "item8" },
//   { name: "item9" },
// ];

// // One item component
// // selected prop will be passed
// const MenuItem = ({ text, selected, image }) => {
//   return (
//     <Button>
//       <div className={`menu-item ${selected ? "active" : ""}`}>
//         {" "}
//         <img
//           src={`data:image/jpeg;base64,${image.imgSource}`}
//           width="50px"
//           height="50px"
//           alt="productimage"
//         />
//       </div>
//     </Button>
//   );
// };

// // All items component
// // Important! add unique key
// export const Menu = (list, selected) =>
//   list.map((el) => {
//     const { name } = el;
//     const image = el;
//     console.log("name", name);
//     return (
//       <MenuItem
//         text={name}
//         image={image}
//         key={name}
//         selected={selected}
//       ></MenuItem>
//     );
//   });

// const Arrow = ({ text, className }) => {
//   return <div className={className}>{text}</div>;
// };

// const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// const selected = "0";

// export class Slider extends Component {
//   constructor(props) {
//     super(props);
//     // call it again if items count changes
//     // this.menuItems = Menu(list, selected);
//     this.menuItems = Menu(this.props.images, selected);
//     this.props.images.forEach((img, i) => {
//       img.name = String(i);
//     });
//     this.images = this.props.images;
//     console.log(this.props.images);
//     console.log(this.images);
//   }

//   // image =
//   // this.images !== undefined
//   //   ? `data:image/jpeg;base64,${this.images[0].imgSource}`
//   //   : "";

//   state = {
//     selected,
//     images: this.images,
//   };

//   onSelect = (key) => {
//     this.setState({ selected: key });
//   };

//   render() {
//     const { selected } = this.state;
//     // Create menu from items
//     const menu = this.menuItems;
//     console.log("below", this.images);
//     return (
//       <div className="App">
//         {this.props.type}
//         <ScrollMenu
//           data={menu}
//           arrowLeft={ArrowLeft}
//           arrowRight={ArrowRight}
//           selected={selected}
//           onSelect={this.onSelect}
//         />
//       </div>
//     );
//   }
// }
