export default function ConsentPage() {
  return (
    <div>
      {/* 標題區 */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">研究資訊與知情同意書</h1>
          <p className="text-lg opacity-90">
            了解參與本研究計畫的權利、義務與隱私保護方式
          </p>
        </div>
      </section>

      {/* 警示區 */}
      <div className="max-w-4xl mx-auto mt-8 mx-4">
        <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
          <p className="text-red-900 font-semibold text-lg">
            ⚠️ 重要提示
          </p>
          <p className="text-red-800 mt-2">
            本頁面僅供說明參考。正式參與本研究計畫時，
            您需簽署由人體試驗委員會（IRB）審核通過的紙本知情同意書。
          </p>
        </div>
      </div>

      {/* 內容區 */}
      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        {/* 研究目的 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🎯 研究目的
          </h2>
          <div className="bg-white border-l-4 border-primary-500 p-6 rounded">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              本研究計畫旨在開發一套「基於大型語言模型（LLM）之長照情境多模態對話分析系統」，
              用於失智症與情緒不穩定風險的早期篩檢與預警。
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              透過分析失智長者與照護者的日常對話（包括語音、文字、表情），
              我們希望能及早發現認知退化和情緒波動的跡象，
              協助照護者做出更適當的照護決策。
            </p>
          </div>
        </section>

        {/* 參與方式 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            📝 參與方式
          </h2>
          <div className="bg-white border-2 border-primary-200 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                1. 記錄照護情況
              </h3>
              <p className="text-gray-700">
                在本網站上記錄失智長者的日常問題與您採取的協助措施。
                您可以選擇填入照護者稱呼和失智者代稱，但不需要提供真實姓名。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                2. 未來對話錄音（可選）
              </h3>
              <p className="text-gray-700">
                計畫未來可能邀請願意者錄製他們與失智長者的日常對話，
                以收集更豐富的多模態數據。所有錄音將進行去識別化處理，並妥善保管。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                3. 定期訪談（可選）
              </h3>
              <p className="text-gray-700">
                研究團隊可能邀請您進行訪談，了解您的照護經驗與需求。
                訪談可以線上進行，時間由您和研究人員協商。
              </p>
            </div>
          </div>
        </section>

        {/* 隱私保護 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🔒 隱私保護
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">去識別化</h3>
              <p className="text-gray-700">
                您和失智長者的真實姓名、身分證字號、聯絡方式等個人識別資訊不會被蒐集。
                <br />
                記錄中使用的都是代稱（如「爸爸」「小王」），無法追溯到真實身份。
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">資料安全</h3>
              <p className="text-gray-700">
                所有資料存儲在安全的加密伺服器上，只有授權的研究人員可以訪問。
                <br />
                資料不會與第三方共享，僅用於本研究計畫的分析與發展。
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">資料保留期限</h3>
              <p className="text-gray-700">
                研究數據將在計畫結束後保留 3 年，供學術審查與驗證使用。
                <br />
                之後將依法銷毀，除非您同意延長保留期限用於後續研究。
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">國際隱私標準</h3>
              <p className="text-gray-700">
                本研究遵循 GDPR（歐盟通用數據保護規則）和台灣個人資料保護法的規定，
                確保您的隱私權得到最高程度的保護。
              </p>
            </div>
          </div>
        </section>

        {/* 參與者權利 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ⚖️ 您的權利
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span>
                  <strong>知情同意權：</strong>
                  在充分了解研究內容後，自願決定是否參與。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span>
                  <strong>隨時退出權：</strong>
                  您可以在任何時候退出研究，無需說明原因，不會有任何不利後果。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span>
                  <strong>資料查閱權：</strong>
                  您可以要求查看或複製您所提供的資料。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span>
                  <strong>資料更正權：</strong>
                  如發現資料不正確或不完整，可要求更正或補充。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span>
                  <strong>資料刪除權：</strong>
                  您可以要求刪除您的資料（在法律允許的範圍內）。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span>
                  <strong>申訴權：</strong>
                  若您認為您的權利受損，可向人體試驗委員會或相關單位申訴。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 可能的風險與利益 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ⚠️ 可能的風險與利益
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
              <h3 className="font-bold text-orange-800 mb-3">可能的風險</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 隱私洩露風險（已採取防護措施）</li>
                <li>• 時間投入的不便</li>
                <li>• 回憶照護困境時的情緒波動</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">可能的利益</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 獲得 AI 驅動的照護建議</li>
                <li>• 幫助改進失智症照護的技術</li>
                <li>• 為相同境況的其他照護者做出貢獻</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 聯絡窗口 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            📞 聯絡我們
          </h2>

          <div className="bg-white border-2 border-primary-300 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">計畫主持人</p>
                <p className="font-bold text-gray-800 text-lg">
                  朱學亭 副教授
                </p>
                <p className="text-gray-700">靜宜大學資訊學院</p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-500">電話</p>
                <p className="font-semibold text-gray-800">
                  [您的聯絡電話]
                </p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-500">電子郵件</p>
                <p className="font-semibold text-gray-800">
                  [您的聯絡信箱]
                </p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-500">研究倫理委員會（IRB）</p>
                <p className="text-gray-700">
                  若您對研究的倫理方面有任何疑慮或想申訴，
                  可聯絡靜宜大學人體試驗委員會。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 同意聲明 */}
        <section className="bg-primary-50 border-2 border-primary-400 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">
            📋 同意聲明
          </h2>
          <p className="text-primary-900 mb-4 leading-relaxed">
            感謝您閱讀本知情同意書。我們珍視您的隱私，並致力於確保您的權利受到保護。
          </p>
          <p className="text-primary-900 leading-relaxed">
            當您在本網站記錄照護紀錄時，代表您已閱讀並理解本說明。
            正式參與研究時，我們將與您簽署完整的知情同意書。
          </p>
        </section>
      </div>
    </div>
  );
}
