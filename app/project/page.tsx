export default function ProjectPage() {
  return (
    <div>
      {/* 標題區 */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">計畫介紹</h1>
          <p className="text-lg opacity-90">
            認識「基於大型語言模型（LLM）之長照情境多模態對話分析」研究計畫
          </p>
        </div>
      </section>

      {/* 內容區 */}
      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        {/* 計畫目標 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 計畫目標</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 leading-relaxed text-lg">
              開發一套「非侵入式」且具備「深層語義推理能力」的自動化早期篩檢與預警系統。
              <br />
              <br />
              針對台灣老年人口超過 20%
              所帶來的照護壓力，利用最新的人工智慧技術協助第一線機構人員監測長者的身心狀況。
            </p>
          </div>
        </section>

        {/* 為什麼要做這個計畫 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ❓ 為什麼要做這個計畫？
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                1️⃣ 超高齡社會的照護危機
              </h3>
              <p className="text-gray-700">
                台灣已在 2025 年進入超高齡社會。失智症患者增加迅速，但照護人力嚴重短缺。
                <br />
                <br />
                失智症長者常伴隨認知退化與情緒不穩，若缺乏及時預警，將大幅增加照護成本與衝突。
              </p>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                2️⃣ 早期篩檢的缺口
              </h3>
              <p className="text-gray-700">
                目前的失智症篩檢主要依賴量表測試（如 MMSE、AD8），
                缺乏日常情境中的實時、非侵入性監測工具。
                <br />
                <br />
                很多長者在輕度認知障礙（MCI）階段就出現情緒波動，但往往被忽略，導致介入時機過晚。
              </p>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                3️⃣ AI 技術的新可能性
              </h3>
              <p className="text-gray-700">
                大型語言模型（LLM）在分析自然語言上有突破性進展。
                <br />
                <br />
                我們可以用 LLM 分析長者與照護者的日常對話，
                從中發現語義變化、情緒起伏、認知退化的跡象。
              </p>
            </div>
          </div>
        </section>

        {/* 計畫在做什麼 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🔧 計畫在做什麼？
          </h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              多模態對話分析系統
            </h3>
            <p className="text-gray-700 mb-6">
              我們建構一套整合多種信息來源的 AI 系統：
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  🎤
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    語音分析（Whisper + WavLM）
                  </p>
                  <p className="text-gray-600 text-sm">
                    捕捉語速、停頓、音調等聲學特徵，反映情緒狀態
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  💬
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    文本分析（Llama-3-Taiwan）
                  </p>
                  <p className="text-gray-600 text-sm">
                    分析長者說話的語義連貫性、詞彙重複、時序混亂等失智特徵
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  😊
                </div>
                <div>
                  <p className="font-semibold text-gray-800">表情辨識</p>
                  <p className="text-gray-600 text-sm">
                    捕捉微表情變化，辨識情緒困擾的跡象
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  📋
                </div>
                <div>
                  <p className="font-semibold text-gray-800">病歷整合</p>
                  <p className="text-gray-600 text-sm">
                    結合既往病史、用藥紀錄、認知評估量表歷史，建立個人化基準線
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 計畫團隊 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">👥 計畫團隊</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-primary-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-2">
                計畫主持人
              </h3>
              <p className="font-semibold text-gray-800">朱學亭 副教授</p>
              <p className="text-gray-600">
                靜宜大學資訊學院
                <br />
                專長：AI、機器學習、自然語言處理
              </p>
            </div>

            <div className="bg-white border-2 border-primary-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-2">
                共同主持人
              </h3>
              <p className="font-semibold text-gray-800">簡慧雯 助理教授</p>
              <p className="text-gray-600">
                亞洲大學護理學系
                <br />
                專長：長期照護、失智症護理
              </p>
            </div>
          </div>
        </section>

        {/* 合作場域 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🏥 合作場域
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">
                秀老郎日間照顧中心
              </h3>
              <p className="text-gray-700 text-sm">
                社區型日間照顧，長者具備一定的社交能力與活動量，
                對話語境更貼近日常生活。
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">
                永康護理之家
              </h3>
              <p className="text-gray-700 text-sm">
                全日照護機構，長者病程更多樣、醫療需求更高，
                有助驗證系統在不同照護環境的適用性。
              </p>
            </div>
          </div>
        </section>

        {/* 預期成果 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🎁 預期成果
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-xl">✅</span>
                <span>
                  台灣在地化的長照對話語料庫，供學術界與業界使用
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✅</span>
                <span>
                  可解釋性的風險評估平台，照護者能理解 AI
                  的判斷依據
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✅</span>
                <span>
                  實時情緒預警系統，協助照護者及早發現和介入
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✅</span>
                <span>
                  彌補專業人力缺口，減輕照護者負擔，提升照護品質
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✅</span>
                <span>下降後期失智症患者的照護成本（估計 30-40%）</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 計畫期程 */}
        <section className="bg-white border-2 border-primary-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📅 計畫期程
          </h2>
          <p className="text-gray-700 text-lg font-semibold">
            2026 年 8 月 1 日 ~ 2028 年 7 月 31 日
          </p>
          <p className="text-gray-600 mt-3">
            為期 2 年。第一年專注技術開發與模型微調；第二年進行臨床場域驗證與系統優化。
          </p>
        </section>
      </div>
    </div>
  );
}
