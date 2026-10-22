import Link from "next/link";

export default function ChatbotPage() {
  return (
    <div>
      {/* 標題區 */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">🤖 AI 照護助理</h1>
          <p className="text-lg opacity-90">
            敬請期待 · 智慧照護的下一步
          </p>
        </div>
      </section>

      {/* 內容區 */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* 預告區 */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-8">⏳</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            即將推出
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI 照護助理正在開發中
            <br />
            預計 2027 年上線
          </p>
        </div>

        {/* 功能介紹 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            未來 AI 助理將提供什麼？
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-8">
              <div className="text-5xl mb-4">💭</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                理解長者的真實需求
              </h3>
              <p className="text-blue-800">
                分析長者說話背後的真正意思。
                當長者說「我不想吃」時，AI
                會幫您判斷是真的沒胃口，還是牙齒疼痛、或是情緒不好。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-green-900 mb-3">
                發現照護模式
              </h3>
              <p className="text-green-800">
                分析您的照護紀錄，發現長者行為的規律性。
                例如：「為什麼總在下午 3 點開始煩躁？」
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-8">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                提供客觀建議
              </h3>
              <p className="text-purple-800">
                根據您的紀錄和已知的照護最佳實踐，
                提出改善照護方式的建議。
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-lg p-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-3">
                生成照護行動清單
              </h3>
              <p className="text-yellow-800">
                自動將 AI 的分析和建議轉成具體的照護行動。
                例如：「明天下午 2:30 提前安排活動，預防躁動」。
              </p>
            </div>
          </div>
        </section>

        {/* 為什麼還沒上線 */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            為什麼 AI 助理還沒上線？
          </h2>
          <ul className="space-y-3 text-blue-800">
            <li className="flex gap-3">
              <span className="flex-shrink-0 font-bold">1</span>
              <span>
                <strong>需要更多訓練數據：</strong>
                我們正在收集真實的長照對話數據，讓 AI 學習更準確。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 font-bold">2</span>
              <span>
                <strong>確保臨床準確性：</strong>
                AI 的建議必須通過醫護人員的審核，確保安全有效。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 font-bold">3</span>
              <span>
                <strong>通過倫理審查：</strong>
                所有功能都要經過人體試驗委員會（IRB）的審核。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 font-bold">4</span>
              <span>
                <strong>用戶界面優化：</strong>
                我們希望 AI 的回應清晰易懂，對所有年長使用者都友善。
              </span>
            </li>
          </ul>
        </section>

        {/* 如何幫助我們 */}
        <section className="bg-green-50 border-2 border-green-400 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            🙏 您可以怎麼幫助我們？
          </h2>
          <p className="text-green-800 mb-6 text-lg">
            現在就開始在本網站記錄照護紀錄！
          </p>
          <p className="text-green-800 mb-8">
            您提供的每一筆照護數據，都在幫助我們訓練更聰明的 AI。
            當 AI 助理上線時，您會是第一批受惠者。
          </p>
          <Link href="/care-log" className="btn text-lg px-8 py-4">
            開始記錄照護紀錄 →
          </Link>
        </section>

        {/* 時間表 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            開發時間表
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                2026
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  資料收集與模型訓練
                </h3>
                <p className="text-gray-700">
                  從合作場域收集照護對話數據，對 LLM
                  進行微調以適應長照情境。
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                2027
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  α 版本測試 → AI 助理上線
                </h3>
                <p className="text-gray-700">
                  在小範圍內測試 AI
                  助理，收集反饋並改進，最後正式發佈。
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                2028
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  效果評估與持續優化
                </h3>
                <p className="text-gray-700">
                  評估 AI 在實際照護中的效果，並根據使用者反饋進行改進。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
