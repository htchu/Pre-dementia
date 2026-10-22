"use client";

import { useEffect, useState } from "react";
import CareLogForm, { CareLogFormData } from "@/components/CareLogForm";
import CareLogList, { CareLog } from "@/components/CareLogList";

export default function CareLogPage() {
  const [logs, setLogs] = useState<CareLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLogs = async () => {
    try {
      setError("");
      const response = await fetch("/api/care-logs");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setLogs(data);
    } catch (err) {
      setError("無法載入照護紀錄，請確認資料庫連線");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleFormSubmit = async (data: CareLogFormData) => {
    const response = await fetch("/api/care-logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to submit");
    await fetchLogs();
  };

  const handleDelete = async (id: number) => {
    const response = await fetch(`/api/care-logs/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete");
  };

  return (
    <div>
      {/* 頁面標題區 */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">照護紀錄系統</h1>
          <p className="text-lg opacity-90">
            記錄失智長者的日常問題與您採取的協助措施，
            <br />
            幫助您系統化追蹤照護情況。
          </p>
        </div>
      </section>

      {/* 內容區 */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {error && (
          <div className="mb-8 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg text-yellow-800">
            <p className="font-semibold mb-2">⚠️ 提示</p>
            <p>{error}</p>
            <p className="text-sm mt-2 opacity-80">
              如果您是首次使用，請先在 Vercel 後台建立 Postgres
              資料庫並執行 db/schema.sql 初始化表格。
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 表單區 - 佔 1/3 寬度 */}
          <div className="lg:col-span-1">
            <CareLogForm onSubmit={handleFormSubmit} />
          </div>

          {/* 紀錄列表區 - 佔 2/3 寬度 */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-gray-500 text-lg">載入中...</p>
              </div>
            ) : (
              <CareLogList
                logs={logs}
                onDelete={handleDelete}
                onRefresh={fetchLogs}
              />
            )}
          </div>
        </div>

        {/* 信息區 */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            📌 使用說明
          </h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>✓ 日期和問題描述為必填項目</li>
            <li>✓ 照護者稱呼和失智者代稱為選填，不蒐集真實姓名</li>
            <li>✓ 記錄會永久保存在伺服器上</li>
            <li>
              ✓ 未來 AI
              助理將分析這些紀錄，提供客觀的照護建議
            </li>
            <li>✓ 所有數據都受隱私保護，絕不會用於他途</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
