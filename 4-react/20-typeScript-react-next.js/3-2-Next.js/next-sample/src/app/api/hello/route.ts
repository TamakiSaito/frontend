import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // レスポンスデータを用意
    const responseData = { name: 'Mark Micheal' };
    // 正常なJSONレスポンスを返す
    return NextResponse.json(responseData);
  } catch (error) {
    // エラーハンドリング
    console.error('Error in /api/hello:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
