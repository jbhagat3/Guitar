import { GuitarItem } from '../models/guitar-item';
interface Data {
    guitars: Array<GuitarItem>
    };

export default {
    guitars: [
    {
    id:1,
      price: 200,
      category: "electric",
      brand: "Taylor",
      new: false,
      image: "../../assets/img1.jpg"
    },
    {
        id:2,
        price: 500,
        category: "acoustic",
        brand: "Jackson",
        new: true,
        image: "../../assets/img2.jpg"
      },
      {
          id:3,
        price: 1000,
        category: "bass",
        brand: "Gibson",
        new: false,
        image: "../../assets/img3.jpg"
      },
      {
          id:4,
        price: 1200,
        category: "electric",
        brand: "Taylor",
        new: true,
        image: "../../assets/img4.jpg"
      },
      {
          id:5,
        price: 1500,
        category: "acoustic",
        brand: "Jackson",
        new: false,
        image: "../../assets/img5.jpg"
      },
      {
          id:6,
        price: 2000,
        category: "bass",
        brand: "Gibson",
        new: false,
        image: "../../assets/img6.jpg"
      },
      {
          id:7,
        price: 3000,
        category: "electric",
        brand: "Taylor",
        new: true,
        image: "../../assets/img7.jpg"
      },
      {
          id:8,
        price: 3500,
        category: "acoustic",
        brand: "Gibson",
        new: true,
        image: "../../assets/img8.jpg"
      },
      {
          id:9,
        price: 4500,
        category: "electric",
        brand: "Jackson",
        new: true,
        image: "../../assets/img1.jpg"
      }

]
} as Data;

