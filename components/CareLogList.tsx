"use client";

import { useState } from "react";

export type CareLog = {
  id: number;
  caregiver_name: string | null;
  patient_nickname: string | null;
  log_date: string;
  category: string | null;
  issue: string;
  action: string | null;
  created_at: string;
};

export default function CareLogList({
  logs,
  onDelete,
  onRefresh,
}: {
  logs: CareLog[];
  onDelete: (id: number) => Promise<void>;
  onRefresh: () => Promise<void>;
}) {
  const [filter, setFilter] = useState("");
  const [deleting, setDeleting] = useState<number | null>(null);

  const filteredLogs = filter
    ? logs.filter((log) =>
        log.caregiver_name?.includes(filter)
      )
    : logs;

  const handleDelete = async (id: number) => {
    if (!confirm("確定要刪除這筆紀錄嗎？")) return;

    setDeleting(id);
    try {
      await onDelete(id);
      await onRefresh();
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold text-gray-800">📋 照護紀錄列表</h3>
        <button
          onClick={onRefresh}
          className="btn-small text-base px-4 py-2"
        >
          刷新列表
        </button>
      </div>

      {/* 篩選欄 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          依照護者稱呼篩選
        </label>
        <input
          type="text"
          placeholder="輸入照護者稱呼（如：小王）"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/3"
        />
      </div>

      {/* 紀錄列表 */}
      {filteredLogs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">暫無照護紀錄</p>
          <p>開始記錄您的第一條照護經驗吧！</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">日期</p>
                  <p className="font-semibold text-gray-800">{log.log_date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">照護者</p>
                  <p className="font-semibold text-gray-800">
                    {log.caregiver_name || "(未填)"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">失智者</p>
                  <p className="font-semibold text-gray-800">
                    {log.patient_nickname || "(未填)"}
                  </p>
                </div>
              </div>

              {log.category && (
                <div className="mb-3">
                  <span className="inline-block bg-primary-200 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {log.category}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">問題描述</p>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {log.issue}
                </p>
              </div>

              {log.action && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">採取的協助措施</p>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {log.action}
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400">
                  紀錄於：{new Date(log.created_at).toLocaleString("zh-TW")}
                </p>
                <button
                  onClick={() => handleDelete(log.id)}
                  disabled={deleting === log.id}
                  className="btn-small bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleting === log.id ? "刪除中..." : "刪除"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
