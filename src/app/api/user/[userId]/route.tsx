import { NextResponse } from "next/server";
import React from "react";
import { userModel } from "../../../../../lib/models/users";
import mongodb from "../../../../../lib/mongodb";
interface params {
  params: {
    userId: string;
  };
}

export async function PUT(request: Request, content: params) {
  await mongodb();
  console.log(content);
  let id = content.params.userId;
  console.log(id);
  let record = { _id: id };
  let payload = await request.json();
  let updateUser = await userModel.findOneAndUpdate(record, payload);
  console.log(updateUser);

  return NextResponse.json({ result: true });
}
