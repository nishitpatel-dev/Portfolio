import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const db = new PrismaClient();
  try {
    const { email, message }: { email: string; message: string } =
      await req.json();
      
    if (!email || !message) {
      return NextResponse.json({
        success: false,
        message: "Empty Email / Message.",
      });
    }

    await db.message.create({
      data: {
        email: email,
        message: message
      }
    });

    return NextResponse.json({
      success: true,
    });
    
  } catch (e: any) {
    console.error('Error in contact form:', e);
    return NextResponse.json({
      success: false,
      message: "Error processing request.",
    });
  } finally {
    await db.$disconnect();
  }
}