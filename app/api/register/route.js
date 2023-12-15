import { NextResponse } from "next/server";
import { writeFile } from "fs";
import usersData from "../../components/data/userData.json";

export async function POST(request, res) {
  try {
    const {data} = await request.json();
    console.log('rquest data', data);

    const existingData = usersData;
    console.log( 'Existing', existingData);

    existingData.push(data);

    writeFile("./app/components/data/userData.json",  JSON.stringify(existingData, null, 2), function (err) {
      if (err) throw err;
      console.log("Saved!");
    });

    return NextResponse.json(
      { success: "Complete" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error ${error}` },
      { status: 500 }
    );
  }
}
