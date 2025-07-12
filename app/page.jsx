'use client';

import { useState } from "react";

const sites = [
  {
    name: "楽天",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Rakuten_Global_Brand_Logo.svg",
    baseUrl: "https://search.rakuten.co.jp/search/mall/",
  },
  {
    name: "ヤフオク",
    logo: "https://auctions.yahoo.co.jp/favicon.ico",
    baseUrl: "https://auctions.yahoo.co.jp/search/search?p=",
  },
  {
    name: "メルカリ",
    logo: "https://static.mercdn.net/images/logo/mercari_logo.png",
    baseUrl: "https://www.mercari.com/jp/search/?keyword=",
  },
  {
    name: "ジモティー",
    logo: "https://jmty.jp/favicon.ico",
    baseUrl: "https://jmty.jp/all/sale?keyword=",
  },
  {
    name: "モノタロウ",
    logo: "https://www.monotaro.com/favicon.ico",
    baseUrl: "https://www.monotaro.com/s/?keyword=",
  },
  {
    name: "カーセンサー",
    logo: "https://www.carsensor.net/favicon.ico",
    baseUrl: "https://www.carsensor.net/usedcar/search.php?KEYWORD=",
  },
  {
    name: "Amazon",
    logo: "https://www.amazon.co.jp/favicon.ico",
    baseUrl: "https://www.amazon.co.jp/s?k=",
  }
];

export default function Alpha() {
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(keyword.trim());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-6xl font-extrabold font-serif mb-12 text-blue-700 tracking-wide drop-shadow">
        alpha
      </h1>
      <div className="w-full max-w-xl flex flex-col items-center gap-4 mb-10">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="例: ホンダ N-one 2016 フロントバンパー"
          className="w-full border border-gray-300 rounded px-4 py-3 text-lg shadow"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded text-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {searchTerm && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.baseUrl + encodeURIComponent(searchTerm)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border rounded p-4 hover:shadow-lg"
            >
              <img src={site.logo} alt={site.name} className="h-12 mb-2" />
              <span className="text-sm">{site.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
