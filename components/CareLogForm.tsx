"use client";

import { FormEvent, useState } from "react";

export type CareLogFormData = {
  caregiverName: string;
  patientNickname: string;
  logDate: string;
  category: string;
  issue: string;
  action: string;
};

export default function CareLogForm({
  onSubmit,
}: {
  onSubmit: (data: CareLogFormData) => Promise<void>;
}) {
  const [formData, setFormData] = useState<CareLogFormData>({
    caregiverName: "",
    patientNickname: "",
    logDate: new Date().toISOString().split("T")[0],
    category: "",
    issue: "",
    action: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.logDate || !formData.issue) {
      setError("日期和問題描述為必填項");
      return;
    }

    setLoading(true);
    try {
      await onSubmit(formData);
      // 清空表單
      setFormData({
        caregiverName: "",
        patientNickname: "",
        logDate: new Date().toISOString().split("T")[0],
        category: "",
        issue: "",
        action: "",
      });
    } catch (err) {
      setError("提交失敗，請稍後重試");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        📝 新增照護紀錄
      </h3>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded text-red-800">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* 日期 */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            日期 <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            required
            value={formData.logDate}
            onChange={(e) =>
              setFormData({ ...formData, logDate: e.target.value })
            }
            className="w-full"
          />
        </div>

        {/* 照護者稱呼 */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            您的稱呼 (選填)
          </label>
          <input
            type="text"
            placeholder="例如：小王、媽媽"
            value={formData.caregiverName}
            onChange={(e) =>
              setFormData({ ...formData, caregiverName: e.target.value })
            }
            className="w-full"
          />
        </div>

        {/* 失智長者代稱 */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            失智者代稱 (選填)
          </label>
          <input
            type="text"
            placeholder="例如：爸爸、媽媽、奶奶"
            value={formData.patientNickname}
            onChange={(e) =>
              setFormData({ ...formData, patientNickname: e.target.value })
            }
            className="w-full"
          />
        </div>

        {/* 問題類別 */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            問題類別
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full"
          >
            <option value="">-- 選擇類別 --</option>
            <option value="情緒困擾">情緒困擾 (躁動、沮喪等)</option>
            <option value="記憶與認知">記憶與認知 (忘記、重複提問)</option>
            <option value="日常生活">日常生活 (進食、穿衣等)</option>
            <option value="其他">其他</option>
          </select>
        </div>
      </div>

      {/* 問題描述 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          問題描述 <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          placeholder="請詳細描述失智者遇到的問題或您觀察到的行為..."
          value={formData.issue}
          onChange={(e) =>
            setFormData({ ...formData, issue: e.target.value })
          }
          rows={5}
          className="w-full"
        />
      </div>

      {/* 已採取的協助措施 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          已採取的協助措施 (選填)
        </label>
        <textarea
          placeholder="請說明您採取了什麼方式來協助或改善情況..."
          value={formData.action}
          onChange={(e) =>
            setFormData({ ...formData, action: e.target.value })
          }
          rows={4}
          className="w-full"
        />
      </div>

      {/* 提交按鈕 */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "提交中..." : "提交紀錄"}
        </button>
        <button
          type="reset"
          className="btn-secondary flex-1"
          onClick={() =>
            setFormData({
              caregiverName: "",
              patientNickname: "",
              logDate: new Date().toISOString().split("T")[0],
              category: "",
              issue: "",
              action: "",
            })
          }
        >
          清除表單
        </button>
      </div>
    </form>
  );
}
