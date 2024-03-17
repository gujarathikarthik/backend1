import { NextResponse } from "next/server";
import React from "react";
import mongodb from "../../../../lib/mongodb";
import { userModel } from "../../../../lib/models/users";

export async function GET() {
  await mongodb();
  let data = await userModel.find();
  console.log(data);
  return NextResponse.json({ data, result: true });
}

export async function POST(request: Request) {
  await mongodb();
  let paylaod = await request.json();
  let data = await new userModel(paylaod);
  let finalData = await data.save();
  console.log(finalData);
  return NextResponse.json({ result: true });
}
