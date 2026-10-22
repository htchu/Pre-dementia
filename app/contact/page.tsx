export default function ContactPage() {
  return (
    <div>
      {/* 標題區 */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">聯絡我們</h1>
          <p className="text-lg opacity-90">
            有任何問題或建議？歡迎與我們聯繫
          </p>
        </div>
      </section>

      {/* 內容區 */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* 計畫團隊 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            📞 計畫團隊聯絡方式
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 主持人 */}
            <div className="bg-white border-2 border-primary-300 rounded-lg p-8">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                計畫主持人
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">姓名</p>
                  <p className="font-bold text-gray-800 text-lg">
                    朱學亭 副教授
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">服務機構</p>
                  <p className="text-gray-800">靜宜大學資訊學院</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">專長</p>
                  <p className="text-gray-800">
                    人工智慧、機器學習、自然語言處理
                  </p>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-500">電話</p>
                  <p className="font-bold text-gray-800">
                    [您的聯絡電話]
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">電子郵件</p>
                  <p className="font-bold text-gray-800">
                    [您的聯絡信箱]
                  </p>
                </div>
              </div>
            </div>

            {/* 共同主持人 */}
            <div className="bg-white border-2 border-primary-300 rounded-lg p-8">
              <div className="text-4xl mb-4">👩‍⚕️</div>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                共同主持人
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">姓名</p>
                  <p className="font-bold text-gray-800 text-lg">
                    簡慧雯 助理教授
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">服務機構</p>
                  <p className="text-gray-800">亞洲大學護理學系</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">專長</p>
                  <p className="text-gray-800">
                    長期照護、失智症護理、老年護理
                  </p>
                </div>

                <div className="border-t border-gray-300 pt-4 text-gray-500 text-sm">
                  <p>聯絡方式同計畫主持人</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 聯絡方式 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            📧 聯絡方式
          </h2>

          <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-8 space-y-6">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">📞</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 mb-1">電話</p>
                <p className="text-gray-700">[您的聯絡電話]</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">📧</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 mb-1">電子郵件</p>
                <p className="text-gray-700">[您的聯絡信箱]</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🏢</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 mb-1">物理地址</p>
                <p className="text-gray-700">
                  靜宜大學資訊學院
                  <br />
                  台中市沙鹿區臺灣大道 7 段
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 研究倫理委員會 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            ⚖️ 研究倫理委員會
          </h2>

          <div className="bg-white border-2 border-green-300 rounded-lg p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              若您對本研究的倫理方面有任何疑慮、建議或想申訴，
              可聯絡靜宜大學人體試驗委員會（Institutional Review Board, IRB）。
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              IRB 是獨立的審查機構，負責確保研究遵循倫理規範，
              保護參與者的權利和安全。
            </p>

            <div className="bg-green-50 border border-green-300 rounded p-4">
              <p className="text-sm text-gray-600">
                靜宜大學人體試驗委員會聯絡方式：
                <br />
                [您的 IRB 聯絡資訊]
              </p>
            </div>
          </div>
        </section>

        {/* 常見問題 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            ❓ 常見問題
          </h2>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-300 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-gray-800">
                照護紀錄會被怎麼使用？
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                您的照護紀錄將被用於：
                <ul className="mt-2 space-y-2 ml-4">
                  <li>• 訓練 AI 模型識別失智症早期徵兆</li>
                  <li>• 開發情緒預警系統</li>
                  <li>• 建立台灣在地化的長照語料庫</li>
                  <li>
                    • 學術研究與發表（只用去識別化的聚合數據）
                  </li>
                </ul>
              </div>
            </details>

            <details className="group bg-white border border-gray-300 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-gray-800">
                我隨時可以退出嗎？
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                是的。您可以在任何時候停止使用本平台或要求刪除您的紀錄，
                無需提供任何理由，也不會有任何不利後果。
              </div>
            </details>

            <details className="group bg-white border border-gray-300 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-gray-800">
                AI 助理的建議安全嗎？
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                AI 助理的建議經過醫護人員審核，但不能替代正式的醫療診斷。
                對於任何健康疑慮，請務必諮詢您的醫生或專業照護人員。
              </div>
            </details>

            <details className="group bg-white border border-gray-300 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-gray-800">
                我可以申請查看我的資料嗎？
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                可以。您有權查看、複製、更正或要求刪除您提供的所有資料。
                請聯絡計畫主持人提出申請，我們會在 30 天內回應。
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
