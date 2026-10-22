import { sql } from "@vercel/postgres";

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

// 取得全部照護紀錄
export async function getCareLogs(): Promise<CareLog[]> {
  try {
    const result = await sql<CareLog>`
      SELECT * FROM care_logs
      ORDER BY log_date DESC, created_at DESC
      LIMIT 100
    `;
    return result.rows;
  } catch (error) {
    console.error("Failed to fetch care logs:", error);
    throw error;
  }
}

// 依照護者稱呼篩選
export async function getCareLogsByCaregiverName(
  caregiverName: string
): Promise<CareLog[]> {
  try {
    const result = await sql<CareLog>`
      SELECT * FROM care_logs
      WHERE caregiver_name = ${caregiverName}
      ORDER BY log_date DESC, created_at DESC
      LIMIT 100
    `;
    return result.rows;
  } catch (error) {
    console.error("Failed to fetch care logs by caregiver:", error);
    throw error;
  }
}

// 建立新照護紀錄
export async function createCareLog(
  caregiverName: string | null,
  patientNickname: string | null,
  logDate: string,
  category: string | null,
  issue: string,
  action: string | null
): Promise<CareLog> {
  try {
    const result = await sql<CareLog>`
      INSERT INTO care_logs (
        caregiver_name,
        patient_nickname,
        log_date,
        category,
        issue,
        action
      )
      VALUES (
        ${caregiverName},
        ${patientNickname},
        ${logDate},
        ${category},
        ${issue},
        ${action}
      )
      RETURNING *
    `;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to create care log:", error);
    throw error;
  }
}

// 刪除照護紀錄
export async function deleteCareLog(id: number): Promise<void> {
  try {
    await sql`
      DELETE FROM care_logs
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Failed to delete care log:", error);
    throw error;
  }
}
