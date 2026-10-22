import { getCareLogs, createCareLog } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const caregiverName = searchParams.get("caregiverName");

    let logs;
    if (caregiverName) {
      const { getCareLogsByCaregiverName } = await import("@/lib/db");
      logs = await getCareLogsByCaregiverName(caregiverName);
    } else {
      logs = await getCareLogs();
    }

    return NextResponse.json(logs);
  } catch (error) {
    console.error("GET /api/care-logs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch care logs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      caregiverName,
      patientNickname,
      logDate,
      category,
      issue,
      action,
    } = body;

    if (!logDate || !issue) {
      return NextResponse.json(
        { error: "Missing required fields: logDate, issue" },
        { status: 400 }
      );
    }

    const newLog = await createCareLog(
      caregiverName || null,
      patientNickname || null,
      logDate,
      category || null,
      issue,
      action || null
    );

    return NextResponse.json(newLog, { status: 201 });
  } catch (error) {
    console.error("POST /api/care-logs error:", error);
    return NextResponse.json(
      { error: "Failed to create care log" },
      { status: 500 }
    );
  }
}
