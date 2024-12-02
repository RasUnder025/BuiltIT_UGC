import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export async function GET(request: NextRequest) {
    try{
        const { data, error } = await supabase
        .from('countries')
        .select()
      
    } catch (error) {
        return NextResponse.json({ error: "Error retrieving file"});
    }
}

export async function POST(request: NextRequest) {
    try{
        const formData = await request.formData();
        const file = formData.get("file");
        if(!file) {
            return NextResponse.json({ error: "File not uploaded"}, { status: 400});
        }
        return NextResponse.json({ success: true, file});
    } catch (error) {
        return NextResponse.json({ error: "Error uploading file"});
    }
}