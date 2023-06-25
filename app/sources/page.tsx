'use client'

import Navbar from "../components/navbar";

export default function SourcesPage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <Navbar/>

      <h1 className="font-garamond text-8xl">
        Important Sources
      </h1>

      <h2 className="text-2xl font-garamond">
        Henry Goodcoles Wonderful Discovery of Elizabeth Sawyer
      </h2>
      <h2 className="text-2xl font-garamond">
        The Scottish Witchcraft statute of 1563. Also revised in 1604
      </h2>
      <h2 className="text-2xl font-garamond">
        James VIs Daemonology
      </h2>
      <h2 className="text-2xl font-garamond">
        Reginald Scots The Unreality of Witchcraft
      </h2>
      <h2 className="text-2xl font-garamond">
        William Perkins Good and Bad Witches
      </h2>
      <h2 className="text-2xl font-garamond">
        Newes from Scotland
      </h2>
      <h2 className="text-2xl font-garamond">
        The Witch of Edmonton play
      </h2>
      <h2 className="text-2xl font-garamond">
        The Trial of Janet Barker and Margaret Lauder, Edinburgh, 1643
      </h2>
      <h2 className="text-2xl font-garamond">
        Cotton Mather: The Apocalypse and Witchcraft, 1692
      </h2>
    </div>
  );
}