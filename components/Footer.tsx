export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 專案資訊 */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">計畫資訊</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              本網站為國科會專題研究計畫
              「基於大型語言模型（LLM）之長照情境多模態對話分析」
              的入口網站，目的是協助失智照護者記錄照護情況，
              並為未來 AI 輔助系統預留資料收集管道。
            </p>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">聯絡我們</h3>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>計畫主持人：</strong>朱學亭 副教授
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>服務機構：</strong>靜宜大學資訊學院
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              <strong>計畫期程：</strong>2026年8月 – 2028年7月
            </p>
          </div>
        </div>

        {/* 底部欄 */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
          <p>© 2026 Pre-dementia Project. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            本網站致力於無障礙設計，若有使用困難，歡迎聯絡我們。
          </p>
        </div>
      </div>
    </footer>
  );
}
