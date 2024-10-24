import { Item } from "@/shared/lib/types";

export async function getItems(): Promise<Item[]> {
  return [
    {
      name: "t-shirt",
      icon: "👕",
      conditionals: [],
      image: {
        src: "/images/tshirt.webp",
        alt: "T-shirt",
        width: 100,
        height: 100,
      },
    },
    {
      name: "bukser",
      icon: "👖",
      conditionals: ["Temperature"],
      temperature: { max: 20 },
      image: {
        src: "/images/bukser.jpg",
        alt: "Bukser",
        width: 100,
        height: 100,
      },
    },
    {
      name: "shorts",
      icon: "🩳",
      conditionals: ["Temperature"],
      temperature: { min: 20 },
      image: {
        src: "/images/shorts.jpg",
        alt: "Shorts",
        width: 100,
        height: 100,
      },
    },
    {
      name: "trøje",
      icon: "👕",
      conditionals: ["Temperature"],
      temperature: { max: 20 },
      image: {
        src: "/images/troje.jpg",
        alt: "Trøje",
        width: 100,
        height: 100,
      },
    },
    {
      name: "strømper",
      icon: "🧦",
      conditionals: [],
      image: {
        src: "/images/stromper.jpg",
        alt: "Strømper",
        width: 100,
        height: 100,
      },
    },
    {
      name: "tandbørste",
      icon: "🪥",
      conditionals: [],
      image: {
        src: "/images/tandborste.jpg",
        alt: "Tandbørste",
        width: 100,
        height: 100,
      },
    },
    {
      name: "d-dråber",
      icon: "💧",
      conditionals: [],
      image: {
        src: "/images/d-draaber.jpg",
        alt: "D-dråber",
        width: 100,
        height: 100,
      },
    },
    {
      name: "regntøj",
      icon: "🌂",
      conditionals: ["Weather"],
      weather: ["Rain"],
      image: {
        src: "/images/regntoj.jpg",
        alt: "Regntøj",
        width: 100,
        height: 100,
      },
    },
    {
      name: "ekstra sokker",
      icon: "🧦",
      conditionals: ["Weather"],
      weather: ["Rain"],
      image: {
        src: "/images/stromper.jpg",
        alt: "Ekstra sokker",
        width: 100,
        height: 100,
      },
    },
    {
      name: "flyverdragt",
      icon: "🧥",
      conditionals: ["Temperature"],
      temperature: { max: 5 },
      image: {
        src: "/images/flyverdragt.jpg",
        alt: "Flyverdragt",
        width: 100,
        height: 100,
      },
    },
    {
      name: "vanter",
      icon: "🧤",
      conditionals: ["Temperature"],
      temperature: { max: 10 },
      image: {
        src: "/images/vanter.jpg",
        alt: "Vanter",
        width: 100,
        height: 100,
      },
    },
    {
      name: "solcreme",
      icon: "🧴",
      conditionals: ["Date"],
      fromDate: "2021-05-01",
      toDate: "2021-09-01",
      image: {
        src: "/images/solcreme.jpg",
        alt: "Solcreme",
        width: 100,
        height: 100,
      },
    },
    {
      name: "drikkedunk",
      icon: "💦",
      conditionals: ["Date"],
      fromDate: "2021-06-01",
      toDate: "2021-09-01",
      image: {
        src: "/images/drikkedunk.jpg",
        alt: "Drikkedunk",
        width: 100,
        height: 100,
      },
    },
  ];
}
