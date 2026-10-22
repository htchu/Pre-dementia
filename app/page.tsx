import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 主視覺 Hero 區塊 */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white min-h-[600px] flex items-center px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左側文字 */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                失智照護
                <br />
                <span className="text-primary-200">助手</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
                記錄失智長者的照護故事，
                <br />
                用 AI 技術陪伴您的照護之路。
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Link
                  href="/care-log"
                  className="inline-block px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-lg hover:bg-gray-100 transition text-center"
                >
                  開始記錄 →
                </Link>
                <Link
                  href="/project"
                  className="inline-block px-8 py-4 bg-primary-800 text-white font-bold text-lg rounded-lg hover:bg-primary-900 transition text-center border-2 border-white"
                >
                  認識計畫
                </Link>
              </div>
            </div>

            {/* 右側圖示區域 */}
            <div className="hidden md:block">
              <div className="bg-primary-800 bg-opacity-30 rounded-2xl p-8 backdrop-blur">
                <div className="space-y-4">
                  <div className="text-4xl">💚</div>
                  <p className="text-sm opacity-80">
                    國科會專題研究計畫
                    <br />
                    基於大型語言模型之長照照護分析
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能概覽 - 簡潔卡片設計 */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          主要功能
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 卡片 1: 照護紀錄 */}
          <Link
            href="/care-log"
            className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">照護紀錄</h3>
            <p className="text-gray-700 mb-4">
              記錄失智長者的日常問題與協助措施，追蹤照護情況。
            </p>
            <p className="text-primary-700 font-semibold">開始記錄 →</p>
          </Link>

          {/* 卡片 2: 計畫介紹 */}
          <Link
            href="/project"
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">計畫介紹</h3>
            <p className="text-gray-700 mb-4">
              瞭解 LLM 失智照護研究計畫的目的、內容與願景。
            </p>
            <p className="text-blue-700 font-semibold">了解更多 →</p>
          </Link>

          {/* 卡片 3: 知情同意書 */}
          <Link
            href="/consent"
            className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              研究資訊
            </h3>
            <p className="text-gray-700 mb-4">
              了解參與本計畫的權利、隱私保護與聯絡方式。
            </p>
            <p className="text-green-700 font-semibold">查看說明 →</p>
          </Link>
        </div>
      </section>

      {/* 核心價值 - 簡潔說明 */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            為什麼選擇我們
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">系統化記錄</h3>
              <p className="text-gray-600">
                幫您整理失智長者的照護故事，發現模式和趨勢。
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                AI 輔助分析
              </h3>
              <p className="text-gray-600">
                用大型語言模型技術理解長者需求、提供建議。
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">隱私保護</h3>
              <p className="text-gray-600">
                不蒐集真實姓名，遵循研究倫理規範。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 快速導航 - 底部 */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-primary-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">準備好開始嗎？</h2>
          <p className="text-lg mb-8 opacity-95">
            現在就記錄您的第一條照護紀錄，幫助我們開發更智慧的照護系統。
          </p>
          <Link
            href="/care-log"
            className="inline-block px-10 py-4 bg-white text-primary-700 font-bold text-lg rounded-lg hover:bg-gray-100 transition"
          >
            開始記錄 →
          </Link>
        </div>
      </section>

      {/* 頁尾提示 */}
      <section className="bg-gray-100 py-8 px-4 text-center">
        <p className="text-gray-600 text-sm">
          國科會專題研究計畫 115WFD2310066
          <br />
          靜宜大學資訊學院 | 朱學亭 副教授
        </p>
      </section>
    </div>
  );
}
