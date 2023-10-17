import React from "react";
import { nextauthOptions } from "@/lib/nextauthOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";

export default async function Properties() {
  // get the session
  const session = await getServerSession(nextauthOptions);

  // redirect to signin if there is no session.
  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  const properties = [{}];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {properties.length &&
          properties.map((property: any, index: number) => {
            return <PropertyCard key={index} details={property} />;
          })}
      </div>
    </div>
  );
}
