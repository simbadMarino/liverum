import cover_montecristo from "./liverum_covers/montecristo_cover.jpg";
import cover_robinson_crusoe from "./liverum_covers/RobinsonCrusoeCover.jpg";
import cover_mysterious_island from "./liverum_covers/mystery_island.jpg";
import cover_sherlock_holmes from "./liverum_covers/sherlock_cover.jpg";

export const tileData = [
  {
    img: cover_montecristo,
    title: "Count of Montecristo",
    author: "Alexandre Dumas",
    tokenid: "1002000", //TRC-10 BTT token
    precision: 6,
    url:
      "https://gateway.btfssoter.io/btfs/QmZVMJXP4o7QRHFHpqECbjwewJXHFHG46T5wrroL7tK6iM/Montecristo.epub"
  },
  {
    img: cover_robinson_crusoe,
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    tokenid: "1000001", // TRC-10 SEED
    precision: 0,
    url:
      "https://gateway.btfssoter.io/btfs/QmdQ9pWT1fqpjroXc5Po4hFg6TQ7qWXrNvjfgLRGHxiAWt/Robinson%20Crusoe.epub"
  },
  {
    img: cover_mysterious_island,
    title: "Mysterious Island",
    author: "Jules Verne",
    tokenid: "1002072", // TRC-10 TESTTWO Token
    precision: 0,
    url:
      "https://standardebooks.org/ebooks/jules-verne/the-mysterious-island/stephen-w-white/dist/jules-verne_the-mysterious-island.epub"
  },
  {
    img: cover_sherlock_holmes,
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Connan Doyle",
    tokenid: "1000322", //CommunityNodeTOken
    precision: 0,
    url:
      "https://standardebooks.org/ebooks/arthur-conan-doyle/the-adventures-of-sherlock-holmes/dist/arthur-conan-doyle_the-adventures-of-sherlock-holmes.epub"
  }
];
