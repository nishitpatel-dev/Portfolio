import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  try {
    // Use upsert to handle both create and update cases
    const result = await db.siteAnalytics.upsert({
      where: {
        siteName: "portfolio",
      },
      update: {
        visitors: {
          increment: 1
        }
      },
      create: {
        siteName: "portfolio",
        visitors: 1
      }
    });

    return NextResponse.json({ 
      success: true, 
      visitor: result.visitors 
    });
  } catch (e: any) {
    console.error('Error in visit route:', e);
    return NextResponse.json({
      success: false,
      message: "Error processing visit count"
    });
  } finally {
    await db.$disconnect();
  }
}
