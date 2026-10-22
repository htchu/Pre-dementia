import { deleteCareLog } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid care log ID" },
        { status: 400 }
      );
    }

    await deleteCareLog(id);

    return NextResponse.json({ success: true, message: "Care log deleted" });
  } catch (error) {
    console.error("DELETE /api/care-logs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete care log" },
      { status: 500 }
    );
  }
}
