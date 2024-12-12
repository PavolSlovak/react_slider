import pizzaImage1 from "./images/pizza1.jpg";
import pizzaImage2 from "./images/pizza2.jpg";
import pizzaImage3 from "./images/pizza3.jpg";

export type SlideProps = {
  id: number;
  title: string;
  description: string;
  url: string;
};
export const sliderImages: SlideProps[] = [
  {
    id: 1,
    title: "Title 1",
    description: "This is the first slider Image of our carousel",
    url: pizzaImage1,
  },
  {
    id: 2,
    title: "Title 2",
    description: "This is the second slider Image of our carousel",
    url: pizzaImage2,
  },
  {
    id: 3,
    title: "Title 3",
    description: "This is the third slider Image of our carousel",
    url: pizzaImage3,
  },
];
