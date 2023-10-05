// import { promises as fs } from "fs";
// import path from "path";
// import React from "react";
// import Image from "next/image";
// // import styles from '../page.module.css'

// // const { container, main, title, grid, card } = styles;

// // using process.cwd() to get the path
// // fs.readdir to get all files in directory
// const GalleryPage = async () => {
//   const imageDirectory = path.join(process.cwd(), "/public/techs");
//   const imageFilenames = await fs.readdir(imageDirectory);

//   function chunkArray(array: any, chunkSize: number) {
//     const chunks = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//       const chunk = array.slice(i, i + chunkSize);
//       chunks.push(chunk);
//     }
//     return chunks;
//   }

//   const imageFilenamesArr = chunkArray(imageFilenames, 3);
//   console.log(imageFilenamesArr);

//   return (
//     <div className="">
//       <div className="{main}">
//         <Title Name="Gallery" Title={"Proof of Concept"} />
//         {imageFilenamesArr.map((ex: Array<string>) => (
//           <Gallery images={ex} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Gallery = ({ images }: { images: Array<string> }) => {
//   return (
//     <div className="{grid}">
//       {images.map((el: string) => (
//         <Image
//           className="{card}"
//           width={150}
//           height={150}
//           alt={"alt"}
//           src={`/techs/${el}`}
//           key={el}
//         />
//       ))}
//     </div>
//   );
// };

// const Title = ({ Name, Title }: { Name: string; Title: String }) => {
//   return (
//     <h1 className="{title}">
//       {Name} {Title}
//     </h1>
//   );
// };

// export default GalleryPage;
