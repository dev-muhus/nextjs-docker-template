export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold mb-4">
          ✨ HP Wand Magic ✨
        </h1>
        <h2 className="text-2xl text-purple-300 mb-8">
          魔法の杖を用いた WebAR アプリケーション
        </h2>
        <p className="text-lg text-gray-300">
          Next.js + Docker 開発環境が正常に動作しています
        </p>
        <div className="mt-8 p-4 bg-purple-800/50 rounded-lg">
          <p className="text-sm">
            開発サーバー: <code className="bg-black/30 px-2 py-1 rounded">localhost:5173</code>
          </p>
        </div>
      </div>
    </div>
  );
}
