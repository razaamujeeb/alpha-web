'use client';

import { useState } from "react";

export default function Alpha() {
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(keyword);
  };

  const buildSearchURL = (baseUrl, query) => {
    return baseUrl + encodeURIComponent(query);
  };

  const urls = searchTerm
    ? {
        rakuten: buildSearchURL("https://search.rakuten.co.jp/search/mall/", searchTerm),
        yahoo: buildSearchURL("https://auctions.yahoo.co.jp/search/search?p=", searchTerm),
        mercari: buildSearchURL("https://www.mercari.com/jp/search/?keyword=", searchTerm),
        jimoty: buildSearchURL("https://jmty.jp/all/sale?keyword=", searchTerm),
      }
    : {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-8">
      <h1 className="text-4xl font-bold mb-10 mt-20">alpha</h1>
      <div className="flex w-full max-w-xl mb-10">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="例: ホンダ N-one 2016 フロントバンパー"
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 text-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-2 rounded-r text-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {searchTerm && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl">
          <iframe src={urls.rakuten} className="w-full h-[600px] border" title="Rakuten" />
          <iframe src={urls.yahoo} className="w-full h-[600px] border" title="Yahoo" />
          <iframe src={urls.mercari} className="w-full h-[600px] border" title="Mercari" />
          <iframe src={urls.jimoty} className="w-full h-[600px] border" title="Jimoty" />
        </div>
      )}
    </div>
  );
}
